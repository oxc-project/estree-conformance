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
        "start": 108,
        "end": 112
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
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 118,
              "end": 126
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
            "start": 115,
            "end": 127
          }
        ],
        "start": 113,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 129
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
        "start": 136,
        "end": 143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
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
              "start": 159,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
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
            "start": 159,
            "end": 171
          }
        ],
        "start": 157,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 173
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
        "start": 180,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 204
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
              "start": 207,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
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
            "start": 207,
            "end": 219
          }
        ],
        "start": 205,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 221
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
        "start": 228,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
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
              "start": 256,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
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
            "start": 256,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 271
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 302,
                      "end": 308
                    },
                    "start": 300,
                    "end": 308
                  },
                  "start": 299,
                  "end": 308
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 313,
                    "end": 319
                  },
                  "start": 313,
                  "end": 321
                },
                "start": 310,
                "end": 321
              },
              "start": 298,
              "end": 321
            },
            "start": 296,
            "end": 321
          },
          "start": 295,
          "end": 321
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 332
          },
          "typeArguments": null,
          "start": 324,
          "end": 332
        },
        "start": 322,
        "end": 332
      },
      "body": null,
      "expression": false,
      "start": 273,
      "end": 333
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 355
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 359,
              "end": 362
            },
            "start": 357,
            "end": 362
          },
          "start": 356,
          "end": 362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 365,
          "end": 368
        },
        "start": 363,
        "end": 368
      },
      "body": null,
      "expression": false,
      "start": 334,
      "end": 369
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
          "name": "a",
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
                      "start": 400,
                      "end": 406
                    },
                    "start": 398,
                    "end": 406
                  },
                  "start": 397,
                  "end": 406
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 411,
                    "end": 417
                  },
                  "start": 411,
                  "end": 419
                },
                "start": 408,
                "end": 419
              },
              "start": 396,
              "end": 419
            },
            "start": 394,
            "end": 419
          },
          "start": 393,
          "end": 419
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 430
          },
          "typeArguments": null,
          "start": 422,
          "end": 430
        },
        "start": 420,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 371,
      "end": 431
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 457,
              "end": 460
            },
            "start": 455,
            "end": 460
          },
          "start": 454,
          "end": 460
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 463,
          "end": 466
        },
        "start": 461,
        "end": 466
      },
      "body": null,
      "expression": false,
      "start": 432,
      "end": 467
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 490
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 498,
                      "end": 504
                    },
                    "start": 496,
                    "end": 504
                  },
                  "start": 495,
                  "end": 504
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 509,
                  "end": 513
                },
                "start": 506,
                "end": 513
              },
              "start": 494,
              "end": 513
            },
            "start": 492,
            "end": 513
          },
          "start": 491,
          "end": 513
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "typeArguments": null,
          "start": 516,
          "end": 524
        },
        "start": 514,
        "end": 524
      },
      "body": null,
      "expression": false,
      "start": 469,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 543,
        "end": 547
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 551,
              "end": 554
            },
            "start": 549,
            "end": 554
          },
          "start": 548,
          "end": 554
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 557,
          "end": 560
        },
        "start": 555,
        "end": 560
      },
      "body": null,
      "expression": false,
      "start": 526,
      "end": 561
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 592,
                      "end": 598
                    },
                    "start": 590,
                    "end": 598
                  },
                  "start": 589,
                  "end": 598
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
                      "start": 603,
                      "end": 609
                    },
                    "start": 601,
                    "end": 609
                  },
                  "start": 600,
                  "end": 609
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 614,
                  "end": 620
                },
                "start": 611,
                "end": 620
              },
              "start": 588,
              "end": 620
            },
            "start": 586,
            "end": 620
          },
          "start": 585,
          "end": 620
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 631
          },
          "typeArguments": null,
          "start": 623,
          "end": 631
        },
        "start": 621,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 563,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 654
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 658,
              "end": 661
            },
            "start": 656,
            "end": 661
          },
          "start": 655,
          "end": 661
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 664,
          "end": 667
        },
        "start": 662,
        "end": 667
      },
      "body": null,
      "expression": false,
      "start": 633,
      "end": 668
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 691
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                              "start": 705,
                              "end": 711
                            },
                            "start": 703,
                            "end": 711
                          },
                          "start": 700,
                          "end": 711
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 716,
                          "end": 722
                        },
                        "start": 713,
                        "end": 722
                      },
                      "start": 699,
                      "end": 722
                    },
                    "start": 697,
                    "end": 722
                  },
                  "start": 696,
                  "end": 722
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 727,
                  "end": 733
                },
                "start": 724,
                "end": 733
              },
              "start": 695,
              "end": 733
            },
            "start": 693,
            "end": 733
          },
          "start": 692,
          "end": 733
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 744
          },
          "typeArguments": null,
          "start": 736,
          "end": 744
        },
        "start": 734,
        "end": 744
      },
      "body": null,
      "expression": false,
      "start": 670,
      "end": 745
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
        "end": 767
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            },
            "start": 769,
            "end": 774
          },
          "start": 768,
          "end": 774
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 777,
          "end": 780
        },
        "start": 775,
        "end": 780
      },
      "body": null,
      "expression": false,
      "start": 746,
      "end": 781
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 804
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 818,
                                "end": 822
                              },
                              "typeArguments": null,
                              "start": 818,
                              "end": 822
                            },
                            "start": 816,
                            "end": 822
                          },
                          "start": 813,
                          "end": 822
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
                            "start": 827,
                            "end": 834
                          },
                          "typeArguments": null,
                          "start": 827,
                          "end": 834
                        },
                        "start": 824,
                        "end": 834
                      },
                      "start": 812,
                      "end": 834
                    },
                    "start": 810,
                    "end": 834
                  },
                  "start": 809,
                  "end": 834
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
                    "start": 839,
                    "end": 843
                  },
                  "typeArguments": null,
                  "start": 839,
                  "end": 843
                },
                "start": 836,
                "end": 843
              },
              "start": 808,
              "end": 843
            },
            "start": 806,
            "end": 843
          },
          "start": 805,
          "end": 843
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 854
          },
          "typeArguments": null,
          "start": 846,
          "end": 854
        },
        "start": 844,
        "end": 854
      },
      "body": null,
      "expression": false,
      "start": 783,
      "end": 855
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 877
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 881,
              "end": 884
            },
            "start": 879,
            "end": 884
          },
          "start": 878,
          "end": 884
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 887,
          "end": 890
        },
        "start": 885,
        "end": 890
      },
      "body": null,
      "expression": false,
      "start": 856,
      "end": 891
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 914
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 928,
                                "end": 932
                              },
                              "typeArguments": null,
                              "start": 928,
                              "end": 932
                            },
                            "start": 926,
                            "end": 932
                          },
                          "start": 923,
                          "end": 932
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
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        },
                        "start": 934,
                        "end": 944
                      },
                      "start": 922,
                      "end": 944
                    },
                    "start": 920,
                    "end": 944
                  },
                  "start": 919,
                  "end": 944
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
                            "start": 953,
                            "end": 957
                          },
                          "typeArguments": null,
                          "start": 953,
                          "end": 957
                        },
                        "start": 951,
                        "end": 957
                      },
                      "start": 950,
                      "end": 957
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
                        "start": 962,
                        "end": 969
                      },
                      "typeArguments": null,
                      "start": 962,
                      "end": 969
                    },
                    "start": 959,
                    "end": 969
                  },
                  "start": 949,
                  "end": 969
                },
                "start": 946,
                "end": 969
              },
              "start": 918,
              "end": 969
            },
            "start": 916,
            "end": 969
          },
          "start": 915,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 979,
            "end": 980
          },
          "typeArguments": null,
          "start": 972,
          "end": 980
        },
        "start": 970,
        "end": 980
      },
      "body": null,
      "expression": false,
      "start": 893,
      "end": 981
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 999,
        "end": 1003
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1007,
              "end": 1010
            },
            "start": 1005,
            "end": 1010
          },
          "start": 1004,
          "end": 1010
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1013,
          "end": 1016
        },
        "start": 1011,
        "end": 1016
      },
      "body": null,
      "expression": false,
      "start": 982,
      "end": 1017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1036,
        "end": 1040
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 1054,
                                "end": 1058
                              },
                              "typeArguments": null,
                              "start": 1054,
                              "end": 1058
                            },
                            "start": 1052,
                            "end": 1058
                          },
                          "start": 1049,
                          "end": 1058
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
                            "start": 1063,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1063,
                          "end": 1070
                        },
                        "start": 1060,
                        "end": 1070
                      },
                      "start": 1048,
                      "end": 1070
                    },
                    "start": 1046,
                    "end": 1070
                  },
                  "start": 1045,
                  "end": 1070
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
                                "start": 1082,
                                "end": 1086
                              },
                              "typeArguments": null,
                              "start": 1082,
                              "end": 1086
                            },
                            "start": 1080,
                            "end": 1086
                          },
                          "start": 1076,
                          "end": 1086
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
                            "start": 1091,
                            "end": 1098
                          },
                          "typeArguments": null,
                          "start": 1091,
                          "end": 1098
                        },
                        "start": 1088,
                        "end": 1098
                      },
                      "start": 1075,
                      "end": 1098
                    },
                    "start": 1073,
                    "end": 1098
                  },
                  "start": 1072,
                  "end": 1098
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
                            "start": 1107,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1107,
                          "end": 1111
                        },
                        "start": 1105,
                        "end": 1111
                      },
                      "start": 1104,
                      "end": 1111
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
                        "start": 1116,
                        "end": 1123
                      },
                      "typeArguments": null,
                      "start": 1116,
                      "end": 1123
                    },
                    "start": 1113,
                    "end": 1123
                  },
                  "start": 1103,
                  "end": 1123
                },
                "start": 1100,
                "end": 1123
              },
              "start": 1044,
              "end": 1123
            },
            "start": 1042,
            "end": 1123
          },
          "start": 1041,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1134
          },
          "typeArguments": null,
          "start": 1126,
          "end": 1134
        },
        "start": 1124,
        "end": 1134
      },
      "body": null,
      "expression": false,
      "start": 1019,
      "end": 1135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1157
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1161,
              "end": 1164
            },
            "start": 1159,
            "end": 1164
          },
          "start": 1158,
          "end": 1164
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1167,
          "end": 1170
        },
        "start": 1165,
        "end": 1170
      },
      "body": null,
      "expression": false,
      "start": 1136,
      "end": 1171
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1194
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                "start": 1208,
                                "end": 1212
                              },
                              "typeArguments": null,
                              "start": 1208,
                              "end": 1212
                            },
                            "start": 1206,
                            "end": 1212
                          },
                          "start": 1203,
                          "end": 1212
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
                            "start": 1217,
                            "end": 1224
                          },
                          "typeArguments": null,
                          "start": 1217,
                          "end": 1224
                        },
                        "start": 1214,
                        "end": 1224
                      },
                      "start": 1202,
                      "end": 1224
                    },
                    "start": 1200,
                    "end": 1224
                  },
                  "start": 1199,
                  "end": 1224
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
                                "start": 1236,
                                "end": 1240
                              },
                              "typeArguments": null,
                              "start": 1236,
                              "end": 1240
                            },
                            "start": 1234,
                            "end": 1240
                          },
                          "start": 1230,
                          "end": 1240
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
                            "start": 1245,
                            "end": 1252
                          },
                          "typeArguments": null,
                          "start": 1245,
                          "end": 1252
                        },
                        "start": 1242,
                        "end": 1252
                      },
                      "start": 1229,
                      "end": 1252
                    },
                    "start": 1227,
                    "end": 1252
                  },
                  "start": 1226,
                  "end": 1252
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
                            "start": 1261,
                            "end": 1265
                          },
                          "typeArguments": null,
                          "start": 1261,
                          "end": 1265
                        },
                        "start": 1259,
                        "end": 1265
                      },
                      "start": 1258,
                      "end": 1265
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
                        "start": 1270,
                        "end": 1277
                      },
                      "typeArguments": null,
                      "start": 1270,
                      "end": 1277
                    },
                    "start": 1267,
                    "end": 1277
                  },
                  "start": 1257,
                  "end": 1277
                },
                "start": 1254,
                "end": 1277
              },
              "start": 1198,
              "end": 1277
            },
            "start": 1196,
            "end": 1277
          },
          "start": 1195,
          "end": 1277
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1287,
            "end": 1288
          },
          "typeArguments": null,
          "start": 1280,
          "end": 1288
        },
        "start": 1278,
        "end": 1288
      },
      "body": null,
      "expression": false,
      "start": 1173,
      "end": 1289
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1311
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1315,
              "end": 1318
            },
            "start": 1313,
            "end": 1318
          },
          "start": 1312,
          "end": 1318
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1321,
          "end": 1324
        },
        "start": 1319,
        "end": 1324
      },
      "body": null,
      "expression": false,
      "start": 1290,
      "end": 1325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1344,
        "end": 1349
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "start": 1357,
                    "end": 1358
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
                          "start": 1360,
                          "end": 1367
                        },
                        "typeArguments": null,
                        "start": 1360,
                        "end": 1367
                      },
                      "start": 1360,
                      "end": 1369
                    },
                    "start": 1358,
                    "end": 1369
                  },
                  "value": null,
                  "start": 1354,
                  "end": 1369
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
                    "start": 1374,
                    "end": 1381
                  },
                  "typeArguments": null,
                  "start": 1374,
                  "end": 1381
                },
                "start": 1371,
                "end": 1381
              },
              "start": 1353,
              "end": 1381
            },
            "start": 1351,
            "end": 1381
          },
          "start": 1350,
          "end": 1381
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1391,
            "end": 1392
          },
          "typeArguments": null,
          "start": 1384,
          "end": 1392
        },
        "start": 1382,
        "end": 1392
      },
      "body": null,
      "expression": false,
      "start": 1327,
      "end": 1393
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1411,
        "end": 1416
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1420,
              "end": 1423
            },
            "start": 1418,
            "end": 1423
          },
          "start": 1417,
          "end": 1423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1426,
          "end": 1429
        },
        "start": 1424,
        "end": 1429
      },
      "body": null,
      "expression": false,
      "start": 1394,
      "end": 1430
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                            "start": 1464,
                            "end": 1467
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1469,
                              "end": 1475
                            },
                            "start": 1467,
                            "end": 1475
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1464,
                          "end": 1475
                        }
                      ],
                      "start": 1462,
                      "end": 1477
                    },
                    "start": 1460,
                    "end": 1477
                  },
                  "start": 1459,
                  "end": 1477
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
                            "start": 1484,
                            "end": 1487
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1489,
                              "end": 1495
                            },
                            "start": 1487,
                            "end": 1495
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1484,
                          "end": 1496
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
                            "start": 1497,
                            "end": 1500
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1502,
                              "end": 1508
                            },
                            "start": 1500,
                            "end": 1508
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1497,
                          "end": 1508
                        }
                      ],
                      "start": 1482,
                      "end": 1510
                    },
                    "start": 1480,
                    "end": 1510
                  },
                  "start": 1479,
                  "end": 1510
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
                    "start": 1515,
                    "end": 1519
                  },
                  "typeArguments": null,
                  "start": 1515,
                  "end": 1519
                },
                "start": 1512,
                "end": 1519
              },
              "start": 1458,
              "end": 1519
            },
            "start": 1456,
            "end": 1519
          },
          "start": 1455,
          "end": 1519
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1530
          },
          "typeArguments": null,
          "start": 1522,
          "end": 1530
        },
        "start": 1520,
        "end": 1530
      },
      "body": null,
      "expression": false,
      "start": 1432,
      "end": 1531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1554
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1558,
              "end": 1561
            },
            "start": 1556,
            "end": 1561
          },
          "start": 1555,
          "end": 1561
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1564,
          "end": 1567
        },
        "start": 1562,
        "end": 1567
      },
      "body": null,
      "expression": false,
      "start": 1532,
      "end": 1568
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1592
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 1600,
                        "end": 1605
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
                              "start": 1606,
                              "end": 1610
                            },
                            "typeArguments": null,
                            "start": 1606,
                            "end": 1610
                          }
                        ],
                        "start": 1605,
                        "end": 1611
                      },
                      "start": 1600,
                      "end": 1611
                    },
                    "start": 1598,
                    "end": 1611
                  },
                  "start": 1597,
                  "end": 1611
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
                        "start": 1616,
                        "end": 1621
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
                              "start": 1622,
                              "end": 1630
                            },
                            "typeArguments": null,
                            "start": 1622,
                            "end": 1630
                          }
                        ],
                        "start": 1621,
                        "end": 1631
                      },
                      "start": 1616,
                      "end": 1631
                    },
                    "start": 1614,
                    "end": 1631
                  },
                  "start": 1613,
                  "end": 1631
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
                    "start": 1636,
                    "end": 1641
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
                          "start": 1642,
                          "end": 1649
                        },
                        "typeArguments": null,
                        "start": 1642,
                        "end": 1649
                      }
                    ],
                    "start": 1641,
                    "end": 1650
                  },
                  "start": 1636,
                  "end": 1650
                },
                "start": 1633,
                "end": 1650
              },
              "start": 1596,
              "end": 1650
            },
            "start": 1594,
            "end": 1650
          },
          "start": 1593,
          "end": 1650
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1660,
            "end": 1661
          },
          "typeArguments": null,
          "start": 1653,
          "end": 1661
        },
        "start": 1651,
        "end": 1661
      },
      "body": null,
      "expression": false,
      "start": 1570,
      "end": 1662
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1680,
        "end": 1685
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1689,
              "end": 1692
            },
            "start": 1687,
            "end": 1692
          },
          "start": 1686,
          "end": 1692
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1695,
          "end": 1698
        },
        "start": 1693,
        "end": 1698
      },
      "body": null,
      "expression": false,
      "start": 1663,
      "end": 1699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1723
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                        "start": 1731,
                        "end": 1736
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
                              "start": 1737,
                              "end": 1741
                            },
                            "typeArguments": null,
                            "start": 1737,
                            "end": 1741
                          }
                        ],
                        "start": 1736,
                        "end": 1742
                      },
                      "start": 1731,
                      "end": 1742
                    },
                    "start": 1729,
                    "end": 1742
                  },
                  "start": 1728,
                  "end": 1742
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
                        "start": 1747,
                        "end": 1752
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
                              "start": 1753,
                              "end": 1760
                            },
                            "typeArguments": null,
                            "start": 1753,
                            "end": 1760
                          }
                        ],
                        "start": 1752,
                        "end": 1761
                      },
                      "start": 1747,
                      "end": 1761
                    },
                    "start": 1745,
                    "end": 1761
                  },
                  "start": 1744,
                  "end": 1761
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
                    "start": 1766,
                    "end": 1771
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
                          "start": 1772,
                          "end": 1779
                        },
                        "typeArguments": null,
                        "start": 1772,
                        "end": 1779
                      }
                    ],
                    "start": 1771,
                    "end": 1780
                  },
                  "start": 1766,
                  "end": 1780
                },
                "start": 1763,
                "end": 1780
              },
              "start": 1727,
              "end": 1780
            },
            "start": 1725,
            "end": 1780
          },
          "start": 1724,
          "end": 1780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1790,
            "end": 1791
          },
          "typeArguments": null,
          "start": 1783,
          "end": 1791
        },
        "start": 1781,
        "end": 1791
      },
      "body": null,
      "expression": false,
      "start": 1701,
      "end": 1792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1810,
        "end": 1815
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1819,
              "end": 1822
            },
            "start": 1817,
            "end": 1822
          },
          "start": 1816,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1825,
          "end": 1828
        },
        "start": 1823,
        "end": 1828
      },
      "body": null,
      "expression": false,
      "start": 1793,
      "end": 1829
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1848,
        "end": 1853
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                            "start": 1863,
                            "end": 1864
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1866,
                              "end": 1872
                            },
                            "start": 1864,
                            "end": 1872
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1863,
                          "end": 1873
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
                            "start": 1874,
                            "end": 1875
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1877,
                              "end": 1883
                            },
                            "start": 1875,
                            "end": 1883
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1874,
                          "end": 1883
                        }
                      ],
                      "start": 1861,
                      "end": 1885
                    },
                    "start": 1859,
                    "end": 1885
                  },
                  "start": 1858,
                  "end": 1885
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
                    "start": 1890,
                    "end": 1896
                  },
                  "typeArguments": null,
                  "start": 1890,
                  "end": 1896
                },
                "start": 1887,
                "end": 1896
              },
              "start": 1857,
              "end": 1896
            },
            "start": 1855,
            "end": 1896
          },
          "start": 1854,
          "end": 1896
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1906,
            "end": 1907
          },
          "typeArguments": null,
          "start": 1899,
          "end": 1907
        },
        "start": 1897,
        "end": 1907
      },
      "body": null,
      "expression": false,
      "start": 1831,
      "end": 1908
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1926,
        "end": 1931
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1935,
              "end": 1938
            },
            "start": 1933,
            "end": 1938
          },
          "start": 1932,
          "end": 1938
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1941,
          "end": 1944
        },
        "start": 1939,
        "end": 1944
      },
      "body": null,
      "expression": false,
      "start": 1909,
      "end": 1945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1964,
        "end": 1969
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                          "type": "TSNumberKeyword",
                          "start": 1984,
                          "end": 1990
                        },
                        "start": 1982,
                        "end": 1990
                      },
                      "start": 1981,
                      "end": 1990
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1993,
                        "end": 1999
                      },
                      "start": 1993,
                      "end": 2001
                    },
                    "start": 1991,
                    "end": 2001
                  },
                  "start": 1980,
                  "end": 2002
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
                          "type": "TSStringKeyword",
                          "start": 2011,
                          "end": 2017
                        },
                        "start": 2009,
                        "end": 2017
                      },
                      "start": 2008,
                      "end": 2017
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2020,
                        "end": 2026
                      },
                      "start": 2020,
                      "end": 2028
                    },
                    "start": 2018,
                    "end": 2028
                  },
                  "start": 2007,
                  "end": 2029
                }
              ],
              "start": 1973,
              "end": 2032
            },
            "start": 1971,
            "end": 2032
          },
          "start": 1970,
          "end": 2032
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2042,
            "end": 2043
          },
          "typeArguments": null,
          "start": 2035,
          "end": 2043
        },
        "start": 2033,
        "end": 2043
      },
      "body": null,
      "expression": false,
      "start": 1947,
      "end": 2044
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2067
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2071,
              "end": 2074
            },
            "start": 2069,
            "end": 2074
          },
          "start": 2068,
          "end": 2074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2077,
          "end": 2080
        },
        "start": 2075,
        "end": 2080
      },
      "body": null,
      "expression": false,
      "start": 2045,
      "end": 2081
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2100,
        "end": 2105
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                          "start": 2116,
                          "end": 2117
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2126,
                            "end": 2133
                          },
                          "typeArguments": null,
                          "start": 2126,
                          "end": 2133
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2116,
                        "end": 2133
                      }
                    ],
                    "start": 2115,
                    "end": 2134
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
                            "start": 2138,
                            "end": 2139
                          },
                          "typeArguments": null,
                          "start": 2138,
                          "end": 2139
                        },
                        "start": 2136,
                        "end": 2139
                      },
                      "start": 2135,
                      "end": 2139
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2142,
                        "end": 2148
                      },
                      "start": 2142,
                      "end": 2150
                    },
                    "start": 2140,
                    "end": 2150
                  },
                  "start": 2115,
                  "end": 2151
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2157,
                          "end": 2158
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2167,
                            "end": 2171
                          },
                          "typeArguments": null,
                          "start": 2167,
                          "end": 2171
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2157,
                        "end": 2171
                      }
                    ],
                    "start": 2156,
                    "end": 2172
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2176,
                            "end": 2177
                          },
                          "typeArguments": null,
                          "start": 2176,
                          "end": 2177
                        },
                        "start": 2174,
                        "end": 2177
                      },
                      "start": 2173,
                      "end": 2177
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      },
                      "start": 2180,
                      "end": 2188
                    },
                    "start": 2178,
                    "end": 2188
                  },
                  "start": 2156,
                  "end": 2189
                }
              ],
              "start": 2109,
              "end": 2191
            },
            "start": 2107,
            "end": 2191
          },
          "start": 2106,
          "end": 2191
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2202
          },
          "typeArguments": null,
          "start": 2194,
          "end": 2202
        },
        "start": 2192,
        "end": 2202
      },
      "body": null,
      "expression": false,
      "start": 2083,
      "end": 2203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2221,
        "end": 2226
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2230,
              "end": 2233
            },
            "start": 2228,
            "end": 2233
          },
          "start": 2227,
          "end": 2233
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2236,
          "end": 2239
        },
        "start": 2234,
        "end": 2239
      },
      "body": null,
      "expression": false,
      "start": 2204,
      "end": 2240
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2259,
        "end": 2264
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                  "type": "TSNumberKeyword",
                                  "start": 2282,
                                  "end": 2288
                                },
                                "start": 2280,
                                "end": 2288
                              },
                              "start": 2279,
                              "end": 2288
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2293,
                              "end": 2299
                            },
                            "start": 2290,
                            "end": 2299
                          },
                          "start": 2278,
                          "end": 2299
                        },
                        "start": 2276,
                        "end": 2299
                      },
                      "start": 2275,
                      "end": 2299
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 2302,
                        "end": 2308
                      },
                      "start": 2302,
                      "end": 2310
                    },
                    "start": 2300,
                    "end": 2310
                  },
                  "start": 2274,
                  "end": 2311
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
                                  "type": "TSStringKeyword",
                                  "start": 2324,
                                  "end": 2330
                                },
                                "start": 2322,
                                "end": 2330
                              },
                              "start": 2321,
                              "end": 2330
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2335,
                              "end": 2341
                            },
                            "start": 2332,
                            "end": 2341
                          },
                          "start": 2320,
                          "end": 2341
                        },
                        "start": 2318,
                        "end": 2341
                      },
                      "start": 2317,
                      "end": 2341
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2344,
                        "end": 2350
                      },
                      "start": 2344,
                      "end": 2352
                    },
                    "start": 2342,
                    "end": 2352
                  },
                  "start": 2316,
                  "end": 2353
                }
              ],
              "start": 2268,
              "end": 2355
            },
            "start": 2266,
            "end": 2355
          },
          "start": 2265,
          "end": 2355
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2365,
            "end": 2366
          },
          "typeArguments": null,
          "start": 2358,
          "end": 2366
        },
        "start": 2356,
        "end": 2366
      },
      "body": null,
      "expression": false,
      "start": 2242,
      "end": 2367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2385,
        "end": 2390
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2394,
              "end": 2397
            },
            "start": 2392,
            "end": 2397
          },
          "start": 2391,
          "end": 2397
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2400,
          "end": 2403
        },
        "start": 2398,
        "end": 2403
      },
      "body": null,
      "expression": false,
      "start": 2368,
      "end": 2404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2423,
        "end": 2428
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                                      "start": 2456,
                                      "end": 2462
                                    },
                                    "start": 2454,
                                    "end": 2462
                                  },
                                  "start": 2453,
                                  "end": 2462
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2465,
                                  "end": 2471
                                },
                                "start": 2463,
                                "end": 2471
                              },
                              "start": 2452,
                              "end": 2472
                            },
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
                                      "type": "TSStringKeyword",
                                      "start": 2485,
                                      "end": 2491
                                    },
                                    "start": 2483,
                                    "end": 2491
                                  },
                                  "start": 2482,
                                  "end": 2491
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2494,
                                  "end": 2500
                                },
                                "start": 2492,
                                "end": 2500
                              },
                              "start": 2481,
                              "end": 2501
                            }
                          ],
                          "start": 2442,
                          "end": 2507
                        },
                        "start": 2440,
                        "end": 2507
                      },
                      "start": 2439,
                      "end": 2507
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2510,
                        "end": 2513
                      },
                      "start": 2510,
                      "end": 2515
                    },
                    "start": 2508,
                    "end": 2515
                  },
                  "start": 2438,
                  "end": 2516
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
                                      "start": 2539,
                                      "end": 2546
                                    },
                                    "start": 2537,
                                    "end": 2546
                                  },
                                  "start": 2536,
                                  "end": 2546
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 2549,
                                  "end": 2556
                                },
                                "start": 2547,
                                "end": 2556
                              },
                              "start": 2535,
                              "end": 2557
                            },
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Date",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2570,
                                        "end": 2574
                                      },
                                      "typeArguments": null,
                                      "start": 2570,
                                      "end": 2574
                                    },
                                    "start": 2568,
                                    "end": 2574
                                  },
                                  "start": 2567,
                                  "end": 2574
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Date",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2577,
                                    "end": 2581
                                  },
                                  "typeArguments": null,
                                  "start": 2577,
                                  "end": 2581
                                },
                                "start": 2575,
                                "end": 2581
                              },
                              "start": 2566,
                              "end": 2582
                            }
                          ],
                          "start": 2525,
                          "end": 2588
                        },
                        "start": 2523,
                        "end": 2588
                      },
                      "start": 2522,
                      "end": 2588
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2591,
                        "end": 2594
                      },
                      "start": 2591,
                      "end": 2596
                    },
                    "start": 2589,
                    "end": 2596
                  },
                  "start": 2521,
                  "end": 2597
                }
              ],
              "start": 2432,
              "end": 2599
            },
            "start": 2430,
            "end": 2599
          },
          "start": 2429,
          "end": 2599
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2609,
            "end": 2610
          },
          "typeArguments": null,
          "start": 2602,
          "end": 2610
        },
        "start": 2600,
        "end": 2610
      },
      "body": null,
      "expression": false,
      "start": 2406,
      "end": 2611
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2634
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 2638,
              "end": 2641
            },
            "start": 2636,
            "end": 2641
          },
          "start": 2635,
          "end": 2641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2644,
          "end": 2647
        },
        "start": 2642,
        "end": 2647
      },
      "body": null,
      "expression": false,
      "start": 2612,
      "end": 2648
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
            "typeAnnotation": null,
            "start": 2654,
            "end": 2660
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
                    "start": 2664,
                    "end": 2665
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2664,
                  "end": 2665
                }
              ],
              "start": 2663,
              "end": 2666
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
                      "start": 2670,
                      "end": 2671
                    },
                    "typeArguments": null,
                    "start": 2670,
                    "end": 2671
                  },
                  "start": 2668,
                  "end": 2671
                },
                "start": 2667,
                "end": 2671
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2677,
                  "end": 2678
                }
              ],
              "start": 2676,
              "end": 2679
            },
            "id": null,
            "generator": false,
            "start": 2663,
            "end": 2679
          },
          "definite": false,
          "start": 2654,
          "end": 2679
        }
      ],
      "declare": false,
      "start": 2650,
      "end": 2680
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
            "typeAnnotation": null,
            "start": 2685,
            "end": 2691
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
                    "type": "TSNumberKeyword",
                    "start": 2698,
                    "end": 2704
                  },
                  "start": 2696,
                  "end": 2704
                },
                "start": 2695,
                "end": 2704
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2710,
                  "end": 2711
                }
              ],
              "start": 2709,
              "end": 2712
            },
            "id": null,
            "generator": false,
            "start": 2694,
            "end": 2712
          },
          "definite": false,
          "start": 2685,
          "end": 2712
        }
      ],
      "declare": false,
      "start": 2681,
      "end": 2713
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
            "start": 2718,
            "end": 2720
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2723,
              "end": 2727
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2728,
                "end": 2734
              }
            ],
            "optional": false,
            "start": 2723,
            "end": 2735
          },
          "definite": false,
          "start": 2718,
          "end": 2735
        }
      ],
      "declare": false,
      "start": 2714,
      "end": 2736
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
            "start": 2796,
            "end": 2799
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
                "start": 2803,
                "end": 2809
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2811,
                "end": 2817
              }
            ],
            "start": 2802,
            "end": 2818
          },
          "definite": false,
          "start": 2796,
          "end": 2818
        }
      ],
      "declare": false,
      "start": 2792,
      "end": 2819
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
            "start": 2873,
            "end": 2876
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
                "start": 2880,
                "end": 2886
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2894
              }
            ],
            "start": 2879,
            "end": 2895
          },
          "definite": false,
          "start": 2873,
          "end": 2895
        }
      ],
      "declare": false,
      "start": 2869,
      "end": 2896
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
            "typeAnnotation": null,
            "start": 2951,
            "end": 2957
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
                    "start": 2961,
                    "end": 2962
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2961,
                  "end": 2962
                }
              ],
              "start": 2960,
              "end": 2963
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
                      "start": 2967,
                      "end": 2968
                    },
                    "typeArguments": null,
                    "start": 2967,
                    "end": 2968
                  },
                  "start": 2965,
                  "end": 2968
                },
                "start": 2964,
                "end": 2968
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
                  "start": 2974,
                  "end": 2976
                }
              ],
              "start": 2973,
              "end": 2977
            },
            "id": null,
            "generator": false,
            "start": 2960,
            "end": 2977
          },
          "definite": false,
          "start": 2951,
          "end": 2977
        }
      ],
      "declare": false,
      "start": 2947,
      "end": 2978
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
            "start": 2983,
            "end": 2989
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
                    "type": "TSNumberKeyword",
                    "start": 2996,
                    "end": 3002
                  },
                  "start": 2994,
                  "end": 3002
                },
                "start": 2993,
                "end": 3002
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
                  "start": 3008,
                  "end": 3010
                }
              ],
              "start": 3007,
              "end": 3011
            },
            "id": null,
            "generator": false,
            "start": 2992,
            "end": 3011
          },
          "definite": false,
          "start": 2983,
          "end": 3011
        }
      ],
      "declare": false,
      "start": 2979,
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3017,
            "end": 3019
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3027,
                "end": 3033
              }
            ],
            "optional": false,
            "start": 3022,
            "end": 3034
          },
          "definite": false,
          "start": 3017,
          "end": 3034
        }
      ],
      "declare": false,
      "start": 3013,
      "end": 3035
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
            "start": 3041,
            "end": 3044
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
                "start": 3048,
                "end": 3054
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3056,
                "end": 3062
              }
            ],
            "start": 3047,
            "end": 3063
          },
          "definite": false,
          "start": 3041,
          "end": 3063
        }
      ],
      "declare": false,
      "start": 3037,
      "end": 3064
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
            "start": 3069,
            "end": 3072
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
                "start": 3076,
                "end": 3082
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3084,
                "end": 3090
              }
            ],
            "start": 3075,
            "end": 3091
          },
          "definite": false,
          "start": 3069,
          "end": 3091
        }
      ],
      "declare": false,
      "start": 3065,
      "end": 3092
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
            "typeAnnotation": null,
            "start": 3098,
            "end": 3104
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
                    "start": 3108,
                    "end": 3109
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3108,
                  "end": 3109
                }
              ],
              "start": 3107,
              "end": 3110
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
                      "start": 3114,
                      "end": 3115
                    },
                    "typeArguments": null,
                    "start": 3114,
                    "end": 3115
                  },
                  "start": 3112,
                  "end": 3115
                },
                "start": 3111,
                "end": 3115
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3120,
              "end": 3121
            },
            "id": null,
            "generator": false,
            "start": 3107,
            "end": 3121
          },
          "definite": false,
          "start": 3098,
          "end": 3121
        }
      ],
      "declare": false,
      "start": 3094,
      "end": 3122
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
            "start": 3127,
            "end": 3133
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3140,
                    "end": 3146
                  },
                  "start": 3138,
                  "end": 3146
                },
                "start": 3137,
                "end": 3146
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 3151,
              "end": 3154
            },
            "id": null,
            "generator": false,
            "start": 3136,
            "end": 3154
          },
          "definite": false,
          "start": 3127,
          "end": 3154
        }
      ],
      "declare": false,
      "start": 3123,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3160,
            "end": 3162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3170,
                "end": 3176
              }
            ],
            "optional": false,
            "start": 3165,
            "end": 3177
          },
          "definite": false,
          "start": 3160,
          "end": 3177
        }
      ],
      "declare": false,
      "start": 3156,
      "end": 3178
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
            "start": 3184,
            "end": 3187
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
                "start": 3191,
                "end": 3197
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3199,
                "end": 3205
              }
            ],
            "start": 3190,
            "end": 3206
          },
          "definite": false,
          "start": 3184,
          "end": 3206
        }
      ],
      "declare": false,
      "start": 3180,
      "end": 3207
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
            "start": 3212,
            "end": 3215
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
                "start": 3219,
                "end": 3225
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3227,
                "end": 3233
              }
            ],
            "start": 3218,
            "end": 3234
          },
          "definite": false,
          "start": 3212,
          "end": 3234
        }
      ],
      "declare": false,
      "start": 3208,
      "end": 3235
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
            "typeAnnotation": null,
            "start": 3241,
            "end": 3247
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
                    "start": 3251,
                    "end": 3252
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3251,
                  "end": 3252
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3254,
                    "end": 3255
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3254,
                  "end": 3255
                }
              ],
              "start": 3250,
              "end": 3256
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
                      "start": 3260,
                      "end": 3261
                    },
                    "typeArguments": null,
                    "start": 3260,
                    "end": 3261
                  },
                  "start": 3258,
                  "end": 3261
                },
                "start": 3257,
                "end": 3261
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
                      "start": 3266,
                      "end": 3267
                    },
                    "typeArguments": null,
                    "start": 3266,
                    "end": 3267
                  },
                  "start": 3264,
                  "end": 3267
                },
                "start": 3263,
                "end": 3267
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3272,
              "end": 3273
            },
            "id": null,
            "generator": false,
            "start": 3250,
            "end": 3273
          },
          "definite": false,
          "start": 3241,
          "end": 3273
        }
      ],
      "declare": false,
      "start": 3237,
      "end": 3274
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
            "start": 3279,
            "end": 3285
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
                    "type": "TSStringKeyword",
                    "start": 3292,
                    "end": 3298
                  },
                  "start": 3290,
                  "end": 3298
                },
                "start": 3289,
                "end": 3298
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
                    "start": 3303,
                    "end": 3309
                  },
                  "start": 3301,
                  "end": 3309
                },
                "start": 3300,
                "end": 3309
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3314,
              "end": 3316
            },
            "id": null,
            "generator": false,
            "start": 3288,
            "end": 3316
          },
          "definite": false,
          "start": 3279,
          "end": 3316
        }
      ],
      "declare": false,
      "start": 3275,
      "end": 3317
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
            "start": 3322,
            "end": 3324
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3332,
                "end": 3338
              }
            ],
            "optional": false,
            "start": 3327,
            "end": 3339
          },
          "definite": false,
          "start": 3322,
          "end": 3339
        }
      ],
      "declare": false,
      "start": 3318,
      "end": 3340
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
            "start": 3352,
            "end": 3355
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
                "start": 3359,
                "end": 3365
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3367,
                "end": 3373
              }
            ],
            "start": 3358,
            "end": 3374
          },
          "definite": false,
          "start": 3352,
          "end": 3374
        }
      ],
      "declare": false,
      "start": 3348,
      "end": 3375
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
            "start": 3380,
            "end": 3383
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
                "start": 3387,
                "end": 3393
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3395,
                "end": 3401
              }
            ],
            "start": 3386,
            "end": 3402
          },
          "definite": false,
          "start": 3380,
          "end": 3402
        }
      ],
      "declare": false,
      "start": 3376,
      "end": 3403
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
            "typeAnnotation": null,
            "start": 3409,
            "end": 3415
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
                    "start": 3419,
                    "end": 3420
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3419,
                  "end": 3420
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3422,
                    "end": 3423
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3422,
                  "end": 3423
                }
              ],
              "start": 3418,
              "end": 3424
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
                              "start": 3434,
                              "end": 3435
                            },
                            "typeArguments": null,
                            "start": 3434,
                            "end": 3435
                          },
                          "start": 3432,
                          "end": 3435
                        },
                        "start": 3429,
                        "end": 3435
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
                          "start": 3440,
                          "end": 3441
                        },
                        "typeArguments": null,
                        "start": 3440,
                        "end": 3441
                      },
                      "start": 3437,
                      "end": 3441
                    },
                    "start": 3428,
                    "end": 3441
                  },
                  "start": 3426,
                  "end": 3441
                },
                "start": 3425,
                "end": 3441
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
                  "start": 3447,
                  "end": 3448
                },
                "typeArguments": null,
                "start": 3447,
                "end": 3448
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3449,
                "end": 3453
              },
              "start": 3446,
              "end": 3453
            },
            "id": null,
            "generator": false,
            "start": 3418,
            "end": 3453
          },
          "definite": false,
          "start": 3409,
          "end": 3453
        }
      ],
      "declare": false,
      "start": 3405,
      "end": 3454
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
            "start": 3459,
            "end": 3465
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
                            "type": "TSStringKeyword",
                            "start": 3478,
                            "end": 3484
                          },
                          "start": 3476,
                          "end": 3484
                        },
                        "start": 3473,
                        "end": 3484
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3489,
                        "end": 3495
                      },
                      "start": 3486,
                      "end": 3495
                    },
                    "start": 3472,
                    "end": 3495
                  },
                  "start": 3470,
                  "end": 3495
                },
                "start": 3469,
                "end": 3495
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3500,
              "end": 3502
            },
            "id": null,
            "generator": false,
            "start": 3468,
            "end": 3502
          },
          "definite": false,
          "start": 3459,
          "end": 3502
        }
      ],
      "declare": false,
      "start": 3455,
      "end": 3503
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
            "start": 3508,
            "end": 3510
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3513,
              "end": 3517
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3518,
                "end": 3524
              }
            ],
            "optional": false,
            "start": 3513,
            "end": 3525
          },
          "definite": false,
          "start": 3508,
          "end": 3525
        }
      ],
      "declare": false,
      "start": 3504,
      "end": 3526
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
            "start": 3538,
            "end": 3541
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
                "start": 3545,
                "end": 3551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3553,
                "end": 3559
              }
            ],
            "start": 3544,
            "end": 3560
          },
          "definite": false,
          "start": 3538,
          "end": 3560
        }
      ],
      "declare": false,
      "start": 3534,
      "end": 3561
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
            "start": 3566,
            "end": 3569
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
                "start": 3573,
                "end": 3579
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3581,
                "end": 3587
              }
            ],
            "start": 3572,
            "end": 3588
          },
          "definite": false,
          "start": 3566,
          "end": 3588
        }
      ],
      "declare": false,
      "start": 3562,
      "end": 3589
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
            "typeAnnotation": null,
            "start": 3595,
            "end": 3601
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
                    "start": 3605,
                    "end": 3606
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3615,
                      "end": 3619
                    },
                    "typeArguments": null,
                    "start": 3615,
                    "end": 3619
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3605,
                  "end": 3619
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3621,
                    "end": 3622
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3631,
                      "end": 3638
                    },
                    "typeArguments": null,
                    "start": 3631,
                    "end": 3638
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3621,
                  "end": 3638
                }
              ],
              "start": 3604,
              "end": 3639
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
                              "start": 3649,
                              "end": 3650
                            },
                            "typeArguments": null,
                            "start": 3649,
                            "end": 3650
                          },
                          "start": 3647,
                          "end": 3650
                        },
                        "start": 3644,
                        "end": 3650
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
                          "start": 3655,
                          "end": 3656
                        },
                        "typeArguments": null,
                        "start": 3655,
                        "end": 3656
                      },
                      "start": 3652,
                      "end": 3656
                    },
                    "start": 3643,
                    "end": 3656
                  },
                  "start": 3641,
                  "end": 3656
                },
                "start": 3640,
                "end": 3656
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
                  "start": 3662,
                  "end": 3663
                },
                "typeArguments": null,
                "start": 3662,
                "end": 3663
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3664,
                "end": 3668
              },
              "start": 3661,
              "end": 3668
            },
            "id": null,
            "generator": false,
            "start": 3604,
            "end": 3668
          },
          "definite": false,
          "start": 3595,
          "end": 3668
        }
      ],
      "declare": false,
      "start": 3591,
      "end": 3669
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
            "start": 3674,
            "end": 3680
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
                              "start": 3693,
                              "end": 3697
                            },
                            "typeArguments": null,
                            "start": 3693,
                            "end": 3697
                          },
                          "start": 3691,
                          "end": 3697
                        },
                        "start": 3688,
                        "end": 3697
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
                          "start": 3702,
                          "end": 3709
                        },
                        "typeArguments": null,
                        "start": 3702,
                        "end": 3709
                      },
                      "start": 3699,
                      "end": 3709
                    },
                    "start": 3687,
                    "end": 3709
                  },
                  "start": 3685,
                  "end": 3709
                },
                "start": 3684,
                "end": 3709
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
                  "start": 3715,
                  "end": 3719
                },
                "typeArguments": null,
                "start": 3715,
                "end": 3719
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3720,
                "end": 3724
              },
              "start": 3714,
              "end": 3724
            },
            "id": null,
            "generator": false,
            "start": 3683,
            "end": 3724
          },
          "definite": false,
          "start": 3674,
          "end": 3724
        }
      ],
      "declare": false,
      "start": 3670,
      "end": 3725
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
            "start": 3730,
            "end": 3732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3735,
              "end": 3739
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3740,
                "end": 3746
              }
            ],
            "optional": false,
            "start": 3735,
            "end": 3747
          },
          "definite": false,
          "start": 3730,
          "end": 3747
        }
      ],
      "declare": false,
      "start": 3726,
      "end": 3748
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
            "start": 3760,
            "end": 3763
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
                "start": 3767,
                "end": 3773
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3775,
                "end": 3781
              }
            ],
            "start": 3766,
            "end": 3782
          },
          "definite": false,
          "start": 3760,
          "end": 3782
        }
      ],
      "declare": false,
      "start": 3756,
      "end": 3783
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
            "start": 3788,
            "end": 3791
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
                "start": 3795,
                "end": 3801
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3803,
                "end": 3809
              }
            ],
            "start": 3794,
            "end": 3810
          },
          "definite": false,
          "start": 3788,
          "end": 3810
        }
      ],
      "declare": false,
      "start": 3784,
      "end": 3811
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
            "typeAnnotation": null,
            "start": 3817,
            "end": 3823
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
                    "start": 3827,
                    "end": 3828
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3837,
                      "end": 3841
                    },
                    "typeArguments": null,
                    "start": 3837,
                    "end": 3841
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3827,
                  "end": 3841
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3843,
                    "end": 3844
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3853,
                      "end": 3860
                    },
                    "typeArguments": null,
                    "start": 3853,
                    "end": 3860
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3843,
                  "end": 3860
                }
              ],
              "start": 3826,
              "end": 3861
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
                              "start": 3871,
                              "end": 3872
                            },
                            "typeArguments": null,
                            "start": 3871,
                            "end": 3872
                          },
                          "start": 3869,
                          "end": 3872
                        },
                        "start": 3866,
                        "end": 3872
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
                          "start": 3877,
                          "end": 3878
                        },
                        "typeArguments": null,
                        "start": 3877,
                        "end": 3878
                      },
                      "start": 3874,
                      "end": 3878
                    },
                    "start": 3865,
                    "end": 3878
                  },
                  "start": 3863,
                  "end": 3878
                },
                "start": 3862,
                "end": 3878
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
                        "start": 3887,
                        "end": 3888
                      },
                      "typeArguments": null,
                      "start": 3887,
                      "end": 3888
                    },
                    "start": 3885,
                    "end": 3888
                  },
                  "start": 3884,
                  "end": 3888
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
                    "start": 3894,
                    "end": 3895
                  },
                  "typeArguments": null,
                  "start": 3894,
                  "end": 3895
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3896,
                  "end": 3900
                },
                "start": 3893,
                "end": 3900
              },
              "id": null,
              "generator": false,
              "start": 3883,
              "end": 3900
            },
            "id": null,
            "generator": false,
            "start": 3826,
            "end": 3900
          },
          "definite": false,
          "start": 3817,
          "end": 3900
        }
      ],
      "declare": false,
      "start": 3813,
      "end": 3901
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
            "start": 3906,
            "end": 3912
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
                              "start": 3925,
                              "end": 3929
                            },
                            "typeArguments": null,
                            "start": 3925,
                            "end": 3929
                          },
                          "start": 3923,
                          "end": 3929
                        },
                        "start": 3920,
                        "end": 3929
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
                          "start": 3934,
                          "end": 3941
                        },
                        "typeArguments": null,
                        "start": 3934,
                        "end": 3941
                      },
                      "start": 3931,
                      "end": 3941
                    },
                    "start": 3919,
                    "end": 3941
                  },
                  "start": 3917,
                  "end": 3941
                },
                "start": 3916,
                "end": 3941
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
                        "start": 3950,
                        "end": 3954
                      },
                      "typeArguments": null,
                      "start": 3950,
                      "end": 3954
                    },
                    "start": 3948,
                    "end": 3954
                  },
                  "start": 3947,
                  "end": 3954
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
                    "start": 3960,
                    "end": 3967
                  },
                  "typeArguments": null,
                  "start": 3960,
                  "end": 3967
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3968,
                  "end": 3972
                },
                "start": 3959,
                "end": 3972
              },
              "id": null,
              "generator": false,
              "start": 3946,
              "end": 3972
            },
            "id": null,
            "generator": false,
            "start": 3915,
            "end": 3972
          },
          "definite": false,
          "start": 3906,
          "end": 3972
        }
      ],
      "declare": false,
      "start": 3902,
      "end": 3973
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
            "start": 3978,
            "end": 3980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 3983,
              "end": 3987
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3988,
                "end": 3994
              }
            ],
            "optional": false,
            "start": 3983,
            "end": 3995
          },
          "definite": false,
          "start": 3978,
          "end": 3995
        }
      ],
      "declare": false,
      "start": 3974,
      "end": 3996
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
            "start": 4008,
            "end": 4011
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
                "start": 4015,
                "end": 4021
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4023,
                "end": 4029
              }
            ],
            "start": 4014,
            "end": 4030
          },
          "definite": false,
          "start": 4008,
          "end": 4030
        }
      ],
      "declare": false,
      "start": 4004,
      "end": 4031
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
            "start": 4036,
            "end": 4039
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
                "start": 4043,
                "end": 4049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r7arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4051,
                "end": 4057
              }
            ],
            "start": 4042,
            "end": 4058
          },
          "definite": false,
          "start": 4036,
          "end": 4058
        }
      ],
      "declare": false,
      "start": 4032,
      "end": 4059
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
            "name": "r8arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4065,
            "end": 4071
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
                    "start": 4075,
                    "end": 4076
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4089
                    },
                    "typeArguments": null,
                    "start": 4085,
                    "end": 4089
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4075,
                  "end": 4089
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4091,
                    "end": 4092
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4108
                    },
                    "typeArguments": null,
                    "start": 4101,
                    "end": 4108
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4091,
                  "end": 4108
                }
              ],
              "start": 4074,
              "end": 4109
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
                              "start": 4119,
                              "end": 4120
                            },
                            "typeArguments": null,
                            "start": 4119,
                            "end": 4120
                          },
                          "start": 4117,
                          "end": 4120
                        },
                        "start": 4114,
                        "end": 4120
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
                          "start": 4125,
                          "end": 4126
                        },
                        "typeArguments": null,
                        "start": 4125,
                        "end": 4126
                      },
                      "start": 4122,
                      "end": 4126
                    },
                    "start": 4113,
                    "end": 4126
                  },
                  "start": 4111,
                  "end": 4126
                },
                "start": 4110,
                "end": 4126
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
                              "start": 4138,
                              "end": 4139
                            },
                            "typeArguments": null,
                            "start": 4138,
                            "end": 4139
                          },
                          "start": 4136,
                          "end": 4139
                        },
                        "start": 4132,
                        "end": 4139
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
                          "start": 4144,
                          "end": 4145
                        },
                        "typeArguments": null,
                        "start": 4144,
                        "end": 4145
                      },
                      "start": 4141,
                      "end": 4145
                    },
                    "start": 4131,
                    "end": 4145
                  },
                  "start": 4129,
                  "end": 4145
                },
                "start": 4128,
                "end": 4145
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
                        "start": 4154,
                        "end": 4155
                      },
                      "typeArguments": null,
                      "start": 4154,
                      "end": 4155
                    },
                    "start": 4152,
                    "end": 4155
                  },
                  "start": 4151,
                  "end": 4155
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
                    "start": 4161,
                    "end": 4162
                  },
                  "typeArguments": null,
                  "start": 4161,
                  "end": 4162
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4163,
                  "end": 4167
                },
                "start": 4160,
                "end": 4167
              },
              "id": null,
              "generator": false,
              "start": 4150,
              "end": 4167
            },
            "id": null,
            "generator": false,
            "start": 4074,
            "end": 4167
          },
          "definite": false,
          "start": 4065,
          "end": 4167
        }
      ],
      "declare": false,
      "start": 4061,
      "end": 4168
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
            "name": "r8arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4173,
            "end": 4179
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
                              "start": 4192,
                              "end": 4196
                            },
                            "typeArguments": null,
                            "start": 4192,
                            "end": 4196
                          },
                          "start": 4190,
                          "end": 4196
                        },
                        "start": 4187,
                        "end": 4196
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
                          "start": 4201,
                          "end": 4208
                        },
                        "typeArguments": null,
                        "start": 4201,
                        "end": 4208
                      },
                      "start": 4198,
                      "end": 4208
                    },
                    "start": 4186,
                    "end": 4208
                  },
                  "start": 4184,
                  "end": 4208
                },
                "start": 4183,
                "end": 4208
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
                              "start": 4220,
                              "end": 4224
                            },
                            "typeArguments": null,
                            "start": 4220,
                            "end": 4224
                          },
                          "start": 4218,
                          "end": 4224
                        },
                        "start": 4214,
                        "end": 4224
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
                          "start": 4229,
                          "end": 4236
                        },
                        "typeArguments": null,
                        "start": 4229,
                        "end": 4236
                      },
                      "start": 4226,
                      "end": 4236
                    },
                    "start": 4213,
                    "end": 4236
                  },
                  "start": 4211,
                  "end": 4236
                },
                "start": 4210,
                "end": 4236
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
                        "start": 4245,
                        "end": 4249
                      },
                      "typeArguments": null,
                      "start": 4245,
                      "end": 4249
                    },
                    "start": 4243,
                    "end": 4249
                  },
                  "start": 4242,
                  "end": 4249
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
                    "start": 4255,
                    "end": 4262
                  },
                  "typeArguments": null,
                  "start": 4255,
                  "end": 4262
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4263,
                  "end": 4267
                },
                "start": 4254,
                "end": 4267
              },
              "id": null,
              "generator": false,
              "start": 4241,
              "end": 4267
            },
            "id": null,
            "generator": false,
            "start": 4182,
            "end": 4267
          },
          "definite": false,
          "start": 4173,
          "end": 4267
        }
      ],
      "declare": false,
      "start": 4169,
      "end": 4268
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
            "start": 4273,
            "end": 4275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4278,
              "end": 4282
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4283,
                "end": 4289
              }
            ],
            "optional": false,
            "start": 4278,
            "end": 4290
          },
          "definite": false,
          "start": 4273,
          "end": 4290
        }
      ],
      "declare": false,
      "start": 4269,
      "end": 4291
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
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4303,
            "end": 4306
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4310,
                "end": 4316
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4324
              }
            ],
            "start": 4309,
            "end": 4325
          },
          "definite": false,
          "start": 4303,
          "end": 4325
        }
      ],
      "declare": false,
      "start": 4299,
      "end": 4326
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
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4331,
            "end": 4334
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4338,
                "end": 4344
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r8arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4346,
                "end": 4352
              }
            ],
            "start": 4337,
            "end": 4353
          },
          "definite": false,
          "start": 4331,
          "end": 4353
        }
      ],
      "declare": false,
      "start": 4327,
      "end": 4354
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
            "name": "r9arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4360,
            "end": 4366
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
                    "start": 4370,
                    "end": 4371
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4380,
                      "end": 4384
                    },
                    "typeArguments": null,
                    "start": 4380,
                    "end": 4384
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4370,
                  "end": 4384
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4386,
                    "end": 4387
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4396,
                      "end": 4403
                    },
                    "typeArguments": null,
                    "start": 4396,
                    "end": 4403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4386,
                  "end": 4403
                }
              ],
              "start": 4369,
              "end": 4404
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
                              "start": 4414,
                              "end": 4415
                            },
                            "typeArguments": null,
                            "start": 4414,
                            "end": 4415
                          },
                          "start": 4412,
                          "end": 4415
                        },
                        "start": 4409,
                        "end": 4415
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
                          "start": 4420,
                          "end": 4421
                        },
                        "typeArguments": null,
                        "start": 4420,
                        "end": 4421
                      },
                      "start": 4417,
                      "end": 4421
                    },
                    "start": 4408,
                    "end": 4421
                  },
                  "start": 4406,
                  "end": 4421
                },
                "start": 4405,
                "end": 4421
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
                                  "start": 4435,
                                  "end": 4438
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 4440,
                                    "end": 4446
                                  },
                                  "start": 4438,
                                  "end": 4446
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 4435,
                                "end": 4447
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
                                  "start": 4448,
                                  "end": 4452
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 4454,
                                    "end": 4460
                                  },
                                  "start": 4452,
                                  "end": 4460
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 4448,
                                "end": 4460
                              }
                            ],
                            "start": 4433,
                            "end": 4462
                          },
                          "start": 4431,
                          "end": 4462
                        },
                        "start": 4427,
                        "end": 4462
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
                          "start": 4467,
                          "end": 4468
                        },
                        "typeArguments": null,
                        "start": 4467,
                        "end": 4468
                      },
                      "start": 4464,
                      "end": 4468
                    },
                    "start": 4426,
                    "end": 4468
                  },
                  "start": 4424,
                  "end": 4468
                },
                "start": 4423,
                "end": 4468
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
                        "start": 4477,
                        "end": 4478
                      },
                      "typeArguments": null,
                      "start": 4477,
                      "end": 4478
                    },
                    "start": 4475,
                    "end": 4478
                  },
                  "start": 4474,
                  "end": 4478
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
                    "start": 4484,
                    "end": 4485
                  },
                  "typeArguments": null,
                  "start": 4484,
                  "end": 4485
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4486,
                  "end": 4490
                },
                "start": 4483,
                "end": 4490
              },
              "id": null,
              "generator": false,
              "start": 4473,
              "end": 4490
            },
            "id": null,
            "generator": false,
            "start": 4369,
            "end": 4490
          },
          "definite": false,
          "start": 4360,
          "end": 4490
        }
      ],
      "declare": false,
      "start": 4356,
      "end": 4491
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
            "name": "r9arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4496,
            "end": 4502
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
                              "start": 4515,
                              "end": 4519
                            },
                            "typeArguments": null,
                            "start": 4515,
                            "end": 4519
                          },
                          "start": 4513,
                          "end": 4519
                        },
                        "start": 4510,
                        "end": 4519
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
                          "start": 4524,
                          "end": 4531
                        },
                        "typeArguments": null,
                        "start": 4524,
                        "end": 4531
                      },
                      "start": 4521,
                      "end": 4531
                    },
                    "start": 4509,
                    "end": 4531
                  },
                  "start": 4507,
                  "end": 4531
                },
                "start": 4506,
                "end": 4531
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
                              "start": 4543,
                              "end": 4547
                            },
                            "typeArguments": null,
                            "start": 4543,
                            "end": 4547
                          },
                          "start": 4541,
                          "end": 4547
                        },
                        "start": 4537,
                        "end": 4547
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
                          "start": 4552,
                          "end": 4559
                        },
                        "typeArguments": null,
                        "start": 4552,
                        "end": 4559
                      },
                      "start": 4549,
                      "end": 4559
                    },
                    "start": 4536,
                    "end": 4559
                  },
                  "start": 4534,
                  "end": 4559
                },
                "start": 4533,
                "end": 4559
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
                        "start": 4568,
                        "end": 4572
                      },
                      "typeArguments": null,
                      "start": 4568,
                      "end": 4572
                    },
                    "start": 4566,
                    "end": 4572
                  },
                  "start": 4565,
                  "end": 4572
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
                    "start": 4578,
                    "end": 4585
                  },
                  "typeArguments": null,
                  "start": 4578,
                  "end": 4585
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4586,
                  "end": 4590
                },
                "start": 4577,
                "end": 4590
              },
              "id": null,
              "generator": false,
              "start": 4564,
              "end": 4590
            },
            "id": null,
            "generator": false,
            "start": 4505,
            "end": 4590
          },
          "definite": false,
          "start": 4496,
          "end": 4590
        }
      ],
      "declare": false,
      "start": 4492,
      "end": 4591
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
            "start": 4596,
            "end": 4598
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4601,
              "end": 4605
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4606,
                "end": 4612
              }
            ],
            "optional": false,
            "start": 4601,
            "end": 4613
          },
          "definite": false,
          "start": 4596,
          "end": 4613
        }
      ],
      "declare": false,
      "start": 4592,
      "end": 4614
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
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4626,
            "end": 4629
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4633,
                "end": 4639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4641,
                "end": 4647
              }
            ],
            "start": 4632,
            "end": 4648
          },
          "definite": false,
          "start": 4626,
          "end": 4648
        }
      ],
      "declare": false,
      "start": 4622,
      "end": 4649
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
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4654,
            "end": 4657
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4661,
                "end": 4667
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r9arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4669,
                "end": 4675
              }
            ],
            "start": 4660,
            "end": 4676
          },
          "definite": false,
          "start": 4654,
          "end": 4676
        }
      ],
      "declare": false,
      "start": 4650,
      "end": 4677
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
            "name": "r10arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4683,
            "end": 4690
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
                    "start": 4694,
                    "end": 4695
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4704,
                      "end": 4711
                    },
                    "typeArguments": null,
                    "start": 4704,
                    "end": 4711
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4694,
                  "end": 4711
                }
              ],
              "start": 4693,
              "end": 4712
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
                  "start": 4716,
                  "end": 4717
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
                        "start": 4719,
                        "end": 4720
                      },
                      "typeArguments": null,
                      "start": 4719,
                      "end": 4720
                    },
                    "start": 4719,
                    "end": 4722
                  },
                  "start": 4717,
                  "end": 4722
                },
                "value": null,
                "start": 4713,
                "end": 4722
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4727,
                "end": 4728
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4729,
                "end": 4730
              },
              "optional": false,
              "computed": true,
              "start": 4727,
              "end": 4731
            },
            "id": null,
            "generator": false,
            "start": 4693,
            "end": 4731
          },
          "definite": false,
          "start": 4683,
          "end": 4731
        }
      ],
      "declare": false,
      "start": 4679,
      "end": 4732
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
            "name": "r10arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4737,
            "end": 4744
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
                  "start": 4751,
                  "end": 4752
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
                        "start": 4754,
                        "end": 4761
                      },
                      "typeArguments": null,
                      "start": 4754,
                      "end": 4761
                    },
                    "start": 4754,
                    "end": 4763
                  },
                  "start": 4752,
                  "end": 4763
                },
                "value": null,
                "start": 4748,
                "end": 4763
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
                  "start": 4769,
                  "end": 4776
                },
                "typeArguments": null,
                "start": 4769,
                "end": 4776
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4777,
                "end": 4781
              },
              "start": 4768,
              "end": 4781
            },
            "id": null,
            "generator": false,
            "start": 4747,
            "end": 4781
          },
          "definite": false,
          "start": 4737,
          "end": 4781
        }
      ],
      "declare": false,
      "start": 4733,
      "end": 4782
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4787,
            "end": 4790
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 4793,
              "end": 4798
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4806
              }
            ],
            "optional": false,
            "start": 4793,
            "end": 4807
          },
          "definite": false,
          "start": 4787,
          "end": 4807
        }
      ],
      "declare": false,
      "start": 4783,
      "end": 4808
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
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4820,
            "end": 4824
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4828,
                "end": 4835
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4837,
                "end": 4844
              }
            ],
            "start": 4827,
            "end": 4845
          },
          "definite": false,
          "start": 4820,
          "end": 4845
        }
      ],
      "declare": false,
      "start": 4816,
      "end": 4846
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
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4851,
            "end": 4855
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4859,
                "end": 4866
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r10arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4868,
                "end": 4875
              }
            ],
            "start": 4858,
            "end": 4876
          },
          "definite": false,
          "start": 4851,
          "end": 4876
        }
      ],
      "declare": false,
      "start": 4847,
      "end": 4877
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
            "name": "r11arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4883,
            "end": 4890
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
                    "start": 4894,
                    "end": 4895
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4904,
                      "end": 4908
                    },
                    "typeArguments": null,
                    "start": 4904,
                    "end": 4908
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4894,
                  "end": 4908
                }
              ],
              "start": 4893,
              "end": 4909
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
                      "start": 4913,
                      "end": 4914
                    },
                    "typeArguments": null,
                    "start": 4913,
                    "end": 4914
                  },
                  "start": 4911,
                  "end": 4914
                },
                "start": 4910,
                "end": 4914
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
                      "start": 4919,
                      "end": 4920
                    },
                    "typeArguments": null,
                    "start": 4919,
                    "end": 4920
                  },
                  "start": 4917,
                  "end": 4920
                },
                "start": 4916,
                "end": 4920
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4925,
              "end": 4926
            },
            "id": null,
            "generator": false,
            "start": 4893,
            "end": 4926
          },
          "definite": false,
          "start": 4883,
          "end": 4926
        }
      ],
      "declare": false,
      "start": 4879,
      "end": 4927
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
            "name": "r11arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4932,
            "end": 4939
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
                          "start": 4948,
                          "end": 4951
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4953,
                            "end": 4959
                          },
                          "start": 4951,
                          "end": 4959
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4948,
                        "end": 4959
                      }
                    ],
                    "start": 4946,
                    "end": 4961
                  },
                  "start": 4944,
                  "end": 4961
                },
                "start": 4943,
                "end": 4961
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
                          "start": 4968,
                          "end": 4971
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4973,
                            "end": 4979
                          },
                          "start": 4971,
                          "end": 4979
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4968,
                        "end": 4980
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
                          "start": 4981,
                          "end": 4984
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4986,
                            "end": 4992
                          },
                          "start": 4984,
                          "end": 4992
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4981,
                        "end": 4992
                      }
                    ],
                    "start": 4966,
                    "end": 4994
                  },
                  "start": 4964,
                  "end": 4994
                },
                "start": 4963,
                "end": 4994
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
                  "start": 5000,
                  "end": 5004
                },
                "typeArguments": null,
                "start": 5000,
                "end": 5004
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5005,
                "end": 5009
              },
              "start": 4999,
              "end": 5009
            },
            "id": null,
            "generator": false,
            "start": 4942,
            "end": 5009
          },
          "definite": false,
          "start": 4932,
          "end": 5009
        }
      ],
      "declare": false,
      "start": 4928,
      "end": 5010
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 5015,
            "end": 5018
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5021,
              "end": 5026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5027,
                "end": 5034
              }
            ],
            "optional": false,
            "start": 5021,
            "end": 5035
          },
          "definite": false,
          "start": 5015,
          "end": 5035
        }
      ],
      "declare": false,
      "start": 5011,
      "end": 5036
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
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5048,
            "end": 5052
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5056,
                "end": 5063
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5065,
                "end": 5072
              }
            ],
            "start": 5055,
            "end": 5073
          },
          "definite": false,
          "start": 5048,
          "end": 5073
        }
      ],
      "declare": false,
      "start": 5044,
      "end": 5074
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
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5079,
            "end": 5083
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5087,
                "end": 5094
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5096,
                "end": 5103
              }
            ],
            "start": 5086,
            "end": 5104
          },
          "definite": false,
          "start": 5079,
          "end": 5104
        }
      ],
      "declare": false,
      "start": 5075,
      "end": 5105
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
            "name": "r12arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5111,
            "end": 5118
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
                    "start": 5122,
                    "end": 5123
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5132,
                      "end": 5137
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
                            "start": 5138,
                            "end": 5142
                          },
                          "typeArguments": null,
                          "start": 5138,
                          "end": 5142
                        }
                      ],
                      "start": 5137,
                      "end": 5143
                    },
                    "start": 5132,
                    "end": 5143
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5122,
                  "end": 5143
                }
              ],
              "start": 5121,
              "end": 5144
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
                      "start": 5148,
                      "end": 5153
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
                            "start": 5154,
                            "end": 5158
                          },
                          "typeArguments": null,
                          "start": 5154,
                          "end": 5158
                        }
                      ],
                      "start": 5153,
                      "end": 5159
                    },
                    "start": 5148,
                    "end": 5159
                  },
                  "start": 5146,
                  "end": 5159
                },
                "start": 5145,
                "end": 5159
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
                      "start": 5164,
                      "end": 5165
                    },
                    "typeArguments": null,
                    "start": 5164,
                    "end": 5165
                  },
                  "start": 5162,
                  "end": 5165
                },
                "start": 5161,
                "end": 5165
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
                  "start": 5171,
                  "end": 5176
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
                        "start": 5177,
                        "end": 5184
                      },
                      "typeArguments": null,
                      "start": 5177,
                      "end": 5184
                    }
                  ],
                  "start": 5176,
                  "end": 5185
                },
                "start": 5171,
                "end": 5185
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5186,
                "end": 5190
              },
              "start": 5170,
              "end": 5190
            },
            "id": null,
            "generator": false,
            "start": 5121,
            "end": 5190
          },
          "definite": false,
          "start": 5111,
          "end": 5190
        }
      ],
      "declare": false,
      "start": 5107,
      "end": 5191
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
            "name": "r12arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5196,
            "end": 5203
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
                      "start": 5210,
                      "end": 5215
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
                            "start": 5216,
                            "end": 5220
                          },
                          "typeArguments": null,
                          "start": 5216,
                          "end": 5220
                        }
                      ],
                      "start": 5215,
                      "end": 5221
                    },
                    "start": 5210,
                    "end": 5221
                  },
                  "start": 5208,
                  "end": 5221
                },
                "start": 5207,
                "end": 5221
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
                      "start": 5226,
                      "end": 5231
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
                            "start": 5232,
                            "end": 5240
                          },
                          "typeArguments": null,
                          "start": 5232,
                          "end": 5240
                        }
                      ],
                      "start": 5231,
                      "end": 5241
                    },
                    "start": 5226,
                    "end": 5241
                  },
                  "start": 5224,
                  "end": 5241
                },
                "start": 5223,
                "end": 5241
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
                  "start": 5247,
                  "end": 5252
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
                        "start": 5253,
                        "end": 5260
                      },
                      "typeArguments": null,
                      "start": 5253,
                      "end": 5260
                    }
                  ],
                  "start": 5252,
                  "end": 5261
                },
                "start": 5247,
                "end": 5261
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5262,
                "end": 5266
              },
              "start": 5246,
              "end": 5266
            },
            "id": null,
            "generator": false,
            "start": 5206,
            "end": 5266
          },
          "definite": false,
          "start": 5196,
          "end": 5266
        }
      ],
      "declare": false,
      "start": 5192,
      "end": 5267
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 5272,
            "end": 5275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5278,
              "end": 5283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5284,
                "end": 5291
              }
            ],
            "optional": false,
            "start": 5278,
            "end": 5292
          },
          "definite": false,
          "start": 5272,
          "end": 5292
        }
      ],
      "declare": false,
      "start": 5268,
      "end": 5293
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
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5305,
            "end": 5309
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5313,
                "end": 5320
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5322,
                "end": 5329
              }
            ],
            "start": 5312,
            "end": 5330
          },
          "definite": false,
          "start": 5305,
          "end": 5330
        }
      ],
      "declare": false,
      "start": 5301,
      "end": 5331
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
            "name": "r12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5336,
            "end": 5340
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5344,
                "end": 5351
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r12arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5353,
                "end": 5360
              }
            ],
            "start": 5343,
            "end": 5361
          },
          "definite": false,
          "start": 5336,
          "end": 5361
        }
      ],
      "declare": false,
      "start": 5332,
      "end": 5362
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
            "name": "r13arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5368,
            "end": 5375
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
                    "start": 5379,
                    "end": 5380
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5389,
                      "end": 5394
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
                            "start": 5395,
                            "end": 5402
                          },
                          "typeArguments": null,
                          "start": 5395,
                          "end": 5402
                        }
                      ],
                      "start": 5394,
                      "end": 5403
                    },
                    "start": 5389,
                    "end": 5403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5379,
                  "end": 5403
                }
              ],
              "start": 5378,
              "end": 5404
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
                      "start": 5408,
                      "end": 5413
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
                            "start": 5414,
                            "end": 5418
                          },
                          "typeArguments": null,
                          "start": 5414,
                          "end": 5418
                        }
                      ],
                      "start": 5413,
                      "end": 5419
                    },
                    "start": 5408,
                    "end": 5419
                  },
                  "start": 5406,
                  "end": 5419
                },
                "start": 5405,
                "end": 5419
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
                      "start": 5424,
                      "end": 5425
                    },
                    "typeArguments": null,
                    "start": 5424,
                    "end": 5425
                  },
                  "start": 5422,
                  "end": 5425
                },
                "start": 5421,
                "end": 5425
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 5430,
              "end": 5431
            },
            "id": null,
            "generator": false,
            "start": 5378,
            "end": 5431
          },
          "definite": false,
          "start": 5368,
          "end": 5431
        }
      ],
      "declare": false,
      "start": 5364,
      "end": 5432
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
            "name": "r13arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5437,
            "end": 5444
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
                      "start": 5451,
                      "end": 5456
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
                            "start": 5457,
                            "end": 5461
                          },
                          "typeArguments": null,
                          "start": 5457,
                          "end": 5461
                        }
                      ],
                      "start": 5456,
                      "end": 5462
                    },
                    "start": 5451,
                    "end": 5462
                  },
                  "start": 5449,
                  "end": 5462
                },
                "start": 5448,
                "end": 5462
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
                      "start": 5467,
                      "end": 5472
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
                            "start": 5473,
                            "end": 5480
                          },
                          "typeArguments": null,
                          "start": 5473,
                          "end": 5480
                        }
                      ],
                      "start": 5472,
                      "end": 5481
                    },
                    "start": 5467,
                    "end": 5481
                  },
                  "start": 5465,
                  "end": 5481
                },
                "start": 5464,
                "end": 5481
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
                  "start": 5487,
                  "end": 5492
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
                        "start": 5493,
                        "end": 5500
                      },
                      "typeArguments": null,
                      "start": 5493,
                      "end": 5500
                    }
                  ],
                  "start": 5492,
                  "end": 5501
                },
                "start": 5487,
                "end": 5501
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5502,
                "end": 5506
              },
              "start": 5486,
              "end": 5506
            },
            "id": null,
            "generator": false,
            "start": 5447,
            "end": 5506
          },
          "definite": false,
          "start": 5437,
          "end": 5506
        }
      ],
      "declare": false,
      "start": 5433,
      "end": 5507
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
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 5512,
            "end": 5515
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5518,
              "end": 5523
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5524,
                "end": 5531
              }
            ],
            "optional": false,
            "start": 5518,
            "end": 5532
          },
          "definite": false,
          "start": 5512,
          "end": 5532
        }
      ],
      "declare": false,
      "start": 5508,
      "end": 5533
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
            "name": "r13a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5545,
            "end": 5549
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5553,
                "end": 5560
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5562,
                "end": 5569
              }
            ],
            "start": 5552,
            "end": 5570
          },
          "definite": false,
          "start": 5545,
          "end": 5570
        }
      ],
      "declare": false,
      "start": 5541,
      "end": 5571
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
            "name": "r13b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5576,
            "end": 5580
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5584,
                "end": 5591
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r13arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5593,
                "end": 5600
              }
            ],
            "start": 5583,
            "end": 5601
          },
          "definite": false,
          "start": 5576,
          "end": 5601
        }
      ],
      "declare": false,
      "start": 5572,
      "end": 5602
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
            "name": "r14arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5608,
            "end": 5615
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
                    "start": 5619,
                    "end": 5620
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5619,
                  "end": 5620
                }
              ],
              "start": 5618,
              "end": 5621
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
                          "start": 5627,
                          "end": 5628
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
                              "start": 5630,
                              "end": 5631
                            },
                            "typeArguments": null,
                            "start": 5630,
                            "end": 5631
                          },
                          "start": 5628,
                          "end": 5631
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5627,
                        "end": 5632
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
                          "start": 5633,
                          "end": 5634
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
                              "start": 5636,
                              "end": 5637
                            },
                            "typeArguments": null,
                            "start": 5636,
                            "end": 5637
                          },
                          "start": 5634,
                          "end": 5637
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5633,
                        "end": 5637
                      }
                    ],
                    "start": 5625,
                    "end": 5639
                  },
                  "start": 5623,
                  "end": 5639
                },
                "start": 5622,
                "end": 5639
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5644,
                "end": 5645
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 5646,
                "end": 5647
              },
              "optional": false,
              "computed": false,
              "start": 5644,
              "end": 5647
            },
            "id": null,
            "generator": false,
            "start": 5618,
            "end": 5647
          },
          "definite": false,
          "start": 5608,
          "end": 5647
        }
      ],
      "declare": false,
      "start": 5604,
      "end": 5648
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
            "name": "r14arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5653,
            "end": 5660
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
                          "start": 5669,
                          "end": 5670
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 5672,
                            "end": 5678
                          },
                          "start": 5670,
                          "end": 5678
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5669,
                        "end": 5679
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
                          "start": 5680,
                          "end": 5681
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5683,
                            "end": 5689
                          },
                          "start": 5681,
                          "end": 5689
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5680,
                        "end": 5689
                      }
                    ],
                    "start": 5667,
                    "end": 5691
                  },
                  "start": 5665,
                  "end": 5691
                },
                "start": 5664,
                "end": 5691
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
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5697,
                  "end": 5703
                },
                "typeArguments": null,
                "start": 5697,
                "end": 5703
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5704,
                "end": 5708
              },
              "start": 5696,
              "end": 5708
            },
            "id": null,
            "generator": false,
            "start": 5663,
            "end": 5708
          },
          "definite": false,
          "start": 5653,
          "end": 5708
        }
      ],
      "declare": false,
      "start": 5649,
      "end": 5709
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
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 5714,
            "end": 5717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5720,
              "end": 5725
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5726,
                "end": 5733
              }
            ],
            "optional": false,
            "start": 5720,
            "end": 5734
          },
          "definite": false,
          "start": 5714,
          "end": 5734
        }
      ],
      "declare": false,
      "start": 5710,
      "end": 5735
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
            "name": "r14a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5747,
            "end": 5751
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5755,
                "end": 5762
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5764,
                "end": 5771
              }
            ],
            "start": 5754,
            "end": 5772
          },
          "definite": false,
          "start": 5747,
          "end": 5772
        }
      ],
      "declare": false,
      "start": 5743,
      "end": 5773
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
            "name": "r14b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5778,
            "end": 5782
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5786,
                "end": 5793
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r14arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5795,
                "end": 5802
              }
            ],
            "start": 5785,
            "end": 5803
          },
          "definite": false,
          "start": 5778,
          "end": 5803
        }
      ],
      "declare": false,
      "start": 5774,
      "end": 5804
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
            "name": "r15arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5810,
            "end": 5817
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
                    "start": 5821,
                    "end": 5822
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5821,
                  "end": 5822
                }
              ],
              "start": 5820,
              "end": 5823
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
                      "start": 5827,
                      "end": 5828
                    },
                    "typeArguments": null,
                    "start": 5827,
                    "end": 5828
                  },
                  "start": 5825,
                  "end": 5828
                },
                "start": 5824,
                "end": 5828
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
                    "start": 5834,
                    "end": 5835
                  },
                  "typeArguments": null,
                  "start": 5834,
                  "end": 5835
                },
                "start": 5834,
                "end": 5837
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5838,
                "end": 5842
              },
              "start": 5833,
              "end": 5842
            },
            "id": null,
            "generator": false,
            "start": 5820,
            "end": 5842
          },
          "definite": false,
          "start": 5810,
          "end": 5842
        }
      ],
      "declare": false,
      "start": 5806,
      "end": 5842
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 5847,
            "end": 5850
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5853,
              "end": 5858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5859,
                "end": 5866
              }
            ],
            "optional": false,
            "start": 5853,
            "end": 5867
          },
          "definite": false,
          "start": 5847,
          "end": 5867
        }
      ],
      "declare": false,
      "start": 5843,
      "end": 5868
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
            "name": "r16arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5880,
            "end": 5887
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
                    "start": 5891,
                    "end": 5892
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5901,
                      "end": 5905
                    },
                    "typeArguments": null,
                    "start": 5901,
                    "end": 5905
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5891,
                  "end": 5905
                }
              ],
              "start": 5890,
              "end": 5906
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
                      "start": 5910,
                      "end": 5911
                    },
                    "typeArguments": null,
                    "start": 5910,
                    "end": 5911
                  },
                  "start": 5908,
                  "end": 5911
                },
                "start": 5907,
                "end": 5911
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5917,
                  "end": 5918
                }
              ],
              "start": 5916,
              "end": 5919
            },
            "id": null,
            "generator": false,
            "start": 5890,
            "end": 5919
          },
          "definite": false,
          "start": 5880,
          "end": 5919
        }
      ],
      "declare": false,
      "start": 5876,
      "end": 5920
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 5925,
            "end": 5928
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 5931,
              "end": 5936
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5937,
                "end": 5944
              }
            ],
            "optional": false,
            "start": 5931,
            "end": 5945
          },
          "definite": false,
          "start": 5925,
          "end": 5945
        }
      ],
      "declare": false,
      "start": 5921,
      "end": 5946
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
            "name": "r17arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5952,
            "end": 5959
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
                    "start": 5963,
                    "end": 5964
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5963,
                  "end": 5964
                }
              ],
              "start": 5962,
              "end": 5965
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
                              "start": 5973,
                              "end": 5974
                            },
                            "typeArguments": null,
                            "start": 5973,
                            "end": 5974
                          },
                          "start": 5971,
                          "end": 5974
                        },
                        "start": 5970,
                        "end": 5974
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
                          "start": 5979,
                          "end": 5980
                        },
                        "typeArguments": null,
                        "start": 5979,
                        "end": 5980
                      },
                      "start": 5976,
                      "end": 5980
                    },
                    "start": 5969,
                    "end": 5980
                  },
                  "start": 5967,
                  "end": 5980
                },
                "start": 5966,
                "end": 5980
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
                    "start": 5986,
                    "end": 5987
                  },
                  "typeArguments": null,
                  "start": 5986,
                  "end": 5987
                },
                "start": 5986,
                "end": 5989
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 5990,
                "end": 5994
              },
              "start": 5985,
              "end": 5994
            },
            "id": null,
            "generator": false,
            "start": 5962,
            "end": 5994
          },
          "definite": false,
          "start": 5952,
          "end": 5994
        }
      ],
      "declare": false,
      "start": 5948,
      "end": 5995
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
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 6000,
            "end": 6003
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6006,
              "end": 6011
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6012,
                "end": 6019
              }
            ],
            "optional": false,
            "start": 6006,
            "end": 6020
          },
          "definite": false,
          "start": 6000,
          "end": 6020
        }
      ],
      "declare": false,
      "start": 5996,
      "end": 6021
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
            "name": "r18arg1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6033,
            "end": 6040
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
                    "start": 6044,
                    "end": 6045
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6044,
                  "end": 6045
                }
              ],
              "start": 6043,
              "end": 6046
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
                              "start": 6054,
                              "end": 6055
                            },
                            "typeArguments": null,
                            "start": 6054,
                            "end": 6055
                          },
                          "start": 6052,
                          "end": 6055
                        },
                        "start": 6051,
                        "end": 6055
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
                          "start": 6060,
                          "end": 6061
                        },
                        "typeArguments": null,
                        "start": 6060,
                        "end": 6061
                      },
                      "start": 6057,
                      "end": 6061
                    },
                    "start": 6050,
                    "end": 6061
                  },
                  "start": 6048,
                  "end": 6061
                },
                "start": 6047,
                "end": 6061
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
                    "start": 6067,
                    "end": 6068
                  },
                  "typeArguments": null,
                  "start": 6067,
                  "end": 6068
                },
                "start": 6067,
                "end": 6070
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 6071,
                "end": 6075
              },
              "start": 6066,
              "end": 6075
            },
            "id": null,
            "generator": false,
            "start": 6043,
            "end": 6075
          },
          "definite": false,
          "start": 6033,
          "end": 6075
        }
      ],
      "declare": false,
      "start": 6029,
      "end": 6076
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
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 6081,
            "end": 6084
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6087,
              "end": 6092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6093,
                "end": 6100
              }
            ],
            "optional": false,
            "start": 6087,
            "end": 6101
          },
          "definite": false,
          "start": 6081,
          "end": 6101
        }
      ],
      "declare": false,
      "start": 6077,
      "end": 6102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 136,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 180,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 228,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 273,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 299,
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
    "value": "number",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 310,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 334,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 342,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
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
    "value": "a",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 408,
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
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 422,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 432,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 469,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 477,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 495,
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
    "value": "number",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 516,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 526,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 534,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 563,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 571,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 611,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 623,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 633,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 658,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 670,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 678,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 700,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 705,
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
    "value": "number",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 724,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 736,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 746,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
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
    "value": "foo6",
    "start": 800,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 824,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 827,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 846,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 856,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 864,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
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
    "value": "foo7",
    "start": 910,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 923,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 934,
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
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 946,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 953,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 959,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 962,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 972,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 982,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 990,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1019,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1027,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1063,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1091,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1107,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1113,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1116,
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
    "value": "a",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1153,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1173,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1181,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1217,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1236,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1245,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1254,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "type": "Identifier",
    "value": "Base",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1270,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1280,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1298,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1307,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1327,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1335,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1344,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1350,
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
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1354,
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
    "value": "Derived",
    "start": 1360,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1394,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1402,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1411,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1417,
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
    "value": "any",
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
    "value": "any",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1432,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1440,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1497,
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
    "value": "string",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1522,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1532,
    "end": 1539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1540,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1549,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1558,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1570,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1578,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1587,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1600,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1606,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1616,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1622,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1633,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1636,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1642,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1653,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "declare",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1671,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1680,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1701,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1709,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1718,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1731,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1753,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1763,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1766,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1793,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1801,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1810,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1825,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1831,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1848,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1866,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 1877,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1890,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1909,
    "end": 1916
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1917,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1926,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ")",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1947,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1955,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1964,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1984,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1993,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2011,
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
    "value": ":",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2020,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2042,
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
    "value": "declare",
    "start": 2045,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2062,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2071,
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
    "type": "Identifier",
    "value": "any",
    "start": 2077,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2083,
    "end": 2090
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2091,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2100,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2118,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2126,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2135,
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
    "value": "T",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2142,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2148,
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
    "type": "Punctuator",
    "value": "<",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2159,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2167,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2180,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2194,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2204,
    "end": 2211
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2212,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2221,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2230,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2236,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2242,
    "end": 2249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2250,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2259,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2282,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2290,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2293,
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
    "value": ":",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2302,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2324,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2335,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2344,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2358,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2368,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2376,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 2385,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2400,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2406,
    "end": 2413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2414,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2423,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2456,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2465,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2485,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2510,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2539,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2549,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2567,
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
    "value": "Date",
    "start": 2570,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2577,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2591,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2602,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2612,
    "end": 2619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2620,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 2629,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 2638,
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
    "value": ":",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2650,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2654,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2673,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2681,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2685,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2698,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2706,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2714,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2718,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2723,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2728,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2792,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2796,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2803,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2811,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2869,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2873,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "r1arg1",
    "start": 2880,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 2888,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2947,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 2951,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2970,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "String",
    "value": "''",
    "start": 2974,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2979,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 2983,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2996,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3004,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "String",
    "value": "''",
    "start": 3008,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3017,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3022,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3027,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3037,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3041,
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
    "value": "[",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3048,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 3056,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3065,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3069,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 3076,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "r2arg1",
    "start": 3084,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3094,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3098,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3117,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3123,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3127,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3140,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3148,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 3156,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 3160,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 3165,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3170,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3180,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 3184,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3191,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3199,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3208,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 3212,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 3219,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "r3arg1",
    "start": 3227,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3237,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3241,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3263,
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
    "value": "U",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3269,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3275,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3279,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3292,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3303,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3311,
    "end": 3313
  },
  {
    "type": "String",
    "value": "''",
    "start": 3314,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3318,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 3322,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 3327,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3332,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3348,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3359,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3367,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3376,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 3380,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "r4arg1",
    "start": 3395,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3405,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3409,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3429,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3437,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3443,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3449,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3455,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3459,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3473,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3478,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3486,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3489,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3497,
    "end": 3499
  },
  {
    "type": "String",
    "value": "''",
    "start": 3500,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3504,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 3508,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 3513,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3518,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3534,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 3538,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3545,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3553,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3562,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 3566,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 3573,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "r5arg1",
    "start": 3581,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3591,
    "end": 3594
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3595,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3607,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3615,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3623,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3631,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3644,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3652,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3658,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3664,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3670,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3674,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3688,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3693,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3699,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3702,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3711,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3715,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3720,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3726,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 3730,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 3735,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3740,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3756,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 3760,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3767,
    "end": 3773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3775,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3784,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 3788,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 3795,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "r6arg1",
    "start": 3803,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3813,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3817,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3829,
    "end": 3836
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3837,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3845,
    "end": 3852
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3853,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3866,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3874,
    "end": 3876
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3880,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 3884,
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
    "value": "T",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3890,
    "end": 3892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3896,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3902,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 3906,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3920,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3925,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3931,
    "end": 3933
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3934,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3943,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3950,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3956,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 3960,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3968,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3974,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 3978,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 3983,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 3988,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 4008,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4015,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4023,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4032,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 4036,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Identifier",
    "value": "r7arg2",
    "start": 4043,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "r7arg1",
    "start": 4051,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4061,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4065,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4077,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4085,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4093,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4101,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4114,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4122,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "arg2",
    "start": 4132,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4141,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4144,
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
    "value": "=>",
    "start": 4147,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4157,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4163,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4169,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4173,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4187,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4192,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4198,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4201,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4214,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4220,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4226,
    "end": 4228
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4229,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4238,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4245,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4251,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4255,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4263,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4269,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 4273,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 4278,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4283,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4299,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 4303,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4309,
    "end": 4310
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4310,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4318,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4327,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 4331,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "r8arg2",
    "start": 4338,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "r8arg1",
    "start": 4346,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4356,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4360,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4372,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4380,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4388,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4396,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4409,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4417,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4427,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4435,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4440,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 4448,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4452,
    "end": 4453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4454,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4462,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4464,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4470,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4480,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4485,
    "end": 4486
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4486,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4492,
    "end": 4495
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4496,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4510,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4515,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4521,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4524,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 4537,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4543,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4549,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4552,
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
    "value": "=>",
    "start": 4561,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4568,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4574,
    "end": 4576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4578,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4586,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4592,
    "end": 4595
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 4596,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 4601,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4606,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4622,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 4626,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4633,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4641,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4647,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4650,
    "end": 4653
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 4654,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "r9arg2",
    "start": 4661,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "r9arg1",
    "start": 4669,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4679,
    "end": 4682
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 4683,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4696,
    "end": 4703
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4704,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4713,
    "end": 4716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4724,
    "end": 4726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4733,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 4737,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4748,
    "end": 4751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4754,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4762,
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
    "value": "=>",
    "start": 4765,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4769,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4777,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4783,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 4787,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 4793,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 4799,
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
    "value": ";",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4816,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 4820,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 4828,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 4837,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4847,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 4851,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4858,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "r10arg2",
    "start": 4859,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Identifier",
    "value": "r10arg1",
    "start": 4868,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4879,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 4883,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4896,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4904,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4909,
    "end": 4910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4911,
    "end": 4912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4920,
    "end": 4921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4922,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4928,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 4932,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4948,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4953,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "{",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4968,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4973,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4981,
    "end": 4984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4984,
    "end": 4985
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4986,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4996,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5000,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5005,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5011,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 5015,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 5021,
    "end": 5026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5026,
    "end": 5027
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5027,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5044,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 5048,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5056,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5063,
    "end": 5064
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 5065,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5072,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5075,
    "end": 5078
  },
  {
    "type": "Identifier",
    "value": "r11b",
    "start": 5079,
    "end": 5083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5086,
    "end": 5087
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 5087,
    "end": 5094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Identifier",
    "value": "r11arg1",
    "start": 5096,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5107,
    "end": 5110
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5111,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5122,
    "end": 5123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5124,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5132,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5138,
    "end": 5142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5145,
    "end": 5146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5146,
    "end": 5147
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5148,
    "end": 5153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5153,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5154,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5167,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5171,
    "end": 5176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5177,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5186,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5192,
    "end": 5195
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5196,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5210,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5215,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5216,
    "end": 5220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5220,
    "end": 5221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5221,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5226,
    "end": 5231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5232,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5240,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5243,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5247,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5253,
    "end": 5260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5260,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5262,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5268,
    "end": 5271
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 5272,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 5278,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5284,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5301,
    "end": 5304
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 5305,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5313,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5322,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5332,
    "end": 5335
  },
  {
    "type": "Identifier",
    "value": "r12b",
    "start": 5336,
    "end": 5340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5343,
    "end": 5344
  },
  {
    "type": "Identifier",
    "value": "r12arg2",
    "start": 5344,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Identifier",
    "value": "r12arg1",
    "start": 5353,
    "end": 5360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5361,
    "end": 5362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5364,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5368,
    "end": 5375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5376,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5381,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5389,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5395,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5406,
    "end": 5407
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5408,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5414,
    "end": 5418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5419,
    "end": 5420
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5427,
    "end": 5429
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5433,
    "end": 5436
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5437,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5445,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5447,
    "end": 5448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5451,
    "end": 5456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5456,
    "end": 5457
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5457,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5462,
    "end": 5463
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5464,
    "end": 5465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5465,
    "end": 5466
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5467,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5473,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5480,
    "end": 5481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5481,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5483,
    "end": 5485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5487,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 5493,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5500,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5502,
    "end": 5506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5506,
    "end": 5507
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5508,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 5512,
    "end": 5515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5516,
    "end": 5517
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 5518,
    "end": 5523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5523,
    "end": 5524
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5524,
    "end": 5531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5531,
    "end": 5532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5541,
    "end": 5544
  },
  {
    "type": "Identifier",
    "value": "r13a",
    "start": 5545,
    "end": 5549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5552,
    "end": 5553
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5553,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5562,
    "end": 5569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5572,
    "end": 5575
  },
  {
    "type": "Identifier",
    "value": "r13b",
    "start": 5576,
    "end": 5580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5583,
    "end": 5584
  },
  {
    "type": "Identifier",
    "value": "r13arg2",
    "start": 5584,
    "end": 5591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Identifier",
    "value": "r13arg1",
    "start": 5593,
    "end": 5600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5600,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5604,
    "end": 5607
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5608,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5616,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5618,
    "end": 5619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5623,
    "end": 5624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5625,
    "end": 5626
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5627,
    "end": 5628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5628,
    "end": 5629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5634,
    "end": 5635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5641,
    "end": 5643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5649,
    "end": 5652
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 5653,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5663,
    "end": 5664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5665,
    "end": 5666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5669,
    "end": 5670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5672,
    "end": 5678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5678,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5681,
    "end": 5682
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5683,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5693,
    "end": 5695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 5697,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5704,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5710,
    "end": 5713
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 5714,
    "end": 5717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 5720,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5726,
    "end": 5733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5733,
    "end": 5734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5734,
    "end": 5735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5743,
    "end": 5746
  },
  {
    "type": "Identifier",
    "value": "r14a",
    "start": 5747,
    "end": 5751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5752,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5754,
    "end": 5755
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5755,
    "end": 5762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5762,
    "end": 5763
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 5764,
    "end": 5771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5771,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5774,
    "end": 5777
  },
  {
    "type": "Identifier",
    "value": "r14b",
    "start": 5778,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Identifier",
    "value": "r14arg2",
    "start": 5786,
    "end": 5793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5793,
    "end": 5794
  },
  {
    "type": "Identifier",
    "value": "r14arg1",
    "start": 5795,
    "end": 5802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5802,
    "end": 5803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5803,
    "end": 5804
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5806,
    "end": 5809
  },
  {
    "type": "Identifier",
    "value": "r15arg1",
    "start": 5810,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5821,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5823,
    "end": 5824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5827,
    "end": 5828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5828,
    "end": 5829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5830,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5833,
    "end": 5834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5834,
    "end": 5835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5835,
    "end": 5836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5836,
    "end": 5837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5837,
    "end": 5838
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5838,
    "end": 5842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5843,
    "end": 5846
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 5847,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5851,
    "end": 5852
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 5853,
    "end": 5858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "Identifier",
    "value": "r15arg1",
    "start": 5859,
    "end": 5866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5867,
    "end": 5868
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5876,
    "end": 5879
  },
  {
    "type": "Identifier",
    "value": "r16arg1",
    "start": 5880,
    "end": 5887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5888,
    "end": 5889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5893,
    "end": 5900
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 5901,
    "end": 5905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5906,
    "end": 5907
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5907,
    "end": 5908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5908,
    "end": 5909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5910,
    "end": 5911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5911,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5913,
    "end": 5915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5916,
    "end": 5917
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5917,
    "end": 5918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5918,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5921,
    "end": 5924
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 5925,
    "end": 5928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5929,
    "end": 5930
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 5931,
    "end": 5936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5936,
    "end": 5937
  },
  {
    "type": "Identifier",
    "value": "r16arg1",
    "start": 5937,
    "end": 5944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5944,
    "end": 5945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5945,
    "end": 5946
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5948,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "r17arg1",
    "start": 5952,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5960,
    "end": 5961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5965,
    "end": 5966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5967,
    "end": 5968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5970,
    "end": 5971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5971,
    "end": 5972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5974,
    "end": 5975
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5976,
    "end": 5978
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5979,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5982,
    "end": 5984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5985,
    "end": 5986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5986,
    "end": 5987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5987,
    "end": 5988
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5988,
    "end": 5989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5989,
    "end": 5990
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5990,
    "end": 5994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5994,
    "end": 5995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5996,
    "end": 5999
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 6000,
    "end": 6003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6004,
    "end": 6005
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 6006,
    "end": 6011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6011,
    "end": 6012
  },
  {
    "type": "Identifier",
    "value": "r17arg1",
    "start": 6012,
    "end": 6019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6019,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6029,
    "end": 6032
  },
  {
    "type": "Identifier",
    "value": "r18arg1",
    "start": 6033,
    "end": 6040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6041,
    "end": 6042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6043,
    "end": 6044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6044,
    "end": 6045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6045,
    "end": 6046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6046,
    "end": 6047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6047,
    "end": 6048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6048,
    "end": 6049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6050,
    "end": 6051
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6052,
    "end": 6053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6055,
    "end": 6056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6057,
    "end": 6059
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6060,
    "end": 6061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6063,
    "end": 6065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6066,
    "end": 6067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6067,
    "end": 6068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6070,
    "end": 6071
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6071,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6075,
    "end": 6076
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6077,
    "end": 6080
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 6081,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 6087,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6092,
    "end": 6093
  },
  {
    "type": "Identifier",
    "value": "r18arg1",
    "start": 6093,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6101,
    "end": 6102
  }
]
```
