__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
      },
      "body": {
        "type": "TSModuleBlock",
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
              "start": 190,
              "end": 194
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
                    "start": 197,
                    "end": 200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    },
                    "start": 200,
                    "end": 208
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
                  "start": 197,
                  "end": 209
                }
              ],
              "start": 195,
              "end": 211
            },
            "abstract": false,
            "declare": false,
            "start": 184,
            "end": 211
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
              "start": 222,
              "end": 229
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                    "start": 245,
                    "end": 248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
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
                  "start": 245,
                  "end": 257
                }
              ],
              "start": 243,
              "end": 259
            },
            "abstract": false,
            "declare": false,
            "start": 216,
            "end": 259
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
              "start": 270,
              "end": 278
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 294
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
                    "start": 297,
                    "end": 300
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 302,
                      "end": 308
                    },
                    "start": 300,
                    "end": 308
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
                  "start": 297,
                  "end": 309
                }
              ],
              "start": 295,
              "end": 311
            },
            "abstract": false,
            "declare": false,
            "start": 264,
            "end": 311
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
              "start": 322,
              "end": 334
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
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
                    "start": 350,
                    "end": 354
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 356,
                      "end": 362
                    },
                    "start": 354,
                    "end": 362
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
                  "start": 350,
                  "end": 363
                }
              ],
              "start": 348,
              "end": 365
            },
            "abstract": false,
            "declare": false,
            "start": 316,
            "end": 365
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 392
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                            "start": 401,
                            "end": 407
                          },
                          "start": 399,
                          "end": 407
                        },
                        "start": 398,
                        "end": 407
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 412,
                          "end": 418
                        },
                        "start": 412,
                        "end": 420
                      },
                      "start": 409,
                      "end": 420
                    },
                    "start": 397,
                    "end": 420
                  },
                  "start": 395,
                  "end": 420
                },
                "start": 393,
                "end": 420
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 432
                },
                "typeArguments": null,
                "start": 423,
                "end": 432
              },
              "start": 421,
              "end": 432
            },
            "body": null,
            "expression": false,
            "start": 371,
            "end": 433
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 459
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 464,
                    "end": 467
                  },
                  "start": 462,
                  "end": 467
                },
                "start": 460,
                "end": 467
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 470,
                "end": 473
              },
              "start": 468,
              "end": 473
            },
            "body": null,
            "expression": false,
            "start": 438,
            "end": 474
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 501
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                      "start": 516,
                                      "end": 520
                                    },
                                    "typeArguments": null,
                                    "start": 516,
                                    "end": 520
                                  },
                                  "start": 514,
                                  "end": 520
                                },
                                "start": 511,
                                "end": 520
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
                                  "start": 525,
                                  "end": 532
                                },
                                "typeArguments": null,
                                "start": 525,
                                "end": 532
                              },
                              "start": 522,
                              "end": 532
                            },
                            "start": 510,
                            "end": 532
                          },
                          "start": 508,
                          "end": 532
                        },
                        "start": 507,
                        "end": 532
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
                                  "start": 541,
                                  "end": 545
                                },
                                "typeArguments": null,
                                "start": 541,
                                "end": 545
                              },
                              "start": 539,
                              "end": 545
                            },
                            "start": 538,
                            "end": 545
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 550,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 550,
                            "end": 558
                          },
                          "start": 547,
                          "end": 558
                        },
                        "start": 537,
                        "end": 558
                      },
                      "start": 534,
                      "end": 558
                    },
                    "start": 506,
                    "end": 558
                  },
                  "start": 504,
                  "end": 558
                },
                "start": 502,
                "end": 558
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 570
                },
                "typeArguments": null,
                "start": 561,
                "end": 570
              },
              "start": 559,
              "end": 570
            },
            "body": null,
            "expression": false,
            "start": 480,
            "end": 571
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 597
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 602,
                    "end": 605
                  },
                  "start": 600,
                  "end": 605
                },
                "start": 598,
                "end": 605
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 608,
                "end": 611
              },
              "start": 606,
              "end": 611
            },
            "body": null,
            "expression": false,
            "start": 576,
            "end": 612
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 639
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                      "start": 654,
                                      "end": 658
                                    },
                                    "typeArguments": null,
                                    "start": 654,
                                    "end": 658
                                  },
                                  "start": 652,
                                  "end": 658
                                },
                                "start": 649,
                                "end": 658
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
                                  "start": 663,
                                  "end": 670
                                },
                                "typeArguments": null,
                                "start": 663,
                                "end": 670
                              },
                              "start": 660,
                              "end": 670
                            },
                            "start": 648,
                            "end": 670
                          },
                          "start": 646,
                          "end": 670
                        },
                        "start": 645,
                        "end": 670
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
                                      "start": 682,
                                      "end": 686
                                    },
                                    "typeArguments": null,
                                    "start": 682,
                                    "end": 686
                                  },
                                  "start": 680,
                                  "end": 686
                                },
                                "start": 676,
                                "end": 686
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
                                  "start": 691,
                                  "end": 698
                                },
                                "typeArguments": null,
                                "start": 691,
                                "end": 698
                              },
                              "start": 688,
                              "end": 698
                            },
                            "start": 675,
                            "end": 698
                          },
                          "start": 673,
                          "end": 698
                        },
                        "start": 672,
                        "end": 698
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
                                  "start": 707,
                                  "end": 711
                                },
                                "typeArguments": null,
                                "start": 707,
                                "end": 711
                              },
                              "start": 705,
                              "end": 711
                            },
                            "start": 704,
                            "end": 711
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
                              "start": 716,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 716,
                            "end": 723
                          },
                          "start": 713,
                          "end": 723
                        },
                        "start": 703,
                        "end": 723
                      },
                      "start": 700,
                      "end": 723
                    },
                    "start": 644,
                    "end": 723
                  },
                  "start": 642,
                  "end": 723
                },
                "start": 640,
                "end": 723
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 735
                },
                "typeArguments": null,
                "start": 726,
                "end": 735
              },
              "start": 724,
              "end": 735
            },
            "body": null,
            "expression": false,
            "start": 618,
            "end": 736
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 762
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 767,
                    "end": 770
                  },
                  "start": 765,
                  "end": 770
                },
                "start": 763,
                "end": 770
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 773,
                "end": 776
              },
              "start": 771,
              "end": 776
            },
            "body": null,
            "expression": false,
            "start": 741,
            "end": 777
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 805
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                          "start": 814,
                          "end": 815
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
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 817,
                                "end": 821
                              },
                              "typeArguments": null,
                              "start": 817,
                              "end": 821
                            },
                            "start": 817,
                            "end": 823
                          },
                          "start": 815,
                          "end": 823
                        },
                        "value": null,
                        "start": 811,
                        "end": 823
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
                          "start": 828,
                          "end": 832
                        },
                        "typeArguments": null,
                        "start": 828,
                        "end": 832
                      },
                      "start": 825,
                      "end": 832
                    },
                    "start": 810,
                    "end": 832
                  },
                  "start": 808,
                  "end": 832
                },
                "start": 806,
                "end": 832
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 844
                },
                "typeArguments": null,
                "start": 835,
                "end": 844
              },
              "start": 833,
              "end": 844
            },
            "body": null,
            "expression": false,
            "start": 783,
            "end": 845
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 872
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 877,
                    "end": 880
                  },
                  "start": 875,
                  "end": 880
                },
                "start": 873,
                "end": 880
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 883,
                "end": 886
              },
              "start": 881,
              "end": 886
            },
            "body": null,
            "expression": false,
            "start": 850,
            "end": 887
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 915
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                  "start": 926,
                                  "end": 929
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 931,
                                    "end": 937
                                  },
                                  "start": 929,
                                  "end": 937
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 926,
                                "end": 937
                              }
                            ],
                            "start": 924,
                            "end": 939
                          },
                          "start": 922,
                          "end": 939
                        },
                        "start": 921,
                        "end": 939
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
                                  "start": 946,
                                  "end": 949
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 951,
                                    "end": 957
                                  },
                                  "start": 949,
                                  "end": 957
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 946,
                                "end": 958
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
                                  "start": 959,
                                  "end": 962
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 964,
                                    "end": 970
                                  },
                                  "start": 962,
                                  "end": 970
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 959,
                                "end": 970
                              }
                            ],
                            "start": 944,
                            "end": 972
                          },
                          "start": 942,
                          "end": 972
                        },
                        "start": 941,
                        "end": 972
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
                          "start": 977,
                          "end": 981
                        },
                        "typeArguments": null,
                        "start": 977,
                        "end": 981
                      },
                      "start": 974,
                      "end": 981
                    },
                    "start": 920,
                    "end": 981
                  },
                  "start": 918,
                  "end": 981
                },
                "start": 916,
                "end": 981
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 993
                },
                "typeArguments": null,
                "start": 984,
                "end": 993
              },
              "start": 982,
              "end": 993
            },
            "body": null,
            "expression": false,
            "start": 893,
            "end": 994
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1016,
              "end": 1021
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1026,
                    "end": 1029
                  },
                  "start": 1024,
                  "end": 1029
                },
                "start": 1022,
                "end": 1029
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1032,
                "end": 1035
              },
              "start": 1030,
              "end": 1035
            },
            "body": null,
            "expression": false,
            "start": 999,
            "end": 1036
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1064
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1073,
                              "end": 1078
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
                                    "start": 1079,
                                    "end": 1083
                                  },
                                  "typeArguments": null,
                                  "start": 1079,
                                  "end": 1083
                                }
                              ],
                              "start": 1078,
                              "end": 1084
                            },
                            "start": 1073,
                            "end": 1084
                          },
                          "start": 1071,
                          "end": 1084
                        },
                        "start": 1070,
                        "end": 1084
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
                                    "name": "Derived2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1095,
                                    "end": 1103
                                  },
                                  "typeArguments": null,
                                  "start": 1095,
                                  "end": 1103
                                }
                              ],
                              "start": 1094,
                              "end": 1104
                            },
                            "start": 1089,
                            "end": 1104
                          },
                          "start": 1087,
                          "end": 1104
                        },
                        "start": 1086,
                        "end": 1104
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
                          "start": 1109,
                          "end": 1114
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
                                "start": 1115,
                                "end": 1122
                              },
                              "typeArguments": null,
                              "start": 1115,
                              "end": 1122
                            }
                          ],
                          "start": 1114,
                          "end": 1123
                        },
                        "start": 1109,
                        "end": 1123
                      },
                      "start": 1106,
                      "end": 1123
                    },
                    "start": 1069,
                    "end": 1123
                  },
                  "start": 1067,
                  "end": 1123
                },
                "start": 1065,
                "end": 1123
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1135
                },
                "typeArguments": null,
                "start": 1126,
                "end": 1135
              },
              "start": 1124,
              "end": 1135
            },
            "body": null,
            "expression": false,
            "start": 1042,
            "end": 1136
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1163
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1168,
                    "end": 1171
                  },
                  "start": 1166,
                  "end": 1171
                },
                "start": 1164,
                "end": 1171
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1174,
                "end": 1177
              },
              "start": 1172,
              "end": 1177
            },
            "body": null,
            "expression": false,
            "start": 1141,
            "end": 1178
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1206
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
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
                                  "start": 1217,
                                  "end": 1218
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1220,
                                    "end": 1226
                                  },
                                  "start": 1218,
                                  "end": 1226
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1217,
                                "end": 1227
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
                                  "start": 1228,
                                  "end": 1229
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1231,
                                    "end": 1237
                                  },
                                  "start": 1229,
                                  "end": 1237
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1228,
                                "end": 1237
                              }
                            ],
                            "start": 1215,
                            "end": 1239
                          },
                          "start": 1213,
                          "end": 1239
                        },
                        "start": 1212,
                        "end": 1239
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1244,
                        "end": 1250
                      },
                      "start": 1241,
                      "end": 1250
                    },
                    "start": 1211,
                    "end": 1250
                  },
                  "start": 1209,
                  "end": 1250
                },
                "start": 1207,
                "end": 1250
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1253,
                "end": 1262
              },
              "start": 1251,
              "end": 1262
            },
            "body": null,
            "expression": false,
            "start": 1184,
            "end": 1263
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1290
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1295,
                    "end": 1298
                  },
                  "start": 1293,
                  "end": 1298
                },
                "start": 1291,
                "end": 1298
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1301,
                "end": 1304
              },
              "start": 1299,
              "end": 1304
            },
            "body": null,
            "expression": false,
            "start": 1268,
            "end": 1305
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1333
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1468,
                                            "end": 1474
                                          },
                                          "start": 1466,
                                          "end": 1474
                                        },
                                        "start": 1465,
                                        "end": 1474
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1477,
                                        "end": 1483
                                      },
                                      "start": 1475,
                                      "end": 1483
                                    },
                                    "start": 1464,
                                    "end": 1484
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": true,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1502,
                                            "end": 1508
                                          },
                                          "start": 1500,
                                          "end": 1508
                                        },
                                        "start": 1498,
                                        "end": 1508
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1511,
                                        "end": 1517
                                      },
                                      "start": 1509,
                                      "end": 1517
                                    },
                                    "start": 1497,
                                    "end": 1518
                                  }
                                ],
                                "start": 1450,
                                "end": 1528
                              },
                              "start": 1448,
                              "end": 1528
                            },
                            "start": 1447,
                            "end": 1528
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1531,
                              "end": 1537
                            },
                            "start": 1531,
                            "end": 1539
                          },
                          "start": 1529,
                          "end": 1539
                        },
                        "start": 1446,
                        "end": 1540
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1571,
                                            "end": 1578
                                          },
                                          "start": 1569,
                                          "end": 1578
                                        },
                                        "start": 1568,
                                        "end": 1578
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1581,
                                        "end": 1588
                                      },
                                      "start": 1579,
                                      "end": 1588
                                    },
                                    "start": 1567,
                                    "end": 1589
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": true,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSBooleanKeyword",
                                            "start": 1607,
                                            "end": 1614
                                          },
                                          "start": 1605,
                                          "end": 1614
                                        },
                                        "start": 1603,
                                        "end": 1614
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1617,
                                        "end": 1624
                                      },
                                      "start": 1615,
                                      "end": 1624
                                    },
                                    "start": 1602,
                                    "end": 1625
                                  }
                                ],
                                "start": 1553,
                                "end": 1635
                              },
                              "start": 1551,
                              "end": 1635
                            },
                            "start": 1550,
                            "end": 1635
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1638,
                              "end": 1645
                            },
                            "start": 1638,
                            "end": 1647
                          },
                          "start": 1636,
                          "end": 1647
                        },
                        "start": 1549,
                        "end": 1648
                      }
                    ],
                    "start": 1338,
                    "end": 1654
                  },
                  "start": 1336,
                  "end": 1654
                },
                "start": 1334,
                "end": 1654
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1666
                },
                "typeArguments": null,
                "start": 1657,
                "end": 1666
              },
              "start": 1655,
              "end": 1666
            },
            "body": null,
            "expression": false,
            "start": 1311,
            "end": 1667
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1689,
              "end": 1694
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1699,
                    "end": 1702
                  },
                  "start": 1697,
                  "end": 1702
                },
                "start": 1695,
                "end": 1702
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1705,
                "end": 1708
              },
              "start": 1703,
              "end": 1708
            },
            "body": null,
            "expression": false,
            "start": 1672,
            "end": 1709
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1732,
              "end": 1737
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                    "type": "TSCallSignatureDeclaration",
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
                                            "start": 1771,
                                            "end": 1772
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1781,
                                              "end": 1788
                                            },
                                            "typeArguments": null,
                                            "start": 1781,
                                            "end": 1788
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1771,
                                          "end": 1788
                                        }
                                      ],
                                      "start": 1770,
                                      "end": 1789
                                    },
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 1793,
                                              "end": 1794
                                            },
                                            "typeArguments": null,
                                            "start": 1793,
                                            "end": 1794
                                          },
                                          "start": 1791,
                                          "end": 1794
                                        },
                                        "start": 1790,
                                        "end": 1794
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
                                          "start": 1797,
                                          "end": 1798
                                        },
                                        "typeArguments": null,
                                        "start": 1797,
                                        "end": 1798
                                      },
                                      "start": 1795,
                                      "end": 1798
                                    },
                                    "start": 1770,
                                    "end": 1799
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
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
                                            "start": 1813,
                                            "end": 1814
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1823,
                                              "end": 1827
                                            },
                                            "typeArguments": null,
                                            "start": 1823,
                                            "end": 1827
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1813,
                                          "end": 1827
                                        }
                                      ],
                                      "start": 1812,
                                      "end": 1828
                                    },
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 1832,
                                              "end": 1833
                                            },
                                            "typeArguments": null,
                                            "start": 1832,
                                            "end": 1833
                                          },
                                          "start": 1830,
                                          "end": 1833
                                        },
                                        "start": 1829,
                                        "end": 1833
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
                                          "start": 1836,
                                          "end": 1837
                                        },
                                        "typeArguments": null,
                                        "start": 1836,
                                        "end": 1837
                                      },
                                      "start": 1834,
                                      "end": 1837
                                    },
                                    "start": 1812,
                                    "end": 1838
                                  }
                                ],
                                "start": 1756,
                                "end": 1848
                              },
                              "start": 1754,
                              "end": 1848
                            },
                            "start": 1753,
                            "end": 1848
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1851,
                              "end": 1854
                            },
                            "start": 1851,
                            "end": 1856
                          },
                          "start": 1849,
                          "end": 1856
                        },
                        "start": 1752,
                        "end": 1857
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                    "type": "TSCallSignatureDeclaration",
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
                                            "start": 1885,
                                            "end": 1886
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1895,
                                              "end": 1903
                                            },
                                            "typeArguments": null,
                                            "start": 1895,
                                            "end": 1903
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1885,
                                          "end": 1903
                                        }
                                      ],
                                      "start": 1884,
                                      "end": 1904
                                    },
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 1908,
                                              "end": 1909
                                            },
                                            "typeArguments": null,
                                            "start": 1908,
                                            "end": 1909
                                          },
                                          "start": 1906,
                                          "end": 1909
                                        },
                                        "start": 1905,
                                        "end": 1909
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
                                          "start": 1912,
                                          "end": 1913
                                        },
                                        "typeArguments": null,
                                        "start": 1912,
                                        "end": 1913
                                      },
                                      "start": 1910,
                                      "end": 1913
                                    },
                                    "start": 1884,
                                    "end": 1914
                                  },
                                  {
                                    "type": "TSCallSignatureDeclaration",
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
                                            "start": 1928,
                                            "end": 1929
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1938,
                                              "end": 1942
                                            },
                                            "typeArguments": null,
                                            "start": 1938,
                                            "end": 1942
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1928,
                                          "end": 1942
                                        }
                                      ],
                                      "start": 1927,
                                      "end": 1943
                                    },
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 1947,
                                              "end": 1948
                                            },
                                            "typeArguments": null,
                                            "start": 1947,
                                            "end": 1948
                                          },
                                          "start": 1945,
                                          "end": 1948
                                        },
                                        "start": 1944,
                                        "end": 1948
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
                                          "start": 1951,
                                          "end": 1952
                                        },
                                        "typeArguments": null,
                                        "start": 1951,
                                        "end": 1952
                                      },
                                      "start": 1949,
                                      "end": 1952
                                    },
                                    "start": 1927,
                                    "end": 1953
                                  }
                                ],
                                "start": 1870,
                                "end": 1963
                              },
                              "start": 1868,
                              "end": 1963
                            },
                            "start": 1867,
                            "end": 1963
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1966,
                              "end": 1969
                            },
                            "start": 1966,
                            "end": 1971
                          },
                          "start": 1964,
                          "end": 1971
                        },
                        "start": 1866,
                        "end": 1972
                      }
                    ],
                    "start": 1742,
                    "end": 1978
                  },
                  "start": 1740,
                  "end": 1978
                },
                "start": 1738,
                "end": 1978
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1988,
                  "end": 1990
                },
                "typeArguments": null,
                "start": 1981,
                "end": 1990
              },
              "start": 1979,
              "end": 1990
            },
            "body": null,
            "expression": false,
            "start": 1715,
            "end": 1991
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2013,
              "end": 2018
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2023,
                    "end": 2026
                  },
                  "start": 2021,
                  "end": 2026
                },
                "start": 2019,
                "end": 2026
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2029,
                "end": 2032
              },
              "start": 2027,
              "end": 2032
            },
            "body": null,
            "expression": false,
            "start": 1996,
            "end": 2033
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2045
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2048,
                    "end": 2052
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2054,
                            "end": 2055
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2057,
                              "end": 2058
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2057,
                            "end": 2058
                          }
                        ],
                        "start": 2053,
                        "end": 2059
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
                                "start": 2063,
                                "end": 2064
                              },
                              "typeArguments": null,
                              "start": 2063,
                              "end": 2064
                            },
                            "start": 2061,
                            "end": 2064
                          },
                          "start": 2060,
                          "end": 2064
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2070,
                              "end": 2071
                            },
                            "typeArguments": null,
                            "start": 2070,
                            "end": 2071
                          },
                          "start": 2070,
                          "end": 2073
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2074,
                          "end": 2078
                        },
                        "start": 2069,
                        "end": 2078
                      },
                      "id": null,
                      "generator": false,
                      "start": 2053,
                      "end": 2078
                    }
                  ],
                  "optional": false,
                  "start": 2048,
                  "end": 2079
                },
                "definite": false,
                "start": 2043,
                "end": 2079
              }
            ],
            "declare": false,
            "start": 2039,
            "end": 2080
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
                  "name": "r1a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2096,
                  "end": 2099
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2107,
                              "end": 2113
                            },
                            "start": 2105,
                            "end": 2113
                          },
                          "start": 2104,
                          "end": 2113
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 2119,
                            "end": 2121
                          }
                        ],
                        "start": 2118,
                        "end": 2122
                      },
                      "id": null,
                      "generator": false,
                      "start": 2103,
                      "end": 2122
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2125,
                              "end": 2126
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2125,
                            "end": 2126
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2128,
                              "end": 2129
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2128,
                            "end": 2129
                          }
                        ],
                        "start": 2124,
                        "end": 2130
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
                                "start": 2134,
                                "end": 2135
                              },
                              "typeArguments": null,
                              "start": 2134,
                              "end": 2135
                            },
                            "start": 2132,
                            "end": 2135
                          },
                          "start": 2131,
                          "end": 2135
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2141,
                              "end": 2142
                            },
                            "typeArguments": null,
                            "start": 2141,
                            "end": 2142
                          },
                          "start": 2141,
                          "end": 2144
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2145,
                          "end": 2149
                        },
                        "start": 2140,
                        "end": 2149
                      },
                      "id": null,
                      "generator": false,
                      "start": 2124,
                      "end": 2149
                    }
                  ],
                  "start": 2102,
                  "end": 2150
                },
                "definite": false,
                "start": 2096,
                "end": 2150
              }
            ],
            "declare": false,
            "start": 2092,
            "end": 2151
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
                  "name": "r1b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2160,
                  "end": 2163
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2168,
                              "end": 2169
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2168,
                            "end": 2169
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2171,
                              "end": 2172
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2171,
                            "end": 2172
                          }
                        ],
                        "start": 2167,
                        "end": 2173
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
                                "start": 2177,
                                "end": 2178
                              },
                              "typeArguments": null,
                              "start": 2177,
                              "end": 2178
                            },
                            "start": 2175,
                            "end": 2178
                          },
                          "start": 2174,
                          "end": 2178
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2184,
                              "end": 2185
                            },
                            "typeArguments": null,
                            "start": 2184,
                            "end": 2185
                          },
                          "start": 2184,
                          "end": 2187
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2188,
                          "end": 2192
                        },
                        "start": 2183,
                        "end": 2192
                      },
                      "id": null,
                      "generator": false,
                      "start": 2167,
                      "end": 2192
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 2198,
                              "end": 2204
                            },
                            "start": 2196,
                            "end": 2204
                          },
                          "start": 2195,
                          "end": 2204
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 2210,
                            "end": 2212
                          }
                        ],
                        "start": 2209,
                        "end": 2213
                      },
                      "id": null,
                      "generator": false,
                      "start": 2194,
                      "end": 2213
                    }
                  ],
                  "start": 2166,
                  "end": 2214
                },
                "definite": false,
                "start": 2160,
                "end": 2214
              }
            ],
            "declare": false,
            "start": 2156,
            "end": 2215
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
                  "name": "r2arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2225,
                  "end": 2230
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2234,
                          "end": 2235
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2244,
                            "end": 2248
                          },
                          "typeArguments": null,
                          "start": 2244,
                          "end": 2248
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2234,
                        "end": 2248
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2250,
                          "end": 2251
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2260,
                            "end": 2267
                          },
                          "typeArguments": null,
                          "start": 2260,
                          "end": 2267
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2250,
                        "end": 2267
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2269,
                          "end": 2270
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2279,
                            "end": 2287
                          },
                          "typeArguments": null,
                          "start": 2279,
                          "end": 2287
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2269,
                        "end": 2287
                      }
                    ],
                    "start": 2233,
                    "end": 2288
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
                                    "start": 2298,
                                    "end": 2299
                                  },
                                  "typeArguments": null,
                                  "start": 2298,
                                  "end": 2299
                                },
                                "start": 2296,
                                "end": 2299
                              },
                              "start": 2293,
                              "end": 2299
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
                                "start": 2304,
                                "end": 2305
                              },
                              "typeArguments": null,
                              "start": 2304,
                              "end": 2305
                            },
                            "start": 2301,
                            "end": 2305
                          },
                          "start": 2292,
                          "end": 2305
                        },
                        "start": 2290,
                        "end": 2305
                      },
                      "start": 2289,
                      "end": 2305
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2321,
                          "end": 2322
                        },
                        "typeArguments": null,
                        "start": 2321,
                        "end": 2322
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2323,
                        "end": 2327
                      },
                      "start": 2320,
                      "end": 2327
                    },
                    "id": null,
                    "generator": false,
                    "start": 2310,
                    "end": 2327
                  },
                  "id": null,
                  "generator": false,
                  "start": 2233,
                  "end": 2327
                },
                "definite": false,
                "start": 2225,
                "end": 2327
              }
            ],
            "declare": false,
            "start": 2221,
            "end": 2328
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
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2343
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                    "start": 2356,
                                    "end": 2360
                                  },
                                  "typeArguments": null,
                                  "start": 2356,
                                  "end": 2360
                                },
                                "start": 2354,
                                "end": 2360
                              },
                              "start": 2351,
                              "end": 2360
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
                                "start": 2365,
                                "end": 2372
                              },
                              "typeArguments": null,
                              "start": 2365,
                              "end": 2372
                            },
                            "start": 2362,
                            "end": 2372
                          },
                          "start": 2350,
                          "end": 2372
                        },
                        "start": 2348,
                        "end": 2372
                      },
                      "start": 2347,
                      "end": 2372
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2381,
                              "end": 2385
                            },
                            "typeArguments": null,
                            "start": 2381,
                            "end": 2385
                          },
                          "start": 2379,
                          "end": 2385
                        },
                        "start": 2378,
                        "end": 2385
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2391,
                          "end": 2399
                        },
                        "typeArguments": null,
                        "start": 2391,
                        "end": 2399
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2400,
                        "end": 2404
                      },
                      "start": 2390,
                      "end": 2404
                    },
                    "id": null,
                    "generator": false,
                    "start": 2377,
                    "end": 2404
                  },
                  "id": null,
                  "generator": false,
                  "start": 2346,
                  "end": 2404
                },
                "definite": false,
                "start": 2337,
                "end": 2404
              }
            ],
            "declare": false,
            "start": 2333,
            "end": 2405
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
                  "typeAnnotation": null,
                  "start": 2414,
                  "end": 2416
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2419,
                    "end": 2423
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2424,
                      "end": 2429
                    }
                  ],
                  "optional": false,
                  "start": 2419,
                  "end": 2430
                },
                "definite": false,
                "start": 2414,
                "end": 2430
              }
            ],
            "declare": false,
            "start": 2410,
            "end": 2431
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
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2450
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2454,
                      "end": 2460
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2462,
                      "end": 2467
                    }
                  ],
                  "start": 2453,
                  "end": 2468
                },
                "definite": false,
                "start": 2447,
                "end": 2468
              }
            ],
            "declare": false,
            "start": 2443,
            "end": 2469
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
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2481
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2485,
                      "end": 2490
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2492,
                      "end": 2498
                    }
                  ],
                  "start": 2484,
                  "end": 2499
                },
                "definite": false,
                "start": 2478,
                "end": 2499
              }
            ],
            "declare": false,
            "start": 2474,
            "end": 2500
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
                  "name": "r3arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2510,
                  "end": 2515
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2519,
                          "end": 2520
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2529,
                            "end": 2533
                          },
                          "typeArguments": null,
                          "start": 2529,
                          "end": 2533
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2519,
                        "end": 2533
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2535,
                          "end": 2536
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2545,
                            "end": 2552
                          },
                          "typeArguments": null,
                          "start": 2545,
                          "end": 2552
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2535,
                        "end": 2552
                      }
                    ],
                    "start": 2518,
                    "end": 2553
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
                                    "start": 2563,
                                    "end": 2564
                                  },
                                  "typeArguments": null,
                                  "start": 2563,
                                  "end": 2564
                                },
                                "start": 2561,
                                "end": 2564
                              },
                              "start": 2558,
                              "end": 2564
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
                                "start": 2569,
                                "end": 2570
                              },
                              "typeArguments": null,
                              "start": 2569,
                              "end": 2570
                            },
                            "start": 2566,
                            "end": 2570
                          },
                          "start": 2557,
                          "end": 2570
                        },
                        "start": 2555,
                        "end": 2570
                      },
                      "start": 2554,
                      "end": 2570
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
                                        "start": 2584,
                                        "end": 2587
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2589,
                                          "end": 2595
                                        },
                                        "start": 2587,
                                        "end": 2595
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2584,
                                      "end": 2596
                                    }
                                  ],
                                  "start": 2582,
                                  "end": 2598
                                },
                                "start": 2580,
                                "end": 2598
                              },
                              "start": 2576,
                              "end": 2598
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
                                "start": 2603,
                                "end": 2604
                              },
                              "typeArguments": null,
                              "start": 2603,
                              "end": 2604
                            },
                            "start": 2600,
                            "end": 2604
                          },
                          "start": 2575,
                          "end": 2604
                        },
                        "start": 2573,
                        "end": 2604
                      },
                      "start": 2572,
                      "end": 2604
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2613,
                              "end": 2614
                            },
                            "typeArguments": null,
                            "start": 2613,
                            "end": 2614
                          },
                          "start": 2611,
                          "end": 2614
                        },
                        "start": 2610,
                        "end": 2614
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2620,
                          "end": 2621
                        },
                        "typeArguments": null,
                        "start": 2620,
                        "end": 2621
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2622,
                        "end": 2626
                      },
                      "start": 2619,
                      "end": 2626
                    },
                    "id": null,
                    "generator": false,
                    "start": 2609,
                    "end": 2626
                  },
                  "id": null,
                  "generator": false,
                  "start": 2518,
                  "end": 2626
                },
                "definite": false,
                "start": 2510,
                "end": 2626
              }
            ],
            "declare": false,
            "start": 2506,
            "end": 2627
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
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2636,
                  "end": 2642
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                    "start": 2655,
                                    "end": 2659
                                  },
                                  "typeArguments": null,
                                  "start": 2655,
                                  "end": 2659
                                },
                                "start": 2653,
                                "end": 2659
                              },
                              "start": 2650,
                              "end": 2659
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
                                "start": 2664,
                                "end": 2671
                              },
                              "typeArguments": null,
                              "start": 2664,
                              "end": 2671
                            },
                            "start": 2661,
                            "end": 2671
                          },
                          "start": 2649,
                          "end": 2671
                        },
                        "start": 2647,
                        "end": 2671
                      },
                      "start": 2646,
                      "end": 2671
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
                                    "start": 2683,
                                    "end": 2687
                                  },
                                  "typeArguments": null,
                                  "start": 2683,
                                  "end": 2687
                                },
                                "start": 2681,
                                "end": 2687
                              },
                              "start": 2677,
                              "end": 2687
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
                                "start": 2692,
                                "end": 2699
                              },
                              "typeArguments": null,
                              "start": 2692,
                              "end": 2699
                            },
                            "start": 2689,
                            "end": 2699
                          },
                          "start": 2676,
                          "end": 2699
                        },
                        "start": 2674,
                        "end": 2699
                      },
                      "start": 2673,
                      "end": 2699
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                              "start": 2708,
                              "end": 2712
                            },
                            "typeArguments": null,
                            "start": 2708,
                            "end": 2712
                          },
                          "start": 2706,
                          "end": 2712
                        },
                        "start": 2705,
                        "end": 2712
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2718,
                          "end": 2725
                        },
                        "typeArguments": null,
                        "start": 2718,
                        "end": 2725
                      },
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2726,
                        "end": 2730
                      },
                      "start": 2717,
                      "end": 2730
                    },
                    "id": null,
                    "generator": false,
                    "start": 2704,
                    "end": 2730
                  },
                  "id": null,
                  "generator": false,
                  "start": 2645,
                  "end": 2730
                },
                "definite": false,
                "start": 2636,
                "end": 2730
              }
            ],
            "declare": false,
            "start": 2632,
            "end": 2731
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2740,
                  "end": 2742
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2745,
                    "end": 2749
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2750,
                      "end": 2755
                    }
                  ],
                  "optional": false,
                  "start": 2745,
                  "end": 2756
                },
                "definite": false,
                "start": 2740,
                "end": 2756
              }
            ],
            "declare": false,
            "start": 2736,
            "end": 2757
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
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2773,
                  "end": 2776
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2780,
                      "end": 2786
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2788,
                      "end": 2793
                    }
                  ],
                  "start": 2779,
                  "end": 2794
                },
                "definite": false,
                "start": 2773,
                "end": 2794
              }
            ],
            "declare": false,
            "start": 2769,
            "end": 2795
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
                  "name": "r3b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2804,
                  "end": 2807
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2811,
                      "end": 2816
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2818,
                      "end": 2824
                    }
                  ],
                  "start": 2810,
                  "end": 2825
                },
                "definite": false,
                "start": 2804,
                "end": 2825
              }
            ],
            "declare": false,
            "start": 2800,
            "end": 2826
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
                  "name": "r4arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2836,
                  "end": 2841
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 2845,
                          "end": 2846
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2855,
                            "end": 2862
                          },
                          "typeArguments": null,
                          "start": 2855,
                          "end": 2862
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2845,
                        "end": 2862
                      }
                    ],
                    "start": 2844,
                    "end": 2863
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
                        "start": 2867,
                        "end": 2868
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
                              "start": 2870,
                              "end": 2871
                            },
                            "typeArguments": null,
                            "start": 2870,
                            "end": 2871
                          },
                          "start": 2870,
                          "end": 2873
                        },
                        "start": 2868,
                        "end": 2873
                      },
                      "value": null,
                      "start": 2864,
                      "end": 2873
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2879,
                        "end": 2880
                      },
                      "typeArguments": null,
                      "start": 2879,
                      "end": 2880
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2881,
                      "end": 2885
                    },
                    "start": 2878,
                    "end": 2885
                  },
                  "id": null,
                  "generator": false,
                  "start": 2844,
                  "end": 2885
                },
                "definite": false,
                "start": 2836,
                "end": 2885
              }
            ],
            "declare": false,
            "start": 2832,
            "end": 2886
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
                  "name": "r4arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2895,
                  "end": 2901
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                        "start": 2908,
                        "end": 2909
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
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2911,
                              "end": 2915
                            },
                            "typeArguments": null,
                            "start": 2911,
                            "end": 2915
                          },
                          "start": 2911,
                          "end": 2917
                        },
                        "start": 2909,
                        "end": 2917
                      },
                      "value": null,
                      "start": 2905,
                      "end": 2917
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2923,
                        "end": 2927
                      },
                      "typeArguments": null,
                      "start": 2923,
                      "end": 2927
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2928,
                      "end": 2932
                    },
                    "start": 2922,
                    "end": 2932
                  },
                  "id": null,
                  "generator": false,
                  "start": 2904,
                  "end": 2932
                },
                "definite": false,
                "start": 2895,
                "end": 2932
              }
            ],
            "declare": false,
            "start": 2891,
            "end": 2933
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2942,
                  "end": 2944
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2947,
                    "end": 2952
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2953,
                      "end": 2958
                    }
                  ],
                  "optional": false,
                  "start": 2947,
                  "end": 2959
                },
                "definite": false,
                "start": 2942,
                "end": 2959
              }
            ],
            "declare": false,
            "start": 2938,
            "end": 2960
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
                  "name": "r4a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2976,
                  "end": 2979
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2983,
                      "end": 2989
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2991,
                      "end": 2996
                    }
                  ],
                  "start": 2982,
                  "end": 2997
                },
                "definite": false,
                "start": 2976,
                "end": 2997
              }
            ],
            "declare": false,
            "start": 2972,
            "end": 2998
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
                  "name": "r4b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3007,
                  "end": 3010
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3014,
                      "end": 3019
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3021,
                      "end": 3027
                    }
                  ],
                  "start": 3013,
                  "end": 3028
                },
                "definite": false,
                "start": 3007,
                "end": 3028
              }
            ],
            "declare": false,
            "start": 3003,
            "end": 3029
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
                  "name": "r5arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3039,
                  "end": 3044
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3048,
                          "end": 3049
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3058,
                            "end": 3065
                          },
                          "typeArguments": null,
                          "start": 3058,
                          "end": 3065
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3048,
                        "end": 3065
                      }
                    ],
                    "start": 3047,
                    "end": 3066
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
                            "start": 3070,
                            "end": 3071
                          },
                          "typeArguments": null,
                          "start": 3070,
                          "end": 3071
                        },
                        "start": 3068,
                        "end": 3071
                      },
                      "start": 3067,
                      "end": 3071
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
                            "start": 3076,
                            "end": 3077
                          },
                          "typeArguments": null,
                          "start": 3076,
                          "end": 3077
                        },
                        "start": 3074,
                        "end": 3077
                      },
                      "start": 3073,
                      "end": 3077
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3083,
                        "end": 3084
                      },
                      "typeArguments": null,
                      "start": 3083,
                      "end": 3084
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3085,
                      "end": 3089
                    },
                    "start": 3082,
                    "end": 3089
                  },
                  "id": null,
                  "generator": false,
                  "start": 3047,
                  "end": 3089
                },
                "definite": false,
                "start": 3039,
                "end": 3089
              }
            ],
            "declare": false,
            "start": 3035,
            "end": 3090
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
                  "name": "r5arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3099,
                  "end": 3105
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                "start": 3114,
                                "end": 3117
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3119,
                                  "end": 3125
                                },
                                "start": 3117,
                                "end": 3125
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3114,
                              "end": 3125
                            }
                          ],
                          "start": 3112,
                          "end": 3127
                        },
                        "start": 3110,
                        "end": 3127
                      },
                      "start": 3109,
                      "end": 3127
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
                                "start": 3134,
                                "end": 3137
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3139,
                                  "end": 3145
                                },
                                "start": 3137,
                                "end": 3145
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3134,
                              "end": 3146
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
                                "start": 3147,
                                "end": 3150
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3152,
                                  "end": 3158
                                },
                                "start": 3150,
                                "end": 3158
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3147,
                              "end": 3158
                            }
                          ],
                          "start": 3132,
                          "end": 3160
                        },
                        "start": 3130,
                        "end": 3160
                      },
                      "start": 3129,
                      "end": 3160
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3166,
                        "end": 3170
                      },
                      "typeArguments": null,
                      "start": 3166,
                      "end": 3170
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3171,
                      "end": 3175
                    },
                    "start": 3165,
                    "end": 3175
                  },
                  "id": null,
                  "generator": false,
                  "start": 3108,
                  "end": 3175
                },
                "definite": false,
                "start": 3099,
                "end": 3175
              }
            ],
            "declare": false,
            "start": 3095,
            "end": 3176
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3185,
                  "end": 3187
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3190,
                    "end": 3195
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3196,
                      "end": 3201
                    }
                  ],
                  "optional": false,
                  "start": 3190,
                  "end": 3202
                },
                "definite": false,
                "start": 3185,
                "end": 3202
              }
            ],
            "declare": false,
            "start": 3181,
            "end": 3203
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
                  "name": "r5a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3219,
                  "end": 3222
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3226,
                      "end": 3232
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3234,
                      "end": 3239
                    }
                  ],
                  "start": 3225,
                  "end": 3240
                },
                "definite": false,
                "start": 3219,
                "end": 3240
              }
            ],
            "declare": false,
            "start": 3215,
            "end": 3241
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
                  "name": "r5b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3250,
                  "end": 3253
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3257,
                      "end": 3262
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3264,
                      "end": 3270
                    }
                  ],
                  "start": 3256,
                  "end": 3271
                },
                "definite": false,
                "start": 3250,
                "end": 3271
              }
            ],
            "declare": false,
            "start": 3246,
            "end": 3272
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
                  "name": "r6arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3282,
                  "end": 3287
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                            "start": 3294,
                            "end": 3299
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
                                  "start": 3300,
                                  "end": 3304
                                },
                                "typeArguments": null,
                                "start": 3300,
                                "end": 3304
                              }
                            ],
                            "start": 3299,
                            "end": 3305
                          },
                          "start": 3294,
                          "end": 3305
                        },
                        "start": 3292,
                        "end": 3305
                      },
                      "start": 3291,
                      "end": 3305
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
                            "start": 3310,
                            "end": 3315
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
                                  "start": 3316,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "start": 3316,
                                "end": 3324
                              }
                            ],
                            "start": 3315,
                            "end": 3325
                          },
                          "start": 3310,
                          "end": 3325
                        },
                        "start": 3308,
                        "end": 3325
                      },
                      "start": 3307,
                      "end": 3325
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3331,
                        "end": 3336
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
                              "start": 3337,
                              "end": 3344
                            },
                            "typeArguments": null,
                            "start": 3337,
                            "end": 3344
                          }
                        ],
                        "start": 3336,
                        "end": 3345
                      },
                      "start": 3331,
                      "end": 3345
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3346,
                      "end": 3350
                    },
                    "start": 3330,
                    "end": 3350
                  },
                  "id": null,
                  "generator": false,
                  "start": 3290,
                  "end": 3350
                },
                "definite": false,
                "start": 3282,
                "end": 3350
              }
            ],
            "declare": false,
            "start": 3278,
            "end": 3351
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
                  "name": "r6arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3360,
                  "end": 3366
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3370,
                          "end": 3371
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3380,
                            "end": 3385
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
                                  "start": 3386,
                                  "end": 3394
                                },
                                "typeArguments": null,
                                "start": 3386,
                                "end": 3394
                              }
                            ],
                            "start": 3385,
                            "end": 3395
                          },
                          "start": 3380,
                          "end": 3395
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3370,
                        "end": 3395
                      }
                    ],
                    "start": 3369,
                    "end": 3396
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
                            "start": 3400,
                            "end": 3405
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
                                  "start": 3406,
                                  "end": 3410
                                },
                                "typeArguments": null,
                                "start": 3406,
                                "end": 3410
                              }
                            ],
                            "start": 3405,
                            "end": 3411
                          },
                          "start": 3400,
                          "end": 3411
                        },
                        "start": 3398,
                        "end": 3411
                      },
                      "start": 3397,
                      "end": 3411
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
                            "start": 3416,
                            "end": 3421
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
                                  "start": 3422,
                                  "end": 3426
                                },
                                "typeArguments": null,
                                "start": 3422,
                                "end": 3426
                              }
                            ],
                            "start": 3421,
                            "end": 3427
                          },
                          "start": 3416,
                          "end": 3427
                        },
                        "start": 3414,
                        "end": 3427
                      },
                      "start": 3413,
                      "end": 3427
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3433,
                        "end": 3434
                      },
                      "typeArguments": null,
                      "start": 3433,
                      "end": 3434
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3435,
                      "end": 3439
                    },
                    "start": 3432,
                    "end": 3439
                  },
                  "id": null,
                  "generator": false,
                  "start": 3369,
                  "end": 3439
                },
                "definite": false,
                "start": 3360,
                "end": 3439
              }
            ],
            "declare": false,
            "start": 3356,
            "end": 3440
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3449,
                  "end": 3451
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3454,
                    "end": 3459
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3460,
                      "end": 3465
                    }
                  ],
                  "optional": false,
                  "start": 3454,
                  "end": 3466
                },
                "definite": false,
                "start": 3449,
                "end": 3466
              }
            ],
            "declare": false,
            "start": 3445,
            "end": 3467
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
                  "name": "r6a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3534,
                  "end": 3537
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3541,
                      "end": 3547
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3549,
                      "end": 3554
                    }
                  ],
                  "start": 3540,
                  "end": 3555
                },
                "definite": false,
                "start": 3534,
                "end": 3555
              }
            ],
            "declare": false,
            "start": 3530,
            "end": 3556
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
                  "name": "r6b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3565,
                  "end": 3568
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3572,
                      "end": 3577
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3579,
                      "end": 3585
                    }
                  ],
                  "start": 3571,
                  "end": 3586
                },
                "definite": false,
                "start": 3565,
                "end": 3586
              }
            ],
            "declare": false,
            "start": 3561,
            "end": 3587
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
                  "name": "r7arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3597,
                  "end": 3602
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3606,
                          "end": 3607
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3606,
                        "end": 3607
                      }
                    ],
                    "start": 3605,
                    "end": 3608
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
                                "start": 3614,
                                "end": 3615
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
                                    "start": 3617,
                                    "end": 3618
                                  },
                                  "typeArguments": null,
                                  "start": 3617,
                                  "end": 3618
                                },
                                "start": 3615,
                                "end": 3618
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3614,
                              "end": 3619
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
                                "start": 3620,
                                "end": 3621
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
                                    "start": 3623,
                                    "end": 3624
                                  },
                                  "typeArguments": null,
                                  "start": 3623,
                                  "end": 3624
                                },
                                "start": 3621,
                                "end": 3624
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3620,
                              "end": 3624
                            }
                          ],
                          "start": 3612,
                          "end": 3626
                        },
                        "start": 3610,
                        "end": 3626
                      },
                      "start": 3609,
                      "end": 3626
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3632,
                        "end": 3633
                      },
                      "typeArguments": null,
                      "start": 3632,
                      "end": 3633
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3634,
                      "end": 3638
                    },
                    "start": 3631,
                    "end": 3638
                  },
                  "id": null,
                  "generator": false,
                  "start": 3605,
                  "end": 3638
                },
                "definite": false,
                "start": 3597,
                "end": 3638
              }
            ],
            "declare": false,
            "start": 3593,
            "end": 3639
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
                  "name": "r7arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3648,
                  "end": 3654
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                                "start": 3663,
                                "end": 3664
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3666,
                                  "end": 3672
                                },
                                "start": 3664,
                                "end": 3672
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3663,
                              "end": 3673
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
                                "start": 3674,
                                "end": 3675
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3677,
                                  "end": 3683
                                },
                                "start": 3675,
                                "end": 3683
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3674,
                              "end": 3683
                            }
                          ],
                          "start": 3661,
                          "end": 3685
                        },
                        "start": 3659,
                        "end": 3685
                      },
                      "start": 3658,
                      "end": 3685
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3690,
                    "end": 3691
                  },
                  "id": null,
                  "generator": false,
                  "start": 3657,
                  "end": 3691
                },
                "definite": false,
                "start": 3648,
                "end": 3691
              }
            ],
            "declare": false,
            "start": 3644,
            "end": 3692
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3703
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3706,
                    "end": 3711
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3712,
                      "end": 3717
                    }
                  ],
                  "optional": false,
                  "start": 3706,
                  "end": 3718
                },
                "definite": false,
                "start": 3701,
                "end": 3718
              }
            ],
            "declare": false,
            "start": 3697,
            "end": 3719
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
                  "name": "r7a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3735,
                  "end": 3738
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3742,
                      "end": 3748
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3750,
                      "end": 3755
                    }
                  ],
                  "start": 3741,
                  "end": 3756
                },
                "definite": false,
                "start": 3735,
                "end": 3756
              }
            ],
            "declare": false,
            "start": 3731,
            "end": 3757
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
                  "name": "r7b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3769
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3773,
                      "end": 3778
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3780,
                      "end": 3786
                    }
                  ],
                  "start": 3772,
                  "end": 3787
                },
                "definite": false,
                "start": 3766,
                "end": 3787
              }
            ],
            "declare": false,
            "start": 3762,
            "end": 3788
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
                  "name": "r7arg3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3798,
                  "end": 3804
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 3808,
                          "end": 3809
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3818,
                            "end": 3822
                          },
                          "typeArguments": null,
                          "start": 3818,
                          "end": 3822
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3808,
                        "end": 3822
                      }
                    ],
                    "start": 3807,
                    "end": 3823
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
                                "start": 3829,
                                "end": 3830
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
                                    "start": 3832,
                                    "end": 3833
                                  },
                                  "typeArguments": null,
                                  "start": 3832,
                                  "end": 3833
                                },
                                "start": 3830,
                                "end": 3833
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3829,
                              "end": 3834
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
                                "start": 3835,
                                "end": 3836
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
                                    "start": 3838,
                                    "end": 3839
                                  },
                                  "typeArguments": null,
                                  "start": 3838,
                                  "end": 3839
                                },
                                "start": 3836,
                                "end": 3839
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3835,
                              "end": 3839
                            }
                          ],
                          "start": 3827,
                          "end": 3841
                        },
                        "start": 3825,
                        "end": 3841
                      },
                      "start": 3824,
                      "end": 3841
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3846,
                    "end": 3847
                  },
                  "id": null,
                  "generator": false,
                  "start": 3807,
                  "end": 3847
                },
                "definite": false,
                "start": 3798,
                "end": 3847
              }
            ],
            "declare": false,
            "start": 3794,
            "end": 3848
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
                  "name": "r7c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3857,
                  "end": 3860
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3863,
                    "end": 3868
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3869,
                      "end": 3875
                    }
                  ],
                  "optional": false,
                  "start": 3863,
                  "end": 3876
                },
                "definite": false,
                "start": 3857,
                "end": 3876
              }
            ],
            "declare": false,
            "start": 3853,
            "end": 3877
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
                  "name": "r7d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3939,
                  "end": 3942
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3946,
                      "end": 3952
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3954,
                      "end": 3960
                    }
                  ],
                  "start": 3945,
                  "end": 3961
                },
                "definite": false,
                "start": 3939,
                "end": 3961
              }
            ],
            "declare": false,
            "start": 3935,
            "end": 3962
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
                  "name": "r7e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3971,
                  "end": 3974
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3978,
                      "end": 3984
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3986,
                      "end": 3992
                    }
                  ],
                  "start": 3977,
                  "end": 3993
                },
                "definite": false,
                "start": 3971,
                "end": 3993
              }
            ],
            "declare": false,
            "start": 3967,
            "end": 3994
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
                  "name": "r8arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4004,
                  "end": 4009
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4013,
                          "end": 4014
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4013,
                        "end": 4014
                      }
                    ],
                    "start": 4012,
                    "end": 4015
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
                              "name": "a",
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
                                    "start": 4023,
                                    "end": 4024
                                  },
                                  "typeArguments": null,
                                  "start": 4023,
                                  "end": 4024
                                },
                                "start": 4021,
                                "end": 4024
                              },
                              "start": 4020,
                              "end": 4024
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
                                "start": 4029,
                                "end": 4030
                              },
                              "typeArguments": null,
                              "start": 4029,
                              "end": 4030
                            },
                            "start": 4026,
                            "end": 4030
                          },
                          "start": 4019,
                          "end": 4030
                        },
                        "start": 4017,
                        "end": 4030
                      },
                      "start": 4016,
                      "end": 4030
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
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
                          "start": 4036,
                          "end": 4037
                        },
                        "typeArguments": null,
                        "start": 4036,
                        "end": 4037
                      },
                      "start": 4036,
                      "end": 4039
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4040,
                      "end": 4044
                    },
                    "start": 4035,
                    "end": 4044
                  },
                  "id": null,
                  "generator": false,
                  "start": 4012,
                  "end": 4044
                },
                "definite": false,
                "start": 4004,
                "end": 4044
              }
            ],
            "declare": false,
            "start": 4000,
            "end": 4045
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4054,
                  "end": 4056
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4059,
                    "end": 4064
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4065,
                      "end": 4070
                    }
                  ],
                  "optional": false,
                  "start": 4059,
                  "end": 4071
                },
                "definite": false,
                "start": 4054,
                "end": 4071
              }
            ],
            "declare": false,
            "start": 4050,
            "end": 4072
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
                  "name": "r9arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4089,
                  "end": 4094
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4098,
                          "end": 4099
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4098,
                        "end": 4099
                      }
                    ],
                    "start": 4097,
                    "end": 4100
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
                              "name": "a",
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
                                    "start": 4108,
                                    "end": 4109
                                  },
                                  "typeArguments": null,
                                  "start": 4108,
                                  "end": 4109
                                },
                                "start": 4106,
                                "end": 4109
                              },
                              "start": 4105,
                              "end": 4109
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
                                "start": 4114,
                                "end": 4115
                              },
                              "typeArguments": null,
                              "start": 4114,
                              "end": 4115
                            },
                            "start": 4111,
                            "end": 4115
                          },
                          "start": 4104,
                          "end": 4115
                        },
                        "start": 4102,
                        "end": 4115
                      },
                      "start": 4101,
                      "end": 4115
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4121,
                        "end": 4124
                      },
                      "start": 4121,
                      "end": 4126
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4127,
                      "end": 4131
                    },
                    "start": 4120,
                    "end": 4131
                  },
                  "id": null,
                  "generator": false,
                  "start": 4097,
                  "end": 4131
                },
                "definite": false,
                "start": 4089,
                "end": 4131
              }
            ],
            "declare": false,
            "start": 4085,
            "end": 4132
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4141,
                  "end": 4143
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4146,
                    "end": 4151
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4152,
                      "end": 4157
                    }
                  ],
                  "optional": false,
                  "start": 4146,
                  "end": 4158
                },
                "definite": false,
                "start": 4141,
                "end": 4158
              }
            ],
            "declare": false,
            "start": 4137,
            "end": 4159
          }
        ],
        "start": 178,
        "end": 4315
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4315
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4327,
        "end": 4358
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4382,
              "end": 4386
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                            "start": 4392,
                            "end": 4393
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4392,
                          "end": 4393
                        }
                      ],
                      "start": 4391,
                      "end": 4394
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
                              "start": 4398,
                              "end": 4399
                            },
                            "typeArguments": null,
                            "start": 4398,
                            "end": 4399
                          },
                          "start": 4396,
                          "end": 4399
                        },
                        "start": 4395,
                        "end": 4399
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
                            "start": 4404,
                            "end": 4405
                          },
                          "typeArguments": null,
                          "start": 4404,
                          "end": 4405
                        },
                        "start": 4404,
                        "end": 4407
                      },
                      "start": 4401,
                      "end": 4407
                    },
                    "start": 4391,
                    "end": 4407
                  },
                  "start": 4389,
                  "end": 4407
                },
                "start": 4387,
                "end": 4407
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4417,
                  "end": 4419
                },
                "typeArguments": null,
                "start": 4410,
                "end": 4419
              },
              "start": 4408,
              "end": 4419
            },
            "body": null,
            "expression": false,
            "start": 4365,
            "end": 4420
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4442,
              "end": 4446
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4451,
                    "end": 4454
                  },
                  "start": 4449,
                  "end": 4454
                },
                "start": 4447,
                "end": 4454
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4457,
                "end": 4460
              },
              "start": 4455,
              "end": 4460
            },
            "body": null,
            "expression": false,
            "start": 4425,
            "end": 4461
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
                  "name": "r2arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4470,
                  "end": 4476
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4480,
                          "end": 4481
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4480,
                        "end": 4481
                      }
                    ],
                    "start": 4479,
                    "end": 4482
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
                            "start": 4486,
                            "end": 4487
                          },
                          "typeArguments": null,
                          "start": 4486,
                          "end": 4487
                        },
                        "start": 4484,
                        "end": 4487
                      },
                      "start": 4483,
                      "end": 4487
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 4493,
                        "end": 4495
                      }
                    ],
                    "start": 4492,
                    "end": 4496
                  },
                  "id": null,
                  "generator": false,
                  "start": 4479,
                  "end": 4496
                },
                "definite": false,
                "start": 4470,
                "end": 4496
              }
            ],
            "declare": false,
            "start": 4466,
            "end": 4497
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
                  "typeAnnotation": null,
                  "start": 4506,
                  "end": 4508
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4511,
                    "end": 4515
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4516,
                      "end": 4522
                    }
                  ],
                  "optional": false,
                  "start": 4511,
                  "end": 4523
                },
                "definite": false,
                "start": 4506,
                "end": 4523
              }
            ],
            "declare": false,
            "start": 4502,
            "end": 4524
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4613,
              "end": 4617
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
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
                            "start": 4623,
                            "end": 4624
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4623,
                          "end": 4624
                        }
                      ],
                      "start": 4622,
                      "end": 4625
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
                              "start": 4629,
                              "end": 4630
                            },
                            "typeArguments": null,
                            "start": 4629,
                            "end": 4630
                          },
                          "start": 4627,
                          "end": 4630
                        },
                        "start": 4626,
                        "end": 4630
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4635,
                          "end": 4641
                        },
                        "start": 4635,
                        "end": 4643
                      },
                      "start": 4632,
                      "end": 4643
                    },
                    "start": 4622,
                    "end": 4643
                  },
                  "start": 4620,
                  "end": 4643
                },
                "start": 4618,
                "end": 4643
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4653,
                  "end": 4655
                },
                "typeArguments": null,
                "start": 4646,
                "end": 4655
              },
              "start": 4644,
              "end": 4655
            },
            "body": null,
            "expression": false,
            "start": 4596,
            "end": 4656
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4678,
              "end": 4682
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4687,
                    "end": 4690
                  },
                  "start": 4685,
                  "end": 4690
                },
                "start": 4683,
                "end": 4690
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4693,
                "end": 4696
              },
              "start": 4691,
              "end": 4696
            },
            "body": null,
            "expression": false,
            "start": 4661,
            "end": 4697
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
                  "name": "r3arg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4706,
                  "end": 4712
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
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
                          "start": 4716,
                          "end": 4717
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4716,
                        "end": 4717
                      }
                    ],
                    "start": 4715,
                    "end": 4718
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
                            "start": 4722,
                            "end": 4723
                          },
                          "typeArguments": null,
                          "start": 4722,
                          "end": 4723
                        },
                        "start": 4720,
                        "end": 4723
                      },
                      "start": 4719,
                      "end": 4723
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
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
                          "start": 4729,
                          "end": 4730
                        },
                        "typeArguments": null,
                        "start": 4729,
                        "end": 4730
                      },
                      "start": 4729,
                      "end": 4732
                    },
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4733,
                      "end": 4737
                    },
                    "start": 4728,
                    "end": 4737
                  },
                  "id": null,
                  "generator": false,
                  "start": 4715,
                  "end": 4737
                },
                "definite": false,
                "start": 4706,
                "end": 4737
              }
            ],
            "declare": false,
            "start": 4702,
            "end": 4738
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4747,
                  "end": 4749
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4752,
                    "end": 4756
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4757,
                      "end": 4763
                    }
                  ],
                  "optional": false,
                  "start": 4752,
                  "end": 4764
                },
                "definite": false,
                "start": 4747,
                "end": 4764
              }
            ],
            "declare": false,
            "start": 4743,
            "end": 4765
          }
        ],
        "start": 4359,
        "end": 4774
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4317,
      "end": 4774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4774
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 161,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 222,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 230,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 264,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 270,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 322,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 335,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 371,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 409,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 423,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 438,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
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
    "value": "any",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 480,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 488,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
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
    "value": "arg",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 538,
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
    "value": "Base",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 576,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Identifier",
    "value": "any",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 618,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 654,
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
    "value": "=>",
    "start": 660,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 663,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 688,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 716,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 726,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 741,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 749,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 763,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 773,
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
    "value": "declare",
    "start": 783,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 791,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 800,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 817,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 825,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 835,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 850,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 858,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 893,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 916,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 921,
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
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 931,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 946,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 951,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 959,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 974,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 977,
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
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 984,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 999,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1007,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1059,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1079,
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
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
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
    "value": "Derived2",
    "start": 1095,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1106,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1141,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
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
    "value": "x",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1253,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1276,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1311,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1319,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1468,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1511,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
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
    "value": "number",
    "start": 1531,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1571,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1581,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1607,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1617,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
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
    "value": "boolean",
    "start": 1638,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1672,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1680,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1705,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1723,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1732,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1738,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1773,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1781,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1815,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1832,
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
    "value": "T",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1887,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1895,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1930,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1938,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1988,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2004,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2013,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2019,
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
    "value": "any",
    "start": 2023,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2029,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2043,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2048,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053
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
    "type": "Punctuator",
    "value": ",",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2074,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2092,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "String",
    "value": "''",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2137,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2145,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2156,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2160,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2180,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2188,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2198,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2206,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "String",
    "value": "''",
    "start": 2210,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 2225,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2236,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2244,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2252,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2260,
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
    "value": "V",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2271,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2279,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2293,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2301,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2307,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "type": "Punctuator",
    "value": "<",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2333,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2337,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2362,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2365,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2374,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2381,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2387,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2391,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2400,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2410,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 2414,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2419,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 2424,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2443,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 2447,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 2478,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 2485,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2492,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2510,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2521,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2529,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2537,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2545,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2558,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2566,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2576,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2584,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2589,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2600,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2606,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2616,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2622,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2636,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2650,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2655,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2661,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2664,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2677,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2689,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2692,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2701,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2708,
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
    "value": "=>",
    "start": 2714,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2718,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2726,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2736,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2740,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2750,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2769,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 2773,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2780,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2788,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2800,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2811,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2818,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2832,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2847,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2855,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2864,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2875,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2881,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2891,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2895,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2905,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2911,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2919,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2923,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2928,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2938,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 2942,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2947,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2953,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2972,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 2976,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2983,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2991,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3003,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 3007,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 3014,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3021,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 3039,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3050,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3058,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3079,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3085,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3095,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3099,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3119,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3134,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3139,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3147,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3152,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3162,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3166,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3171,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3181,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 3185,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 3190,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3215,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 3219,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3226,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 3234,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3246,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 3250,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 3257,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3264,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3278,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 3282,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3294,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3300,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3310,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3316,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3327,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3331,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3337,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3346,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3356,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3360,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3372,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3380,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3386,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3400,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3406,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3416,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3422,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3429,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3435,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3445,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 3449,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 3454,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 3460,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3530,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 3534,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3541,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 3549,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3561,
    "end": 3564
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 3565,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 3572,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3579,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3593,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "r7arg",
    "start": 3597,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3628,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3634,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3644,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3648,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3666,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3677,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3687,
    "end": 3689
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3697,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 3701,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3706,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "r7arg",
    "start": 3712,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3731,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 3735,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3742,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "r7arg",
    "start": 3750,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3762,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 3766,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "r7arg",
    "start": 3773,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3780,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3794,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 3798,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3810,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3818,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3829,
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
    "value": "T",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "T",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3843,
    "end": 3845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3853,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "r7c",
    "start": 3857,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3863,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 3869,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3935,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "r7d",
    "start": 3939,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3946,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 3954,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3967,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "r7e",
    "start": 3971,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 3978,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3986,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4000,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "r8arg",
    "start": 4004,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4026,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4032,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4040,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4050,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 4054,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 4059,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Identifier",
    "value": "r8arg",
    "start": 4065,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4085,
    "end": 4088
  },
  {
    "type": "Identifier",
    "value": "r9arg",
    "start": 4089,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4111,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4117,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4121,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4127,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4137,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 4141,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 4146,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "r9arg",
    "start": 4152,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4317,
    "end": 4326
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 4327,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4365,
    "end": 4372
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4373,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4382,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4387,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4401,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4410,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4417,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4425,
    "end": 4432
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4433,
    "end": 4441
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4442,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4447,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4451,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4457,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4466,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 4470,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4489,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "String",
    "value": "''",
    "start": 4493,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4502,
    "end": 4505
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 4506,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4511,
    "end": 4515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 4516,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4596,
    "end": 4603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4604,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4613,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4618,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4632,
    "end": 4634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4635,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4643,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4646,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4653,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4661,
    "end": 4668
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4669,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4678,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4683,
    "end": 4685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4687,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4690,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4693,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4702,
    "end": 4705
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 4706,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4725,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4733,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4743,
    "end": 4746
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4747,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4752,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 4757,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4773,
    "end": 4774
  }
]
```
