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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 411,
                "end": 417
              },
              "start": 409,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 407,
            "end": 418
          }
        ],
        "start": 405,
        "end": 420
      },
      "declare": false,
      "start": 393,
      "end": 420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 432
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "accessibility": null,
            "static": false,
            "start": 435,
            "end": 446
          }
        ],
        "start": 433,
        "end": 448
      },
      "declare": false,
      "start": 421,
      "end": 448
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 456
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 463,
                "end": 469
              },
              "start": 461,
              "end": 469
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 459,
            "end": 470
          }
        ],
        "start": 457,
        "end": 472
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 472
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
            "name": "k0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 492
                  },
                  "typeArguments": null,
                  "start": 490,
                  "end": 492
                },
                "start": 484,
                "end": 492
              },
              "start": 482,
              "end": 492
            },
            "start": 480,
            "end": 492
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 495,
            "end": 496
          },
          "definite": false,
          "start": 480,
          "end": 496
        }
      ],
      "declare": false,
      "start": 474,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 510
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 517,
                "end": 523
              },
              "start": 515,
              "end": 523
            },
            "accessibility": null,
            "static": false,
            "start": 513,
            "end": 524
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 531,
                    "end": 537
                  },
                  "start": 529,
                  "end": 537
                },
                "start": 526,
                "end": 537
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 542
                  },
                  "typeArguments": null,
                  "start": 540,
                  "end": 542
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 551
                    },
                    "typeArguments": null,
                    "start": 549,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                },
                "start": 540,
                "end": 552
              },
              "start": 538,
              "end": 552
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 525,
            "end": 553
          }
        ],
        "start": 511,
        "end": 555
      },
      "declare": false,
      "start": 498,
      "end": 555
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q0",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 568
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 572
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 575,
                "end": 581
              },
              "start": 573,
              "end": 581
            },
            "accessibility": null,
            "static": false,
            "start": 571,
            "end": 582
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  },
                  "start": 587,
                  "end": 595
                },
                "start": 584,
                "end": 595
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 600
                  },
                  "typeArguments": null,
                  "start": 598,
                  "end": 600
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 609
                    },
                    "typeArguments": null,
                    "start": 607,
                    "end": 609
                  },
                  "start": 601,
                  "end": 609
                },
                "start": 598,
                "end": 610
              },
              "start": 596,
              "end": 610
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 583,
            "end": 611
          }
        ],
        "start": 569,
        "end": 613
      },
      "declare": false,
      "start": 556,
      "end": 613
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
            "name": "j0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 632
                  },
                  "typeArguments": null,
                  "start": 630,
                  "end": 632
                },
                "start": 624,
                "end": 632
              },
              "start": 622,
              "end": 632
            },
            "start": 620,
            "end": 632
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 635,
            "end": 636
          },
          "definite": false,
          "start": 620,
          "end": 636
        }
      ],
      "declare": false,
      "start": 614,
      "end": 637
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 655,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 655,
                  "end": 657
                },
                "start": 649,
                "end": 657
              },
              "start": 647,
              "end": 657
            },
            "start": 645,
            "end": 657
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 660,
            "end": 661
          },
          "definite": false,
          "start": 645,
          "end": 661
        }
      ],
      "declare": false,
      "start": 639,
      "end": 662
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 685
          },
          "typeArguments": null,
          "start": 684,
          "end": 685
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 694,
                    "end": 700
                  },
                  "start": 692,
                  "end": 700
                },
                "start": 689,
                "end": 700
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 705
                  },
                  "typeArguments": null,
                  "start": 703,
                  "end": 705
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 714
                    },
                    "typeArguments": null,
                    "start": 712,
                    "end": 714
                  },
                  "start": 706,
                  "end": 714
                },
                "start": 703,
                "end": 715
              },
              "start": 701,
              "end": 715
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 688,
            "end": 716
          }
        ],
        "start": 686,
        "end": 718
      },
      "declare": false,
      "start": 663,
      "end": 718
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q1",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 731
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 741
          },
          "typeArguments": null,
          "start": 740,
          "end": 741
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 750,
                    "end": 756
                  },
                  "start": 748,
                  "end": 756
                },
                "start": 745,
                "end": 756
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 761
                  },
                  "typeArguments": null,
                  "start": 759,
                  "end": 761
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 770
                    },
                    "typeArguments": null,
                    "start": 768,
                    "end": 770
                  },
                  "start": 762,
                  "end": 770
                },
                "start": 759,
                "end": 771
              },
              "start": 757,
              "end": 771
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 744,
            "end": 772
          }
        ],
        "start": 742,
        "end": 774
      },
      "declare": false,
      "start": 719,
      "end": 774
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
            "name": "j1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 791,
                    "end": 793
                  },
                  "typeArguments": null,
                  "start": 791,
                  "end": 793
                },
                "start": 785,
                "end": 793
              },
              "start": 783,
              "end": 793
            },
            "start": 781,
            "end": 793
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 796,
            "end": 797
          },
          "definite": false,
          "start": 781,
          "end": 797
        }
      ],
      "declare": false,
      "start": 775,
      "end": 798
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 818
                  },
                  "typeArguments": null,
                  "start": 816,
                  "end": 818
                },
                "start": 810,
                "end": 818
              },
              "start": 808,
              "end": 818
            },
            "start": 806,
            "end": 818
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 821,
            "end": 822
          },
          "definite": false,
          "start": 806,
          "end": 822
        }
      ],
      "declare": false,
      "start": 800,
      "end": 823
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 834,
        "end": 836
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 846
          },
          "typeArguments": null,
          "start": 845,
          "end": 846
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 849
          },
          "typeArguments": null,
          "start": 848,
          "end": 849
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 858,
                    "end": 864
                  },
                  "start": 856,
                  "end": 864
                },
                "start": 853,
                "end": 864
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 869
                  },
                  "typeArguments": null,
                  "start": 867,
                  "end": 869
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 878
                    },
                    "typeArguments": null,
                    "start": 876,
                    "end": 878
                  },
                  "start": 870,
                  "end": 878
                },
                "start": 867,
                "end": 879
              },
              "start": 865,
              "end": 879
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 852,
            "end": 880
          }
        ],
        "start": 850,
        "end": 882
      },
      "declare": false,
      "start": 824,
      "end": 882
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q2",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 895
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 905
          },
          "typeArguments": null,
          "start": 904,
          "end": 905
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 908
          },
          "typeArguments": null,
          "start": 907,
          "end": 908
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  },
                  "start": 915,
                  "end": 923
                },
                "start": 912,
                "end": 923
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 926,
                    "end": 928
                  },
                  "typeArguments": null,
                  "start": 926,
                  "end": 928
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 935,
                      "end": 937
                    },
                    "typeArguments": null,
                    "start": 935,
                    "end": 937
                  },
                  "start": 929,
                  "end": 937
                },
                "start": 926,
                "end": 938
              },
              "start": 924,
              "end": 938
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 911,
            "end": 939
          }
        ],
        "start": 909,
        "end": 941
      },
      "declare": false,
      "start": 883,
      "end": 941
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
            "name": "j2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 958,
                    "end": 960
                  },
                  "typeArguments": null,
                  "start": 958,
                  "end": 960
                },
                "start": 952,
                "end": 960
              },
              "start": 950,
              "end": 960
            },
            "start": 948,
            "end": 960
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 963,
            "end": 964
          },
          "definite": false,
          "start": 948,
          "end": 964
        }
      ],
      "declare": false,
      "start": 942,
      "end": 965
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 983,
                    "end": 985
                  },
                  "typeArguments": null,
                  "start": 983,
                  "end": 985
                },
                "start": 977,
                "end": 985
              },
              "start": 975,
              "end": 985
            },
            "start": 973,
            "end": 985
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 988,
            "end": 989
          },
          "definite": false,
          "start": 973,
          "end": 989
        }
      ],
      "declare": false,
      "start": 967,
      "end": 990
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1003
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1012,
            "end": 1013
          },
          "typeArguments": null,
          "start": 1012,
          "end": 1013
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1022,
                    "end": 1028
                  },
                  "start": 1020,
                  "end": 1028
                },
                "start": 1017,
                "end": 1028
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1031,
                    "end": 1033
                  },
                  "typeArguments": null,
                  "start": 1031,
                  "end": 1033
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1040,
                      "end": 1042
                    },
                    "typeArguments": null,
                    "start": 1040,
                    "end": 1042
                  },
                  "start": 1034,
                  "end": 1042
                },
                "start": 1031,
                "end": 1043
              },
              "start": 1029,
              "end": 1043
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1016,
            "end": 1044
          }
        ],
        "start": 1014,
        "end": 1046
      },
      "declare": false,
      "start": 991,
      "end": 1046
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1057,
        "end": 1059
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1069
          },
          "typeArguments": null,
          "start": 1068,
          "end": 1069
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1078,
                    "end": 1084
                  },
                  "start": 1076,
                  "end": 1084
                },
                "start": 1073,
                "end": 1084
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1089
                  },
                  "typeArguments": null,
                  "start": 1087,
                  "end": 1089
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1096,
                      "end": 1098
                    },
                    "typeArguments": null,
                    "start": 1096,
                    "end": 1098
                  },
                  "start": 1090,
                  "end": 1098
                },
                "start": 1087,
                "end": 1099
              },
              "start": 1085,
              "end": 1099
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1072,
            "end": 1100
          }
        ],
        "start": 1070,
        "end": 1102
      },
      "declare": false,
      "start": 1047,
      "end": 1102
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
            "name": "j3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1121
                  },
                  "typeArguments": null,
                  "start": 1119,
                  "end": 1121
                },
                "start": 1113,
                "end": 1121
              },
              "start": 1111,
              "end": 1121
            },
            "start": 1109,
            "end": 1121
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1124,
            "end": 1125
          },
          "definite": false,
          "start": 1109,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1103,
      "end": 1126
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1144,
                    "end": 1146
                  },
                  "typeArguments": null,
                  "start": 1144,
                  "end": 1146
                },
                "start": 1138,
                "end": 1146
              },
              "start": 1136,
              "end": 1146
            },
            "start": 1134,
            "end": 1146
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1149,
            "end": 1150
          },
          "definite": false,
          "start": 1134,
          "end": 1150
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1160
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1169,
        "end": 1170
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1177,
                "end": 1183
              },
              "start": 1175,
              "end": 1183
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1173,
            "end": 1184
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1191,
                    "end": 1197
                  },
                  "start": 1189,
                  "end": 1197
                },
                "start": 1186,
                "end": 1197
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1200,
                    "end": 1202
                  },
                  "typeArguments": null,
                  "start": 1200,
                  "end": 1202
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1209,
                      "end": 1211
                    },
                    "typeArguments": null,
                    "start": 1209,
                    "end": 1211
                  },
                  "start": 1203,
                  "end": 1211
                },
                "start": 1200,
                "end": 1212
              },
              "start": 1198,
              "end": 1212
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1185,
            "end": 1213
          }
        ],
        "start": 1171,
        "end": 1215
      },
      "abstract": false,
      "declare": false,
      "start": 1152,
      "end": 1215
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1222,
        "end": 1224
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1234
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1241,
                "end": 1247
              },
              "start": 1239,
              "end": 1247
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1237,
            "end": 1248
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1255,
                    "end": 1261
                  },
                  "start": 1253,
                  "end": 1261
                },
                "start": 1250,
                "end": 1261
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1266
                  },
                  "typeArguments": null,
                  "start": 1264,
                  "end": 1266
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1275
                    },
                    "typeArguments": null,
                    "start": 1273,
                    "end": 1275
                  },
                  "start": 1267,
                  "end": 1275
                },
                "start": 1264,
                "end": 1276
              },
              "start": 1262,
              "end": 1276
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1249,
            "end": 1277
          }
        ],
        "start": 1235,
        "end": 1279
      },
      "abstract": false,
      "declare": false,
      "start": 1216,
      "end": 1279
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
            "name": "j4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1296,
                    "end": 1298
                  },
                  "typeArguments": null,
                  "start": 1296,
                  "end": 1298
                },
                "start": 1290,
                "end": 1298
              },
              "start": 1288,
              "end": 1298
            },
            "start": 1286,
            "end": 1298
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1301,
            "end": 1302
          },
          "definite": false,
          "start": 1286,
          "end": 1302
        }
      ],
      "declare": false,
      "start": 1280,
      "end": 1303
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1325
                },
                "typeArguments": null,
                "start": 1323,
                "end": 1325
              },
              "start": 1321,
              "end": 1325
            },
            "start": 1319,
            "end": 1325
          },
          "init": null,
          "definite": false,
          "start": 1319,
          "end": 1325
        }
      ],
      "declare": true,
      "start": 1305,
      "end": 1326
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1333,
            "end": 1335
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "q2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1340
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1346
            },
            "optional": false,
            "computed": false,
            "start": 1338,
            "end": 1346
          },
          "definite": false,
          "start": 1333,
          "end": 1346
        }
      ],
      "declare": false,
      "start": 1327,
      "end": 1347
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
            "name": "q3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1368
                },
                "typeArguments": null,
                "start": 1366,
                "end": 1368
              },
              "start": 1364,
              "end": 1368
            },
            "start": 1362,
            "end": 1368
          },
          "init": null,
          "definite": false,
          "start": 1362,
          "end": 1368
        }
      ],
      "declare": true,
      "start": 1348,
      "end": 1369
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1378
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "q3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1381,
              "end": 1383
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1389
            },
            "optional": false,
            "computed": false,
            "start": 1381,
            "end": 1389
          },
          "definite": false,
          "start": 1376,
          "end": 1389
        }
      ],
      "declare": false,
      "start": 1370,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 393,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 421,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 474,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 484,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 498,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 543,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 549,
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
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 556,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Q0",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 584,
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
    "value": "string",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Q0",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 601,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Q0",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "j0",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Q0",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 639,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 663,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 673,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 676,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 694,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 706,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 719,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Q1",
    "start": 729,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "Q1",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 762,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Q1",
    "start": 768,
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
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 775,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "j1",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 785,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "Q1",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 800,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 810,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 824,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 834,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 837,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 858,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 867,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 883,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 893,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 896,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 926,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 929,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 935,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "j2",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 952,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 967,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 973,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 977,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 986,
    "end": 987
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 991,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1004,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "P3",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1047,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1090,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1103,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "j3",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1128,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "P4",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "P4",
    "start": 1158,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "P4",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1203,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "P4",
    "start": 1209,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1216,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "Q4",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1225,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1241,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "Q4",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1267,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "Q4",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "const",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "j4",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1290,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "Q4",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1305,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1341,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1348,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1356,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "q3",
    "start": 1362,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1370,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "q3",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1384,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  }
]
```
