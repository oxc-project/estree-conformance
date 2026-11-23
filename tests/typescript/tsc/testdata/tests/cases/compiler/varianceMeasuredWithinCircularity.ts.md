__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 435,
      "end": 445
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 461
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
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 468
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 470,
                "end": 476
              },
              "start": 468,
              "end": 476
            },
            "accessibility": null,
            "static": false,
            "start": 464,
            "end": 476
          }
        ],
        "start": 462,
        "end": 478
      },
      "declare": false,
      "start": 447,
      "end": 478
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 496
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 509
          },
          "typeArguments": null,
          "start": 505,
          "end": 509
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
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 519
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "accessibility": null,
            "static": false,
            "start": 512,
            "end": 527
          }
        ],
        "start": 510,
        "end": 529
      },
      "declare": false,
      "start": 479,
      "end": 529
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Selection",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 550
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 551,
            "end": 552
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 554,
            "end": 555
          }
        ],
        "start": 550,
        "end": 556
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 567
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
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
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 582,
                              "end": 583
                            },
                            "typeArguments": null,
                            "start": 582,
                            "end": 583
                          },
                          "start": 580,
                          "end": 583
                        },
                        "start": 574,
                        "end": 583
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 588,
                        "end": 594
                      },
                      "start": 585,
                      "end": 594
                    },
                    "start": 573,
                    "end": 594
                  },
                  "start": 571,
                  "end": 594
                },
                "start": 568,
                "end": 594
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 606
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 608
                      },
                      "typeArguments": null,
                      "start": 607,
                      "end": 608
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
                      "typeArguments": null,
                      "start": 610,
                      "end": 611
                    }
                  ],
                  "start": 606,
                  "end": 612
                },
                "start": 597,
                "end": 612
              },
              "start": 595,
              "end": 612
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 563,
            "end": 613
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "join",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 622
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "enter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 630,
                        "end": 636
                      },
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elem",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Selection",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 647,
                                  "end": 656
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 657,
                                        "end": 658
                                      },
                                      "typeArguments": null,
                                      "start": 657,
                                      "end": 658
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 660,
                                        "end": 661
                                      },
                                      "typeArguments": null,
                                      "start": 660,
                                      "end": 661
                                    }
                                  ],
                                  "start": 656,
                                  "end": 662
                                },
                                "start": 647,
                                "end": 662
                              },
                              "start": 645,
                              "end": 662
                            },
                            "start": 641,
                            "end": 662
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
                                  "name": "Selection",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 667,
                                  "end": 676
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 677,
                                        "end": 678
                                      },
                                      "typeArguments": null,
                                      "start": 677,
                                      "end": 678
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 680,
                                        "end": 681
                                      },
                                      "typeArguments": null,
                                      "start": 680,
                                      "end": 681
                                    }
                                  ],
                                  "start": 676,
                                  "end": 682
                                },
                                "start": 667,
                                "end": 682
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TransitionLike",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 685,
                                  "end": 699
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 700,
                                        "end": 701
                                      },
                                      "typeArguments": null,
                                      "start": 700,
                                      "end": 701
                                    }
                                  ],
                                  "start": 699,
                                  "end": 702
                                },
                                "start": 685,
                                "end": 702
                              }
                            ],
                            "start": 667,
                            "end": 702
                          },
                          "start": 664,
                          "end": 702
                        },
                        "start": 640,
                        "end": 702
                      }
                    ],
                    "start": 630,
                    "end": 703
                  },
                  "start": 628,
                  "end": 703
                },
                "start": 623,
                "end": 703
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 715
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 716,
                        "end": 717
                      },
                      "typeArguments": null,
                      "start": 716,
                      "end": 717
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 720
                      },
                      "typeArguments": null,
                      "start": 719,
                      "end": 720
                    }
                  ],
                  "start": 715,
                  "end": 721
                },
                "start": 706,
                "end": 721
              },
              "start": 704,
              "end": 721
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 618,
            "end": 722
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 735
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 748
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 749,
                      "end": 756
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 759
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 759
                    }
                  ],
                  "start": 748,
                  "end": 760
                },
                "start": 739,
                "end": 760
              },
              "start": 737,
              "end": 760
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 727,
            "end": 761
          }
        ],
        "start": 557,
        "end": 763
      },
      "declare": false,
      "start": 531,
      "end": 763
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TransitionLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 789
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 791
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 790,
            "end": 791
          }
        ],
        "start": 789,
        "end": 792
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selection",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 808
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 812,
                  "end": 821
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 822,
                        "end": 823
                      },
                      "typeArguments": null,
                      "start": 822,
                      "end": 823
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 825,
                      "end": 832
                    }
                  ],
                  "start": 821,
                  "end": 833
                },
                "start": 812,
                "end": 833
              },
              "start": 810,
              "end": 833
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 799,
            "end": 834
          }
        ],
        "start": 793,
        "end": 836
      },
      "declare": false,
      "start": 765,
      "end": 836
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 863
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 864,
                      "end": 871
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 873,
                        "end": 880
                      },
                      "typeArguments": null,
                      "start": 873,
                      "end": 880
                    }
                  ],
                  "start": 863,
                  "end": 881
                },
                "start": 854,
                "end": 881
              },
              "start": 852,
              "end": 881
            },
            "start": 850,
            "end": 881
          },
          "init": null,
          "definite": false,
          "start": 850,
          "end": 881
        }
      ],
      "declare": true,
      "start": 838,
      "end": 882
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 900
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 901,
                      "end": 908
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 910,
                        "end": 914
                      },
                      "typeArguments": null,
                      "start": 910,
                      "end": 914
                    }
                  ],
                  "start": 900,
                  "end": 915
                },
                "start": 891,
                "end": 915
              },
              "start": 889,
              "end": 915
            },
            "start": 887,
            "end": 915
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 920
          },
          "definite": false,
          "start": 887,
          "end": 920
        }
      ],
      "declare": false,
      "start": 883,
      "end": 921
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TransitionLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 953
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 954,
                        "end": 961
                      },
                      "typeArguments": null,
                      "start": 954,
                      "end": 961
                    }
                  ],
                  "start": 953,
                  "end": 962
                },
                "start": 939,
                "end": 962
              },
              "start": 937,
              "end": 962
            },
            "start": 935,
            "end": 962
          },
          "init": null,
          "definite": false,
          "start": 935,
          "end": 962
        }
      ],
      "declare": true,
      "start": 923,
      "end": 963
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TransitionLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 986
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 987,
                        "end": 991
                      },
                      "typeArguments": null,
                      "start": 987,
                      "end": 991
                    }
                  ],
                  "start": 986,
                  "end": 992
                },
                "start": 972,
                "end": 992
              },
              "start": 970,
              "end": 992
            },
            "start": 968,
            "end": 992
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 997
          },
          "definite": false,
          "start": 968,
          "end": 997
        }
      ],
      "declare": false,
      "start": 964,
      "end": 998
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 998
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 447,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 457,
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
    "value": "base",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 479,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 489,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 497,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 531,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 541,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 618,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "enter",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 630,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 647,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 664,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 667,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "TransitionLike",
    "start": 685,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
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
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 706,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 727,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 739,
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
    "value": "unknown",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 765,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "TransitionLike",
    "start": 775,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 799,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 812,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 825,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 838,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 846,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 854,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 864,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 883,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "Selection",
    "start": 891,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 901,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 910,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 923,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 935,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "TransitionLike",
    "start": 939,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 954,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 964,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 968,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "TransitionLike",
    "start": 972,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 987,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  }
]
```
