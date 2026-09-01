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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 217
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 223
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
              },
              "start": 223,
              "end": 231
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
            "start": 220,
            "end": 232
          }
        ],
        "start": 218,
        "end": 234
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 234
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 248
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 261
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 267
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 269,
                "end": 275
              },
              "start": 267,
              "end": 275
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
            "start": 264,
            "end": 276
          }
        ],
        "start": 262,
        "end": 278
      },
      "abstract": false,
      "declare": false,
      "start": 235,
      "end": 278
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 293
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 309
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 315
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 317,
                "end": 323
              },
              "start": 315,
              "end": 323
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
            "start": 312,
            "end": 324
          }
        ],
        "start": 310,
        "end": 326
      },
      "abstract": false,
      "declare": false,
      "start": 279,
      "end": 326
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 345
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 358
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
              "name": "bing",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 367,
                "end": 373
              },
              "start": 365,
              "end": 373
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
            "start": 361,
            "end": 374
          }
        ],
        "start": 359,
        "end": 376
      },
      "abstract": false,
      "declare": false,
      "start": 327,
      "end": 376
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 389
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 413
            },
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
                        "start": 419,
                        "end": 425
                      },
                      "start": 417,
                      "end": 425
                    },
                    "start": 416,
                    "end": 425
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 430,
                      "end": 436
                    },
                    "start": 430,
                    "end": 438
                  },
                  "start": 427,
                  "end": 438
                },
                "start": 415,
                "end": 438
              },
              "start": 413,
              "end": 438
            },
            "accessibility": null,
            "static": false,
            "start": 412,
            "end": 439
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 446
            },
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
                        "start": 452,
                        "end": 458
                      },
                      "start": 450,
                      "end": 458
                    },
                    "start": 449,
                    "end": 458
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 463,
                      "end": 469
                    },
                    "start": 463,
                    "end": 471
                  },
                  "start": 460,
                  "end": 471
                },
                "start": 448,
                "end": 471
              },
              "start": 446,
              "end": 471
            },
            "accessibility": null,
            "static": false,
            "start": 444,
            "end": 472
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 479
            },
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
                        "start": 485,
                        "end": 491
                      },
                      "start": 483,
                      "end": 491
                    },
                    "start": 482,
                    "end": 491
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 496,
                    "end": 500
                  },
                  "start": 493,
                  "end": 500
                },
                "start": 481,
                "end": 500
              },
              "start": 479,
              "end": 500
            },
            "accessibility": null,
            "static": false,
            "start": 477,
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
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 508
            },
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
                        "type": "TSStringKeyword",
                        "start": 514,
                        "end": 520
                      },
                      "start": 512,
                      "end": 520
                    },
                    "start": 511,
                    "end": 520
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 525,
                        "end": 531
                      },
                      "start": 523,
                      "end": 531
                    },
                    "start": 522,
                    "end": 531
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 536,
                    "end": 542
                  },
                  "start": 533,
                  "end": 542
                },
                "start": 510,
                "end": 542
              },
              "start": 508,
              "end": 542
            },
            "accessibility": null,
            "static": false,
            "start": 506,
            "end": 543
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 562,
                                "end": 568
                              },
                              "start": 560,
                              "end": 568
                            },
                            "start": 557,
                            "end": 568
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 573,
                            "end": 579
                          },
                          "start": 570,
                          "end": 579
                        },
                        "start": 556,
                        "end": 579
                      },
                      "start": 554,
                      "end": 579
                    },
                    "start": 553,
                    "end": 579
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 584,
                    "end": 590
                  },
                  "start": 581,
                  "end": 590
                },
                "start": 552,
                "end": 590
              },
              "start": 550,
              "end": 590
            },
            "accessibility": null,
            "static": false,
            "start": 548,
            "end": 591
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 598
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 610,
                                  "end": 614
                                },
                                "typeArguments": null,
                                "start": 610,
                                "end": 614
                              },
                              "start": 608,
                              "end": 614
                            },
                            "start": 605,
                            "end": 614
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 619,
                              "end": 626
                            },
                            "typeArguments": null,
                            "start": 619,
                            "end": 626
                          },
                          "start": 616,
                          "end": 626
                        },
                        "start": 604,
                        "end": 626
                      },
                      "start": 602,
                      "end": 626
                    },
                    "start": 601,
                    "end": 626
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 635
                    },
                    "typeArguments": null,
                    "start": 631,
                    "end": 635
                  },
                  "start": 628,
                  "end": 635
                },
                "start": 600,
                "end": 635
              },
              "start": 598,
              "end": 635
            },
            "accessibility": null,
            "static": false,
            "start": 596,
            "end": 636
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 643
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 655,
                                  "end": 659
                                },
                                "typeArguments": null,
                                "start": 655,
                                "end": 659
                              },
                              "start": 653,
                              "end": 659
                            },
                            "start": 650,
                            "end": 659
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 671
                            },
                            "typeArguments": null,
                            "start": 664,
                            "end": 671
                          },
                          "start": 661,
                          "end": 671
                        },
                        "start": 649,
                        "end": 671
                      },
                      "start": 647,
                      "end": 671
                    },
                    "start": 646,
                    "end": 671
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 680,
                              "end": 684
                            },
                            "typeArguments": null,
                            "start": 680,
                            "end": 684
                          },
                          "start": 678,
                          "end": 684
                        },
                        "start": 677,
                        "end": 684
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 696
                        },
                        "typeArguments": null,
                        "start": 689,
                        "end": 696
                      },
                      "start": 686,
                      "end": 696
                    },
                    "start": 676,
                    "end": 696
                  },
                  "start": 673,
                  "end": 696
                },
                "start": 645,
                "end": 696
              },
              "start": 643,
              "end": 696
            },
            "accessibility": null,
            "static": false,
            "start": 641,
            "end": 697
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 704
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 716,
                                  "end": 720
                                },
                                "typeArguments": null,
                                "start": 716,
                                "end": 720
                              },
                              "start": 714,
                              "end": 720
                            },
                            "start": 711,
                            "end": 720
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 732
                            },
                            "typeArguments": null,
                            "start": 725,
                            "end": 732
                          },
                          "start": 722,
                          "end": 732
                        },
                        "start": 710,
                        "end": 732
                      },
                      "start": 708,
                      "end": 732
                    },
                    "start": 707,
                    "end": 732
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 744,
                                  "end": 748
                                },
                                "typeArguments": null,
                                "start": 744,
                                "end": 748
                              },
                              "start": 742,
                              "end": 748
                            },
                            "start": 738,
                            "end": 748
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 753,
                              "end": 760
                            },
                            "typeArguments": null,
                            "start": 753,
                            "end": 760
                          },
                          "start": 750,
                          "end": 760
                        },
                        "start": 737,
                        "end": 760
                      },
                      "start": 735,
                      "end": 760
                    },
                    "start": 734,
                    "end": 760
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 769,
                              "end": 773
                            },
                            "typeArguments": null,
                            "start": 769,
                            "end": 773
                          },
                          "start": 767,
                          "end": 773
                        },
                        "start": 766,
                        "end": 773
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 778,
                          "end": 785
                        },
                        "typeArguments": null,
                        "start": 778,
                        "end": 785
                      },
                      "start": 775,
                      "end": 785
                    },
                    "start": 765,
                    "end": 785
                  },
                  "start": 762,
                  "end": 785
                },
                "start": 706,
                "end": 785
              },
              "start": 704,
              "end": 785
            },
            "accessibility": null,
            "static": false,
            "start": 702,
            "end": 786
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 793
            },
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 805,
                                  "end": 809
                                },
                                "typeArguments": null,
                                "start": 805,
                                "end": 809
                              },
                              "start": 803,
                              "end": 809
                            },
                            "start": 800,
                            "end": 809
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 814,
                              "end": 821
                            },
                            "typeArguments": null,
                            "start": 814,
                            "end": 821
                          },
                          "start": 811,
                          "end": 821
                        },
                        "start": 799,
                        "end": 821
                      },
                      "start": 797,
                      "end": 821
                    },
                    "start": 796,
                    "end": 821
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 833,
                                  "end": 837
                                },
                                "typeArguments": null,
                                "start": 833,
                                "end": 837
                              },
                              "start": 831,
                              "end": 837
                            },
                            "start": 827,
                            "end": 837
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 842,
                              "end": 849
                            },
                            "typeArguments": null,
                            "start": 842,
                            "end": 849
                          },
                          "start": 839,
                          "end": 849
                        },
                        "start": 826,
                        "end": 849
                      },
                      "start": 824,
                      "end": 849
                    },
                    "start": 823,
                    "end": 849
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 858,
                              "end": 862
                            },
                            "typeArguments": null,
                            "start": 858,
                            "end": 862
                          },
                          "start": 856,
                          "end": 862
                        },
                        "start": 855,
                        "end": 862
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 867,
                          "end": 874
                        },
                        "typeArguments": null,
                        "start": 867,
                        "end": 874
                      },
                      "start": 864,
                      "end": 874
                    },
                    "start": 854,
                    "end": 874
                  },
                  "start": 851,
                  "end": 874
                },
                "start": 795,
                "end": 874
              },
              "start": 793,
              "end": 874
            },
            "accessibility": null,
            "static": false,
            "start": 791,
            "end": 875
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 880,
              "end": 883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 889,
                      "end": 890
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 892,
                            "end": 899
                          },
                          "typeArguments": null,
                          "start": 892,
                          "end": 899
                        },
                        "start": 892,
                        "end": 901
                      },
                      "start": 890,
                      "end": 901
                    },
                    "value": null,
                    "start": 886,
                    "end": 901
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 913
                    },
                    "typeArguments": null,
                    "start": 906,
                    "end": 913
                  },
                  "start": 903,
                  "end": 913
                },
                "start": 885,
                "end": 913
              },
              "start": 883,
              "end": 913
            },
            "accessibility": null,
            "static": false,
            "start": 880,
            "end": 914
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 922
            },
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 930,
                              "end": 933
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 935,
                                "end": 941
                              },
                              "start": 933,
                              "end": 941
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 930,
                            "end": 941
                          }
                        ],
                        "start": 928,
                        "end": 943
                      },
                      "start": 926,
                      "end": 943
                    },
                    "start": 925,
                    "end": 943
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 953
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 955,
                                "end": 961
                              },
                              "start": 953,
                              "end": 961
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 950,
                            "end": 962
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 963,
                              "end": 966
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 968,
                                "end": 974
                              },
                              "start": 966,
                              "end": 974
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 963,
                            "end": 974
                          }
                        ],
                        "start": 948,
                        "end": 976
                      },
                      "start": 946,
                      "end": 976
                    },
                    "start": 945,
                    "end": 976
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 985
                    },
                    "typeArguments": null,
                    "start": 981,
                    "end": 985
                  },
                  "start": 978,
                  "end": 985
                },
                "start": 924,
                "end": 985
              },
              "start": 922,
              "end": 985
            },
            "accessibility": null,
            "static": false,
            "start": 919,
            "end": 986
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 994
            },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1000,
                          "end": 1005
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
                                "start": 1006,
                                "end": 1010
                              },
                              "typeArguments": null,
                              "start": 1006,
                              "end": 1010
                            }
                          ],
                          "start": 1005,
                          "end": 1011
                        },
                        "start": 1000,
                        "end": 1011
                      },
                      "start": 998,
                      "end": 1011
                    },
                    "start": 997,
                    "end": 1011
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1016,
                          "end": 1021
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1022,
                                "end": 1030
                              },
                              "typeArguments": null,
                              "start": 1022,
                              "end": 1030
                            }
                          ],
                          "start": 1021,
                          "end": 1031
                        },
                        "start": 1016,
                        "end": 1031
                      },
                      "start": 1014,
                      "end": 1031
                    },
                    "start": 1013,
                    "end": 1031
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1041
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
                            "start": 1042,
                            "end": 1049
                          },
                          "typeArguments": null,
                          "start": 1042,
                          "end": 1049
                        }
                      ],
                      "start": 1041,
                      "end": 1050
                    },
                    "start": 1036,
                    "end": 1050
                  },
                  "start": 1033,
                  "end": 1050
                },
                "start": 996,
                "end": 1050
              },
              "start": 994,
              "end": 1050
            },
            "accessibility": null,
            "static": false,
            "start": 991,
            "end": 1051
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1059
            },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1065,
                          "end": 1070
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
                                "start": 1071,
                                "end": 1075
                              },
                              "typeArguments": null,
                              "start": 1071,
                              "end": 1075
                            }
                          ],
                          "start": 1070,
                          "end": 1076
                        },
                        "start": 1065,
                        "end": 1076
                      },
                      "start": 1063,
                      "end": 1076
                    },
                    "start": 1062,
                    "end": 1076
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1086
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
                                "start": 1087,
                                "end": 1094
                              },
                              "typeArguments": null,
                              "start": 1087,
                              "end": 1094
                            }
                          ],
                          "start": 1086,
                          "end": 1095
                        },
                        "start": 1081,
                        "end": 1095
                      },
                      "start": 1079,
                      "end": 1095
                    },
                    "start": 1078,
                    "end": 1095
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1105
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
                            "start": 1106,
                            "end": 1113
                          },
                          "typeArguments": null,
                          "start": 1106,
                          "end": 1113
                        }
                      ],
                      "start": 1105,
                      "end": 1114
                    },
                    "start": 1100,
                    "end": 1114
                  },
                  "start": 1097,
                  "end": 1114
                },
                "start": 1061,
                "end": 1114
              },
              "start": 1059,
              "end": 1114
            },
            "accessibility": null,
            "static": false,
            "start": 1056,
            "end": 1115
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1123
            },
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1131,
                              "end": 1132
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1134,
                                "end": 1140
                              },
                              "start": 1132,
                              "end": 1140
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1131,
                            "end": 1141
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1142,
                              "end": 1143
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1145,
                                "end": 1151
                              },
                              "start": 1143,
                              "end": 1151
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1142,
                            "end": 1151
                          }
                        ],
                        "start": 1129,
                        "end": 1153
                      },
                      "start": 1127,
                      "end": 1153
                    },
                    "start": 1126,
                    "end": 1153
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1158,
                      "end": 1164
                    },
                    "typeArguments": null,
                    "start": 1158,
                    "end": 1164
                  },
                  "start": 1155,
                  "end": 1164
                },
                "start": 1125,
                "end": 1164
              },
              "start": 1123,
              "end": 1164
            },
            "accessibility": null,
            "static": false,
            "start": 1120,
            "end": 1165
          }
        ],
        "start": 390,
        "end": 1167
      },
      "declare": false,
      "start": 378,
      "end": 1167
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1179,
        "end": 1180
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
            "start": 1189,
            "end": 1190
          },
          "typeArguments": null,
          "start": 1189,
          "end": 1190
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1201,
                        "end": 1202
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1201,
                      "end": 1202
                    }
                  ],
                  "start": 1200,
                  "end": 1203
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
                          "start": 1207,
                          "end": 1208
                        },
                        "typeArguments": null,
                        "start": 1207,
                        "end": 1208
                      },
                      "start": 1205,
                      "end": 1208
                    },
                    "start": 1204,
                    "end": 1208
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1213,
                        "end": 1214
                      },
                      "typeArguments": null,
                      "start": 1213,
                      "end": 1214
                    },
                    "start": 1213,
                    "end": 1216
                  },
                  "start": 1210,
                  "end": 1216
                },
                "start": 1200,
                "end": 1216
              },
              "start": 1198,
              "end": 1216
            },
            "accessibility": null,
            "static": false,
            "start": 1197,
            "end": 1217
          }
        ],
        "start": 1191,
        "end": 1219
      },
      "declare": false,
      "start": 1169,
      "end": 1219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1239
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1248,
            "end": 1249
          },
          "typeArguments": null,
          "start": 1248,
          "end": 1249
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1268
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1271,
                        "end": 1272
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1271,
                      "end": 1272
                    }
                  ],
                  "start": 1270,
                  "end": 1273
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
                          "start": 1277,
                          "end": 1278
                        },
                        "typeArguments": null,
                        "start": 1277,
                        "end": 1278
                      },
                      "start": 1275,
                      "end": 1278
                    },
                    "start": 1274,
                    "end": 1278
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1283,
                        "end": 1284
                      },
                      "typeArguments": null,
                      "start": 1283,
                      "end": 1284
                    },
                    "start": 1283,
                    "end": 1286
                  },
                  "start": 1280,
                  "end": 1286
                },
                "start": 1270,
                "end": 1286
              },
              "start": 1268,
              "end": 1286
            },
            "accessibility": null,
            "static": false,
            "start": 1267,
            "end": 1287
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1354,
                        "end": 1355
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1354,
                      "end": 1355
                    }
                  ],
                  "start": 1353,
                  "end": 1356
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
                          "start": 1360,
                          "end": 1361
                        },
                        "typeArguments": null,
                        "start": 1360,
                        "end": 1361
                      },
                      "start": 1358,
                      "end": 1361
                    },
                    "start": 1357,
                    "end": 1361
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1366,
                      "end": 1372
                    },
                    "start": 1366,
                    "end": 1374
                  },
                  "start": 1363,
                  "end": 1374
                },
                "start": 1353,
                "end": 1374
              },
              "start": 1351,
              "end": 1374
            },
            "accessibility": null,
            "static": false,
            "start": 1349,
            "end": 1375
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1391,
                        "end": 1392
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1391,
                      "end": 1392
                    }
                  ],
                  "start": 1390,
                  "end": 1393
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
                          "start": 1397,
                          "end": 1398
                        },
                        "typeArguments": null,
                        "start": 1397,
                        "end": 1398
                      },
                      "start": 1395,
                      "end": 1398
                    },
                    "start": 1394,
                    "end": 1398
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
                      "start": 1403,
                      "end": 1404
                    },
                    "typeArguments": null,
                    "start": 1403,
                    "end": 1404
                  },
                  "start": 1400,
                  "end": 1404
                },
                "start": 1390,
                "end": 1404
              },
              "start": 1388,
              "end": 1404
            },
            "accessibility": null,
            "static": false,
            "start": 1386,
            "end": 1405
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1440,
              "end": 1442
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1445,
                        "end": 1446
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1445,
                      "end": 1446
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1448,
                        "end": 1449
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1448,
                      "end": 1449
                    }
                  ],
                  "start": 1444,
                  "end": 1450
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
                          "start": 1454,
                          "end": 1455
                        },
                        "typeArguments": null,
                        "start": 1454,
                        "end": 1455
                      },
                      "start": 1452,
                      "end": 1455
                    },
                    "start": 1451,
                    "end": 1455
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
                          "start": 1460,
                          "end": 1461
                        },
                        "typeArguments": null,
                        "start": 1460,
                        "end": 1461
                      },
                      "start": 1458,
                      "end": 1461
                    },
                    "start": 1457,
                    "end": 1461
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
                      "start": 1466,
                      "end": 1467
                    },
                    "typeArguments": null,
                    "start": 1466,
                    "end": 1467
                  },
                  "start": 1463,
                  "end": 1467
                },
                "start": 1444,
                "end": 1467
              },
              "start": 1442,
              "end": 1467
            },
            "accessibility": null,
            "static": false,
            "start": 1440,
            "end": 1468
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1543,
              "end": 1545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1548,
                        "end": 1549
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1548,
                      "end": 1549
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1551,
                        "end": 1552
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1551,
                      "end": 1552
                    }
                  ],
                  "start": 1547,
                  "end": 1553
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1563,
                                  "end": 1564
                                },
                                "typeArguments": null,
                                "start": 1563,
                                "end": 1564
                              },
                              "start": 1561,
                              "end": 1564
                            },
                            "start": 1558,
                            "end": 1564
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
                              "start": 1569,
                              "end": 1570
                            },
                            "typeArguments": null,
                            "start": 1569,
                            "end": 1570
                          },
                          "start": 1566,
                          "end": 1570
                        },
                        "start": 1557,
                        "end": 1570
                      },
                      "start": 1555,
                      "end": 1570
                    },
                    "start": 1554,
                    "end": 1570
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
                      "start": 1575,
                      "end": 1576
                    },
                    "typeArguments": null,
                    "start": 1575,
                    "end": 1576
                  },
                  "start": 1572,
                  "end": 1576
                },
                "start": 1547,
                "end": 1576
              },
              "start": 1545,
              "end": 1576
            },
            "accessibility": null,
            "static": false,
            "start": 1543,
            "end": 1577
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1644,
              "end": 1646
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1649,
                        "end": 1650
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1659,
                          "end": 1663
                        },
                        "typeArguments": null,
                        "start": 1659,
                        "end": 1663
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1649,
                      "end": 1663
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1666
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1675,
                          "end": 1682
                        },
                        "typeArguments": null,
                        "start": 1675,
                        "end": 1682
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1665,
                      "end": 1682
                    }
                  ],
                  "start": 1648,
                  "end": 1683
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1693,
                                  "end": 1694
                                },
                                "typeArguments": null,
                                "start": 1693,
                                "end": 1694
                              },
                              "start": 1691,
                              "end": 1694
                            },
                            "start": 1688,
                            "end": 1694
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
                              "start": 1699,
                              "end": 1700
                            },
                            "typeArguments": null,
                            "start": 1699,
                            "end": 1700
                          },
                          "start": 1696,
                          "end": 1700
                        },
                        "start": 1687,
                        "end": 1700
                      },
                      "start": 1685,
                      "end": 1700
                    },
                    "start": 1684,
                    "end": 1700
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
                      "start": 1705,
                      "end": 1706
                    },
                    "typeArguments": null,
                    "start": 1705,
                    "end": 1706
                  },
                  "start": 1702,
                  "end": 1706
                },
                "start": 1648,
                "end": 1706
              },
              "start": 1646,
              "end": 1706
            },
            "accessibility": null,
            "static": false,
            "start": 1644,
            "end": 1707
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1763
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1766,
                        "end": 1767
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1776,
                          "end": 1780
                        },
                        "typeArguments": null,
                        "start": 1776,
                        "end": 1780
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1766,
                      "end": 1780
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1782,
                        "end": 1783
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1792,
                          "end": 1799
                        },
                        "typeArguments": null,
                        "start": 1792,
                        "end": 1799
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1782,
                      "end": 1799
                    }
                  ],
                  "start": 1765,
                  "end": 1800
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1810,
                                  "end": 1811
                                },
                                "typeArguments": null,
                                "start": 1810,
                                "end": 1811
                              },
                              "start": 1808,
                              "end": 1811
                            },
                            "start": 1805,
                            "end": 1811
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
                              "start": 1816,
                              "end": 1817
                            },
                            "typeArguments": null,
                            "start": 1816,
                            "end": 1817
                          },
                          "start": 1813,
                          "end": 1817
                        },
                        "start": 1804,
                        "end": 1817
                      },
                      "start": 1802,
                      "end": 1817
                    },
                    "start": 1801,
                    "end": 1817
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 1826,
                              "end": 1827
                            },
                            "typeArguments": null,
                            "start": 1826,
                            "end": 1827
                          },
                          "start": 1824,
                          "end": 1827
                        },
                        "start": 1823,
                        "end": 1827
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
                          "start": 1832,
                          "end": 1833
                        },
                        "typeArguments": null,
                        "start": 1832,
                        "end": 1833
                      },
                      "start": 1829,
                      "end": 1833
                    },
                    "start": 1822,
                    "end": 1833
                  },
                  "start": 1819,
                  "end": 1833
                },
                "start": 1765,
                "end": 1833
              },
              "start": 1763,
              "end": 1833
            },
            "accessibility": null,
            "static": false,
            "start": 1761,
            "end": 1834
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1845,
              "end": 1847
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1850,
                        "end": 1851
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1860,
                          "end": 1864
                        },
                        "typeArguments": null,
                        "start": 1860,
                        "end": 1864
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1850,
                      "end": 1864
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1866,
                        "end": 1867
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1876,
                          "end": 1883
                        },
                        "typeArguments": null,
                        "start": 1876,
                        "end": 1883
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1866,
                      "end": 1883
                    }
                  ],
                  "start": 1849,
                  "end": 1884
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1894,
                                  "end": 1895
                                },
                                "typeArguments": null,
                                "start": 1894,
                                "end": 1895
                              },
                              "start": 1892,
                              "end": 1895
                            },
                            "start": 1889,
                            "end": 1895
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
                              "start": 1900,
                              "end": 1901
                            },
                            "typeArguments": null,
                            "start": 1900,
                            "end": 1901
                          },
                          "start": 1897,
                          "end": 1901
                        },
                        "start": 1888,
                        "end": 1901
                      },
                      "start": 1886,
                      "end": 1901
                    },
                    "start": 1885,
                    "end": 1901
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
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
                                  "start": 1913,
                                  "end": 1914
                                },
                                "typeArguments": null,
                                "start": 1913,
                                "end": 1914
                              },
                              "start": 1911,
                              "end": 1914
                            },
                            "start": 1907,
                            "end": 1914
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
                              "start": 1919,
                              "end": 1920
                            },
                            "typeArguments": null,
                            "start": 1919,
                            "end": 1920
                          },
                          "start": 1916,
                          "end": 1920
                        },
                        "start": 1906,
                        "end": 1920
                      },
                      "start": 1904,
                      "end": 1920
                    },
                    "start": 1903,
                    "end": 1920
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 1929,
                              "end": 1930
                            },
                            "typeArguments": null,
                            "start": 1929,
                            "end": 1930
                          },
                          "start": 1927,
                          "end": 1930
                        },
                        "start": 1926,
                        "end": 1930
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
                          "start": 1935,
                          "end": 1936
                        },
                        "typeArguments": null,
                        "start": 1935,
                        "end": 1936
                      },
                      "start": 1932,
                      "end": 1936
                    },
                    "start": 1925,
                    "end": 1936
                  },
                  "start": 1922,
                  "end": 1936
                },
                "start": 1849,
                "end": 1936
              },
              "start": 1847,
              "end": 1936
            },
            "accessibility": null,
            "static": false,
            "start": 1845,
            "end": 1937
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1950
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1953,
                        "end": 1954
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1963,
                          "end": 1967
                        },
                        "typeArguments": null,
                        "start": 1963,
                        "end": 1967
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1953,
                      "end": 1967
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1969,
                        "end": 1970
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1979,
                          "end": 1986
                        },
                        "typeArguments": null,
                        "start": 1979,
                        "end": 1986
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1969,
                      "end": 1986
                    }
                  ],
                  "start": 1952,
                  "end": 1987
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1997,
                                  "end": 1998
                                },
                                "typeArguments": null,
                                "start": 1997,
                                "end": 1998
                              },
                              "start": 1995,
                              "end": 1998
                            },
                            "start": 1992,
                            "end": 1998
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
                              "start": 2003,
                              "end": 2004
                            },
                            "typeArguments": null,
                            "start": 2003,
                            "end": 2004
                          },
                          "start": 2000,
                          "end": 2004
                        },
                        "start": 1991,
                        "end": 2004
                      },
                      "start": 1989,
                      "end": 2004
                    },
                    "start": 1988,
                    "end": 2004
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2018,
                                      "end": 2021
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2023,
                                        "end": 2029
                                      },
                                      "start": 2021,
                                      "end": 2029
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2018,
                                    "end": 2030
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2031,
                                      "end": 2035
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2037,
                                        "end": 2043
                                      },
                                      "start": 2035,
                                      "end": 2043
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2031,
                                    "end": 2043
                                  }
                                ],
                                "start": 2016,
                                "end": 2045
                              },
                              "start": 2014,
                              "end": 2045
                            },
                            "start": 2010,
                            "end": 2045
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
                              "start": 2050,
                              "end": 2051
                            },
                            "typeArguments": null,
                            "start": 2050,
                            "end": 2051
                          },
                          "start": 2047,
                          "end": 2051
                        },
                        "start": 2009,
                        "end": 2051
                      },
                      "start": 2007,
                      "end": 2051
                    },
                    "start": 2006,
                    "end": 2051
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2060,
                              "end": 2061
                            },
                            "typeArguments": null,
                            "start": 2060,
                            "end": 2061
                          },
                          "start": 2058,
                          "end": 2061
                        },
                        "start": 2057,
                        "end": 2061
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
                          "start": 2066,
                          "end": 2067
                        },
                        "typeArguments": null,
                        "start": 2066,
                        "end": 2067
                      },
                      "start": 2063,
                      "end": 2067
                    },
                    "start": 2056,
                    "end": 2067
                  },
                  "start": 2053,
                  "end": 2067
                },
                "start": 1952,
                "end": 2067
              },
              "start": 1950,
              "end": 2067
            },
            "accessibility": null,
            "static": false,
            "start": 1948,
            "end": 2068
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2122,
              "end": 2125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2128,
                        "end": 2129
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2138,
                          "end": 2145
                        },
                        "typeArguments": null,
                        "start": 2138,
                        "end": 2145
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2128,
                      "end": 2145
                    }
                  ],
                  "start": 2127,
                  "end": 2146
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2150,
                      "end": 2151
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2153,
                            "end": 2154
                          },
                          "typeArguments": null,
                          "start": 2153,
                          "end": 2154
                        },
                        "start": 2153,
                        "end": 2156
                      },
                      "start": 2151,
                      "end": 2156
                    },
                    "value": null,
                    "start": 2147,
                    "end": 2156
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
                      "start": 2161,
                      "end": 2162
                    },
                    "typeArguments": null,
                    "start": 2161,
                    "end": 2162
                  },
                  "start": 2158,
                  "end": 2162
                },
                "start": 2127,
                "end": 2162
              },
              "start": 2125,
              "end": 2162
            },
            "accessibility": null,
            "static": false,
            "start": 2122,
            "end": 2163
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2174,
              "end": 2177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2180,
                        "end": 2181
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2190,
                          "end": 2194
                        },
                        "typeArguments": null,
                        "start": 2190,
                        "end": 2194
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2180,
                      "end": 2194
                    }
                  ],
                  "start": 2179,
                  "end": 2195
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
                          "start": 2199,
                          "end": 2200
                        },
                        "typeArguments": null,
                        "start": 2199,
                        "end": 2200
                      },
                      "start": 2197,
                      "end": 2200
                    },
                    "start": 2196,
                    "end": 2200
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
                          "start": 2205,
                          "end": 2206
                        },
                        "typeArguments": null,
                        "start": 2205,
                        "end": 2206
                      },
                      "start": 2203,
                      "end": 2206
                    },
                    "start": 2202,
                    "end": 2206
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
                      "start": 2211,
                      "end": 2212
                    },
                    "typeArguments": null,
                    "start": 2211,
                    "end": 2212
                  },
                  "start": 2208,
                  "end": 2212
                },
                "start": 2179,
                "end": 2212
              },
              "start": 2177,
              "end": 2212
            },
            "accessibility": null,
            "static": false,
            "start": 2174,
            "end": 2213
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2224,
              "end": 2227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2230,
                        "end": 2231
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2240,
                          "end": 2245
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
                                "start": 2246,
                                "end": 2250
                              },
                              "typeArguments": null,
                              "start": 2246,
                              "end": 2250
                            }
                          ],
                          "start": 2245,
                          "end": 2251
                        },
                        "start": 2240,
                        "end": 2251
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2230,
                      "end": 2251
                    }
                  ],
                  "start": 2229,
                  "end": 2252
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2256,
                          "end": 2261
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
                                "start": 2262,
                                "end": 2266
                              },
                              "typeArguments": null,
                              "start": 2262,
                              "end": 2266
                            }
                          ],
                          "start": 2261,
                          "end": 2267
                        },
                        "start": 2256,
                        "end": 2267
                      },
                      "start": 2254,
                      "end": 2267
                    },
                    "start": 2253,
                    "end": 2267
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
                          "start": 2272,
                          "end": 2273
                        },
                        "typeArguments": null,
                        "start": 2272,
                        "end": 2273
                      },
                      "start": 2270,
                      "end": 2273
                    },
                    "start": 2269,
                    "end": 2273
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2278,
                      "end": 2283
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
                            "start": 2284,
                            "end": 2291
                          },
                          "typeArguments": null,
                          "start": 2284,
                          "end": 2291
                        }
                      ],
                      "start": 2283,
                      "end": 2292
                    },
                    "start": 2278,
                    "end": 2292
                  },
                  "start": 2275,
                  "end": 2292
                },
                "start": 2229,
                "end": 2292
              },
              "start": 2227,
              "end": 2292
            },
            "accessibility": null,
            "static": false,
            "start": 2224,
            "end": 2293
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2334,
              "end": 2337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2340,
                        "end": 2341
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2350,
                          "end": 2355
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
                                "start": 2356,
                                "end": 2363
                              },
                              "typeArguments": null,
                              "start": 2356,
                              "end": 2363
                            }
                          ],
                          "start": 2355,
                          "end": 2364
                        },
                        "start": 2350,
                        "end": 2364
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2340,
                      "end": 2364
                    }
                  ],
                  "start": 2339,
                  "end": 2365
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2369,
                          "end": 2374
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
                                "start": 2375,
                                "end": 2379
                              },
                              "typeArguments": null,
                              "start": 2375,
                              "end": 2379
                            }
                          ],
                          "start": 2374,
                          "end": 2380
                        },
                        "start": 2369,
                        "end": 2380
                      },
                      "start": 2367,
                      "end": 2380
                    },
                    "start": 2366,
                    "end": 2380
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
                          "start": 2385,
                          "end": 2386
                        },
                        "typeArguments": null,
                        "start": 2385,
                        "end": 2386
                      },
                      "start": 2383,
                      "end": 2386
                    },
                    "start": 2382,
                    "end": 2386
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
                      "start": 2391,
                      "end": 2392
                    },
                    "typeArguments": null,
                    "start": 2391,
                    "end": 2392
                  },
                  "start": 2388,
                  "end": 2392
                },
                "start": 2339,
                "end": 2392
              },
              "start": 2337,
              "end": 2392
            },
            "accessibility": null,
            "static": false,
            "start": 2334,
            "end": 2393
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2491,
              "end": 2494
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2497,
                        "end": 2498
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2497,
                      "end": 2498
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2500,
                        "end": 2501
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2500,
                      "end": 2501
                    }
                  ],
                  "start": 2496,
                  "end": 2502
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
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2508,
                              "end": 2509
                            },
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
                                  "start": 2511,
                                  "end": 2512
                                },
                                "typeArguments": null,
                                "start": 2511,
                                "end": 2512
                              },
                              "start": 2509,
                              "end": 2512
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2508,
                            "end": 2513
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2514,
                              "end": 2515
                            },
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
                                  "start": 2517,
                                  "end": 2518
                                },
                                "typeArguments": null,
                                "start": 2517,
                                "end": 2518
                              },
                              "start": 2515,
                              "end": 2518
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2514,
                            "end": 2518
                          }
                        ],
                        "start": 2506,
                        "end": 2520
                      },
                      "start": 2504,
                      "end": 2520
                    },
                    "start": 2503,
                    "end": 2520
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
                      "start": 2525,
                      "end": 2526
                    },
                    "typeArguments": null,
                    "start": 2525,
                    "end": 2526
                  },
                  "start": 2522,
                  "end": 2526
                },
                "start": 2496,
                "end": 2526
              },
              "start": 2494,
              "end": 2526
            },
            "accessibility": null,
            "static": false,
            "start": 2491,
            "end": 2527
          }
        ],
        "start": 1250,
        "end": 2535
      },
      "declare": false,
      "start": 1228,
      "end": 2535
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 207,
  "end": 2535
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 241,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 285,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 294,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 327,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 333,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 346,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 378,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
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
    "value": "[",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 493,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 496,
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
    "value": "a4",
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
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 533,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 570,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 616,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 619,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 628,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 631,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 650,
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
    "value": "Base",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 661,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 686,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 689,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 722,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 738,
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
    "value": "Base",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 750,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 753,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 775,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 778,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 805,
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
    "value": "=>",
    "start": 811,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 814,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 833,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 839,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 855,
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
    "value": "Base",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 864,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 880,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 886,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 892,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 903,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 906,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 935,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 963,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 978,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 981,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1000,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1006,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1022,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1081,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1087,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1158,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1169,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1181,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1228,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1280,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1463,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1543,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1558,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1644,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1651,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1659,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1667,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1675,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1761,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1768,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1776,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1784,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1792,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1805,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1813,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1819,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1829,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1845,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1852,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1860,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1868,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1876,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1916,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1922,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1932,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 1948,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1955,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1963,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1971,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1979,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2000,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2018,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2031,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2037,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2047,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2053,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2063,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2122,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2130,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2138,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2158,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "a11",
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
    "type": "Punctuator",
    "value": "<",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2182,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2190,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "a12",
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
    "type": "Punctuator",
    "value": "<",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2232,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2240,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2246,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2256,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2262,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2275,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2278,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2284,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2291,
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
    "value": "a13",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2342,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2356,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2369,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2375,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2388,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2491,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2522,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2534,
    "end": 2535
  }
]
```
