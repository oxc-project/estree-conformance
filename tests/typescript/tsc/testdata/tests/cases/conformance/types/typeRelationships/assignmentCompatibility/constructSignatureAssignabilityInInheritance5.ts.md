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
        "start": 218,
        "end": 222
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
              "start": 225,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
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
            "start": 225,
            "end": 237
          }
        ],
        "start": 223,
        "end": 239
      },
      "abstract": false,
      "declare": false,
      "start": 212,
      "end": 239
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
        "start": 246,
        "end": 253
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 266
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
              "start": 269,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
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
            "start": 269,
            "end": 281
          }
        ],
        "start": 267,
        "end": 283
      },
      "abstract": false,
      "declare": false,
      "start": 240,
      "end": 283
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
        "start": 290,
        "end": 298
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 314
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
              "start": 317,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 320,
              "end": 328
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
            "start": 317,
            "end": 329
          }
        ],
        "start": 315,
        "end": 331
      },
      "abstract": false,
      "declare": false,
      "start": 284,
      "end": 331
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
        "start": 338,
        "end": 350
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 363
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
              "start": 366,
              "end": 370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 372,
                "end": 378
              },
              "start": 370,
              "end": 378
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
            "start": 366,
            "end": 379
          }
        ],
        "start": 364,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 332,
      "end": 381
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
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
              "start": 417,
              "end": 418
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 428,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "start": 425,
                    "end": 434
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 439,
                      "end": 445
                    },
                    "start": 439,
                    "end": 447
                  },
                  "start": 436,
                  "end": 447
                },
                "start": 420,
                "end": 447
              },
              "start": 418,
              "end": 447
            },
            "accessibility": null,
            "static": false,
            "start": 417,
            "end": 448
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
              "start": 453,
              "end": 455
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 465,
                        "end": 471
                      },
                      "start": 463,
                      "end": 471
                    },
                    "start": 462,
                    "end": 471
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 476,
                      "end": 482
                    },
                    "start": 476,
                    "end": 484
                  },
                  "start": 473,
                  "end": 484
                },
                "start": 457,
                "end": 484
              },
              "start": 455,
              "end": 484
            },
            "accessibility": null,
            "static": false,
            "start": 453,
            "end": 485
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
              "start": 490,
              "end": 492
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 502,
                        "end": 508
                      },
                      "start": 500,
                      "end": 508
                    },
                    "start": 499,
                    "end": 508
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 513,
                    "end": 517
                  },
                  "start": 510,
                  "end": 517
                },
                "start": 494,
                "end": 517
              },
              "start": 492,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 518
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
              "start": 523,
              "end": 525
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 535,
                        "end": 541
                      },
                      "start": 533,
                      "end": 541
                    },
                    "start": 532,
                    "end": 541
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
                        "start": 546,
                        "end": 552
                      },
                      "start": 544,
                      "end": 552
                    },
                    "start": 543,
                    "end": 552
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  },
                  "start": 554,
                  "end": 563
                },
                "start": 527,
                "end": 563
              },
              "start": 525,
              "end": 563
            },
            "accessibility": null,
            "static": false,
            "start": 523,
            "end": 564
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
              "start": 569,
              "end": 571
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                                "start": 587,
                                "end": 593
                              },
                              "start": 585,
                              "end": 593
                            },
                            "start": 582,
                            "end": 593
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          },
                          "start": 595,
                          "end": 604
                        },
                        "start": 581,
                        "end": 604
                      },
                      "start": 579,
                      "end": 604
                    },
                    "start": 578,
                    "end": 604
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 609,
                    "end": 615
                  },
                  "start": 606,
                  "end": 615
                },
                "start": 573,
                "end": 615
              },
              "start": 571,
              "end": 615
            },
            "accessibility": null,
            "static": false,
            "start": 569,
            "end": 616
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
              "start": 621,
              "end": 623
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                                  "start": 639,
                                  "end": 643
                                },
                                "typeArguments": null,
                                "start": 639,
                                "end": 643
                              },
                              "start": 637,
                              "end": 643
                            },
                            "start": 634,
                            "end": 643
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
                              "start": 648,
                              "end": 655
                            },
                            "typeArguments": null,
                            "start": 648,
                            "end": 655
                          },
                          "start": 645,
                          "end": 655
                        },
                        "start": 633,
                        "end": 655
                      },
                      "start": 631,
                      "end": 655
                    },
                    "start": 630,
                    "end": 655
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
                      "start": 660,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 660,
                    "end": 664
                  },
                  "start": 657,
                  "end": 664
                },
                "start": 625,
                "end": 664
              },
              "start": 623,
              "end": 664
            },
            "accessibility": null,
            "static": false,
            "start": 621,
            "end": 665
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
              "start": 670,
              "end": 672
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                                  "start": 688,
                                  "end": 692
                                },
                                "typeArguments": null,
                                "start": 688,
                                "end": 692
                              },
                              "start": 686,
                              "end": 692
                            },
                            "start": 683,
                            "end": 692
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
                              "start": 697,
                              "end": 704
                            },
                            "typeArguments": null,
                            "start": 697,
                            "end": 704
                          },
                          "start": 694,
                          "end": 704
                        },
                        "start": 682,
                        "end": 704
                      },
                      "start": 680,
                      "end": 704
                    },
                    "start": 679,
                    "end": 704
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
                              "start": 713,
                              "end": 717
                            },
                            "typeArguments": null,
                            "start": 713,
                            "end": 717
                          },
                          "start": 711,
                          "end": 717
                        },
                        "start": 710,
                        "end": 717
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
                          "start": 722,
                          "end": 729
                        },
                        "typeArguments": null,
                        "start": 722,
                        "end": 729
                      },
                      "start": 719,
                      "end": 729
                    },
                    "start": 709,
                    "end": 729
                  },
                  "start": 706,
                  "end": 729
                },
                "start": 674,
                "end": 729
              },
              "start": 672,
              "end": 729
            },
            "accessibility": null,
            "static": false,
            "start": 670,
            "end": 730
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
              "start": 735,
              "end": 737
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                                  "start": 753,
                                  "end": 757
                                },
                                "typeArguments": null,
                                "start": 753,
                                "end": 757
                              },
                              "start": 751,
                              "end": 757
                            },
                            "start": 748,
                            "end": 757
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
                              "start": 762,
                              "end": 769
                            },
                            "typeArguments": null,
                            "start": 762,
                            "end": 769
                          },
                          "start": 759,
                          "end": 769
                        },
                        "start": 747,
                        "end": 769
                      },
                      "start": 745,
                      "end": 769
                    },
                    "start": 744,
                    "end": 769
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
                                  "start": 781,
                                  "end": 785
                                },
                                "typeArguments": null,
                                "start": 781,
                                "end": 785
                              },
                              "start": 779,
                              "end": 785
                            },
                            "start": 775,
                            "end": 785
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
                              "start": 790,
                              "end": 797
                            },
                            "typeArguments": null,
                            "start": 790,
                            "end": 797
                          },
                          "start": 787,
                          "end": 797
                        },
                        "start": 774,
                        "end": 797
                      },
                      "start": 772,
                      "end": 797
                    },
                    "start": 771,
                    "end": 797
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
                              "start": 806,
                              "end": 810
                            },
                            "typeArguments": null,
                            "start": 806,
                            "end": 810
                          },
                          "start": 804,
                          "end": 810
                        },
                        "start": 803,
                        "end": 810
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
                          "start": 815,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 815,
                        "end": 822
                      },
                      "start": 812,
                      "end": 822
                    },
                    "start": 802,
                    "end": 822
                  },
                  "start": 799,
                  "end": 822
                },
                "start": 739,
                "end": 822
              },
              "start": 737,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 735,
            "end": 823
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
              "start": 828,
              "end": 830
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                                  "start": 846,
                                  "end": 850
                                },
                                "typeArguments": null,
                                "start": 846,
                                "end": 850
                              },
                              "start": 844,
                              "end": 850
                            },
                            "start": 841,
                            "end": 850
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
                              "start": 855,
                              "end": 862
                            },
                            "typeArguments": null,
                            "start": 855,
                            "end": 862
                          },
                          "start": 852,
                          "end": 862
                        },
                        "start": 840,
                        "end": 862
                      },
                      "start": 838,
                      "end": 862
                    },
                    "start": 837,
                    "end": 862
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
                                  "start": 874,
                                  "end": 878
                                },
                                "typeArguments": null,
                                "start": 874,
                                "end": 878
                              },
                              "start": 872,
                              "end": 878
                            },
                            "start": 868,
                            "end": 878
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
                              "start": 883,
                              "end": 890
                            },
                            "typeArguments": null,
                            "start": 883,
                            "end": 890
                          },
                          "start": 880,
                          "end": 890
                        },
                        "start": 867,
                        "end": 890
                      },
                      "start": 865,
                      "end": 890
                    },
                    "start": 864,
                    "end": 890
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
                              "start": 899,
                              "end": 903
                            },
                            "typeArguments": null,
                            "start": 899,
                            "end": 903
                          },
                          "start": 897,
                          "end": 903
                        },
                        "start": 896,
                        "end": 903
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
                          "start": 908,
                          "end": 915
                        },
                        "typeArguments": null,
                        "start": 908,
                        "end": 915
                      },
                      "start": 905,
                      "end": 915
                    },
                    "start": 895,
                    "end": 915
                  },
                  "start": 892,
                  "end": 915
                },
                "start": 832,
                "end": 915
              },
              "start": 830,
              "end": 915
            },
            "accessibility": null,
            "static": false,
            "start": 828,
            "end": 916
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
              "start": 921,
              "end": 924
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                      "start": 934,
                      "end": 935
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
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        },
                        "start": 937,
                        "end": 946
                      },
                      "start": 935,
                      "end": 946
                    },
                    "value": null,
                    "start": 931,
                    "end": 946
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
                      "start": 951,
                      "end": 958
                    },
                    "typeArguments": null,
                    "start": 951,
                    "end": 958
                  },
                  "start": 948,
                  "end": 958
                },
                "start": 926,
                "end": 958
              },
              "start": 924,
              "end": 958
            },
            "accessibility": null,
            "static": false,
            "start": 921,
            "end": 959
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
              "start": 964,
              "end": 967
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                              "start": 979,
                              "end": 982
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 984,
                                "end": 990
                              },
                              "start": 982,
                              "end": 990
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 979,
                            "end": 990
                          }
                        ],
                        "start": 977,
                        "end": 992
                      },
                      "start": 975,
                      "end": 992
                    },
                    "start": 974,
                    "end": 992
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
                              "start": 999,
                              "end": 1002
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1004,
                                "end": 1010
                              },
                              "start": 1002,
                              "end": 1010
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 999,
                            "end": 1011
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
                              "start": 1012,
                              "end": 1015
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1017,
                                "end": 1023
                              },
                              "start": 1015,
                              "end": 1023
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1012,
                            "end": 1023
                          }
                        ],
                        "start": 997,
                        "end": 1025
                      },
                      "start": 995,
                      "end": 1025
                    },
                    "start": 994,
                    "end": 1025
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
                      "start": 1030,
                      "end": 1034
                    },
                    "typeArguments": null,
                    "start": 1030,
                    "end": 1034
                  },
                  "start": 1027,
                  "end": 1034
                },
                "start": 969,
                "end": 1034
              },
              "start": 967,
              "end": 1034
            },
            "accessibility": null,
            "static": false,
            "start": 964,
            "end": 1035
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
              "start": 1040,
              "end": 1043
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                          "start": 1053,
                          "end": 1058
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
                                "start": 1059,
                                "end": 1063
                              },
                              "typeArguments": null,
                              "start": 1059,
                              "end": 1063
                            }
                          ],
                          "start": 1058,
                          "end": 1064
                        },
                        "start": 1053,
                        "end": 1064
                      },
                      "start": 1051,
                      "end": 1064
                    },
                    "start": 1050,
                    "end": 1064
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
                          "start": 1069,
                          "end": 1074
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
                                "start": 1075,
                                "end": 1083
                              },
                              "typeArguments": null,
                              "start": 1075,
                              "end": 1083
                            }
                          ],
                          "start": 1074,
                          "end": 1084
                        },
                        "start": 1069,
                        "end": 1084
                      },
                      "start": 1067,
                      "end": 1084
                    },
                    "start": 1066,
                    "end": 1084
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
                      "start": 1089,
                      "end": 1094
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
                            "start": 1095,
                            "end": 1102
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1102
                        }
                      ],
                      "start": 1094,
                      "end": 1103
                    },
                    "start": 1089,
                    "end": 1103
                  },
                  "start": 1086,
                  "end": 1103
                },
                "start": 1045,
                "end": 1103
              },
              "start": 1043,
              "end": 1103
            },
            "accessibility": null,
            "static": false,
            "start": 1040,
            "end": 1104
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
              "start": 1109,
              "end": 1112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                          "start": 1122,
                          "end": 1127
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
                                "start": 1128,
                                "end": 1132
                              },
                              "typeArguments": null,
                              "start": 1128,
                              "end": 1132
                            }
                          ],
                          "start": 1127,
                          "end": 1133
                        },
                        "start": 1122,
                        "end": 1133
                      },
                      "start": 1120,
                      "end": 1133
                    },
                    "start": 1119,
                    "end": 1133
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
                          "start": 1138,
                          "end": 1143
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
                                "start": 1144,
                                "end": 1151
                              },
                              "typeArguments": null,
                              "start": 1144,
                              "end": 1151
                            }
                          ],
                          "start": 1143,
                          "end": 1152
                        },
                        "start": 1138,
                        "end": 1152
                      },
                      "start": 1136,
                      "end": 1152
                    },
                    "start": 1135,
                    "end": 1152
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
                      "start": 1157,
                      "end": 1162
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
                            "start": 1163,
                            "end": 1170
                          },
                          "typeArguments": null,
                          "start": 1163,
                          "end": 1170
                        }
                      ],
                      "start": 1162,
                      "end": 1171
                    },
                    "start": 1157,
                    "end": 1171
                  },
                  "start": 1154,
                  "end": 1171
                },
                "start": 1114,
                "end": 1171
              },
              "start": 1112,
              "end": 1171
            },
            "accessibility": null,
            "static": false,
            "start": 1109,
            "end": 1172
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
              "start": 1177,
              "end": 1180
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                              "start": 1192,
                              "end": 1193
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1195,
                                "end": 1201
                              },
                              "start": 1193,
                              "end": 1201
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1192,
                            "end": 1202
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
                              "start": 1203,
                              "end": 1204
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1206,
                                "end": 1212
                              },
                              "start": 1204,
                              "end": 1212
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1203,
                            "end": 1212
                          }
                        ],
                        "start": 1190,
                        "end": 1214
                      },
                      "start": 1188,
                      "end": 1214
                    },
                    "start": 1187,
                    "end": 1214
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
                      "start": 1219,
                      "end": 1225
                    },
                    "typeArguments": null,
                    "start": 1219,
                    "end": 1225
                  },
                  "start": 1216,
                  "end": 1225
                },
                "start": 1182,
                "end": 1225
              },
              "start": 1180,
              "end": 1225
            },
            "accessibility": null,
            "static": false,
            "start": 1177,
            "end": 1226
          }
        ],
        "start": 395,
        "end": 1228
      },
      "declare": false,
      "start": 383,
      "end": 1228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1241
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
            "start": 1250,
            "end": 1251
          },
          "typeArguments": null,
          "start": 1250,
          "end": 1251
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
              "start": 1258,
              "end": 1259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1266,
                        "end": 1267
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1266,
                      "end": 1267
                    }
                  ],
                  "start": 1265,
                  "end": 1268
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
                          "start": 1272,
                          "end": 1273
                        },
                        "typeArguments": null,
                        "start": 1272,
                        "end": 1273
                      },
                      "start": 1270,
                      "end": 1273
                    },
                    "start": 1269,
                    "end": 1273
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
                        "start": 1278,
                        "end": 1279
                      },
                      "typeArguments": null,
                      "start": 1278,
                      "end": 1279
                    },
                    "start": 1278,
                    "end": 1281
                  },
                  "start": 1275,
                  "end": 1281
                },
                "start": 1261,
                "end": 1281
              },
              "start": 1259,
              "end": 1281
            },
            "accessibility": null,
            "static": false,
            "start": 1258,
            "end": 1282
          }
        ],
        "start": 1252,
        "end": 1284
      },
      "declare": false,
      "start": 1230,
      "end": 1284
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1304
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
            "start": 1313,
            "end": 1314
          },
          "typeArguments": null,
          "start": 1313,
          "end": 1314
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
              "start": 1332,
              "end": 1333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1340,
                        "end": 1341
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1340,
                      "end": 1341
                    }
                  ],
                  "start": 1339,
                  "end": 1342
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
                          "start": 1346,
                          "end": 1347
                        },
                        "typeArguments": null,
                        "start": 1346,
                        "end": 1347
                      },
                      "start": 1344,
                      "end": 1347
                    },
                    "start": 1343,
                    "end": 1347
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
                        "start": 1352,
                        "end": 1353
                      },
                      "typeArguments": null,
                      "start": 1352,
                      "end": 1353
                    },
                    "start": 1352,
                    "end": 1355
                  },
                  "start": 1349,
                  "end": 1355
                },
                "start": 1335,
                "end": 1355
              },
              "start": 1333,
              "end": 1355
            },
            "accessibility": null,
            "static": false,
            "start": 1332,
            "end": 1356
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
              "start": 1418,
              "end": 1420
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1427,
                        "end": 1428
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1427,
                      "end": 1428
                    }
                  ],
                  "start": 1426,
                  "end": 1429
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
                          "start": 1433,
                          "end": 1434
                        },
                        "typeArguments": null,
                        "start": 1433,
                        "end": 1434
                      },
                      "start": 1431,
                      "end": 1434
                    },
                    "start": 1430,
                    "end": 1434
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1439,
                    "end": 1447
                  },
                  "start": 1436,
                  "end": 1447
                },
                "start": 1422,
                "end": 1447
              },
              "start": 1420,
              "end": 1447
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1448
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
              "start": 1459,
              "end": 1461
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1468,
                        "end": 1469
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1468,
                      "end": 1469
                    }
                  ],
                  "start": 1467,
                  "end": 1470
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
                          "start": 1474,
                          "end": 1475
                        },
                        "typeArguments": null,
                        "start": 1474,
                        "end": 1475
                      },
                      "start": 1472,
                      "end": 1475
                    },
                    "start": 1471,
                    "end": 1475
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
                      "start": 1480,
                      "end": 1481
                    },
                    "typeArguments": null,
                    "start": 1480,
                    "end": 1481
                  },
                  "start": 1477,
                  "end": 1481
                },
                "start": 1463,
                "end": 1481
              },
              "start": 1461,
              "end": 1481
            },
            "accessibility": null,
            "static": false,
            "start": 1459,
            "end": 1482
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
              "start": 1517,
              "end": 1519
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1526,
                        "end": 1527
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1526,
                      "end": 1527
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1529,
                        "end": 1530
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1529,
                      "end": 1530
                    }
                  ],
                  "start": 1525,
                  "end": 1531
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
                          "start": 1535,
                          "end": 1536
                        },
                        "typeArguments": null,
                        "start": 1535,
                        "end": 1536
                      },
                      "start": 1533,
                      "end": 1536
                    },
                    "start": 1532,
                    "end": 1536
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
                          "start": 1541,
                          "end": 1542
                        },
                        "typeArguments": null,
                        "start": 1541,
                        "end": 1542
                      },
                      "start": 1539,
                      "end": 1542
                    },
                    "start": 1538,
                    "end": 1542
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
                      "start": 1547,
                      "end": 1548
                    },
                    "typeArguments": null,
                    "start": 1547,
                    "end": 1548
                  },
                  "start": 1544,
                  "end": 1548
                },
                "start": 1521,
                "end": 1548
              },
              "start": 1519,
              "end": 1548
            },
            "accessibility": null,
            "static": false,
            "start": 1517,
            "end": 1549
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
              "start": 1624,
              "end": 1626
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1633,
                        "end": 1634
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1633,
                      "end": 1634
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1636,
                        "end": 1637
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1636,
                      "end": 1637
                    }
                  ],
                  "start": 1632,
                  "end": 1638
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
                                  "start": 1648,
                                  "end": 1649
                                },
                                "typeArguments": null,
                                "start": 1648,
                                "end": 1649
                              },
                              "start": 1646,
                              "end": 1649
                            },
                            "start": 1643,
                            "end": 1649
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
                              "start": 1654,
                              "end": 1655
                            },
                            "typeArguments": null,
                            "start": 1654,
                            "end": 1655
                          },
                          "start": 1651,
                          "end": 1655
                        },
                        "start": 1642,
                        "end": 1655
                      },
                      "start": 1640,
                      "end": 1655
                    },
                    "start": 1639,
                    "end": 1655
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
                      "start": 1660,
                      "end": 1661
                    },
                    "typeArguments": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "start": 1657,
                  "end": 1661
                },
                "start": 1628,
                "end": 1661
              },
              "start": 1626,
              "end": 1661
            },
            "accessibility": null,
            "static": false,
            "start": 1624,
            "end": 1662
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
              "start": 1729,
              "end": 1731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1738,
                        "end": 1739
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1748,
                          "end": 1752
                        },
                        "typeArguments": null,
                        "start": 1748,
                        "end": 1752
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1738,
                      "end": 1752
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1754,
                        "end": 1755
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1764,
                          "end": 1771
                        },
                        "typeArguments": null,
                        "start": 1764,
                        "end": 1771
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1754,
                      "end": 1771
                    }
                  ],
                  "start": 1737,
                  "end": 1772
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
                                  "start": 1782,
                                  "end": 1783
                                },
                                "typeArguments": null,
                                "start": 1782,
                                "end": 1783
                              },
                              "start": 1780,
                              "end": 1783
                            },
                            "start": 1777,
                            "end": 1783
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
                              "start": 1788,
                              "end": 1789
                            },
                            "typeArguments": null,
                            "start": 1788,
                            "end": 1789
                          },
                          "start": 1785,
                          "end": 1789
                        },
                        "start": 1776,
                        "end": 1789
                      },
                      "start": 1774,
                      "end": 1789
                    },
                    "start": 1773,
                    "end": 1789
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
                      "start": 1794,
                      "end": 1795
                    },
                    "typeArguments": null,
                    "start": 1794,
                    "end": 1795
                  },
                  "start": 1791,
                  "end": 1795
                },
                "start": 1733,
                "end": 1795
              },
              "start": 1731,
              "end": 1795
            },
            "accessibility": null,
            "static": false,
            "start": 1729,
            "end": 1796
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
              "start": 1850,
              "end": 1852
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1859,
                        "end": 1860
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1869,
                          "end": 1873
                        },
                        "typeArguments": null,
                        "start": 1869,
                        "end": 1873
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1859,
                      "end": 1873
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1875,
                        "end": 1876
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1885,
                          "end": 1892
                        },
                        "typeArguments": null,
                        "start": 1885,
                        "end": 1892
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1875,
                      "end": 1892
                    }
                  ],
                  "start": 1858,
                  "end": 1893
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
                                  "start": 1903,
                                  "end": 1904
                                },
                                "typeArguments": null,
                                "start": 1903,
                                "end": 1904
                              },
                              "start": 1901,
                              "end": 1904
                            },
                            "start": 1898,
                            "end": 1904
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
                              "start": 1909,
                              "end": 1910
                            },
                            "typeArguments": null,
                            "start": 1909,
                            "end": 1910
                          },
                          "start": 1906,
                          "end": 1910
                        },
                        "start": 1897,
                        "end": 1910
                      },
                      "start": 1895,
                      "end": 1910
                    },
                    "start": 1894,
                    "end": 1910
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
                              "start": 1919,
                              "end": 1920
                            },
                            "typeArguments": null,
                            "start": 1919,
                            "end": 1920
                          },
                          "start": 1917,
                          "end": 1920
                        },
                        "start": 1916,
                        "end": 1920
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
                          "start": 1925,
                          "end": 1926
                        },
                        "typeArguments": null,
                        "start": 1925,
                        "end": 1926
                      },
                      "start": 1922,
                      "end": 1926
                    },
                    "start": 1915,
                    "end": 1926
                  },
                  "start": 1912,
                  "end": 1926
                },
                "start": 1854,
                "end": 1926
              },
              "start": 1852,
              "end": 1926
            },
            "accessibility": null,
            "static": false,
            "start": 1850,
            "end": 1927
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
              "start": 1938,
              "end": 1940
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1947,
                        "end": 1948
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1957,
                          "end": 1961
                        },
                        "typeArguments": null,
                        "start": 1957,
                        "end": 1961
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1947,
                      "end": 1961
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1963,
                        "end": 1964
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1973,
                          "end": 1980
                        },
                        "typeArguments": null,
                        "start": 1973,
                        "end": 1980
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1963,
                      "end": 1980
                    }
                  ],
                  "start": 1946,
                  "end": 1981
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
                                  "start": 1991,
                                  "end": 1992
                                },
                                "typeArguments": null,
                                "start": 1991,
                                "end": 1992
                              },
                              "start": 1989,
                              "end": 1992
                            },
                            "start": 1986,
                            "end": 1992
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
                              "start": 1997,
                              "end": 1998
                            },
                            "typeArguments": null,
                            "start": 1997,
                            "end": 1998
                          },
                          "start": 1994,
                          "end": 1998
                        },
                        "start": 1985,
                        "end": 1998
                      },
                      "start": 1983,
                      "end": 1998
                    },
                    "start": 1982,
                    "end": 1998
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
                                  "start": 2010,
                                  "end": 2011
                                },
                                "typeArguments": null,
                                "start": 2010,
                                "end": 2011
                              },
                              "start": 2008,
                              "end": 2011
                            },
                            "start": 2004,
                            "end": 2011
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
                              "start": 2016,
                              "end": 2017
                            },
                            "typeArguments": null,
                            "start": 2016,
                            "end": 2017
                          },
                          "start": 2013,
                          "end": 2017
                        },
                        "start": 2003,
                        "end": 2017
                      },
                      "start": 2001,
                      "end": 2017
                    },
                    "start": 2000,
                    "end": 2017
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
                              "start": 2026,
                              "end": 2027
                            },
                            "typeArguments": null,
                            "start": 2026,
                            "end": 2027
                          },
                          "start": 2024,
                          "end": 2027
                        },
                        "start": 2023,
                        "end": 2027
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
                          "start": 2032,
                          "end": 2033
                        },
                        "typeArguments": null,
                        "start": 2032,
                        "end": 2033
                      },
                      "start": 2029,
                      "end": 2033
                    },
                    "start": 2022,
                    "end": 2033
                  },
                  "start": 2019,
                  "end": 2033
                },
                "start": 1942,
                "end": 2033
              },
              "start": 1940,
              "end": 2033
            },
            "accessibility": null,
            "static": false,
            "start": 1938,
            "end": 2034
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
              "start": 2045,
              "end": 2047
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2054,
                        "end": 2055
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2064,
                          "end": 2068
                        },
                        "typeArguments": null,
                        "start": 2064,
                        "end": 2068
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2054,
                      "end": 2068
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2071
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2080,
                          "end": 2087
                        },
                        "typeArguments": null,
                        "start": 2080,
                        "end": 2087
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2070,
                      "end": 2087
                    }
                  ],
                  "start": 2053,
                  "end": 2088
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
                                  "start": 2098,
                                  "end": 2099
                                },
                                "typeArguments": null,
                                "start": 2098,
                                "end": 2099
                              },
                              "start": 2096,
                              "end": 2099
                            },
                            "start": 2093,
                            "end": 2099
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
                              "start": 2104,
                              "end": 2105
                            },
                            "typeArguments": null,
                            "start": 2104,
                            "end": 2105
                          },
                          "start": 2101,
                          "end": 2105
                        },
                        "start": 2092,
                        "end": 2105
                      },
                      "start": 2090,
                      "end": 2105
                    },
                    "start": 2089,
                    "end": 2105
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
                                      "start": 2119,
                                      "end": 2122
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2124,
                                        "end": 2130
                                      },
                                      "start": 2122,
                                      "end": 2130
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2119,
                                    "end": 2131
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
                                      "start": 2132,
                                      "end": 2136
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2138,
                                        "end": 2144
                                      },
                                      "start": 2136,
                                      "end": 2144
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2132,
                                    "end": 2144
                                  }
                                ],
                                "start": 2117,
                                "end": 2146
                              },
                              "start": 2115,
                              "end": 2146
                            },
                            "start": 2111,
                            "end": 2146
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
                              "start": 2151,
                              "end": 2152
                            },
                            "typeArguments": null,
                            "start": 2151,
                            "end": 2152
                          },
                          "start": 2148,
                          "end": 2152
                        },
                        "start": 2110,
                        "end": 2152
                      },
                      "start": 2108,
                      "end": 2152
                    },
                    "start": 2107,
                    "end": 2152
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
                              "start": 2161,
                              "end": 2162
                            },
                            "typeArguments": null,
                            "start": 2161,
                            "end": 2162
                          },
                          "start": 2159,
                          "end": 2162
                        },
                        "start": 2158,
                        "end": 2162
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
                          "start": 2167,
                          "end": 2168
                        },
                        "typeArguments": null,
                        "start": 2167,
                        "end": 2168
                      },
                      "start": 2164,
                      "end": 2168
                    },
                    "start": 2157,
                    "end": 2168
                  },
                  "start": 2154,
                  "end": 2168
                },
                "start": 2049,
                "end": 2168
              },
              "start": 2047,
              "end": 2168
            },
            "accessibility": null,
            "static": false,
            "start": 2045,
            "end": 2169
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
              "start": 2223,
              "end": 2226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2233,
                        "end": 2234
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2243,
                          "end": 2250
                        },
                        "typeArguments": null,
                        "start": 2243,
                        "end": 2250
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2233,
                      "end": 2250
                    }
                  ],
                  "start": 2232,
                  "end": 2251
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
                      "start": 2255,
                      "end": 2256
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
                            "start": 2258,
                            "end": 2259
                          },
                          "typeArguments": null,
                          "start": 2258,
                          "end": 2259
                        },
                        "start": 2258,
                        "end": 2261
                      },
                      "start": 2256,
                      "end": 2261
                    },
                    "value": null,
                    "start": 2252,
                    "end": 2261
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
                      "start": 2266,
                      "end": 2267
                    },
                    "typeArguments": null,
                    "start": 2266,
                    "end": 2267
                  },
                  "start": 2263,
                  "end": 2267
                },
                "start": 2228,
                "end": 2267
              },
              "start": 2226,
              "end": 2267
            },
            "accessibility": null,
            "static": false,
            "start": 2223,
            "end": 2268
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
              "start": 2279,
              "end": 2282
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2289,
                        "end": 2290
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2299,
                          "end": 2303
                        },
                        "typeArguments": null,
                        "start": 2299,
                        "end": 2303
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2289,
                      "end": 2303
                    }
                  ],
                  "start": 2288,
                  "end": 2304
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
                          "start": 2308,
                          "end": 2309
                        },
                        "typeArguments": null,
                        "start": 2308,
                        "end": 2309
                      },
                      "start": 2306,
                      "end": 2309
                    },
                    "start": 2305,
                    "end": 2309
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
                          "start": 2314,
                          "end": 2315
                        },
                        "typeArguments": null,
                        "start": 2314,
                        "end": 2315
                      },
                      "start": 2312,
                      "end": 2315
                    },
                    "start": 2311,
                    "end": 2315
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
                      "start": 2320,
                      "end": 2321
                    },
                    "typeArguments": null,
                    "start": 2320,
                    "end": 2321
                  },
                  "start": 2317,
                  "end": 2321
                },
                "start": 2284,
                "end": 2321
              },
              "start": 2282,
              "end": 2321
            },
            "accessibility": null,
            "static": false,
            "start": 2279,
            "end": 2322
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
              "start": 2333,
              "end": 2336
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2343,
                        "end": 2344
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2353,
                          "end": 2358
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
                                "start": 2359,
                                "end": 2363
                              },
                              "typeArguments": null,
                              "start": 2359,
                              "end": 2363
                            }
                          ],
                          "start": 2358,
                          "end": 2364
                        },
                        "start": 2353,
                        "end": 2364
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2343,
                      "end": 2364
                    }
                  ],
                  "start": 2342,
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
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2391,
                      "end": 2396
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
                            "start": 2397,
                            "end": 2404
                          },
                          "typeArguments": null,
                          "start": 2397,
                          "end": 2404
                        }
                      ],
                      "start": 2396,
                      "end": 2405
                    },
                    "start": 2391,
                    "end": 2405
                  },
                  "start": 2388,
                  "end": 2405
                },
                "start": 2338,
                "end": 2405
              },
              "start": 2336,
              "end": 2405
            },
            "accessibility": null,
            "static": false,
            "start": 2333,
            "end": 2406
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
              "start": 2447,
              "end": 2450
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2457,
                        "end": 2458
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2467,
                          "end": 2472
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
                                "start": 2473,
                                "end": 2480
                              },
                              "typeArguments": null,
                              "start": 2473,
                              "end": 2480
                            }
                          ],
                          "start": 2472,
                          "end": 2481
                        },
                        "start": 2467,
                        "end": 2481
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2457,
                      "end": 2481
                    }
                  ],
                  "start": 2456,
                  "end": 2482
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
                          "start": 2486,
                          "end": 2491
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
                                "start": 2492,
                                "end": 2496
                              },
                              "typeArguments": null,
                              "start": 2492,
                              "end": 2496
                            }
                          ],
                          "start": 2491,
                          "end": 2497
                        },
                        "start": 2486,
                        "end": 2497
                      },
                      "start": 2484,
                      "end": 2497
                    },
                    "start": 2483,
                    "end": 2497
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
                          "start": 2502,
                          "end": 2503
                        },
                        "typeArguments": null,
                        "start": 2502,
                        "end": 2503
                      },
                      "start": 2500,
                      "end": 2503
                    },
                    "start": 2499,
                    "end": 2503
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
                      "start": 2508,
                      "end": 2509
                    },
                    "typeArguments": null,
                    "start": 2508,
                    "end": 2509
                  },
                  "start": 2505,
                  "end": 2509
                },
                "start": 2452,
                "end": 2509
              },
              "start": 2450,
              "end": 2509
            },
            "accessibility": null,
            "static": false,
            "start": 2447,
            "end": 2510
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
              "start": 2608,
              "end": 2611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2618,
                        "end": 2619
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2618,
                      "end": 2619
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2621,
                        "end": 2622
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2621,
                      "end": 2622
                    }
                  ],
                  "start": 2617,
                  "end": 2623
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
                              "start": 2629,
                              "end": 2630
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
                                  "start": 2632,
                                  "end": 2633
                                },
                                "typeArguments": null,
                                "start": 2632,
                                "end": 2633
                              },
                              "start": 2630,
                              "end": 2633
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2629,
                            "end": 2634
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
                              "start": 2635,
                              "end": 2636
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
                                  "start": 2638,
                                  "end": 2639
                                },
                                "typeArguments": null,
                                "start": 2638,
                                "end": 2639
                              },
                              "start": 2636,
                              "end": 2639
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2635,
                            "end": 2639
                          }
                        ],
                        "start": 2627,
                        "end": 2641
                      },
                      "start": 2625,
                      "end": 2641
                    },
                    "start": 2624,
                    "end": 2641
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
                      "start": 2646,
                      "end": 2647
                    },
                    "typeArguments": null,
                    "start": 2646,
                    "end": 2647
                  },
                  "start": 2643,
                  "end": 2647
                },
                "start": 2613,
                "end": 2647
              },
              "start": 2611,
              "end": 2647
            },
            "accessibility": null,
            "static": false,
            "start": 2608,
            "end": 2648
          }
        ],
        "start": 1315,
        "end": 2656
      },
      "declare": false,
      "start": 1293,
      "end": 2656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 212,
  "end": 2656
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 290,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 338,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 351,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 383,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
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
    "value": "[",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
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
    "value": "number",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 473,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 510,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 543,
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
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 554,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 587,
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
    "value": "=>",
    "start": 595,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 606,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 674,
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
    "value": "x",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 683,
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
    "value": "Base",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 706,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 719,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 722,
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
    "value": "a8",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 759,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 787,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 812,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 815,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "a9",
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
    "type": "Keyword",
    "value": "new",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 846,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 855,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 868,
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
    "value": "Base",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 880,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 883,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 892,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 905,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 908,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 931,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 937,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 948,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 951,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 964,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 979,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 984,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "foo",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1004,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1027,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1059,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1075,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1089,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1095,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1128,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1135,
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
    "value": "Array",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1163,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1203,
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
    "value": "number",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1230,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1242,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1293,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1305,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1544,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1624,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1657,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1729,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1740,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1748,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1756,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1764,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1782,
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
    "value": "=>",
    "start": 1785,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1850,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1854,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1861,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1869,
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
    "value": "U",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1877,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1885,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1906,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1912,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "U",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1938,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1942,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1949,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1957,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1965,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1973,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1986,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1994,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2004,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2013,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2029,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2045,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2056,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2064,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2072,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2080,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2101,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2111,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2124,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2132,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2138,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2148,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2154,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2159,
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
    "value": ")",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2164,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2223,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2235,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2243,
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
    "value": "(",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2263,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2279,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2284,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2291,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2299,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2317,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2333,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2338,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2345,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2353,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2359,
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
    "value": "Array",
    "start": 2391,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2397,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2447,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2452,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2459,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2467,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2486,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2492,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2505,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2608,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2613,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2643,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2655,
    "end": 2656
  }
]
```
