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
                            "start": 405,
                            "end": 411
                          },
                          "start": 403,
                          "end": 411
                        },
                        "start": 402,
                        "end": 411
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 416,
                          "end": 422
                        },
                        "start": 416,
                        "end": 424
                      },
                      "start": 413,
                      "end": 424
                    },
                    "start": 397,
                    "end": 424
                  },
                  "start": 395,
                  "end": 424
                },
                "start": 393,
                "end": 424
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
                  "start": 434,
                  "end": 436
                },
                "typeArguments": null,
                "start": 427,
                "end": 436
              },
              "start": 425,
              "end": 436
            },
            "body": null,
            "expression": false,
            "start": 371,
            "end": 437
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 463
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
                    "start": 468,
                    "end": 471
                  },
                  "start": 466,
                  "end": 471
                },
                "start": 464,
                "end": 471
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              },
              "start": 472,
              "end": 477
            },
            "body": null,
            "expression": false,
            "start": 442,
            "end": 478
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 505
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 528,
                                      "end": 532
                                    },
                                    "typeArguments": null,
                                    "start": 528,
                                    "end": 532
                                  },
                                  "start": 526,
                                  "end": 532
                                },
                                "start": 523,
                                "end": 532
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
                                  "start": 537,
                                  "end": 544
                                },
                                "typeArguments": null,
                                "start": 537,
                                "end": 544
                              },
                              "start": 534,
                              "end": 544
                            },
                            "start": 518,
                            "end": 544
                          },
                          "start": 516,
                          "end": 544
                        },
                        "start": 515,
                        "end": 544
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 557,
                                  "end": 561
                                },
                                "typeArguments": null,
                                "start": 557,
                                "end": 561
                              },
                              "start": 555,
                              "end": 561
                            },
                            "start": 554,
                            "end": 561
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
                              "start": 566,
                              "end": 574
                            },
                            "typeArguments": null,
                            "start": 566,
                            "end": 574
                          },
                          "start": 563,
                          "end": 574
                        },
                        "start": 549,
                        "end": 574
                      },
                      "start": 546,
                      "end": 574
                    },
                    "start": 510,
                    "end": 574
                  },
                  "start": 508,
                  "end": 574
                },
                "start": 506,
                "end": 574
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
                  "start": 584,
                  "end": 586
                },
                "typeArguments": null,
                "start": 577,
                "end": 586
              },
              "start": 575,
              "end": 586
            },
            "body": null,
            "expression": false,
            "start": 484,
            "end": 587
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 613
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
                    "start": 618,
                    "end": 621
                  },
                  "start": 616,
                  "end": 621
                },
                "start": 614,
                "end": 621
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 624,
                "end": 627
              },
              "start": 622,
              "end": 627
            },
            "body": null,
            "expression": false,
            "start": 592,
            "end": 628
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 655
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 678,
                                      "end": 682
                                    },
                                    "typeArguments": null,
                                    "start": 678,
                                    "end": 682
                                  },
                                  "start": 676,
                                  "end": 682
                                },
                                "start": 673,
                                "end": 682
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
                                  "start": 687,
                                  "end": 694
                                },
                                "typeArguments": null,
                                "start": 687,
                                "end": 694
                              },
                              "start": 684,
                              "end": 694
                            },
                            "start": 668,
                            "end": 694
                          },
                          "start": 666,
                          "end": 694
                        },
                        "start": 665,
                        "end": 694
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                                      "start": 710,
                                      "end": 714
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 714
                                  },
                                  "start": 708,
                                  "end": 714
                                },
                                "start": 704,
                                "end": 714
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
                                  "start": 719,
                                  "end": 726
                                },
                                "typeArguments": null,
                                "start": 719,
                                "end": 726
                              },
                              "start": 716,
                              "end": 726
                            },
                            "start": 699,
                            "end": 726
                          },
                          "start": 697,
                          "end": 726
                        },
                        "start": 696,
                        "end": 726
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 739,
                                  "end": 743
                                },
                                "typeArguments": null,
                                "start": 739,
                                "end": 743
                              },
                              "start": 737,
                              "end": 743
                            },
                            "start": 736,
                            "end": 743
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
                              "start": 748,
                              "end": 755
                            },
                            "typeArguments": null,
                            "start": 748,
                            "end": 755
                          },
                          "start": 745,
                          "end": 755
                        },
                        "start": 731,
                        "end": 755
                      },
                      "start": 728,
                      "end": 755
                    },
                    "start": 660,
                    "end": 755
                  },
                  "start": 658,
                  "end": 755
                },
                "start": 656,
                "end": 755
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
                  "start": 765,
                  "end": 767
                },
                "typeArguments": null,
                "start": 758,
                "end": 767
              },
              "start": 756,
              "end": 767
            },
            "body": null,
            "expression": false,
            "start": 634,
            "end": 768
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 794
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
                    "start": 799,
                    "end": 802
                  },
                  "start": 797,
                  "end": 802
                },
                "start": 795,
                "end": 802
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 805,
                "end": 808
              },
              "start": 803,
              "end": 808
            },
            "body": null,
            "expression": false,
            "start": 773,
            "end": 809
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 837
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
                          "start": 850,
                          "end": 851
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
                                "start": 853,
                                "end": 857
                              },
                              "typeArguments": null,
                              "start": 853,
                              "end": 857
                            },
                            "start": 853,
                            "end": 859
                          },
                          "start": 851,
                          "end": 859
                        },
                        "value": null,
                        "start": 847,
                        "end": 859
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
                          "start": 864,
                          "end": 868
                        },
                        "typeArguments": null,
                        "start": 864,
                        "end": 868
                      },
                      "start": 861,
                      "end": 868
                    },
                    "start": 842,
                    "end": 868
                  },
                  "start": 840,
                  "end": 868
                },
                "start": 838,
                "end": 868
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
                  "start": 878,
                  "end": 880
                },
                "typeArguments": null,
                "start": 871,
                "end": 880
              },
              "start": 869,
              "end": 880
            },
            "body": null,
            "expression": false,
            "start": 815,
            "end": 881
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
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
                    "start": 913,
                    "end": 916
                  },
                  "start": 911,
                  "end": 916
                },
                "start": 909,
                "end": 916
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 919,
                "end": 922
              },
              "start": 917,
              "end": 922
            },
            "body": null,
            "expression": false,
            "start": 886,
            "end": 923
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 951
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
                                  "start": 966,
                                  "end": 969
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 971,
                                    "end": 977
                                  },
                                  "start": 969,
                                  "end": 977
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 966,
                                "end": 977
                              }
                            ],
                            "start": 964,
                            "end": 979
                          },
                          "start": 962,
                          "end": 979
                        },
                        "start": 961,
                        "end": 979
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
                                  "start": 986,
                                  "end": 989
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 991,
                                    "end": 997
                                  },
                                  "start": 989,
                                  "end": 997
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 986,
                                "end": 998
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
                                "end": 1010
                              }
                            ],
                            "start": 984,
                            "end": 1012
                          },
                          "start": 982,
                          "end": 1012
                        },
                        "start": 981,
                        "end": 1012
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
                          "start": 1017,
                          "end": 1021
                        },
                        "typeArguments": null,
                        "start": 1017,
                        "end": 1021
                      },
                      "start": 1014,
                      "end": 1021
                    },
                    "start": 956,
                    "end": 1021
                  },
                  "start": 954,
                  "end": 1021
                },
                "start": 952,
                "end": 1021
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
                  "start": 1031,
                  "end": 1033
                },
                "typeArguments": null,
                "start": 1024,
                "end": 1033
              },
              "start": 1022,
              "end": 1033
            },
            "body": null,
            "expression": false,
            "start": 929,
            "end": 1034
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1061
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
                    "start": 1066,
                    "end": 1069
                  },
                  "start": 1064,
                  "end": 1069
                },
                "start": 1062,
                "end": 1069
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1072,
                "end": 1075
              },
              "start": 1070,
              "end": 1075
            },
            "body": null,
            "expression": false,
            "start": 1039,
            "end": 1076
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1104
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
                              "start": 1117,
                              "end": 1122
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
                                    "start": 1123,
                                    "end": 1127
                                  },
                                  "typeArguments": null,
                                  "start": 1123,
                                  "end": 1127
                                }
                              ],
                              "start": 1122,
                              "end": 1128
                            },
                            "start": 1117,
                            "end": 1128
                          },
                          "start": 1115,
                          "end": 1128
                        },
                        "start": 1114,
                        "end": 1128
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
                              "start": 1133,
                              "end": 1138
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
                                    "start": 1139,
                                    "end": 1147
                                  },
                                  "typeArguments": null,
                                  "start": 1139,
                                  "end": 1147
                                }
                              ],
                              "start": 1138,
                              "end": 1148
                            },
                            "start": 1133,
                            "end": 1148
                          },
                          "start": 1131,
                          "end": 1148
                        },
                        "start": 1130,
                        "end": 1148
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
                          "start": 1153,
                          "end": 1158
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
                                "start": 1159,
                                "end": 1166
                              },
                              "typeArguments": null,
                              "start": 1159,
                              "end": 1166
                            }
                          ],
                          "start": 1158,
                          "end": 1167
                        },
                        "start": 1153,
                        "end": 1167
                      },
                      "start": 1150,
                      "end": 1167
                    },
                    "start": 1109,
                    "end": 1167
                  },
                  "start": 1107,
                  "end": 1167
                },
                "start": 1105,
                "end": 1167
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
                  "start": 1177,
                  "end": 1179
                },
                "typeArguments": null,
                "start": 1170,
                "end": 1179
              },
              "start": 1168,
              "end": 1179
            },
            "body": null,
            "expression": false,
            "start": 1082,
            "end": 1180
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1207
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
                    "start": 1212,
                    "end": 1215
                  },
                  "start": 1210,
                  "end": 1215
                },
                "start": 1208,
                "end": 1215
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1218,
                "end": 1221
              },
              "start": 1216,
              "end": 1221
            },
            "body": null,
            "expression": false,
            "start": 1185,
            "end": 1222
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1250
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
                                  "start": 1265,
                                  "end": 1266
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1268,
                                    "end": 1274
                                  },
                                  "start": 1266,
                                  "end": 1274
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1265,
                                "end": 1275
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
                                  "start": 1276,
                                  "end": 1277
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1279,
                                    "end": 1285
                                  },
                                  "start": 1277,
                                  "end": 1285
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1276,
                                "end": 1285
                              }
                            ],
                            "start": 1263,
                            "end": 1287
                          },
                          "start": 1261,
                          "end": 1287
                        },
                        "start": 1260,
                        "end": 1287
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1292,
                        "end": 1298
                      },
                      "start": 1289,
                      "end": 1298
                    },
                    "start": 1255,
                    "end": 1298
                  },
                  "start": 1253,
                  "end": 1298
                },
                "start": 1251,
                "end": 1298
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
                  "start": 1308,
                  "end": 1310
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1310
              },
              "start": 1299,
              "end": 1310
            },
            "body": null,
            "expression": false,
            "start": 1228,
            "end": 1311
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1338
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
                    "start": 1343,
                    "end": 1346
                  },
                  "start": 1341,
                  "end": 1346
                },
                "start": 1339,
                "end": 1346
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1349,
                "end": 1352
              },
              "start": 1347,
              "end": 1352
            },
            "body": null,
            "expression": false,
            "start": 1316,
            "end": 1353
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1381
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
                        "type": "TSConstructSignatureDeclaration",
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
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1524,
                                            "end": 1530
                                          },
                                          "start": 1522,
                                          "end": 1530
                                        },
                                        "start": 1521,
                                        "end": 1530
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1533,
                                        "end": 1539
                                      },
                                      "start": 1531,
                                      "end": 1539
                                    },
                                    "start": 1516,
                                    "end": 1540
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1562,
                                            "end": 1568
                                          },
                                          "start": 1560,
                                          "end": 1568
                                        },
                                        "start": 1558,
                                        "end": 1568
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1571,
                                        "end": 1577
                                      },
                                      "start": 1569,
                                      "end": 1577
                                    },
                                    "start": 1553,
                                    "end": 1578
                                  }
                                ],
                                "start": 1502,
                                "end": 1588
                              },
                              "start": 1500,
                              "end": 1588
                            },
                            "start": 1499,
                            "end": 1588
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 1591,
                              "end": 1597
                            },
                            "start": 1591,
                            "end": 1599
                          },
                          "start": 1589,
                          "end": 1599
                        },
                        "start": 1494,
                        "end": 1600
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1639,
                                            "end": 1646
                                          },
                                          "start": 1637,
                                          "end": 1646
                                        },
                                        "start": 1636,
                                        "end": 1646
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1649,
                                        "end": 1656
                                      },
                                      "start": 1647,
                                      "end": 1656
                                    },
                                    "start": 1631,
                                    "end": 1657
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1679,
                                            "end": 1686
                                          },
                                          "start": 1677,
                                          "end": 1686
                                        },
                                        "start": 1675,
                                        "end": 1686
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1689,
                                        "end": 1696
                                      },
                                      "start": 1687,
                                      "end": 1696
                                    },
                                    "start": 1670,
                                    "end": 1697
                                  }
                                ],
                                "start": 1617,
                                "end": 1707
                              },
                              "start": 1615,
                              "end": 1707
                            },
                            "start": 1614,
                            "end": 1707
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 1710,
                              "end": 1717
                            },
                            "start": 1710,
                            "end": 1719
                          },
                          "start": 1708,
                          "end": 1719
                        },
                        "start": 1609,
                        "end": 1720
                      }
                    ],
                    "start": 1386,
                    "end": 1726
                  },
                  "start": 1384,
                  "end": 1726
                },
                "start": 1382,
                "end": 1726
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
                  "start": 1736,
                  "end": 1738
                },
                "typeArguments": null,
                "start": 1729,
                "end": 1738
              },
              "start": 1727,
              "end": 1738
            },
            "body": null,
            "expression": false,
            "start": 1359,
            "end": 1739
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1766
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
                    "start": 1771,
                    "end": 1774
                  },
                  "start": 1769,
                  "end": 1774
                },
                "start": 1767,
                "end": 1774
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1777,
                "end": 1780
              },
              "start": 1775,
              "end": 1780
            },
            "body": null,
            "expression": false,
            "start": 1744,
            "end": 1781
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1809
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
                        "type": "TSConstructSignatureDeclaration",
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
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1851,
                                            "end": 1852
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1861,
                                              "end": 1868
                                            },
                                            "typeArguments": null,
                                            "start": 1861,
                                            "end": 1868
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1851,
                                          "end": 1868
                                        }
                                      ],
                                      "start": 1850,
                                      "end": 1869
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
                                              "start": 1873,
                                              "end": 1874
                                            },
                                            "typeArguments": null,
                                            "start": 1873,
                                            "end": 1874
                                          },
                                          "start": 1871,
                                          "end": 1874
                                        },
                                        "start": 1870,
                                        "end": 1874
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
                                          "start": 1877,
                                          "end": 1878
                                        },
                                        "typeArguments": null,
                                        "start": 1877,
                                        "end": 1878
                                      },
                                      "start": 1875,
                                      "end": 1878
                                    },
                                    "start": 1846,
                                    "end": 1879
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1897,
                                            "end": 1898
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1907,
                                              "end": 1911
                                            },
                                            "typeArguments": null,
                                            "start": 1907,
                                            "end": 1911
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1897,
                                          "end": 1911
                                        }
                                      ],
                                      "start": 1896,
                                      "end": 1912
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
                                              "start": 1916,
                                              "end": 1917
                                            },
                                            "typeArguments": null,
                                            "start": 1916,
                                            "end": 1917
                                          },
                                          "start": 1914,
                                          "end": 1917
                                        },
                                        "start": 1913,
                                        "end": 1917
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
                                          "start": 1920,
                                          "end": 1921
                                        },
                                        "typeArguments": null,
                                        "start": 1920,
                                        "end": 1921
                                      },
                                      "start": 1918,
                                      "end": 1921
                                    },
                                    "start": 1892,
                                    "end": 1922
                                  }
                                ],
                                "start": 1832,
                                "end": 1932
                              },
                              "start": 1830,
                              "end": 1932
                            },
                            "start": 1829,
                            "end": 1932
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1935,
                              "end": 1938
                            },
                            "start": 1935,
                            "end": 1940
                          },
                          "start": 1933,
                          "end": 1940
                        },
                        "start": 1824,
                        "end": 1941
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 1977,
                                            "end": 1978
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Derived2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1987,
                                              "end": 1995
                                            },
                                            "typeArguments": null,
                                            "start": 1987,
                                            "end": 1995
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 1977,
                                          "end": 1995
                                        }
                                      ],
                                      "start": 1976,
                                      "end": 1996
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
                                              "start": 2000,
                                              "end": 2001
                                            },
                                            "typeArguments": null,
                                            "start": 2000,
                                            "end": 2001
                                          },
                                          "start": 1998,
                                          "end": 2001
                                        },
                                        "start": 1997,
                                        "end": 2001
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
                                          "start": 2004,
                                          "end": 2005
                                        },
                                        "typeArguments": null,
                                        "start": 2004,
                                        "end": 2005
                                      },
                                      "start": 2002,
                                      "end": 2005
                                    },
                                    "start": 1972,
                                    "end": 2006
                                  },
                                  {
                                    "type": "TSConstructSignatureDeclaration",
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
                                            "start": 2024,
                                            "end": 2025
                                          },
                                          "constraint": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2034,
                                              "end": 2038
                                            },
                                            "typeArguments": null,
                                            "start": 2034,
                                            "end": 2038
                                          },
                                          "default": null,
                                          "in": false,
                                          "out": false,
                                          "const": false,
                                          "start": 2024,
                                          "end": 2038
                                        }
                                      ],
                                      "start": 2023,
                                      "end": 2039
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
                                              "start": 2043,
                                              "end": 2044
                                            },
                                            "typeArguments": null,
                                            "start": 2043,
                                            "end": 2044
                                          },
                                          "start": 2041,
                                          "end": 2044
                                        },
                                        "start": 2040,
                                        "end": 2044
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
                                          "start": 2047,
                                          "end": 2048
                                        },
                                        "typeArguments": null,
                                        "start": 2047,
                                        "end": 2048
                                      },
                                      "start": 2045,
                                      "end": 2048
                                    },
                                    "start": 2019,
                                    "end": 2049
                                  }
                                ],
                                "start": 1958,
                                "end": 2059
                              },
                              "start": 1956,
                              "end": 2059
                            },
                            "start": 1955,
                            "end": 2059
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 2062,
                              "end": 2065
                            },
                            "start": 2062,
                            "end": 2067
                          },
                          "start": 2060,
                          "end": 2067
                        },
                        "start": 1950,
                        "end": 2068
                      }
                    ],
                    "start": 1814,
                    "end": 2074
                  },
                  "start": 1812,
                  "end": 2074
                },
                "start": 1810,
                "end": 2074
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
                  "start": 2084,
                  "end": 2086
                },
                "typeArguments": null,
                "start": 2077,
                "end": 2086
              },
              "start": 2075,
              "end": 2086
            },
            "body": null,
            "expression": false,
            "start": 1787,
            "end": 2087
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2109,
              "end": 2114
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
                    "start": 2119,
                    "end": 2122
                  },
                  "start": 2117,
                  "end": 2122
                },
                "start": 2115,
                "end": 2122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2125,
                "end": 2128
              },
              "start": 2123,
              "end": 2128
            },
            "body": null,
            "expression": false,
            "start": 2092,
            "end": 2129
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
                  "name": "r1arg1",
                  "optional": false,
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
                              "start": 2152,
                              "end": 2153
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2152,
                            "end": 2153
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2155,
                              "end": 2156
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2155,
                            "end": 2156
                          }
                        ],
                        "start": 2151,
                        "end": 2157
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
                          "type": "TSArrayType",
                          "elementType": {
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
                          "start": 2167,
                          "end": 2170
                        },
                        "start": 2164,
                        "end": 2170
                      },
                      "start": 2147,
                      "end": 2170
                    },
                    "start": 2145,
                    "end": 2170
                  },
                  "start": 2139,
                  "end": 2170
                },
                "init": null,
                "definite": false,
                "start": 2139,
                "end": 2170
              }
            ],
            "declare": false,
            "start": 2135,
            "end": 2171
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
                  "name": "r1arg2",
                  "optional": false,
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
                              "start": 2196,
                              "end": 2202
                            },
                            "start": 2194,
                            "end": 2202
                          },
                          "start": 2193,
                          "end": 2202
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 2207,
                            "end": 2213
                          },
                          "start": 2207,
                          "end": 2215
                        },
                        "start": 2204,
                        "end": 2215
                      },
                      "start": 2188,
                      "end": 2215
                    },
                    "start": 2186,
                    "end": 2215
                  },
                  "start": 2180,
                  "end": 2215
                },
                "init": null,
                "definite": false,
                "start": 2180,
                "end": 2215
              }
            ],
            "declare": false,
            "start": 2176,
            "end": 2216
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
                  "start": 2226,
                  "end": 2228
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2235
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2236,
                      "end": 2242
                    }
                  ],
                  "optional": false,
                  "start": 2231,
                  "end": 2243
                },
                "definite": false,
                "start": 2226,
                "end": 2243
              }
            ],
            "declare": false,
            "start": 2222,
            "end": 2244
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
                  "start": 2260,
                  "end": 2263
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2267,
                      "end": 2273
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2281
                    }
                  ],
                  "start": 2266,
                  "end": 2282
                },
                "definite": false,
                "start": 2260,
                "end": 2282
              }
            ],
            "declare": false,
            "start": 2256,
            "end": 2283
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
                  "start": 2292,
                  "end": 2295
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2299,
                      "end": 2305
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r1arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2313
                    }
                  ],
                  "start": 2298,
                  "end": 2314
                },
                "definite": false,
                "start": 2292,
                "end": 2314
              }
            ],
            "declare": false,
            "start": 2288,
            "end": 2315
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
                  "name": "r2arg1",
                  "optional": false,
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
                              "start": 2338,
                              "end": 2339
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2348,
                                "end": 2352
                              },
                              "typeArguments": null,
                              "start": 2348,
                              "end": 2352
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2338,
                            "end": 2352
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2354,
                              "end": 2355
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2364,
                                "end": 2371
                              },
                              "typeArguments": null,
                              "start": 2364,
                              "end": 2371
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2354,
                            "end": 2371
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2373,
                              "end": 2374
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2383,
                                "end": 2391
                              },
                              "typeArguments": null,
                              "start": 2383,
                              "end": 2391
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2373,
                            "end": 2391
                          }
                        ],
                        "start": 2337,
                        "end": 2392
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 2406,
                                        "end": 2407
                                      },
                                      "typeArguments": null,
                                      "start": 2406,
                                      "end": 2407
                                    },
                                    "start": 2404,
                                    "end": 2407
                                  },
                                  "start": 2401,
                                  "end": 2407
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
                                    "start": 2412,
                                    "end": 2413
                                  },
                                  "typeArguments": null,
                                  "start": 2412,
                                  "end": 2413
                                },
                                "start": 2409,
                                "end": 2413
                              },
                              "start": 2396,
                              "end": 2413
                            },
                            "start": 2394,
                            "end": 2413
                          },
                          "start": 2393,
                          "end": 2413
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2426,
                                    "end": 2427
                                  },
                                  "typeArguments": null,
                                  "start": 2426,
                                  "end": 2427
                                },
                                "start": 2424,
                                "end": 2427
                              },
                              "start": 2423,
                              "end": 2427
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
                                "start": 2432,
                                "end": 2433
                              },
                              "typeArguments": null,
                              "start": 2432,
                              "end": 2433
                            },
                            "start": 2429,
                            "end": 2433
                          },
                          "start": 2418,
                          "end": 2433
                        },
                        "start": 2415,
                        "end": 2433
                      },
                      "start": 2333,
                      "end": 2433
                    },
                    "start": 2331,
                    "end": 2433
                  },
                  "start": 2325,
                  "end": 2433
                },
                "init": null,
                "definite": false,
                "start": 2325,
                "end": 2433
              }
            ],
            "declare": false,
            "start": 2321,
            "end": 2434
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 2469,
                                        "end": 2473
                                      },
                                      "typeArguments": null,
                                      "start": 2469,
                                      "end": 2473
                                    },
                                    "start": 2467,
                                    "end": 2473
                                  },
                                  "start": 2464,
                                  "end": 2473
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
                                    "start": 2478,
                                    "end": 2485
                                  },
                                  "typeArguments": null,
                                  "start": 2478,
                                  "end": 2485
                                },
                                "start": 2475,
                                "end": 2485
                              },
                              "start": 2459,
                              "end": 2485
                            },
                            "start": 2457,
                            "end": 2485
                          },
                          "start": 2456,
                          "end": 2485
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2498,
                                    "end": 2502
                                  },
                                  "typeArguments": null,
                                  "start": 2498,
                                  "end": 2502
                                },
                                "start": 2496,
                                "end": 2502
                              },
                              "start": 2495,
                              "end": 2502
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
                                "start": 2507,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2507,
                              "end": 2515
                            },
                            "start": 2504,
                            "end": 2515
                          },
                          "start": 2490,
                          "end": 2515
                        },
                        "start": 2487,
                        "end": 2515
                      },
                      "start": 2451,
                      "end": 2515
                    },
                    "start": 2449,
                    "end": 2515
                  },
                  "start": 2443,
                  "end": 2515
                },
                "init": null,
                "definite": false,
                "start": 2443,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2439,
            "end": 2516
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
                  "start": 2525,
                  "end": 2527
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2530,
                    "end": 2534
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2541
                    }
                  ],
                  "optional": false,
                  "start": 2530,
                  "end": 2542
                },
                "definite": false,
                "start": 2525,
                "end": 2542
              }
            ],
            "declare": false,
            "start": 2521,
            "end": 2543
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
                  "start": 2559,
                  "end": 2562
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
                      "start": 2566,
                      "end": 2572
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2574,
                      "end": 2580
                    }
                  ],
                  "start": 2565,
                  "end": 2581
                },
                "definite": false,
                "start": 2559,
                "end": 2581
              }
            ],
            "declare": false,
            "start": 2555,
            "end": 2582
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
                  "start": 2591,
                  "end": 2594
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2598,
                      "end": 2604
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2606,
                      "end": 2612
                    }
                  ],
                  "start": 2597,
                  "end": 2613
                },
                "definite": false,
                "start": 2591,
                "end": 2613
              }
            ],
            "declare": false,
            "start": 2587,
            "end": 2614
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
                  "name": "r3arg1",
                  "optional": false,
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
                              "start": 2637,
                              "end": 2638
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2647,
                                "end": 2651
                              },
                              "typeArguments": null,
                              "start": 2647,
                              "end": 2651
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2637,
                            "end": 2651
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2653,
                              "end": 2654
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2663,
                                "end": 2670
                              },
                              "typeArguments": null,
                              "start": 2663,
                              "end": 2670
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2653,
                            "end": 2670
                          }
                        ],
                        "start": 2636,
                        "end": 2671
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 2685,
                                        "end": 2686
                                      },
                                      "typeArguments": null,
                                      "start": 2685,
                                      "end": 2686
                                    },
                                    "start": 2683,
                                    "end": 2686
                                  },
                                  "start": 2680,
                                  "end": 2686
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
                                    "start": 2691,
                                    "end": 2692
                                  },
                                  "typeArguments": null,
                                  "start": 2691,
                                  "end": 2692
                                },
                                "start": 2688,
                                "end": 2692
                              },
                              "start": 2675,
                              "end": 2692
                            },
                            "start": 2673,
                            "end": 2692
                          },
                          "start": 2672,
                          "end": 2692
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
                                            "start": 2706,
                                            "end": 2709
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 2711,
                                              "end": 2717
                                            },
                                            "start": 2709,
                                            "end": 2717
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 2706,
                                          "end": 2718
                                        }
                                      ],
                                      "start": 2704,
                                      "end": 2720
                                    },
                                    "start": 2702,
                                    "end": 2720
                                  },
                                  "start": 2698,
                                  "end": 2720
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
                                    "start": 2725,
                                    "end": 2726
                                  },
                                  "typeArguments": null,
                                  "start": 2725,
                                  "end": 2726
                                },
                                "start": 2722,
                                "end": 2726
                              },
                              "start": 2697,
                              "end": 2726
                            },
                            "start": 2695,
                            "end": 2726
                          },
                          "start": 2694,
                          "end": 2726
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2739,
                                    "end": 2740
                                  },
                                  "typeArguments": null,
                                  "start": 2739,
                                  "end": 2740
                                },
                                "start": 2737,
                                "end": 2740
                              },
                              "start": 2736,
                              "end": 2740
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
                                "start": 2745,
                                "end": 2746
                              },
                              "typeArguments": null,
                              "start": 2745,
                              "end": 2746
                            },
                            "start": 2742,
                            "end": 2746
                          },
                          "start": 2731,
                          "end": 2746
                        },
                        "start": 2728,
                        "end": 2746
                      },
                      "start": 2632,
                      "end": 2746
                    },
                    "start": 2630,
                    "end": 2746
                  },
                  "start": 2624,
                  "end": 2746
                },
                "init": null,
                "definite": false,
                "start": 2624,
                "end": 2746
              }
            ],
            "declare": false,
            "start": 2620,
            "end": 2747
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
                                        "start": 2778,
                                        "end": 2782
                                      },
                                      "typeArguments": null,
                                      "start": 2778,
                                      "end": 2782
                                    },
                                    "start": 2776,
                                    "end": 2782
                                  },
                                  "start": 2773,
                                  "end": 2782
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
                                    "start": 2787,
                                    "end": 2794
                                  },
                                  "typeArguments": null,
                                  "start": 2787,
                                  "end": 2794
                                },
                                "start": 2784,
                                "end": 2794
                              },
                              "start": 2772,
                              "end": 2794
                            },
                            "start": 2770,
                            "end": 2794
                          },
                          "start": 2769,
                          "end": 2794
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
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
                                        "start": 2810,
                                        "end": 2814
                                      },
                                      "typeArguments": null,
                                      "start": 2810,
                                      "end": 2814
                                    },
                                    "start": 2808,
                                    "end": 2814
                                  },
                                  "start": 2804,
                                  "end": 2814
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
                                    "start": 2819,
                                    "end": 2826
                                  },
                                  "typeArguments": null,
                                  "start": 2819,
                                  "end": 2826
                                },
                                "start": 2816,
                                "end": 2826
                              },
                              "start": 2799,
                              "end": 2826
                            },
                            "start": 2797,
                            "end": 2826
                          },
                          "start": 2796,
                          "end": 2826
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "abstract": false,
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
                                    "start": 2839,
                                    "end": 2843
                                  },
                                  "typeArguments": null,
                                  "start": 2839,
                                  "end": 2843
                                },
                                "start": 2837,
                                "end": 2843
                              },
                              "start": 2836,
                              "end": 2843
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
                                "start": 2848,
                                "end": 2855
                              },
                              "typeArguments": null,
                              "start": 2848,
                              "end": 2855
                            },
                            "start": 2845,
                            "end": 2855
                          },
                          "start": 2831,
                          "end": 2855
                        },
                        "start": 2828,
                        "end": 2855
                      },
                      "start": 2764,
                      "end": 2855
                    },
                    "start": 2762,
                    "end": 2855
                  },
                  "start": 2756,
                  "end": 2855
                },
                "init": null,
                "definite": false,
                "start": 2756,
                "end": 2855
              }
            ],
            "declare": false,
            "start": 2752,
            "end": 2856
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
                  "start": 2865,
                  "end": 2867
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2870,
                    "end": 2874
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2875,
                      "end": 2881
                    }
                  ],
                  "optional": false,
                  "start": 2870,
                  "end": 2882
                },
                "definite": false,
                "start": 2865,
                "end": 2882
              }
            ],
            "declare": false,
            "start": 2861,
            "end": 2883
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
                  "start": 2899,
                  "end": 2902
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
                      "start": 2906,
                      "end": 2912
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2914,
                      "end": 2920
                    }
                  ],
                  "start": 2905,
                  "end": 2921
                },
                "definite": false,
                "start": 2899,
                "end": 2921
              }
            ],
            "declare": false,
            "start": 2895,
            "end": 2922
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
                  "start": 2931,
                  "end": 2934
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2938,
                      "end": 2944
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2946,
                      "end": 2952
                    }
                  ],
                  "start": 2937,
                  "end": 2953
                },
                "definite": false,
                "start": 2931,
                "end": 2953
              }
            ],
            "declare": false,
            "start": 2927,
            "end": 2954
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
                  "name": "r4arg1",
                  "optional": false,
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
                              "start": 2977,
                              "end": 2978
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2987,
                                "end": 2994
                              },
                              "typeArguments": null,
                              "start": 2987,
                              "end": 2994
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2977,
                            "end": 2994
                          }
                        ],
                        "start": 2976,
                        "end": 2995
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
                            "start": 2999,
                            "end": 3000
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
                                  "start": 3002,
                                  "end": 3003
                                },
                                "typeArguments": null,
                                "start": 3002,
                                "end": 3003
                              },
                              "start": 3002,
                              "end": 3005
                            },
                            "start": 3000,
                            "end": 3005
                          },
                          "value": null,
                          "start": 2996,
                          "end": 3005
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
                            "start": 3010,
                            "end": 3011
                          },
                          "typeArguments": null,
                          "start": 3010,
                          "end": 3011
                        },
                        "start": 3007,
                        "end": 3011
                      },
                      "start": 2972,
                      "end": 3011
                    },
                    "start": 2970,
                    "end": 3011
                  },
                  "start": 2964,
                  "end": 3011
                },
                "init": null,
                "definite": false,
                "start": 2964,
                "end": 3011
              }
            ],
            "declare": false,
            "start": 2960,
            "end": 3012
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
                            "start": 3037,
                            "end": 3038
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
                                  "start": 3040,
                                  "end": 3044
                                },
                                "typeArguments": null,
                                "start": 3040,
                                "end": 3044
                              },
                              "start": 3040,
                              "end": 3046
                            },
                            "start": 3038,
                            "end": 3046
                          },
                          "value": null,
                          "start": 3034,
                          "end": 3046
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
                            "start": 3051,
                            "end": 3055
                          },
                          "typeArguments": null,
                          "start": 3051,
                          "end": 3055
                        },
                        "start": 3048,
                        "end": 3055
                      },
                      "start": 3029,
                      "end": 3055
                    },
                    "start": 3027,
                    "end": 3055
                  },
                  "start": 3021,
                  "end": 3055
                },
                "init": null,
                "definite": false,
                "start": 3021,
                "end": 3055
              }
            ],
            "declare": false,
            "start": 3017,
            "end": 3056
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
                  "start": 3065,
                  "end": 3067
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3070,
                    "end": 3075
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3076,
                      "end": 3082
                    }
                  ],
                  "optional": false,
                  "start": 3070,
                  "end": 3083
                },
                "definite": false,
                "start": 3065,
                "end": 3083
              }
            ],
            "declare": false,
            "start": 3061,
            "end": 3084
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
                  "start": 3100,
                  "end": 3103
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
                      "start": 3107,
                      "end": 3113
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3115,
                      "end": 3121
                    }
                  ],
                  "start": 3106,
                  "end": 3122
                },
                "definite": false,
                "start": 3100,
                "end": 3122
              }
            ],
            "declare": false,
            "start": 3096,
            "end": 3123
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
                  "start": 3132,
                  "end": 3135
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3139,
                      "end": 3145
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r4arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3147,
                      "end": 3153
                    }
                  ],
                  "start": 3138,
                  "end": 3154
                },
                "definite": false,
                "start": 3132,
                "end": 3154
              }
            ],
            "declare": false,
            "start": 3128,
            "end": 3155
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
                  "name": "r5arg1",
                  "optional": false,
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
                              "start": 3178,
                              "end": 3179
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3188,
                                "end": 3195
                              },
                              "typeArguments": null,
                              "start": 3188,
                              "end": 3195
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3178,
                            "end": 3195
                          }
                        ],
                        "start": 3177,
                        "end": 3196
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
                                "start": 3200,
                                "end": 3201
                              },
                              "typeArguments": null,
                              "start": 3200,
                              "end": 3201
                            },
                            "start": 3198,
                            "end": 3201
                          },
                          "start": 3197,
                          "end": 3201
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
                                "start": 3206,
                                "end": 3207
                              },
                              "typeArguments": null,
                              "start": 3206,
                              "end": 3207
                            },
                            "start": 3204,
                            "end": 3207
                          },
                          "start": 3203,
                          "end": 3207
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
                            "start": 3212,
                            "end": 3213
                          },
                          "typeArguments": null,
                          "start": 3212,
                          "end": 3213
                        },
                        "start": 3209,
                        "end": 3213
                      },
                      "start": 3173,
                      "end": 3213
                    },
                    "start": 3171,
                    "end": 3213
                  },
                  "start": 3165,
                  "end": 3213
                },
                "init": null,
                "definite": false,
                "start": 3165,
                "end": 3213
              }
            ],
            "declare": false,
            "start": 3161,
            "end": 3214
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
                                    "start": 3241,
                                    "end": 3244
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3246,
                                      "end": 3252
                                    },
                                    "start": 3244,
                                    "end": 3252
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3241,
                                  "end": 3252
                                }
                              ],
                              "start": 3239,
                              "end": 3254
                            },
                            "start": 3237,
                            "end": 3254
                          },
                          "start": 3236,
                          "end": 3254
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
                                    "start": 3261,
                                    "end": 3264
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3266,
                                      "end": 3272
                                    },
                                    "start": 3264,
                                    "end": 3272
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3261,
                                  "end": 3273
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
                                    "start": 3274,
                                    "end": 3277
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3279,
                                      "end": 3285
                                    },
                                    "start": 3277,
                                    "end": 3285
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3274,
                                  "end": 3285
                                }
                              ],
                              "start": 3259,
                              "end": 3287
                            },
                            "start": 3257,
                            "end": 3287
                          },
                          "start": 3256,
                          "end": 3287
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
                            "start": 3292,
                            "end": 3296
                          },
                          "typeArguments": null,
                          "start": 3292,
                          "end": 3296
                        },
                        "start": 3289,
                        "end": 3296
                      },
                      "start": 3231,
                      "end": 3296
                    },
                    "start": 3229,
                    "end": 3296
                  },
                  "start": 3223,
                  "end": 3296
                },
                "init": null,
                "definite": false,
                "start": 3223,
                "end": 3296
              }
            ],
            "declare": false,
            "start": 3219,
            "end": 3297
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
                  "start": 3306,
                  "end": 3308
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3311,
                    "end": 3316
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3317,
                      "end": 3323
                    }
                  ],
                  "optional": false,
                  "start": 3311,
                  "end": 3324
                },
                "definite": false,
                "start": 3306,
                "end": 3324
              }
            ],
            "declare": false,
            "start": 3302,
            "end": 3325
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
                  "start": 3341,
                  "end": 3344
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
                      "start": 3348,
                      "end": 3354
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3356,
                      "end": 3362
                    }
                  ],
                  "start": 3347,
                  "end": 3363
                },
                "definite": false,
                "start": 3341,
                "end": 3363
              }
            ],
            "declare": false,
            "start": 3337,
            "end": 3364
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
                  "start": 3373,
                  "end": 3376
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3380,
                      "end": 3386
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r5arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3388,
                      "end": 3394
                    }
                  ],
                  "start": 3379,
                  "end": 3395
                },
                "definite": false,
                "start": 3373,
                "end": 3395
              }
            ],
            "declare": false,
            "start": 3369,
            "end": 3396
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
                  "name": "r6arg1",
                  "optional": false,
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
                                "start": 3422,
                                "end": 3427
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
                                      "start": 3428,
                                      "end": 3432
                                    },
                                    "typeArguments": null,
                                    "start": 3428,
                                    "end": 3432
                                  }
                                ],
                                "start": 3427,
                                "end": 3433
                              },
                              "start": 3422,
                              "end": 3433
                            },
                            "start": 3420,
                            "end": 3433
                          },
                          "start": 3419,
                          "end": 3433
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
                                "start": 3438,
                                "end": 3443
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
                                      "start": 3444,
                                      "end": 3452
                                    },
                                    "typeArguments": null,
                                    "start": 3444,
                                    "end": 3452
                                  }
                                ],
                                "start": 3443,
                                "end": 3453
                              },
                              "start": 3438,
                              "end": 3453
                            },
                            "start": 3436,
                            "end": 3453
                          },
                          "start": 3435,
                          "end": 3453
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
                            "start": 3458,
                            "end": 3463
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
                                  "start": 3464,
                                  "end": 3471
                                },
                                "typeArguments": null,
                                "start": 3464,
                                "end": 3471
                              }
                            ],
                            "start": 3463,
                            "end": 3472
                          },
                          "start": 3458,
                          "end": 3472
                        },
                        "start": 3455,
                        "end": 3472
                      },
                      "start": 3414,
                      "end": 3472
                    },
                    "start": 3412,
                    "end": 3472
                  },
                  "start": 3406,
                  "end": 3472
                },
                "init": null,
                "definite": false,
                "start": 3406,
                "end": 3472
              }
            ],
            "declare": false,
            "start": 3402,
            "end": 3473
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
                              "start": 3495,
                              "end": 3496
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3505,
                                "end": 3510
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
                                      "start": 3511,
                                      "end": 3519
                                    },
                                    "typeArguments": null,
                                    "start": 3511,
                                    "end": 3519
                                  }
                                ],
                                "start": 3510,
                                "end": 3520
                              },
                              "start": 3505,
                              "end": 3520
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3495,
                            "end": 3520
                          }
                        ],
                        "start": 3494,
                        "end": 3521
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
                                "start": 3525,
                                "end": 3530
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
                                      "start": 3531,
                                      "end": 3535
                                    },
                                    "typeArguments": null,
                                    "start": 3531,
                                    "end": 3535
                                  }
                                ],
                                "start": 3530,
                                "end": 3536
                              },
                              "start": 3525,
                              "end": 3536
                            },
                            "start": 3523,
                            "end": 3536
                          },
                          "start": 3522,
                          "end": 3536
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
                                "start": 3541,
                                "end": 3546
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
                                      "start": 3547,
                                      "end": 3551
                                    },
                                    "typeArguments": null,
                                    "start": 3547,
                                    "end": 3551
                                  }
                                ],
                                "start": 3546,
                                "end": 3552
                              },
                              "start": 3541,
                              "end": 3552
                            },
                            "start": 3539,
                            "end": 3552
                          },
                          "start": 3538,
                          "end": 3552
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
                            "start": 3557,
                            "end": 3558
                          },
                          "typeArguments": null,
                          "start": 3557,
                          "end": 3558
                        },
                        "start": 3554,
                        "end": 3558
                      },
                      "start": 3490,
                      "end": 3558
                    },
                    "start": 3488,
                    "end": 3558
                  },
                  "start": 3482,
                  "end": 3558
                },
                "init": null,
                "definite": false,
                "start": 3482,
                "end": 3558
              }
            ],
            "declare": false,
            "start": 3478,
            "end": 3559
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
                  "start": 3568,
                  "end": 3570
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3573,
                    "end": 3578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3579,
                      "end": 3585
                    }
                  ],
                  "optional": false,
                  "start": 3573,
                  "end": 3586
                },
                "definite": false,
                "start": 3568,
                "end": 3586
              }
            ],
            "declare": false,
            "start": 3564,
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
                  "name": "r6a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3658,
                  "end": 3661
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
                      "start": 3665,
                      "end": 3671
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3673,
                      "end": 3679
                    }
                  ],
                  "start": 3664,
                  "end": 3680
                },
                "definite": false,
                "start": 3658,
                "end": 3680
              }
            ],
            "declare": false,
            "start": 3654,
            "end": 3681
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
                  "start": 3690,
                  "end": 3693
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3697,
                      "end": 3703
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r6arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3705,
                      "end": 3711
                    }
                  ],
                  "start": 3696,
                  "end": 3712
                },
                "definite": false,
                "start": 3690,
                "end": 3712
              }
            ],
            "declare": false,
            "start": 3686,
            "end": 3713
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
                  "name": "r7arg1",
                  "optional": false,
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
                              "start": 3736,
                              "end": 3737
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3736,
                            "end": 3737
                          }
                        ],
                        "start": 3735,
                        "end": 3738
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
                                    "start": 3744,
                                    "end": 3745
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
                                        "start": 3747,
                                        "end": 3748
                                      },
                                      "typeArguments": null,
                                      "start": 3747,
                                      "end": 3748
                                    },
                                    "start": 3745,
                                    "end": 3748
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3744,
                                  "end": 3749
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
                                    "start": 3750,
                                    "end": 3751
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
                                        "start": 3753,
                                        "end": 3754
                                      },
                                      "typeArguments": null,
                                      "start": 3753,
                                      "end": 3754
                                    },
                                    "start": 3751,
                                    "end": 3754
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3750,
                                  "end": 3754
                                }
                              ],
                              "start": 3742,
                              "end": 3756
                            },
                            "start": 3740,
                            "end": 3756
                          },
                          "start": 3739,
                          "end": 3756
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
                            "start": 3761,
                            "end": 3762
                          },
                          "typeArguments": null,
                          "start": 3761,
                          "end": 3762
                        },
                        "start": 3758,
                        "end": 3762
                      },
                      "start": 3731,
                      "end": 3762
                    },
                    "start": 3729,
                    "end": 3762
                  },
                  "start": 3723,
                  "end": 3762
                },
                "init": null,
                "definite": false,
                "start": 3723,
                "end": 3762
              }
            ],
            "declare": false,
            "start": 3719,
            "end": 3763
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
                                    "start": 3790,
                                    "end": 3791
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3793,
                                      "end": 3799
                                    },
                                    "start": 3791,
                                    "end": 3799
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3790,
                                  "end": 3800
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
                                    "start": 3801,
                                    "end": 3802
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 3804,
                                      "end": 3810
                                    },
                                    "start": 3802,
                                    "end": 3810
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 3801,
                                  "end": 3810
                                }
                              ],
                              "start": 3788,
                              "end": 3812
                            },
                            "start": 3786,
                            "end": 3812
                          },
                          "start": 3785,
                          "end": 3812
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3817,
                          "end": 3823
                        },
                        "start": 3814,
                        "end": 3823
                      },
                      "start": 3780,
                      "end": 3823
                    },
                    "start": 3778,
                    "end": 3823
                  },
                  "start": 3772,
                  "end": 3823
                },
                "init": null,
                "definite": false,
                "start": 3772,
                "end": 3823
              }
            ],
            "declare": false,
            "start": 3768,
            "end": 3824
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
                  "start": 3833,
                  "end": 3835
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3838,
                    "end": 3843
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3850
                    }
                  ],
                  "optional": false,
                  "start": 3838,
                  "end": 3851
                },
                "definite": false,
                "start": 3833,
                "end": 3851
              }
            ],
            "declare": false,
            "start": 3829,
            "end": 3852
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
                  "start": 3914,
                  "end": 3917
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
                      "start": 3921,
                      "end": 3927
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3929,
                      "end": 3935
                    }
                  ],
                  "start": 3920,
                  "end": 3936
                },
                "definite": false,
                "start": 3914,
                "end": 3936
              }
            ],
            "declare": false,
            "start": 3910,
            "end": 3937
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
                  "start": 3946,
                  "end": 3949
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3953,
                      "end": 3959
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3961,
                      "end": 3967
                    }
                  ],
                  "start": 3952,
                  "end": 3968
                },
                "definite": false,
                "start": 3946,
                "end": 3968
              }
            ],
            "declare": false,
            "start": 3942,
            "end": 3969
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
                              "start": 3992,
                              "end": 3993
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4002,
                                "end": 4006
                              },
                              "typeArguments": null,
                              "start": 4002,
                              "end": 4006
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3992,
                            "end": 4006
                          }
                        ],
                        "start": 3991,
                        "end": 4007
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
                                    "start": 4013,
                                    "end": 4014
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
                                        "start": 4016,
                                        "end": 4017
                                      },
                                      "typeArguments": null,
                                      "start": 4016,
                                      "end": 4017
                                    },
                                    "start": 4014,
                                    "end": 4017
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4013,
                                  "end": 4018
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
                                    "start": 4019,
                                    "end": 4020
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
                                        "start": 4022,
                                        "end": 4023
                                      },
                                      "typeArguments": null,
                                      "start": 4022,
                                      "end": 4023
                                    },
                                    "start": 4020,
                                    "end": 4023
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 4019,
                                  "end": 4023
                                }
                              ],
                              "start": 4011,
                              "end": 4025
                            },
                            "start": 4009,
                            "end": 4025
                          },
                          "start": 4008,
                          "end": 4025
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4030,
                          "end": 4036
                        },
                        "start": 4027,
                        "end": 4036
                      },
                      "start": 3987,
                      "end": 4036
                    },
                    "start": 3985,
                    "end": 4036
                  },
                  "start": 3979,
                  "end": 4036
                },
                "init": null,
                "definite": false,
                "start": 3979,
                "end": 4036
              }
            ],
            "declare": false,
            "start": 3975,
            "end": 4037
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
                  "start": 4046,
                  "end": 4049
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4057
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4058,
                      "end": 4064
                    }
                  ],
                  "optional": false,
                  "start": 4052,
                  "end": 4065
                },
                "definite": false,
                "start": 4046,
                "end": 4065
              }
            ],
            "declare": false,
            "start": 4042,
            "end": 4066
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
                  "start": 4082,
                  "end": 4085
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
                      "start": 4089,
                      "end": 4095
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4097,
                      "end": 4103
                    }
                  ],
                  "start": 4088,
                  "end": 4104
                },
                "definite": false,
                "start": 4082,
                "end": 4104
              }
            ],
            "declare": false,
            "start": 4078,
            "end": 4105
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
                  "start": 4114,
                  "end": 4117
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
                      "start": 4121,
                      "end": 4127
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r7arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4129,
                      "end": 4135
                    }
                  ],
                  "start": 4120,
                  "end": 4136
                },
                "definite": false,
                "start": 4114,
                "end": 4136
              }
            ],
            "declare": false,
            "start": 4110,
            "end": 4137
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
                              "start": 4159,
                              "end": 4160
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4159,
                            "end": 4160
                          }
                        ],
                        "start": 4158,
                        "end": 4161
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 4173,
                                        "end": 4174
                                      },
                                      "typeArguments": null,
                                      "start": 4173,
                                      "end": 4174
                                    },
                                    "start": 4171,
                                    "end": 4174
                                  },
                                  "start": 4170,
                                  "end": 4174
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
                                    "start": 4179,
                                    "end": 4180
                                  },
                                  "typeArguments": null,
                                  "start": 4179,
                                  "end": 4180
                                },
                                "start": 4176,
                                "end": 4180
                              },
                              "start": 4165,
                              "end": 4180
                            },
                            "start": 4163,
                            "end": 4180
                          },
                          "start": 4162,
                          "end": 4180
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
                              "start": 4185,
                              "end": 4186
                            },
                            "typeArguments": null,
                            "start": 4185,
                            "end": 4186
                          },
                          "start": 4185,
                          "end": 4188
                        },
                        "start": 4182,
                        "end": 4188
                      },
                      "start": 4154,
                      "end": 4188
                    },
                    "start": 4152,
                    "end": 4188
                  },
                  "start": 4147,
                  "end": 4188
                },
                "init": null,
                "definite": false,
                "start": 4147,
                "end": 4188
              }
            ],
            "declare": false,
            "start": 4143,
            "end": 4189
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
                  "start": 4198,
                  "end": 4200
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4203,
                    "end": 4208
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r8arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4209,
                      "end": 4214
                    }
                  ],
                  "optional": false,
                  "start": 4203,
                  "end": 4215
                },
                "definite": false,
                "start": 4198,
                "end": 4215
              }
            ],
            "declare": false,
            "start": 4194,
            "end": 4216
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
                              "start": 4245,
                              "end": 4246
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4245,
                            "end": 4246
                          }
                        ],
                        "start": 4244,
                        "end": 4247
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
                              "type": "TSConstructorType",
                              "abstract": false,
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
                                        "start": 4259,
                                        "end": 4260
                                      },
                                      "typeArguments": null,
                                      "start": 4259,
                                      "end": 4260
                                    },
                                    "start": 4257,
                                    "end": 4260
                                  },
                                  "start": 4256,
                                  "end": 4260
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
                                    "start": 4265,
                                    "end": 4266
                                  },
                                  "typeArguments": null,
                                  "start": 4265,
                                  "end": 4266
                                },
                                "start": 4262,
                                "end": 4266
                              },
                              "start": 4251,
                              "end": 4266
                            },
                            "start": 4249,
                            "end": 4266
                          },
                          "start": 4248,
                          "end": 4266
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 4271,
                            "end": 4274
                          },
                          "start": 4271,
                          "end": 4276
                        },
                        "start": 4268,
                        "end": 4276
                      },
                      "start": 4240,
                      "end": 4276
                    },
                    "start": 4238,
                    "end": 4276
                  },
                  "start": 4233,
                  "end": 4276
                },
                "init": null,
                "definite": false,
                "start": 4233,
                "end": 4276
              }
            ],
            "declare": false,
            "start": 4229,
            "end": 4277
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
                  "start": 4286,
                  "end": 4288
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4291,
                    "end": 4296
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r9arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4297,
                      "end": 4302
                    }
                  ],
                  "optional": false,
                  "start": 4291,
                  "end": 4303
                },
                "definite": false,
                "start": 4286,
                "end": 4303
              }
            ],
            "declare": false,
            "start": 4282,
            "end": 4304
          }
        ],
        "start": 178,
        "end": 4463
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 4463
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithGenericSignaturesInBaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4475,
        "end": 4506
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
              "start": 4530,
              "end": 4534
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
                            "start": 4544,
                            "end": 4545
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4544,
                          "end": 4545
                        }
                      ],
                      "start": 4543,
                      "end": 4546
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
                              "start": 4550,
                              "end": 4551
                            },
                            "typeArguments": null,
                            "start": 4550,
                            "end": 4551
                          },
                          "start": 4548,
                          "end": 4551
                        },
                        "start": 4547,
                        "end": 4551
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
                            "start": 4556,
                            "end": 4557
                          },
                          "typeArguments": null,
                          "start": 4556,
                          "end": 4557
                        },
                        "start": 4556,
                        "end": 4559
                      },
                      "start": 4553,
                      "end": 4559
                    },
                    "start": 4539,
                    "end": 4559
                  },
                  "start": 4537,
                  "end": 4559
                },
                "start": 4535,
                "end": 4559
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
                  "start": 4569,
                  "end": 4571
                },
                "typeArguments": null,
                "start": 4562,
                "end": 4571
              },
              "start": 4560,
              "end": 4571
            },
            "body": null,
            "expression": false,
            "start": 4513,
            "end": 4572
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4594,
              "end": 4598
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
                    "start": 4603,
                    "end": 4606
                  },
                  "start": 4601,
                  "end": 4606
                },
                "start": 4599,
                "end": 4606
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4609,
                "end": 4612
              },
              "start": 4607,
              "end": 4612
            },
            "body": null,
            "expression": false,
            "start": 4577,
            "end": 4613
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
                              "start": 4635,
                              "end": 4636
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4635,
                            "end": 4636
                          }
                        ],
                        "start": 4634,
                        "end": 4637
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
                                "start": 4641,
                                "end": 4642
                              },
                              "typeArguments": null,
                              "start": 4641,
                              "end": 4642
                            },
                            "start": 4639,
                            "end": 4642
                          },
                          "start": 4638,
                          "end": 4642
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 4647,
                            "end": 4653
                          },
                          "start": 4647,
                          "end": 4655
                        },
                        "start": 4644,
                        "end": 4655
                      },
                      "start": 4630,
                      "end": 4655
                    },
                    "start": 4628,
                    "end": 4655
                  },
                  "start": 4622,
                  "end": 4655
                },
                "init": null,
                "definite": false,
                "start": 4622,
                "end": 4655
              }
            ],
            "declare": false,
            "start": 4618,
            "end": 4656
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
                  "start": 4665,
                  "end": 4667
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4670,
                    "end": 4674
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r2arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4675,
                      "end": 4681
                    }
                  ],
                  "optional": false,
                  "start": 4670,
                  "end": 4682
                },
                "definite": false,
                "start": 4665,
                "end": 4682
              }
            ],
            "declare": false,
            "start": 4661,
            "end": 4683
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4772,
              "end": 4776
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
                            "start": 4786,
                            "end": 4787
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 4786,
                          "end": 4787
                        }
                      ],
                      "start": 4785,
                      "end": 4788
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
                              "start": 4792,
                              "end": 4793
                            },
                            "typeArguments": null,
                            "start": 4792,
                            "end": 4793
                          },
                          "start": 4790,
                          "end": 4793
                        },
                        "start": 4789,
                        "end": 4793
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 4798,
                          "end": 4804
                        },
                        "start": 4798,
                        "end": 4806
                      },
                      "start": 4795,
                      "end": 4806
                    },
                    "start": 4781,
                    "end": 4806
                  },
                  "start": 4779,
                  "end": 4806
                },
                "start": 4777,
                "end": 4806
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
                  "start": 4816,
                  "end": 4818
                },
                "typeArguments": null,
                "start": 4809,
                "end": 4818
              },
              "start": 4807,
              "end": 4818
            },
            "body": null,
            "expression": false,
            "start": 4755,
            "end": 4819
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4841,
              "end": 4845
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
                    "start": 4850,
                    "end": 4853
                  },
                  "start": 4848,
                  "end": 4853
                },
                "start": 4846,
                "end": 4853
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4856,
                "end": 4859
              },
              "start": 4854,
              "end": 4859
            },
            "body": null,
            "expression": false,
            "start": 4824,
            "end": 4860
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
                              "start": 4882,
                              "end": 4883
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4882,
                            "end": 4883
                          }
                        ],
                        "start": 4881,
                        "end": 4884
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
                                "start": 4888,
                                "end": 4889
                              },
                              "typeArguments": null,
                              "start": 4888,
                              "end": 4889
                            },
                            "start": 4886,
                            "end": 4889
                          },
                          "start": 4885,
                          "end": 4889
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
                              "start": 4894,
                              "end": 4895
                            },
                            "typeArguments": null,
                            "start": 4894,
                            "end": 4895
                          },
                          "start": 4894,
                          "end": 4897
                        },
                        "start": 4891,
                        "end": 4897
                      },
                      "start": 4877,
                      "end": 4897
                    },
                    "start": 4875,
                    "end": 4897
                  },
                  "start": 4869,
                  "end": 4897
                },
                "init": null,
                "definite": false,
                "start": 4869,
                "end": 4897
              }
            ],
            "declare": false,
            "start": 4865,
            "end": 4898
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
                  "start": 4907,
                  "end": 4909
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4912,
                    "end": 4916
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r3arg2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4917,
                      "end": 4923
                    }
                  ],
                  "optional": false,
                  "start": 4912,
                  "end": 4924
                },
                "definite": false,
                "start": 4907,
                "end": 4924
              }
            ],
            "declare": false,
            "start": 4903,
            "end": 4925
          }
        ],
        "start": 4507,
        "end": 4934
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4465,
      "end": 4934
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 4934
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
    "type": "Keyword",
    "value": "new",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 413,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 442,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 450,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 468,
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
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 484,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 492,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Keyword",
    "value": "new",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 528,
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
    "type": "Identifier",
    "value": "Derived",
    "start": 537,
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
    "type": "Keyword",
    "value": "new",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 563,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 566,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 577,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 592,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 600,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "value": "any",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
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
    "value": "any",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 634,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 642,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 673,
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
    "value": "Base",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 684,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 699,
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
    "value": "arg2",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 710,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 716,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 719,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 728,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "value": "Base",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 745,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 758,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 773,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 781,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 795,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
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
    "value": "any",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 815,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 823,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 832,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 842,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 853,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 861,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 871,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 886,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 894,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 913,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 929,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 937,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 946,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 991,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "value": "}",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1017,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1047,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1082,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1117,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1130,
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
    "value": "Array",
    "start": 1133,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1139,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1150,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1170,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1185,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1193,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1228,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1251,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1292,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1324,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1339,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1359,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1367,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1533,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1553,
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
    "value": "a",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 1571,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1631,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1639,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1649,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1670,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1679,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1689,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1729,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1736,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1752,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1761,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1767,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1771,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1795,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1804,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1810,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1846,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1853,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1861,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1899,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1935,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1972,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1979,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1987,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2019,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2026,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2034,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2062,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2084,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2092,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2100,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2109,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2139,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "[",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2176,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2180,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2196,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2204,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2222,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2226,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2231,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2256,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2260,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2267,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2275,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2288,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2292,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2299,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2307,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2321,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 2325,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2333,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2340,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2348,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2356,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2364,
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
    "value": "V",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2375,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2383,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2396,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2401,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2409,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2429,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2439,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2443,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2451,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2459,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2469,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2475,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2478,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2487,
    "end": 2489
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2490,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2498,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2504,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2507,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 2525,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2530,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2555,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 2559,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2566,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 2574,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2587,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 2591,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 2598,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2606,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2620,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 2624,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2639,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2647,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2655,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2675,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2688,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2698,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2706,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2711,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2722,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2728,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2731,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2742,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2756,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2764,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2773,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2778,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2787,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2799,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2804,
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
    "value": "Base",
    "start": 2810,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2816,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2819,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2828,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2831,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2839,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2845,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2848,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2861,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2865,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2870,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 2875,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2895,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 2899,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2906,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 2914,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2927,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 2931,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 2938,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2946,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2960,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 2964,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2972,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2979,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2987,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2996,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3007,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3017,
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
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3029,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3034,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3040,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3048,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3051,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3061,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 3065,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 3070,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3076,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3096,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 3100,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3107,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3128,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 3132,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3139,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3147,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3161,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3165,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3173,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3180,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3188,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3209,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3219,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3223,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3231,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3246,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3261,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3266,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3274,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3279,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3289,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3292,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3302,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 3306,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 3311,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3317,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3337,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 3341,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3348,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3356,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3369,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 3373,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3380,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3388,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3402,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3406,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3422,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3428,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3438,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3444,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3455,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3458,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3464,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3478,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3482,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3490,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3497,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3505,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3511,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3525,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3531,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3541,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3547,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3554,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3564,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 3568,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 3573,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3579,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 3654,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 3658,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3665,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3673,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3686,
    "end": 3689
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 3690,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3697,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3705,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3719,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3723,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3731,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3758,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3768,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3772,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3780,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3793,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3804,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3814,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3817,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3829,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 3833,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3838,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3844,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3910,
    "end": 3913
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 3914,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3921,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3929,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 3946,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3953,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3961,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3975,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3987,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3994,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4002,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4027,
    "end": 4029
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4030,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4042,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "r7c",
    "start": 4046,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 4052,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 4058,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4078,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "r7d",
    "start": 4082,
    "end": 4085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4089,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 4097,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4110,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "r7e",
    "start": 4114,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "r7arg3",
    "start": 4121,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4129,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4143,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "r8arg",
    "start": 4147,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4154,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4165,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4176,
    "end": 4178
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4182,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4194,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 4198,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 4203,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "r8arg",
    "start": 4209,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4229,
    "end": 4232
  },
  {
    "type": "Identifier",
    "value": "r9arg",
    "start": 4233,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4240,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4251,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4262,
    "end": 4264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4268,
    "end": 4270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4271,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4282,
    "end": 4285
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 4286,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 4291,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Identifier",
    "value": "r9arg",
    "start": 4297,
    "end": 4302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4462,
    "end": 4463
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4465,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 4475,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4513,
    "end": 4520
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4521,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4530,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4535,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4539,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4553,
    "end": 4555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4562,
    "end": 4568
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4569,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4577,
    "end": 4584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4585,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4594,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4599,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4603,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4609,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4618,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 4622,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4630,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4644,
    "end": 4646
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4647,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4661,
    "end": 4664
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 4665,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4668,
    "end": 4669
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4670,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 4675,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4755,
    "end": 4762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4763,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4772,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4777,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4781,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4795,
    "end": 4797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4798,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4809,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4816,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4824,
    "end": 4831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4832,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4841,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4846,
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
    "value": "any",
    "start": 4850,
    "end": 4853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4853,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4856,
    "end": 4859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4859,
    "end": 4860
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4865,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 4869,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4877,
    "end": 4880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4891,
    "end": 4893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4903,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4907,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 4912,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 4917,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4933,
    "end": 4934
  }
]
```
