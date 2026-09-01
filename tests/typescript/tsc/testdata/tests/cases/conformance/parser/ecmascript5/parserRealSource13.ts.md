__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "AstWalkerWithDetailCallback",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 259
        },
        "start": 221,
        "end": 259
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AstWalkerDetailCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 306
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmptyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 330
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 336
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 343,
                              "end": 346
                            },
                            "typeArguments": null,
                            "start": 343,
                            "end": 346
                          },
                          "start": 341,
                          "end": 346
                        },
                        "start": 338,
                        "end": 346
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 349,
                        "end": 356
                      },
                      "start": 347,
                      "end": 356
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 317,
                    "end": 357
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmptyExprCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 383
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 389
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 396,
                              "end": 399
                            },
                            "typeArguments": null,
                            "start": 396,
                            "end": 399
                          },
                          "start": 394,
                          "end": 399
                        },
                        "start": 391,
                        "end": 399
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 402,
                        "end": 409
                      },
                      "start": 400,
                      "end": 409
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 366,
                    "end": 410
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TrueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 431
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 437
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 444,
                              "end": 447
                            },
                            "typeArguments": null,
                            "start": 444,
                            "end": 447
                          },
                          "start": 442,
                          "end": 447
                        },
                        "start": 439,
                        "end": 447
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 450,
                        "end": 457
                      },
                      "start": 448,
                      "end": 457
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 419,
                    "end": 458
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FalseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 480
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 486
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 496
                            },
                            "typeArguments": null,
                            "start": 493,
                            "end": 496
                          },
                          "start": 491,
                          "end": 496
                        },
                        "start": 488,
                        "end": 496
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 499,
                        "end": 506
                      },
                      "start": 497,
                      "end": 506
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 467,
                    "end": 507
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 528
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 534
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 541,
                              "end": 544
                            },
                            "typeArguments": null,
                            "start": 541,
                            "end": 544
                          },
                          "start": 539,
                          "end": 544
                        },
                        "start": 536,
                        "end": 544
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 547,
                        "end": 554
                      },
                      "start": 545,
                      "end": 554
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 516,
                    "end": 555
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SuperCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 577
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 583
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 593
                            },
                            "typeArguments": null,
                            "start": 590,
                            "end": 593
                          },
                          "start": 588,
                          "end": 593
                        },
                        "start": 585,
                        "end": 593
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 596,
                        "end": 603
                      },
                      "start": 594,
                      "end": 603
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 564,
                    "end": 604
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QStringCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 628
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 634
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 644
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 644
                          },
                          "start": 639,
                          "end": 644
                        },
                        "start": 636,
                        "end": 644
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 647,
                        "end": 654
                      },
                      "start": 645,
                      "end": 654
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 613,
                    "end": 655
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 677
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 690,
                              "end": 693
                            },
                            "typeArguments": null,
                            "start": 690,
                            "end": 693
                          },
                          "start": 688,
                          "end": 693
                        },
                        "start": 685,
                        "end": 693
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 696,
                        "end": 703
                      },
                      "start": 694,
                      "end": 703
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 664,
                    "end": 704
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NullCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 725
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 731
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 738,
                              "end": 741
                            },
                            "typeArguments": null,
                            "start": 738,
                            "end": 741
                          },
                          "start": 736,
                          "end": 741
                        },
                        "start": 733,
                        "end": 741
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 744,
                        "end": 751
                      },
                      "start": 742,
                      "end": 751
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 713,
                    "end": 752
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArrayLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 761,
                      "end": 777
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 783
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 790,
                              "end": 793
                            },
                            "typeArguments": null,
                            "start": 790,
                            "end": 793
                          },
                          "start": 788,
                          "end": 793
                        },
                        "start": 785,
                        "end": 793
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 796,
                        "end": 803
                      },
                      "start": 794,
                      "end": 803
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 761,
                    "end": 804
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 830
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 833,
                        "end": 836
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 843,
                              "end": 846
                            },
                            "typeArguments": null,
                            "start": 843,
                            "end": 846
                          },
                          "start": 841,
                          "end": 846
                        },
                        "start": 838,
                        "end": 846
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 849,
                        "end": 856
                      },
                      "start": 847,
                      "end": 856
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 813,
                    "end": 857
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VoidCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 878
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 881,
                        "end": 884
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 891,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 891,
                            "end": 894
                          },
                          "start": 889,
                          "end": 894
                        },
                        "start": 886,
                        "end": 894
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 897,
                        "end": 904
                      },
                      "start": 895,
                      "end": 904
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 866,
                    "end": 905
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommaCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 914,
                      "end": 927
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 930,
                        "end": 933
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 940,
                              "end": 943
                            },
                            "typeArguments": null,
                            "start": 940,
                            "end": 943
                          },
                          "start": 938,
                          "end": 943
                        },
                        "start": 935,
                        "end": 943
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 946,
                        "end": 953
                      },
                      "start": 944,
                      "end": 953
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 914,
                    "end": 954
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PosCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 974
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 977,
                        "end": 980
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 990
                            },
                            "typeArguments": null,
                            "start": 987,
                            "end": 990
                          },
                          "start": 985,
                          "end": 990
                        },
                        "start": 982,
                        "end": 990
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 993,
                        "end": 1000
                      },
                      "start": 991,
                      "end": 1000
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 963,
                    "end": 1001
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NegCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1021
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1024,
                        "end": 1027
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1034,
                              "end": 1037
                            },
                            "typeArguments": null,
                            "start": 1034,
                            "end": 1037
                          },
                          "start": 1032,
                          "end": 1037
                        },
                        "start": 1029,
                        "end": 1037
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1040,
                        "end": 1047
                      },
                      "start": 1038,
                      "end": 1047
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1010,
                    "end": 1048
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DeleteCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1057,
                      "end": 1071
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1077
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1084,
                              "end": 1087
                            },
                            "typeArguments": null,
                            "start": 1084,
                            "end": 1087
                          },
                          "start": 1082,
                          "end": 1087
                        },
                        "start": 1079,
                        "end": 1087
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1090,
                        "end": 1097
                      },
                      "start": 1088,
                      "end": 1097
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1057,
                    "end": 1098
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AwaitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1107,
                      "end": 1120
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1123,
                        "end": 1126
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1133,
                              "end": 1136
                            },
                            "typeArguments": null,
                            "start": 1133,
                            "end": 1136
                          },
                          "start": 1131,
                          "end": 1136
                        },
                        "start": 1128,
                        "end": 1136
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1139,
                        "end": 1146
                      },
                      "start": 1137,
                      "end": 1146
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1107,
                    "end": 1147
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1156,
                      "end": 1166
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1172
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1179,
                              "end": 1182
                            },
                            "typeArguments": null,
                            "start": 1179,
                            "end": 1182
                          },
                          "start": 1177,
                          "end": 1182
                        },
                        "start": 1174,
                        "end": 1182
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1185,
                        "end": 1192
                      },
                      "start": 1183,
                      "end": 1192
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1156,
                    "end": 1193
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1202,
                      "end": 1213
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1219
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1226,
                              "end": 1229
                            },
                            "typeArguments": null,
                            "start": 1226,
                            "end": 1229
                          },
                          "start": 1224,
                          "end": 1229
                        },
                        "start": 1221,
                        "end": 1229
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1232,
                        "end": 1239
                      },
                      "start": 1230,
                      "end": 1239
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1202,
                    "end": 1240
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FromCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1261
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1267
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1274,
                              "end": 1277
                            },
                            "typeArguments": null,
                            "start": 1274,
                            "end": 1277
                          },
                          "start": 1272,
                          "end": 1277
                        },
                        "start": 1269,
                        "end": 1277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1280,
                        "end": 1287
                      },
                      "start": 1278,
                      "end": 1287
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1249,
                    "end": 1288
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1307
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1310,
                        "end": 1313
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1320,
                              "end": 1323
                            },
                            "typeArguments": null,
                            "start": 1320,
                            "end": 1323
                          },
                          "start": 1318,
                          "end": 1323
                        },
                        "start": 1315,
                        "end": 1323
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1326,
                        "end": 1333
                      },
                      "start": 1324,
                      "end": 1333
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1297,
                    "end": 1334
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InstOfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1357
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1363
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1370,
                              "end": 1373
                            },
                            "typeArguments": null,
                            "start": 1370,
                            "end": 1373
                          },
                          "start": 1368,
                          "end": 1373
                        },
                        "start": 1365,
                        "end": 1373
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      },
                      "start": 1374,
                      "end": 1383
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1343,
                    "end": 1384
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeofCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1407
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1413
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1420,
                              "end": 1423
                            },
                            "typeArguments": null,
                            "start": 1420,
                            "end": 1423
                          },
                          "start": 1418,
                          "end": 1423
                        },
                        "start": 1415,
                        "end": 1423
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1426,
                        "end": 1433
                      },
                      "start": 1424,
                      "end": 1433
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1393,
                    "end": 1434
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberLitCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1443,
                      "end": 1460
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1463,
                        "end": 1466
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1473,
                              "end": 1476
                            },
                            "typeArguments": null,
                            "start": 1473,
                            "end": 1476
                          },
                          "start": 1471,
                          "end": 1476
                        },
                        "start": 1468,
                        "end": 1476
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1479,
                        "end": 1486
                      },
                      "start": 1477,
                      "end": 1486
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1443,
                    "end": 1487
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NameCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1496,
                      "end": 1508
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1511,
                        "end": 1514
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "identifierAst",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Identifier",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1531,
                              "end": 1541
                            },
                            "typeArguments": null,
                            "start": 1531,
                            "end": 1541
                          },
                          "start": 1529,
                          "end": 1541
                        },
                        "start": 1516,
                        "end": 1541
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1544,
                        "end": 1551
                      },
                      "start": 1542,
                      "end": 1551
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1496,
                    "end": 1552
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeRefCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1576
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1579,
                        "end": 1582
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1589,
                              "end": 1592
                            },
                            "typeArguments": null,
                            "start": 1589,
                            "end": 1592
                          },
                          "start": 1587,
                          "end": 1592
                        },
                        "start": 1584,
                        "end": 1592
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1595,
                        "end": 1602
                      },
                      "start": 1593,
                      "end": 1602
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1561,
                    "end": 1603
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1612,
                      "end": 1625
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1628,
                        "end": 1631
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1638,
                              "end": 1641
                            },
                            "typeArguments": null,
                            "start": 1638,
                            "end": 1641
                          },
                          "start": 1636,
                          "end": 1641
                        },
                        "start": 1633,
                        "end": 1641
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1644,
                        "end": 1651
                      },
                      "start": 1642,
                      "end": 1651
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1612,
                    "end": 1652
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CallCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1673
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1679
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1686,
                              "end": 1689
                            },
                            "typeArguments": null,
                            "start": 1686,
                            "end": 1689
                          },
                          "start": 1684,
                          "end": 1689
                        },
                        "start": 1681,
                        "end": 1689
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1692,
                        "end": 1699
                      },
                      "start": 1690,
                      "end": 1699
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1661,
                    "end": 1700
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NewCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1720
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1723,
                        "end": 1726
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1733,
                              "end": 1736
                            },
                            "typeArguments": null,
                            "start": 1733,
                            "end": 1736
                          },
                          "start": 1731,
                          "end": 1736
                        },
                        "start": 1728,
                        "end": 1736
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1739,
                        "end": 1746
                      },
                      "start": 1737,
                      "end": 1746
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1709,
                    "end": 1747
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1756,
                      "end": 1767
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1770,
                        "end": 1773
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1780,
                              "end": 1783
                            },
                            "typeArguments": null,
                            "start": 1780,
                            "end": 1783
                          },
                          "start": 1778,
                          "end": 1783
                        },
                        "start": 1775,
                        "end": 1783
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1786,
                        "end": 1793
                      },
                      "start": 1784,
                      "end": 1793
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1756,
                    "end": 1794
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1803,
                      "end": 1817
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1823
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1830,
                              "end": 1833
                            },
                            "typeArguments": null,
                            "start": 1830,
                            "end": 1833
                          },
                          "start": 1828,
                          "end": 1833
                        },
                        "start": 1825,
                        "end": 1833
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1836,
                        "end": 1843
                      },
                      "start": 1834,
                      "end": 1843
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1803,
                    "end": 1844
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgSubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1853,
                      "end": 1867
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1870,
                        "end": 1873
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1880,
                              "end": 1883
                            },
                            "typeArguments": null,
                            "start": 1880,
                            "end": 1883
                          },
                          "start": 1878,
                          "end": 1883
                        },
                        "start": 1875,
                        "end": 1883
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1886,
                        "end": 1893
                      },
                      "start": 1884,
                      "end": 1893
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1853,
                    "end": 1894
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgDivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1903,
                      "end": 1917
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1920,
                        "end": 1923
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1930,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1930,
                            "end": 1933
                          },
                          "start": 1928,
                          "end": 1933
                        },
                        "start": 1925,
                        "end": 1933
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1936,
                        "end": 1943
                      },
                      "start": 1934,
                      "end": 1943
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1903,
                    "end": 1944
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgMulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1953,
                      "end": 1967
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1970,
                        "end": 1973
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1980,
                              "end": 1983
                            },
                            "typeArguments": null,
                            "start": 1980,
                            "end": 1983
                          },
                          "start": 1978,
                          "end": 1983
                        },
                        "start": 1975,
                        "end": 1983
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1986,
                        "end": 1993
                      },
                      "start": 1984,
                      "end": 1993
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1953,
                    "end": 1994
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2003,
                      "end": 2017
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2020,
                        "end": 2023
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2030,
                              "end": 2033
                            },
                            "typeArguments": null,
                            "start": 2030,
                            "end": 2033
                          },
                          "start": 2028,
                          "end": 2033
                        },
                        "start": 2025,
                        "end": 2033
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2036,
                        "end": 2043
                      },
                      "start": 2034,
                      "end": 2043
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2003,
                    "end": 2044
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2067
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2073
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2080,
                              "end": 2083
                            },
                            "typeArguments": null,
                            "start": 2080,
                            "end": 2083
                          },
                          "start": 2078,
                          "end": 2083
                        },
                        "start": 2075,
                        "end": 2083
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2086,
                        "end": 2093
                      },
                      "start": 2084,
                      "end": 2093
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2053,
                    "end": 2094
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgXorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2103,
                      "end": 2117
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2120,
                        "end": 2123
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2130,
                              "end": 2133
                            },
                            "typeArguments": null,
                            "start": 2130,
                            "end": 2133
                          },
                          "start": 2128,
                          "end": 2133
                        },
                        "start": 2125,
                        "end": 2133
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2136,
                        "end": 2143
                      },
                      "start": 2134,
                      "end": 2143
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2103,
                    "end": 2144
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2153,
                      "end": 2166
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2169,
                        "end": 2172
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2179,
                              "end": 2182
                            },
                            "typeArguments": null,
                            "start": 2179,
                            "end": 2182
                          },
                          "start": 2177,
                          "end": 2182
                        },
                        "start": 2174,
                        "end": 2182
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2185,
                        "end": 2192
                      },
                      "start": 2183,
                      "end": 2192
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2153,
                    "end": 2193
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgLshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2202,
                      "end": 2216
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2219,
                        "end": 2222
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2229,
                              "end": 2232
                            },
                            "typeArguments": null,
                            "start": 2229,
                            "end": 2232
                          },
                          "start": 2227,
                          "end": 2232
                        },
                        "start": 2224,
                        "end": 2232
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2235,
                        "end": 2242
                      },
                      "start": 2233,
                      "end": 2242
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2202,
                    "end": 2243
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2252,
                      "end": 2266
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2269,
                        "end": 2272
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2279,
                              "end": 2282
                            },
                            "typeArguments": null,
                            "start": 2279,
                            "end": 2282
                          },
                          "start": 2277,
                          "end": 2282
                        },
                        "start": 2274,
                        "end": 2282
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2285,
                        "end": 2292
                      },
                      "start": 2283,
                      "end": 2292
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2252,
                    "end": 2293
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsgRs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2302,
                      "end": 2316
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2319,
                        "end": 2322
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2329,
                              "end": 2332
                            },
                            "typeArguments": null,
                            "start": 2329,
                            "end": 2332
                          },
                          "start": 2327,
                          "end": 2332
                        },
                        "start": 2324,
                        "end": 2332
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2335,
                        "end": 2342
                      },
                      "start": 2333,
                      "end": 2342
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2302,
                    "end": 2343
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QMarkCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2352,
                      "end": 2365
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2368,
                        "end": 2371
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2378,
                              "end": 2381
                            },
                            "typeArguments": null,
                            "start": 2378,
                            "end": 2381
                          },
                          "start": 2376,
                          "end": 2381
                        },
                        "start": 2373,
                        "end": 2381
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2384,
                        "end": 2391
                      },
                      "start": 2382,
                      "end": 2391
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2352,
                    "end": 2392
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogOrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2401,
                      "end": 2414
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2417,
                        "end": 2420
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2427,
                              "end": 2430
                            },
                            "typeArguments": null,
                            "start": 2427,
                            "end": 2430
                          },
                          "start": 2425,
                          "end": 2430
                        },
                        "start": 2422,
                        "end": 2430
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2433,
                        "end": 2440
                      },
                      "start": 2431,
                      "end": 2440
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2401,
                    "end": 2441
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogAndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2450,
                      "end": 2464
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2467,
                        "end": 2470
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2477,
                              "end": 2480
                            },
                            "typeArguments": null,
                            "start": 2477,
                            "end": 2480
                          },
                          "start": 2475,
                          "end": 2480
                        },
                        "start": 2472,
                        "end": 2480
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2483,
                        "end": 2490
                      },
                      "start": 2481,
                      "end": 2490
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2450,
                    "end": 2491
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OrCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2500,
                      "end": 2510
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2513,
                        "end": 2516
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2523,
                              "end": 2526
                            },
                            "typeArguments": null,
                            "start": 2523,
                            "end": 2526
                          },
                          "start": 2521,
                          "end": 2526
                        },
                        "start": 2518,
                        "end": 2526
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2529,
                        "end": 2536
                      },
                      "start": 2527,
                      "end": 2536
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2500,
                    "end": 2537
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "XorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2546,
                      "end": 2557
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2560,
                        "end": 2563
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2570,
                              "end": 2573
                            },
                            "typeArguments": null,
                            "start": 2570,
                            "end": 2573
                          },
                          "start": 2568,
                          "end": 2573
                        },
                        "start": 2565,
                        "end": 2573
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2576,
                        "end": 2583
                      },
                      "start": 2574,
                      "end": 2583
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2546,
                    "end": 2584
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AndCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2593,
                      "end": 2604
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2607,
                        "end": 2610
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2617,
                              "end": 2620
                            },
                            "typeArguments": null,
                            "start": 2617,
                            "end": 2620
                          },
                          "start": 2615,
                          "end": 2620
                        },
                        "start": 2612,
                        "end": 2620
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2623,
                        "end": 2630
                      },
                      "start": 2621,
                      "end": 2630
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2593,
                    "end": 2631
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2640,
                      "end": 2650
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2653,
                        "end": 2656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2663,
                              "end": 2666
                            },
                            "typeArguments": null,
                            "start": 2663,
                            "end": 2666
                          },
                          "start": 2661,
                          "end": 2666
                        },
                        "start": 2658,
                        "end": 2666
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2669,
                        "end": 2676
                      },
                      "start": 2667,
                      "end": 2676
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2640,
                    "end": 2677
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2686,
                      "end": 2696
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2699,
                        "end": 2702
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2709,
                              "end": 2712
                            },
                            "typeArguments": null,
                            "start": 2709,
                            "end": 2712
                          },
                          "start": 2707,
                          "end": 2712
                        },
                        "start": 2704,
                        "end": 2712
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2715,
                        "end": 2722
                      },
                      "start": 2713,
                      "end": 2722
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2686,
                    "end": 2723
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2732,
                      "end": 2743
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2746,
                        "end": 2749
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2756,
                              "end": 2759
                            },
                            "typeArguments": null,
                            "start": 2756,
                            "end": 2759
                          },
                          "start": 2754,
                          "end": 2759
                        },
                        "start": 2751,
                        "end": 2759
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2762,
                        "end": 2769
                      },
                      "start": 2760,
                      "end": 2769
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2732,
                    "end": 2770
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NEqvCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2779,
                      "end": 2791
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2794,
                        "end": 2797
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2804,
                              "end": 2807
                            },
                            "typeArguments": null,
                            "start": 2804,
                            "end": 2807
                          },
                          "start": 2802,
                          "end": 2807
                        },
                        "start": 2799,
                        "end": 2807
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2810,
                        "end": 2817
                      },
                      "start": 2808,
                      "end": 2817
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2779,
                    "end": 2818
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2827,
                      "end": 2837
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2840,
                        "end": 2843
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2850,
                              "end": 2853
                            },
                            "typeArguments": null,
                            "start": 2850,
                            "end": 2853
                          },
                          "start": 2848,
                          "end": 2853
                        },
                        "start": 2845,
                        "end": 2853
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2856,
                        "end": 2863
                      },
                      "start": 2854,
                      "end": 2863
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2827,
                    "end": 2864
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2873,
                      "end": 2883
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2886,
                        "end": 2889
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2896,
                              "end": 2899
                            },
                            "typeArguments": null,
                            "start": 2896,
                            "end": 2899
                          },
                          "start": 2894,
                          "end": 2899
                        },
                        "start": 2891,
                        "end": 2899
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2902,
                        "end": 2909
                      },
                      "start": 2900,
                      "end": 2909
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2873,
                    "end": 2910
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GtCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2919,
                      "end": 2929
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2932,
                        "end": 2935
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2942,
                              "end": 2945
                            },
                            "typeArguments": null,
                            "start": 2942,
                            "end": 2945
                          },
                          "start": 2940,
                          "end": 2945
                        },
                        "start": 2937,
                        "end": 2945
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2948,
                        "end": 2955
                      },
                      "start": 2946,
                      "end": 2955
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2919,
                    "end": 2956
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2965,
                      "end": 2975
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2978,
                        "end": 2981
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2988,
                              "end": 2991
                            },
                            "typeArguments": null,
                            "start": 2988,
                            "end": 2991
                          },
                          "start": 2986,
                          "end": 2991
                        },
                        "start": 2983,
                        "end": 2991
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2994,
                        "end": 3001
                      },
                      "start": 2992,
                      "end": 3001
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2965,
                    "end": 3002
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3011,
                      "end": 3022
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3025,
                        "end": 3028
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3035,
                              "end": 3038
                            },
                            "typeArguments": null,
                            "start": 3035,
                            "end": 3038
                          },
                          "start": 3033,
                          "end": 3038
                        },
                        "start": 3030,
                        "end": 3038
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3041,
                        "end": 3048
                      },
                      "start": 3039,
                      "end": 3048
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3011,
                    "end": 3049
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SubCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3058,
                      "end": 3069
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3072,
                        "end": 3075
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3082,
                              "end": 3085
                            },
                            "typeArguments": null,
                            "start": 3082,
                            "end": 3085
                          },
                          "start": 3080,
                          "end": 3085
                        },
                        "start": 3077,
                        "end": 3085
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3088,
                        "end": 3095
                      },
                      "start": 3086,
                      "end": 3095
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3058,
                    "end": 3096
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MulCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3116
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3122
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3129,
                              "end": 3132
                            },
                            "typeArguments": null,
                            "start": 3129,
                            "end": 3132
                          },
                          "start": 3127,
                          "end": 3132
                        },
                        "start": 3124,
                        "end": 3132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3135,
                        "end": 3142
                      },
                      "start": 3133,
                      "end": 3142
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3105,
                    "end": 3143
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DivCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3152,
                      "end": 3163
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3166,
                        "end": 3169
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3176,
                              "end": 3179
                            },
                            "typeArguments": null,
                            "start": 3176,
                            "end": 3179
                          },
                          "start": 3174,
                          "end": 3179
                        },
                        "start": 3171,
                        "end": 3179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3182,
                        "end": 3189
                      },
                      "start": 3180,
                      "end": 3189
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3152,
                    "end": 3190
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3199,
                      "end": 3210
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3213,
                        "end": 3216
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3223,
                              "end": 3226
                            },
                            "typeArguments": null,
                            "start": 3223,
                            "end": 3226
                          },
                          "start": 3221,
                          "end": 3226
                        },
                        "start": 3218,
                        "end": 3226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3229,
                        "end": 3236
                      },
                      "start": 3227,
                      "end": 3236
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3199,
                    "end": 3237
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3246,
                      "end": 3257
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3260,
                        "end": 3263
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3270,
                              "end": 3273
                            },
                            "typeArguments": null,
                            "start": 3270,
                            "end": 3273
                          },
                          "start": 3268,
                          "end": 3273
                        },
                        "start": 3265,
                        "end": 3273
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3276,
                        "end": 3283
                      },
                      "start": 3274,
                      "end": 3283
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3246,
                    "end": 3284
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RshCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3293,
                      "end": 3304
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3307,
                        "end": 3310
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3317,
                              "end": 3320
                            },
                            "typeArguments": null,
                            "start": 3317,
                            "end": 3320
                          },
                          "start": 3315,
                          "end": 3320
                        },
                        "start": 3312,
                        "end": 3320
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3323,
                        "end": 3330
                      },
                      "start": 3321,
                      "end": 3330
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3293,
                    "end": 3331
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Rs2Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3340,
                      "end": 3351
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3354,
                        "end": 3357
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3364,
                              "end": 3367
                            },
                            "typeArguments": null,
                            "start": 3364,
                            "end": 3367
                          },
                          "start": 3362,
                          "end": 3367
                        },
                        "start": 3359,
                        "end": 3367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3370,
                        "end": 3377
                      },
                      "start": 3368,
                      "end": 3377
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3340,
                    "end": 3378
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3387,
                      "end": 3398
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3401,
                        "end": 3404
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3411,
                              "end": 3414
                            },
                            "typeArguments": null,
                            "start": 3411,
                            "end": 3414
                          },
                          "start": 3409,
                          "end": 3414
                        },
                        "start": 3406,
                        "end": 3414
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3417,
                        "end": 3424
                      },
                      "start": 3415,
                      "end": 3424
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3387,
                    "end": 3425
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LogNotCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3448
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3451,
                        "end": 3454
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3461,
                              "end": 3464
                            },
                            "typeArguments": null,
                            "start": 3461,
                            "end": 3464
                          },
                          "start": 3459,
                          "end": 3464
                        },
                        "start": 3456,
                        "end": 3464
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3467,
                        "end": 3474
                      },
                      "start": 3465,
                      "end": 3474
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3434,
                    "end": 3475
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3484,
                      "end": 3498
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3501,
                        "end": 3504
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3511,
                              "end": 3514
                            },
                            "typeArguments": null,
                            "start": 3511,
                            "end": 3514
                          },
                          "start": 3509,
                          "end": 3514
                        },
                        "start": 3506,
                        "end": 3514
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3517,
                        "end": 3524
                      },
                      "start": 3515,
                      "end": 3524
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3484,
                    "end": 3525
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPreCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3534,
                      "end": 3548
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3551,
                        "end": 3554
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3561,
                              "end": 3564
                            },
                            "typeArguments": null,
                            "start": 3561,
                            "end": 3564
                          },
                          "start": 3559,
                          "end": 3564
                        },
                        "start": 3556,
                        "end": 3564
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3567,
                        "end": 3574
                      },
                      "start": 3565,
                      "end": 3574
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3534,
                    "end": 3575
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3584,
                      "end": 3599
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3602,
                        "end": 3605
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3612,
                              "end": 3615
                            },
                            "typeArguments": null,
                            "start": 3612,
                            "end": 3615
                          },
                          "start": 3610,
                          "end": 3615
                        },
                        "start": 3607,
                        "end": 3615
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3618,
                        "end": 3625
                      },
                      "start": 3616,
                      "end": 3625
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3584,
                    "end": 3626
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecPostCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3635,
                      "end": 3650
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3653,
                        "end": 3656
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3663,
                              "end": 3666
                            },
                            "typeArguments": null,
                            "start": 3663,
                            "end": 3666
                          },
                          "start": 3661,
                          "end": 3666
                        },
                        "start": 3658,
                        "end": 3666
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3669,
                        "end": 3676
                      },
                      "start": 3667,
                      "end": 3676
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3635,
                    "end": 3677
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeAssertionCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3686,
                      "end": 3707
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3710,
                        "end": 3713
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3720,
                              "end": 3723
                            },
                            "typeArguments": null,
                            "start": 3720,
                            "end": 3723
                          },
                          "start": 3718,
                          "end": 3723
                        },
                        "start": 3715,
                        "end": 3723
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3726,
                        "end": 3733
                      },
                      "start": 3724,
                      "end": 3733
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3686,
                    "end": 3734
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FuncDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3743,
                      "end": 3759
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3762,
                        "end": 3765
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FuncDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3777,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3777,
                            "end": 3785
                          },
                          "start": 3775,
                          "end": 3785
                        },
                        "start": 3767,
                        "end": 3785
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3788,
                        "end": 3795
                      },
                      "start": 3786,
                      "end": 3795
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3743,
                    "end": 3796
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MemberCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3805,
                      "end": 3819
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3822,
                        "end": 3825
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3832,
                              "end": 3835
                            },
                            "typeArguments": null,
                            "start": 3832,
                            "end": 3835
                          },
                          "start": 3830,
                          "end": 3835
                        },
                        "start": 3827,
                        "end": 3835
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3838,
                        "end": 3845
                      },
                      "start": 3836,
                      "end": 3845
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3805,
                    "end": 3846
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VarDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3855,
                      "end": 3870
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3873,
                        "end": 3876
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "varDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VarDecl",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3887,
                              "end": 3894
                            },
                            "typeArguments": null,
                            "start": 3887,
                            "end": 3894
                          },
                          "start": 3885,
                          "end": 3894
                        },
                        "start": 3878,
                        "end": 3894
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3897,
                        "end": 3904
                      },
                      "start": 3895,
                      "end": 3904
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3855,
                    "end": 3905
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArgDeclCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3914,
                      "end": 3929
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3932,
                        "end": 3935
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3942,
                              "end": 3945
                            },
                            "typeArguments": null,
                            "start": 3942,
                            "end": 3945
                          },
                          "start": 3940,
                          "end": 3945
                        },
                        "start": 3937,
                        "end": 3945
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3948,
                        "end": 3955
                      },
                      "start": 3946,
                      "end": 3955
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3914,
                    "end": 3956
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3965,
                      "end": 3979
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3982,
                        "end": 3985
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3992,
                              "end": 3995
                            },
                            "typeArguments": null,
                            "start": 3992,
                            "end": 3995
                          },
                          "start": 3990,
                          "end": 3995
                        },
                        "start": 3987,
                        "end": 3995
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3998,
                        "end": 4005
                      },
                      "start": 3996,
                      "end": 4005
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3965,
                    "end": 4006
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BreakCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4015,
                      "end": 4028
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4031,
                        "end": 4034
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4041,
                              "end": 4044
                            },
                            "typeArguments": null,
                            "start": 4041,
                            "end": 4044
                          },
                          "start": 4039,
                          "end": 4044
                        },
                        "start": 4036,
                        "end": 4044
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4047,
                        "end": 4054
                      },
                      "start": 4045,
                      "end": 4054
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4015,
                    "end": 4055
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ContinueCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4064,
                      "end": 4080
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4083,
                        "end": 4086
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4093,
                              "end": 4096
                            },
                            "typeArguments": null,
                            "start": 4093,
                            "end": 4096
                          },
                          "start": 4091,
                          "end": 4096
                        },
                        "start": 4088,
                        "end": 4096
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4099,
                        "end": 4106
                      },
                      "start": 4097,
                      "end": 4106
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4064,
                    "end": 4107
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThrowCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4116,
                      "end": 4129
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4132,
                        "end": 4135
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4142,
                              "end": 4145
                            },
                            "typeArguments": null,
                            "start": 4142,
                            "end": 4145
                          },
                          "start": 4140,
                          "end": 4145
                        },
                        "start": 4137,
                        "end": 4145
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4148,
                        "end": 4155
                      },
                      "start": 4146,
                      "end": 4155
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4116,
                    "end": 4156
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4165,
                      "end": 4176
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4179,
                        "end": 4182
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4189,
                              "end": 4192
                            },
                            "typeArguments": null,
                            "start": 4189,
                            "end": 4192
                          },
                          "start": 4187,
                          "end": 4192
                        },
                        "start": 4184,
                        "end": 4192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4195,
                        "end": 4202
                      },
                      "start": 4193,
                      "end": 4202
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4165,
                    "end": 4203
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForInCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4212,
                      "end": 4225
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4228,
                        "end": 4231
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4238,
                              "end": 4241
                            },
                            "typeArguments": null,
                            "start": 4238,
                            "end": 4241
                          },
                          "start": 4236,
                          "end": 4241
                        },
                        "start": 4233,
                        "end": 4241
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4244,
                        "end": 4251
                      },
                      "start": 4242,
                      "end": 4251
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4212,
                    "end": 4252
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IfCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4261,
                      "end": 4271
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4274,
                        "end": 4277
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4284,
                              "end": 4287
                            },
                            "typeArguments": null,
                            "start": 4284,
                            "end": 4287
                          },
                          "start": 4282,
                          "end": 4287
                        },
                        "start": 4279,
                        "end": 4287
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4290,
                        "end": 4297
                      },
                      "start": 4288,
                      "end": 4297
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4261,
                    "end": 4298
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4307,
                      "end": 4320
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4323,
                        "end": 4326
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4333,
                              "end": 4336
                            },
                            "typeArguments": null,
                            "start": 4333,
                            "end": 4336
                          },
                          "start": 4331,
                          "end": 4336
                        },
                        "start": 4328,
                        "end": 4336
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4339,
                        "end": 4346
                      },
                      "start": 4337,
                      "end": 4346
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4307,
                    "end": 4347
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DoWhileCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4356,
                      "end": 4371
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4377
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4384,
                              "end": 4387
                            },
                            "typeArguments": null,
                            "start": 4384,
                            "end": 4387
                          },
                          "start": 4382,
                          "end": 4387
                        },
                        "start": 4379,
                        "end": 4387
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4390,
                        "end": 4397
                      },
                      "start": 4388,
                      "end": 4397
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4356,
                    "end": 4398
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BlockCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4407,
                      "end": 4420
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4423,
                        "end": 4426
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "block",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Block",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4435,
                              "end": 4440
                            },
                            "typeArguments": null,
                            "start": 4435,
                            "end": 4440
                          },
                          "start": 4433,
                          "end": 4440
                        },
                        "start": 4428,
                        "end": 4440
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4443,
                        "end": 4450
                      },
                      "start": 4441,
                      "end": 4450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4407,
                    "end": 4451
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CaseCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4460,
                      "end": 4472
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4475,
                        "end": 4478
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4485,
                              "end": 4488
                            },
                            "typeArguments": null,
                            "start": 4485,
                            "end": 4488
                          },
                          "start": 4483,
                          "end": 4488
                        },
                        "start": 4480,
                        "end": 4488
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4491,
                        "end": 4498
                      },
                      "start": 4489,
                      "end": 4498
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4460,
                    "end": 4499
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SwitchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4508,
                      "end": 4522
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4525,
                        "end": 4528
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4535,
                              "end": 4538
                            },
                            "typeArguments": null,
                            "start": 4535,
                            "end": 4538
                          },
                          "start": 4533,
                          "end": 4538
                        },
                        "start": 4530,
                        "end": 4538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4541,
                        "end": 4548
                      },
                      "start": 4539,
                      "end": 4548
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4508,
                    "end": 4549
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4558,
                      "end": 4569
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4572,
                        "end": 4575
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4582,
                              "end": 4585
                            },
                            "typeArguments": null,
                            "start": 4582,
                            "end": 4585
                          },
                          "start": 4580,
                          "end": 4585
                        },
                        "start": 4577,
                        "end": 4585
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4588,
                        "end": 4595
                      },
                      "start": 4586,
                      "end": 4595
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4558,
                    "end": 4596
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryCatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4605,
                      "end": 4621
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4624,
                        "end": 4627
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4634,
                              "end": 4637
                            },
                            "typeArguments": null,
                            "start": 4634,
                            "end": 4637
                          },
                          "start": 4632,
                          "end": 4637
                        },
                        "start": 4629,
                        "end": 4637
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4640,
                        "end": 4647
                      },
                      "start": 4638,
                      "end": 4647
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4605,
                    "end": 4648
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TryFinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4657,
                      "end": 4675
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4678,
                        "end": 4681
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4688,
                              "end": 4691
                            },
                            "typeArguments": null,
                            "start": 4688,
                            "end": 4691
                          },
                          "start": 4686,
                          "end": 4691
                        },
                        "start": 4683,
                        "end": 4691
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4694,
                        "end": 4701
                      },
                      "start": 4692,
                      "end": 4701
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4657,
                    "end": 4702
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FinallyCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4711,
                      "end": 4726
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4729,
                        "end": 4732
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4739,
                              "end": 4742
                            },
                            "typeArguments": null,
                            "start": 4739,
                            "end": 4742
                          },
                          "start": 4737,
                          "end": 4742
                        },
                        "start": 4734,
                        "end": 4742
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4745,
                        "end": 4752
                      },
                      "start": 4743,
                      "end": 4752
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4711,
                    "end": 4753
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CatchCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4762,
                      "end": 4775
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4778,
                        "end": 4781
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4788,
                              "end": 4791
                            },
                            "typeArguments": null,
                            "start": 4788,
                            "end": 4791
                          },
                          "start": 4786,
                          "end": 4791
                        },
                        "start": 4783,
                        "end": 4791
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4794,
                        "end": 4801
                      },
                      "start": 4792,
                      "end": 4801
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4762,
                    "end": 4802
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4811,
                      "end": 4823
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4826,
                        "end": 4829
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "astList",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ASTList",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4840,
                              "end": 4847
                            },
                            "typeArguments": null,
                            "start": 4840,
                            "end": 4847
                          },
                          "start": 4838,
                          "end": 4847
                        },
                        "start": 4831,
                        "end": 4847
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4850,
                        "end": 4857
                      },
                      "start": 4848,
                      "end": 4857
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4811,
                    "end": 4858
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ScriptCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4867,
                      "end": 4881
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4884,
                        "end": 4887
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "script",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Script",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4897,
                              "end": 4903
                            },
                            "typeArguments": null,
                            "start": 4897,
                            "end": 4903
                          },
                          "start": 4895,
                          "end": 4903
                        },
                        "start": 4889,
                        "end": 4903
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4906,
                        "end": 4913
                      },
                      "start": 4904,
                      "end": 4913
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4867,
                    "end": 4914
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4923,
                      "end": 4947
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4950,
                        "end": 4953
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4960,
                              "end": 4963
                            },
                            "typeArguments": null,
                            "start": 4960,
                            "end": 4963
                          },
                          "start": 4958,
                          "end": 4963
                        },
                        "start": 4955,
                        "end": 4963
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 4966,
                        "end": 4973
                      },
                      "start": 4964,
                      "end": 4973
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4923,
                    "end": 4974
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4983,
                      "end": 5011
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5014,
                        "end": 5017
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InterfaceDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5034,
                              "end": 5054
                            },
                            "typeArguments": null,
                            "start": 5034,
                            "end": 5054
                          },
                          "start": 5032,
                          "end": 5054
                        },
                        "start": 5019,
                        "end": 5054
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5057,
                        "end": 5064
                      },
                      "start": 5055,
                      "end": 5064
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4983,
                    "end": 5065
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5074,
                      "end": 5099
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5102,
                        "end": 5105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleDecl",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ModuleDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5119,
                              "end": 5136
                            },
                            "typeArguments": null,
                            "start": 5119,
                            "end": 5136
                          },
                          "start": 5117,
                          "end": 5136
                        },
                        "start": 5107,
                        "end": 5136
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5139,
                        "end": 5146
                      },
                      "start": 5137,
                      "end": 5146
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5074,
                    "end": 5147
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ImportDeclarationCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5156,
                      "end": 5181
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5184,
                        "end": 5187
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5194,
                              "end": 5197
                            },
                            "typeArguments": null,
                            "start": 5194,
                            "end": 5197
                          },
                          "start": 5192,
                          "end": 5197
                        },
                        "start": 5189,
                        "end": 5197
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5200,
                        "end": 5207
                      },
                      "start": 5198,
                      "end": 5207
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5156,
                    "end": 5208
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5217,
                      "end": 5229
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5232,
                        "end": 5235
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5242,
                              "end": 5245
                            },
                            "typeArguments": null,
                            "start": 5242,
                            "end": 5245
                          },
                          "start": 5240,
                          "end": 5245
                        },
                        "start": 5237,
                        "end": 5245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5248,
                        "end": 5255
                      },
                      "start": 5246,
                      "end": 5255
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5217,
                    "end": 5256
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabelCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5265,
                      "end": 5278
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5281,
                        "end": 5284
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAST",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5296,
                              "end": 5299
                            },
                            "typeArguments": null,
                            "start": 5296,
                            "end": 5299
                          },
                          "start": 5294,
                          "end": 5299
                        },
                        "start": 5286,
                        "end": 5299
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5302,
                        "end": 5309
                      },
                      "start": 5300,
                      "end": 5309
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5265,
                    "end": 5310
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LabeledStatementCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5319,
                      "end": 5343
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5346,
                        "end": 5349
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5356,
                              "end": 5359
                            },
                            "typeArguments": null,
                            "start": 5356,
                            "end": 5359
                          },
                          "start": 5354,
                          "end": 5359
                        },
                        "start": 5351,
                        "end": 5359
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5362,
                        "end": 5369
                      },
                      "start": 5360,
                      "end": 5369
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5319,
                    "end": 5370
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EBStartCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5379,
                      "end": 5394
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5397,
                        "end": 5400
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5407,
                              "end": 5410
                            },
                            "typeArguments": null,
                            "start": 5407,
                            "end": 5410
                          },
                          "start": 5405,
                          "end": 5410
                        },
                        "start": 5402,
                        "end": 5410
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5413,
                        "end": 5420
                      },
                      "start": 5411,
                      "end": 5420
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5379,
                    "end": 5421
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GotoEBCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5430,
                      "end": 5444
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5447,
                        "end": 5450
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5457,
                              "end": 5460
                            },
                            "typeArguments": null,
                            "start": 5457,
                            "end": 5460
                          },
                          "start": 5455,
                          "end": 5460
                        },
                        "start": 5452,
                        "end": 5460
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5463,
                        "end": 5470
                      },
                      "start": 5461,
                      "end": 5470
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5430,
                    "end": 5471
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EndCodeCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5480,
                      "end": 5495
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5498,
                        "end": 5501
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5508,
                              "end": 5511
                            },
                            "typeArguments": null,
                            "start": 5508,
                            "end": 5511
                          },
                          "start": 5506,
                          "end": 5511
                        },
                        "start": 5503,
                        "end": 5511
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5514,
                        "end": 5521
                      },
                      "start": 5512,
                      "end": 5521
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5480,
                    "end": 5522
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5531,
                      "end": 5544
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5547,
                        "end": 5550
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5557,
                              "end": 5560
                            },
                            "typeArguments": null,
                            "start": 5557,
                            "end": 5560
                          },
                          "start": 5555,
                          "end": 5560
                        },
                        "start": 5552,
                        "end": 5560
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5563,
                        "end": 5570
                      },
                      "start": 5561,
                      "end": 5570
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5531,
                    "end": 5571
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CommentCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5580,
                      "end": 5595
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5598,
                        "end": 5601
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5608,
                              "end": 5611
                            },
                            "typeArguments": null,
                            "start": 5608,
                            "end": 5611
                          },
                          "start": 5606,
                          "end": 5611
                        },
                        "start": 5603,
                        "end": 5611
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5614,
                        "end": 5621
                      },
                      "start": 5612,
                      "end": 5621
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5580,
                    "end": 5622
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DebuggerCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5631,
                      "end": 5647
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5650,
                        "end": 5653
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5660,
                              "end": 5663
                            },
                            "typeArguments": null,
                            "start": 5660,
                            "end": 5663
                          },
                          "start": 5658,
                          "end": 5663
                        },
                        "start": 5655,
                        "end": 5663
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5666,
                        "end": 5673
                      },
                      "start": 5664,
                      "end": 5673
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5631,
                    "end": 5674
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5683,
                      "end": 5698
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pre",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5701,
                        "end": 5704
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ast",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AST",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5711,
                              "end": 5714
                            },
                            "typeArguments": null,
                            "start": 5711,
                            "end": 5714
                          },
                          "start": 5709,
                          "end": 5714
                        },
                        "start": 5706,
                        "end": 5714
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 5717,
                        "end": 5724
                      },
                      "start": 5715,
                      "end": 5724
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5683,
                    "end": 5725
                  }
                ],
                "start": 307,
                "end": 5731
              },
              "declare": false,
              "start": 273,
              "end": 5731
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 266,
            "end": 5731
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "walk",
                "optional": false,
                "typeAnnotation": null,
                "start": 5753,
                "end": 5757
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "script",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Script",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5766,
                        "end": 5772
                      },
                      "typeArguments": null,
                      "start": 5766,
                      "end": 5772
                    },
                    "start": 5764,
                    "end": 5772
                  },
                  "start": 5758,
                  "end": 5772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AstWalkerDetailCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5784,
                        "end": 5807
                      },
                      "typeArguments": null,
                      "start": 5784,
                      "end": 5807
                    },
                    "start": 5782,
                    "end": 5807
                  },
                  "start": 5774,
                  "end": 5807
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5810,
                  "end": 5814
                },
                "start": 5808,
                "end": 5814
              },
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
                          "name": "pre",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5829,
                          "end": 5832
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cur",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5841,
                                    "end": 5844
                                  },
                                  "typeArguments": null,
                                  "start": 5841,
                                  "end": 5844
                                },
                                "start": 5839,
                                "end": 5844
                              },
                              "start": 5836,
                              "end": 5844
                            },
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
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5854,
                                    "end": 5857
                                  },
                                  "typeArguments": null,
                                  "start": 5854,
                                  "end": 5857
                                },
                                "start": 5852,
                                "end": 5857
                              },
                              "start": 5846,
                              "end": 5857
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "walker",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5876,
                                        "end": 5882
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "options",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5883,
                                        "end": 5890
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 5876,
                                      "end": 5890
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "goChildren",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5891,
                                      "end": 5901
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 5876,
                                    "end": 5901
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "AstWalkerCallback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5904,
                                      "end": 5921
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 5922,
                                        "end": 5926
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "cur",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5928,
                                        "end": 5931
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5933,
                                        "end": 5941
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5904,
                                    "end": 5942
                                  },
                                  "start": 5876,
                                  "end": 5942
                                },
                                "directive": null,
                                "start": 5876,
                                "end": 5943
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5963,
                                  "end": 5966
                                },
                                "start": 5956,
                                "end": 5967
                              }
                            ],
                            "start": 5862,
                            "end": 5977
                          },
                          "id": null,
                          "generator": false,
                          "start": 5835,
                          "end": 5977
                        },
                        "definite": false,
                        "start": 5829,
                        "end": 5977
                      }
                    ],
                    "declare": false,
                    "start": 5825,
                    "end": 5977
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
                          "name": "post",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5991,
                          "end": 5995
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cur",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6004,
                                    "end": 6007
                                  },
                                  "typeArguments": null,
                                  "start": 6004,
                                  "end": 6007
                                },
                                "start": 6002,
                                "end": 6007
                              },
                              "start": 5999,
                              "end": 6007
                            },
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
                                    "name": "AST",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6017,
                                    "end": 6020
                                  },
                                  "typeArguments": null,
                                  "start": 6017,
                                  "end": 6020
                                },
                                "start": 6015,
                                "end": 6020
                              },
                              "start": 6009,
                              "end": 6020
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AstWalkerCallback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6039,
                                    "end": 6056
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 6057,
                                      "end": 6062
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "cur",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6064,
                                      "end": 6067
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "callback",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6069,
                                      "end": 6077
                                    }
                                  ],
                                  "optional": false,
                                  "start": 6039,
                                  "end": 6078
                                },
                                "directive": null,
                                "start": 6039,
                                "end": 6079
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cur",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6099,
                                  "end": 6102
                                },
                                "start": 6092,
                                "end": 6103
                              }
                            ],
                            "start": 6025,
                            "end": 6113
                          },
                          "id": null,
                          "generator": false,
                          "start": 5998,
                          "end": 6113
                        },
                        "definite": false,
                        "start": 5991,
                        "end": 6113
                      }
                    ],
                    "declare": false,
                    "start": 5987,
                    "end": 6113
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
                          "name": "walker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6127,
                          "end": 6133
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TypeScript",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6136,
                                  "end": 6146
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getAstWalkerFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6147,
                                  "end": 6166
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6136,
                                "end": 6166
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 6136,
                              "end": 6168
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getWalker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6169,
                              "end": 6178
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6136,
                            "end": 6178
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6179,
                              "end": 6182
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "post",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6184,
                              "end": 6188
                            }
                          ],
                          "optional": false,
                          "start": 6136,
                          "end": 6189
                        },
                        "definite": false,
                        "start": 6127,
                        "end": 6189
                      }
                    ],
                    "declare": false,
                    "start": 6123,
                    "end": 6190
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
                          "name": "walker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6199,
                          "end": 6205
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "walk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6206,
                          "end": 6210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6199,
                        "end": 6210
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "script",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6211,
                          "end": 6217
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 6219,
                          "end": 6223
                        }
                      ],
                      "optional": false,
                      "start": 6199,
                      "end": 6224
                    },
                    "directive": null,
                    "start": 6199,
                    "end": 6225
                  }
                ],
                "start": 5815,
                "end": 6231
              },
              "expression": false,
              "start": 5744,
              "end": 6231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5737,
            "end": 6231
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AstWalkerCallback",
              "optional": false,
              "typeAnnotation": null,
              "start": 6246,
              "end": 6263
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pre",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 6269,
                    "end": 6276
                  },
                  "start": 6267,
                  "end": 6276
                },
                "start": 6264,
                "end": 6276
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ast",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AST",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6283,
                      "end": 6286
                    },
                    "typeArguments": null,
                    "start": 6283,
                    "end": 6286
                  },
                  "start": 6281,
                  "end": 6286
                },
                "start": 6278,
                "end": 6286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AstWalkerDetailCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6298,
                      "end": 6321
                    },
                    "typeArguments": null,
                    "start": 6298,
                    "end": 6321
                  },
                  "start": 6296,
                  "end": 6321
                },
                "start": 6288,
                "end": 6321
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6324,
                "end": 6331
              },
              "start": 6322,
              "end": 6331
            },
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
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6431,
                        "end": 6439
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6442,
                          "end": 6445
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nodeType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6446,
                          "end": 6454
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6442,
                        "end": 6454
                      },
                      "definite": false,
                      "start": 6431,
                      "end": 6454
                    }
                  ],
                  "declare": false,
                  "start": 6427,
                  "end": 6455
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
                        "name": "callbackString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6468,
                        "end": 6482
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 6487,
                                "end": 6490
                              },
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NodeType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6491,
                                "end": 6499
                              },
                              "start": 6486,
                              "end": 6499
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_map",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6501,
                              "end": 6505
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6485,
                            "end": 6505
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nodeType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6506,
                            "end": 6514
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6485,
                          "end": 6515
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "Callback",
                          "raw": "\"Callback\"",
                          "start": 6518,
                          "end": 6528
                        },
                        "start": 6485,
                        "end": 6528
                      },
                      "definite": false,
                      "start": 6468,
                      "end": 6528
                    }
                  ],
                  "declare": false,
                  "start": 6464,
                  "end": 6529
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6542,
                      "end": 6550
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callbackString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6551,
                      "end": 6565
                    },
                    "optional": false,
                    "computed": true,
                    "start": 6542,
                    "end": 6566
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6589,
                              "end": 6597
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callbackString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6598,
                              "end": 6612
                            },
                            "optional": false,
                            "computed": true,
                            "start": 6589,
                            "end": 6613
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6614,
                              "end": 6617
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6619,
                              "end": 6622
                            }
                          ],
                          "optional": false,
                          "start": 6589,
                          "end": 6623
                        },
                        "start": 6582,
                        "end": 6624
                      }
                    ],
                    "start": 6568,
                    "end": 6634
                  },
                  "alternate": null,
                  "start": 6538,
                  "end": 6634
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6648,
                      "end": 6656
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DefaultCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6657,
                      "end": 6672
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6648,
                    "end": 6672
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6695,
                              "end": 6703
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DefaultCallback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6704,
                              "end": 6719
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6695,
                            "end": 6719
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pre",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6720,
                              "end": 6723
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ast",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6725,
                              "end": 6728
                            }
                          ],
                          "optional": false,
                          "start": 6695,
                          "end": 6729
                        },
                        "start": 6688,
                        "end": 6730
                      }
                    ],
                    "start": 6674,
                    "end": 6740
                  },
                  "alternate": null,
                  "start": 6644,
                  "end": 6740
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 6757,
                    "end": 6761
                  },
                  "start": 6750,
                  "end": 6762
                }
              ],
              "start": 6332,
              "end": 6768
            },
            "expression": false,
            "start": 6237,
            "end": 6768
          }
        ],
        "start": 260,
        "end": 6770
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 6770
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 6770
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "AstWalkerWithDetailCallback",
    "start": 232,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 266,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 273,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "AstWalkerDetailCallback",
    "start": 283,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "EmptyCallback",
    "start": 317,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 343,
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
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 349,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "EmptyExprCallback",
    "start": 366,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 402,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "TrueCallback",
    "start": 419,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 450,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "FalseCallback",
    "start": 467,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 493,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 499,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "ThisCallback",
    "start": 516,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 541,
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
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 547,
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
    "value": "SuperCallback",
    "start": 564,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "QStringCallback",
    "start": 613,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 636,
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
    "value": "AST",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
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
    "value": "boolean",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "RegexCallback",
    "start": 664,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 685,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 696,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "NullCallback",
    "start": 713,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 738,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 744,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "ArrayLitCallback",
    "start": 761,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 785,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "ObjectLitCallback",
    "start": 813,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 849,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "VoidCallback",
    "start": 866,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 886,
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
    "value": "AST",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "boolean",
    "start": 897,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "CommaCallback",
    "start": 914,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 940,
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
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 946,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "PosCallback",
    "start": 963,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 977,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 987,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 993,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "NegCallback",
    "start": 1010,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1040,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "DeleteCallback",
    "start": 1057,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1090,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "AwaitCallback",
    "start": 1107,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1139,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "InCallback",
    "start": 1156,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1185,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "DotCallback",
    "start": 1202,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1226,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "FromCallback",
    "start": 1249,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1274,
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
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "IsCallback",
    "start": 1297,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1326,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "InstOfCallback",
    "start": 1343,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1370,
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
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "TypeofCallback",
    "start": 1393,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1415,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1420,
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
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1426,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "NumberLitCallback",
    "start": 1443,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1479,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "NameCallback",
    "start": 1496,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1511,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "identifierAst",
    "start": 1516,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 1531,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1544,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "TypeRefCallback",
    "start": 1561,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1584,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1595,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "IndexCallback",
    "start": 1612,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1644,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "CallCallback",
    "start": 1661,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1676,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "NewCallback",
    "start": 1709,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1739,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "AsgCallback",
    "start": 1756,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1780,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1786,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "AsgAddCallback",
    "start": 1803,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1825,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1836,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "AsgSubCallback",
    "start": 1853,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1880,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1886,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "AsgDivCallback",
    "start": 1903,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1930,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1936,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "AsgMulCallback",
    "start": 1953,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1975,
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
    "value": "AST",
    "start": 1980,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1986,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "AsgModCallback",
    "start": 2003,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2025,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2036,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "AsgAndCallback",
    "start": 2053,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2070,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2075,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2080,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2086,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "AsgXorCallback",
    "start": 2103,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2130,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "AsgOrCallback",
    "start": 2153,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2169,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2174,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2185,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "AsgLshCallback",
    "start": 2202,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2219,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2224,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2229,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2235,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "AsgRshCallback",
    "start": 2252,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2285,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "AsgRs2Callback",
    "start": 2302,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2319,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2329,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2335,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "QMarkCallback",
    "start": 2352,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2368,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2378,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2384,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "LogOrCallback",
    "start": 2401,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2422,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2427,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2433,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "LogAndCallback",
    "start": 2450,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2467,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2472,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2483,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "OrCallback",
    "start": 2500,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2513,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2518,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2529,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "XorCallback",
    "start": 2546,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2560,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2565,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2570,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2576,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "AndCallback",
    "start": 2593,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2607,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2612,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2617,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2623,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "EqCallback",
    "start": 2640,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2653,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2658,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2663,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2669,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "NeCallback",
    "start": 2686,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2699,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2704,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2709,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2715,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "EqvCallback",
    "start": 2732,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2746,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2751,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2756,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2762,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "NEqvCallback",
    "start": 2779,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2794,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2799,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2810,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "LtCallback",
    "start": 2827,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2840,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2845,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2850,
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
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2856,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "LeCallback",
    "start": 2873,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2891,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2896,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2902,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "GtCallback",
    "start": 2919,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2937,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2942,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2948,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "GeCallback",
    "start": 2965,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 2978,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 2983,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 2988,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2994,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "AddCallback",
    "start": 3011,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3025,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3030,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3041,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "SubCallback",
    "start": 3058,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3072,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3077,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3082,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3088,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "MulCallback",
    "start": 3105,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3119,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3129,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3135,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "DivCallback",
    "start": 3152,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3166,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3171,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3176,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3182,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "ModCallback",
    "start": 3199,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3213,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3218,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3223,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3229,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "LshCallback",
    "start": 3246,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3260,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3265,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3270,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3276,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "RshCallback",
    "start": 3293,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3307,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3312,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3317,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3323,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "Rs2Callback",
    "start": 3340,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3354,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3359,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3364,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3370,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "NotCallback",
    "start": 3387,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3401,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3406,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3411,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3417,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "LogNotCallback",
    "start": 3434,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3451,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3456,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3461,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3467,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "IncPreCallback",
    "start": 3484,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3501,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3506,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3511,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3517,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "DecPreCallback",
    "start": 3534,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3551,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3556,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3561,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3567,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "IncPostCallback",
    "start": 3584,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3602,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3607,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3612,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3618,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "DecPostCallback",
    "start": 3635,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3653,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3658,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3663,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3669,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "TypeAssertionCallback",
    "start": 3686,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3710,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3715,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3720,
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
    "value": ":",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3726,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "FuncDeclCallback",
    "start": 3743,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3762,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "funcDecl",
    "start": 3767,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "FuncDecl",
    "start": 3777,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3788,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Identifier",
    "value": "MemberCallback",
    "start": 3805,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3822,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3827,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3832,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3838,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "VarDeclCallback",
    "start": 3855,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3873,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "varDecl",
    "start": 3878,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "VarDecl",
    "start": 3887,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3897,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "ArgDeclCallback",
    "start": 3914,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3932,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3937,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3948,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "ReturnCallback",
    "start": 3965,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 3982,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 3987,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 3992,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3998,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "BreakCallback",
    "start": 4015,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4031,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4036,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4041,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4047,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Identifier",
    "value": "ContinueCallback",
    "start": 4064,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4083,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4088,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4093,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4099,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "ThrowCallback",
    "start": 4116,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4132,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4137,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4142,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4148,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "ForCallback",
    "start": 4165,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4179,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4184,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4189,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4195,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "ForInCallback",
    "start": 4212,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4228,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4233,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4238,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4244,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "IfCallback",
    "start": 4261,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4274,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4279,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4284,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4290,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "WhileCallback",
    "start": 4307,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4323,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4328,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4333,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4339,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "DoWhileCallback",
    "start": 4356,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4374,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4379,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4384,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4390,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "BlockCallback",
    "start": 4407,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4423,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Identifier",
    "value": "block",
    "start": 4428,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 4435,
    "end": 4440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4443,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Identifier",
    "value": "CaseCallback",
    "start": 4460,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4475,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4480,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4485,
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
    "value": ":",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4491,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Identifier",
    "value": "SwitchCallback",
    "start": 4508,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4525,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4535,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4541,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "TryCallback",
    "start": 4558,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4572,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4577,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4580,
    "end": 4581
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4582,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4588,
    "end": 4595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4595,
    "end": 4596
  },
  {
    "type": "Identifier",
    "value": "TryCatchCallback",
    "start": 4605,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4624,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4629,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4634,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4640,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4647,
    "end": 4648
  },
  {
    "type": "Identifier",
    "value": "TryFinallyCallback",
    "start": 4657,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4678,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4683,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4688,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4694,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Identifier",
    "value": "FinallyCallback",
    "start": 4711,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4729,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4734,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4739,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4745,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "CatchCallback",
    "start": 4762,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4778,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4783,
    "end": 4786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4788,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4794,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "ListCallback",
    "start": 4811,
    "end": 4823
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4826,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "astList",
    "start": 4831,
    "end": 4838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4838,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "ASTList",
    "start": 4840,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4850,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Identifier",
    "value": "ScriptCallback",
    "start": 4867,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4884,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Identifier",
    "value": "script",
    "start": 4889,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Identifier",
    "value": "Script",
    "start": 4897,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4906,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "ClassDeclarationCallback",
    "start": 4923,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 4950,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 4955,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 4960,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4964,
    "end": 4965
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4966,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "InterfaceDeclarationCallback",
    "start": 4983,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5014,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "interfaceDecl",
    "start": 5019,
    "end": 5032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Identifier",
    "value": "InterfaceDeclaration",
    "start": 5034,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5057,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "Identifier",
    "value": "ModuleDeclarationCallback",
    "start": 5074,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5101,
    "end": 5102
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5102,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5105,
    "end": 5106
  },
  {
    "type": "Identifier",
    "value": "moduleDecl",
    "start": 5107,
    "end": 5117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5117,
    "end": 5118
  },
  {
    "type": "Identifier",
    "value": "ModuleDeclaration",
    "start": 5119,
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
    "value": "boolean",
    "start": 5139,
    "end": 5146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5146,
    "end": 5147
  },
  {
    "type": "Identifier",
    "value": "ImportDeclarationCallback",
    "start": 5156,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5184,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5189,
    "end": 5192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5194,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5200,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Identifier",
    "value": "WithCallback",
    "start": 5217,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5232,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5237,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5240,
    "end": 5241
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5242,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5248,
    "end": 5255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5255,
    "end": 5256
  },
  {
    "type": "Identifier",
    "value": "LabelCallback",
    "start": 5265,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5281,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Identifier",
    "value": "labelAST",
    "start": 5286,
    "end": 5294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5296,
    "end": 5299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5299,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5300,
    "end": 5301
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5302,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Identifier",
    "value": "LabeledStatementCallback",
    "start": 5319,
    "end": 5343
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5343,
    "end": 5344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5345,
    "end": 5346
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5346,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5351,
    "end": 5354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5356,
    "end": 5359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5359,
    "end": 5360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5362,
    "end": 5369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "EBStartCallback",
    "start": 5379,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5397,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5402,
    "end": 5405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5407,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5410,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5413,
    "end": 5420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Identifier",
    "value": "GotoEBCallback",
    "start": 5430,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5444,
    "end": 5445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5446,
    "end": 5447
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5447,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5452,
    "end": 5455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5455,
    "end": 5456
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5457,
    "end": 5460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5463,
    "end": 5470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5470,
    "end": 5471
  },
  {
    "type": "Identifier",
    "value": "EndCodeCallback",
    "start": 5480,
    "end": 5495
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5498,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5503,
    "end": 5506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5506,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5508,
    "end": 5511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5511,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5514,
    "end": 5521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Identifier",
    "value": "ErrorCallback",
    "start": 5531,
    "end": 5544
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5544,
    "end": 5545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5546,
    "end": 5547
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5547,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5552,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5555,
    "end": 5556
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5557,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5563,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Identifier",
    "value": "CommentCallback",
    "start": 5580,
    "end": 5595
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5595,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5598,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5603,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5608,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5612,
    "end": 5613
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5614,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "DebuggerCallback",
    "start": 5631,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5650,
    "end": 5653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5653,
    "end": 5654
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5655,
    "end": 5658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5658,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5660,
    "end": 5663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5663,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5666,
    "end": 5673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5673,
    "end": 5674
  },
  {
    "type": "Identifier",
    "value": "DefaultCallback",
    "start": 5683,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5701,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 5706,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5711,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5717,
    "end": 5724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5730,
    "end": 5731
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5737,
    "end": 5743
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5744,
    "end": 5752
  },
  {
    "type": "Identifier",
    "value": "walk",
    "start": 5753,
    "end": 5757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5757,
    "end": 5758
  },
  {
    "type": "Identifier",
    "value": "script",
    "start": 5758,
    "end": 5764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5764,
    "end": 5765
  },
  {
    "type": "Identifier",
    "value": "Script",
    "start": 5766,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 5774,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Identifier",
    "value": "AstWalkerDetailCallback",
    "start": 5784,
    "end": 5807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5807,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5810,
    "end": 5814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5815,
    "end": 5816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5825,
    "end": 5828
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 5829,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5833,
    "end": 5834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5835,
    "end": 5836
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 5836,
    "end": 5839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5839,
    "end": 5840
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5841,
    "end": 5844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5844,
    "end": 5845
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 5846,
    "end": 5852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5852,
    "end": 5853
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 5854,
    "end": 5857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5857,
    "end": 5858
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5859,
    "end": 5861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 5876,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 5883,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Identifier",
    "value": "goChildren",
    "start": 5891,
    "end": 5901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5902,
    "end": 5903
  },
  {
    "type": "Identifier",
    "value": "AstWalkerCallback",
    "start": 5904,
    "end": 5921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5921,
    "end": 5922
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5922,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5926,
    "end": 5927
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 5928,
    "end": 5931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5931,
    "end": 5932
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 5933,
    "end": 5941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5941,
    "end": 5942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5942,
    "end": 5943
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5956,
    "end": 5962
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 5963,
    "end": 5966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5976,
    "end": 5977
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5987,
    "end": 5990
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 5991,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 5999,
    "end": 6002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 6004,
    "end": 6007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6007,
    "end": 6008
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 6009,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6015,
    "end": 6016
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 6017,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6022,
    "end": 6024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "Identifier",
    "value": "AstWalkerCallback",
    "start": 6039,
    "end": 6056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6056,
    "end": 6057
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 6057,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6062,
    "end": 6063
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 6064,
    "end": 6067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6067,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6069,
    "end": 6077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6077,
    "end": 6078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6078,
    "end": 6079
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6092,
    "end": 6098
  },
  {
    "type": "Identifier",
    "value": "cur",
    "start": 6099,
    "end": 6102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6102,
    "end": 6103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6112,
    "end": 6113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6123,
    "end": 6126
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 6127,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6134,
    "end": 6135
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 6136,
    "end": 6146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6146,
    "end": 6147
  },
  {
    "type": "Identifier",
    "value": "getAstWalkerFactory",
    "start": 6147,
    "end": 6166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6166,
    "end": 6167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6167,
    "end": 6168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6168,
    "end": 6169
  },
  {
    "type": "Identifier",
    "value": "getWalker",
    "start": 6169,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 6179,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 6184,
    "end": 6188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6188,
    "end": 6189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6189,
    "end": 6190
  },
  {
    "type": "Identifier",
    "value": "walker",
    "start": 6199,
    "end": 6205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6205,
    "end": 6206
  },
  {
    "type": "Identifier",
    "value": "walk",
    "start": 6206,
    "end": 6210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6210,
    "end": 6211
  },
  {
    "type": "Identifier",
    "value": "script",
    "start": 6211,
    "end": 6217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6217,
    "end": 6218
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6219,
    "end": 6223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6224,
    "end": 6225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6230,
    "end": 6231
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6237,
    "end": 6245
  },
  {
    "type": "Identifier",
    "value": "AstWalkerCallback",
    "start": 6246,
    "end": 6263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6263,
    "end": 6264
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 6264,
    "end": 6267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6267,
    "end": 6268
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6269,
    "end": 6276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6276,
    "end": 6277
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 6278,
    "end": 6281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6281,
    "end": 6282
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 6283,
    "end": 6286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6286,
    "end": 6287
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6288,
    "end": 6296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6296,
    "end": 6297
  },
  {
    "type": "Identifier",
    "value": "AstWalkerDetailCallback",
    "start": 6298,
    "end": 6321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6321,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6322,
    "end": 6323
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6324,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6332,
    "end": 6333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6427,
    "end": 6430
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 6431,
    "end": 6439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6440,
    "end": 6441
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 6442,
    "end": 6445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6445,
    "end": 6446
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 6446,
    "end": 6454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6464,
    "end": 6467
  },
  {
    "type": "Identifier",
    "value": "callbackString",
    "start": 6468,
    "end": 6482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6483,
    "end": 6484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6485,
    "end": 6486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6486,
    "end": 6487
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6487,
    "end": 6490
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Identifier",
    "value": "NodeType",
    "start": 6491,
    "end": 6499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6499,
    "end": 6500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6500,
    "end": 6501
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 6501,
    "end": 6505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6505,
    "end": 6506
  },
  {
    "type": "Identifier",
    "value": "nodeType",
    "start": 6506,
    "end": 6514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6514,
    "end": 6515
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6516,
    "end": 6517
  },
  {
    "type": "String",
    "value": "\"Callback\"",
    "start": 6518,
    "end": 6528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6528,
    "end": 6529
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6538,
    "end": 6540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6541,
    "end": 6542
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6542,
    "end": 6550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6550,
    "end": 6551
  },
  {
    "type": "Identifier",
    "value": "callbackString",
    "start": 6551,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6566,
    "end": 6567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6568,
    "end": 6569
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6582,
    "end": 6588
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6589,
    "end": 6597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6597,
    "end": 6598
  },
  {
    "type": "Identifier",
    "value": "callbackString",
    "start": 6598,
    "end": 6612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6612,
    "end": 6613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6613,
    "end": 6614
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 6614,
    "end": 6617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 6619,
    "end": 6622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6623,
    "end": 6624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6633,
    "end": 6634
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6644,
    "end": 6646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6647,
    "end": 6648
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6648,
    "end": 6656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6656,
    "end": 6657
  },
  {
    "type": "Identifier",
    "value": "DefaultCallback",
    "start": 6657,
    "end": 6672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6674,
    "end": 6675
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6688,
    "end": 6694
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 6695,
    "end": 6703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6703,
    "end": 6704
  },
  {
    "type": "Identifier",
    "value": "DefaultCallback",
    "start": 6704,
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
    "value": "pre",
    "start": 6720,
    "end": 6723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 6725,
    "end": 6728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6728,
    "end": 6729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6729,
    "end": 6730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6739,
    "end": 6740
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6750,
    "end": 6756
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6757,
    "end": 6761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6761,
    "end": 6762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6767,
    "end": 6768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6769,
    "end": 6770
  }
]
```
