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
        "start": 228,
        "end": 232
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
              "start": 235,
              "end": 238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              },
              "start": 238,
              "end": 246
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
            "start": 235,
            "end": 247
          }
        ],
        "start": 233,
        "end": 249
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 249
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
        "start": 256,
        "end": 263
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 276
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
              "start": 279,
              "end": 282
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
              },
              "start": 282,
              "end": 290
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
            "start": 279,
            "end": 291
          }
        ],
        "start": 277,
        "end": 293
      },
      "abstract": false,
      "declare": false,
      "start": 250,
      "end": 293
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
        "start": 300,
        "end": 308
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 324
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
              "start": 327,
              "end": 330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
              },
              "start": 330,
              "end": 338
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
            "start": 327,
            "end": 339
          }
        ],
        "start": 325,
        "end": 341
      },
      "abstract": false,
      "declare": false,
      "start": 294,
      "end": 341
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
        "start": 348,
        "end": 360
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 373
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
              "start": 376,
              "end": 380
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
              },
              "start": 380,
              "end": 388
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
            "start": 376,
            "end": 389
          }
        ],
        "start": 374,
        "end": 391
      },
      "abstract": false,
      "declare": false,
      "start": 342,
      "end": 391
    },
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
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
                        "start": 431,
                        "end": 432
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 431,
                      "end": 432
                    }
                  ],
                  "start": 430,
                  "end": 433
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
                          "start": 437,
                          "end": 438
                        },
                        "typeArguments": null,
                        "start": 437,
                        "end": 438
                      },
                      "start": 435,
                      "end": 438
                    },
                    "start": 434,
                    "end": 438
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
                        "start": 443,
                        "end": 444
                      },
                      "typeArguments": null,
                      "start": 443,
                      "end": 444
                    },
                    "start": 443,
                    "end": 446
                  },
                  "start": 440,
                  "end": 446
                },
                "start": 430,
                "end": 446
              },
              "start": 428,
              "end": 446
            },
            "accessibility": null,
            "static": false,
            "start": 427,
            "end": 447
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
              "start": 452,
              "end": 454
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
                        "start": 457,
                        "end": 458
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 457,
                      "end": 458
                    }
                  ],
                  "start": 456,
                  "end": 459
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
                          "start": 463,
                          "end": 464
                        },
                        "typeArguments": null,
                        "start": 463,
                        "end": 464
                      },
                      "start": 461,
                      "end": 464
                    },
                    "start": 460,
                    "end": 464
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 469,
                      "end": 475
                    },
                    "start": 469,
                    "end": 477
                  },
                  "start": 466,
                  "end": 477
                },
                "start": 456,
                "end": 477
              },
              "start": 454,
              "end": 477
            },
            "accessibility": null,
            "static": false,
            "start": 452,
            "end": 478
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
              "start": 483,
              "end": 485
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
                        "start": 488,
                        "end": 489
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 488,
                      "end": 489
                    }
                  ],
                  "start": 487,
                  "end": 490
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
                          "start": 494,
                          "end": 495
                        },
                        "typeArguments": null,
                        "start": 494,
                        "end": 495
                      },
                      "start": 492,
                      "end": 495
                    },
                    "start": 491,
                    "end": 495
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 500,
                    "end": 504
                  },
                  "start": 497,
                  "end": 504
                },
                "start": 487,
                "end": 504
              },
              "start": 485,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 483,
            "end": 505
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
              "start": 510,
              "end": 512
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
                        "start": 515,
                        "end": 516
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 515,
                      "end": 516
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 518
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 517,
                      "end": 518
                    }
                  ],
                  "start": 514,
                  "end": 519
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
                          "start": 523,
                          "end": 524
                        },
                        "typeArguments": null,
                        "start": 523,
                        "end": 524
                      },
                      "start": 521,
                      "end": 524
                    },
                    "start": 520,
                    "end": 524
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
                          "start": 529,
                          "end": 530
                        },
                        "typeArguments": null,
                        "start": 529,
                        "end": 530
                      },
                      "start": 527,
                      "end": 530
                    },
                    "start": 526,
                    "end": 530
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  },
                  "start": 532,
                  "end": 541
                },
                "start": 514,
                "end": 541
              },
              "start": 512,
              "end": 541
            },
            "accessibility": null,
            "static": false,
            "start": 510,
            "end": 542
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
              "start": 547,
              "end": 549
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
                        "start": 552,
                        "end": 553
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 552,
                      "end": 553
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
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
                  "start": 551,
                  "end": 556
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
                                  "start": 566,
                                  "end": 567
                                },
                                "typeArguments": null,
                                "start": 566,
                                "end": 567
                              },
                              "start": 564,
                              "end": 567
                            },
                            "start": 561,
                            "end": 567
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
                              "start": 572,
                              "end": 573
                            },
                            "typeArguments": null,
                            "start": 572,
                            "end": 573
                          },
                          "start": 569,
                          "end": 573
                        },
                        "start": 560,
                        "end": 573
                      },
                      "start": 558,
                      "end": 573
                    },
                    "start": 557,
                    "end": 573
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
                      "start": 578,
                      "end": 579
                    },
                    "typeArguments": null,
                    "start": 578,
                    "end": 579
                  },
                  "start": 575,
                  "end": 579
                },
                "start": 551,
                "end": 579
              },
              "start": 549,
              "end": 579
            },
            "accessibility": null,
            "static": false,
            "start": 547,
            "end": 580
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
              "start": 585,
              "end": 587
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
                        "start": 590,
                        "end": 591
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 600,
                          "end": 604
                        },
                        "typeArguments": null,
                        "start": 600,
                        "end": 604
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 590,
                      "end": 604
                    }
                  ],
                  "start": 589,
                  "end": 605
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
                                  "start": 615,
                                  "end": 616
                                },
                                "typeArguments": null,
                                "start": 615,
                                "end": 616
                              },
                              "start": 613,
                              "end": 616
                            },
                            "start": 610,
                            "end": 616
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
                              "start": 621,
                              "end": 628
                            },
                            "typeArguments": null,
                            "start": 621,
                            "end": 628
                          },
                          "start": 618,
                          "end": 628
                        },
                        "start": 609,
                        "end": 628
                      },
                      "start": 607,
                      "end": 628
                    },
                    "start": 606,
                    "end": 628
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
                      "start": 633,
                      "end": 634
                    },
                    "typeArguments": null,
                    "start": 633,
                    "end": 634
                  },
                  "start": 630,
                  "end": 634
                },
                "start": 589,
                "end": 634
              },
              "start": 587,
              "end": 634
            },
            "accessibility": null,
            "static": false,
            "start": 585,
            "end": 635
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
              "start": 640,
              "end": 643
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
                    }
                  ],
                  "start": 645,
                  "end": 648
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 654,
                              "end": 657
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
                                  "start": 659,
                                  "end": 660
                                },
                                "typeArguments": null,
                                "start": 659,
                                "end": 660
                              },
                              "start": 657,
                              "end": 660
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 654,
                            "end": 660
                          }
                        ],
                        "start": 652,
                        "end": 662
                      },
                      "start": 650,
                      "end": 662
                    },
                    "start": 649,
                    "end": 662
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
                              "start": 669,
                              "end": 672
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
                                  "start": 674,
                                  "end": 675
                                },
                                "typeArguments": null,
                                "start": 674,
                                "end": 675
                              },
                              "start": 672,
                              "end": 675
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 669,
                            "end": 676
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
                              "start": 677,
                              "end": 680
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
                                  "start": 682,
                                  "end": 683
                                },
                                "typeArguments": null,
                                "start": 682,
                                "end": 683
                              },
                              "start": 680,
                              "end": 683
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 677,
                            "end": 683
                          }
                        ],
                        "start": 667,
                        "end": 685
                      },
                      "start": 665,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 694
                    },
                    "typeArguments": null,
                    "start": 690,
                    "end": 694
                  },
                  "start": 687,
                  "end": 694
                },
                "start": 645,
                "end": 694
              },
              "start": 643,
              "end": 694
            },
            "accessibility": null,
            "static": false,
            "start": 640,
            "end": 695
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 703
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
                        "start": 706,
                        "end": 707
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 706,
                      "end": 707
                    }
                  ],
                  "start": 705,
                  "end": 708
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
                              "start": 714,
                              "end": 715
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
                            "accessibility": null,
                            "static": false,
                            "start": 714,
                            "end": 719
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
                              "start": 720,
                              "end": 721
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
                            "accessibility": null,
                            "static": false,
                            "start": 720,
                            "end": 724
                          }
                        ],
                        "start": 712,
                        "end": 726
                      },
                      "start": 710,
                      "end": 726
                    },
                    "start": 709,
                    "end": 726
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
                        "start": 731,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 731,
                      "end": 732
                    },
                    "start": 731,
                    "end": 734
                  },
                  "start": 728,
                  "end": 734
                },
                "start": 705,
                "end": 734
              },
              "start": 703,
              "end": 734
            },
            "accessibility": null,
            "static": false,
            "start": 700,
            "end": 735
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 743
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
                        "start": 746,
                        "end": 747
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 760
                        },
                        "typeArguments": null,
                        "start": 756,
                        "end": 760
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 746,
                      "end": 760
                    }
                  ],
                  "start": 745,
                  "end": 761
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
                              "start": 767,
                              "end": 768
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
                                  "start": 770,
                                  "end": 771
                                },
                                "typeArguments": null,
                                "start": 770,
                                "end": 771
                              },
                              "start": 768,
                              "end": 771
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 767,
                            "end": 772
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
                              "start": 773,
                              "end": 774
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
                                  "start": 776,
                                  "end": 777
                                },
                                "typeArguments": null,
                                "start": 776,
                                "end": 777
                              },
                              "start": 774,
                              "end": 777
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 773,
                            "end": 777
                          }
                        ],
                        "start": 765,
                        "end": 779
                      },
                      "start": 763,
                      "end": 779
                    },
                    "start": 762,
                    "end": 779
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
                        "start": 784,
                        "end": 785
                      },
                      "typeArguments": null,
                      "start": 784,
                      "end": 785
                    },
                    "start": 784,
                    "end": 787
                  },
                  "start": 781,
                  "end": 787
                },
                "start": 745,
                "end": 787
              },
              "start": 743,
              "end": 787
            },
            "accessibility": null,
            "static": false,
            "start": 740,
            "end": 788
          }
        ],
        "start": 405,
        "end": 790
      },
      "declare": false,
      "start": 393,
      "end": 790
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 810
      },
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
              "start": 811,
              "end": 812
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 811,
            "end": 812
          }
        ],
        "start": 810,
        "end": 813
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "typeArguments": null,
          "start": 822,
          "end": 823
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
              "start": 830,
              "end": 831
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 838
                        },
                        "typeArguments": null,
                        "start": 837,
                        "end": 838
                      },
                      "start": 835,
                      "end": 838
                    },
                    "start": 834,
                    "end": 838
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
                        "start": 843,
                        "end": 844
                      },
                      "typeArguments": null,
                      "start": 843,
                      "end": 844
                    },
                    "start": 843,
                    "end": 846
                  },
                  "start": 840,
                  "end": 846
                },
                "start": 833,
                "end": 846
              },
              "start": 831,
              "end": 846
            },
            "accessibility": null,
            "static": false,
            "start": 830,
            "end": 847
          }
        ],
        "start": 824,
        "end": 850
      },
      "declare": false,
      "start": 799,
      "end": 850
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 864
      },
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
              "start": 865,
              "end": 866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 866
          }
        ],
        "start": 864,
        "end": 867
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 877
          },
          "typeArguments": null,
          "start": 876,
          "end": 877
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
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 886
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 892,
                          "end": 893
                        },
                        "typeArguments": null,
                        "start": 892,
                        "end": 893
                      },
                      "start": 890,
                      "end": 893
                    },
                    "start": 889,
                    "end": 893
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 898,
                      "end": 904
                    },
                    "start": 898,
                    "end": 906
                  },
                  "start": 895,
                  "end": 906
                },
                "start": 888,
                "end": 906
              },
              "start": 886,
              "end": 906
            },
            "accessibility": null,
            "static": false,
            "start": 884,
            "end": 907
          }
        ],
        "start": 878,
        "end": 910
      },
      "declare": false,
      "start": 852,
      "end": 910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 924
      },
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
              "start": 925,
              "end": 926
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 925,
            "end": 926
          }
        ],
        "start": 924,
        "end": 927
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 937
          },
          "typeArguments": null,
          "start": 936,
          "end": 937
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
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 946
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 953
                        },
                        "typeArguments": null,
                        "start": 952,
                        "end": 953
                      },
                      "start": 950,
                      "end": 953
                    },
                    "start": 949,
                    "end": 953
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
                      "start": 958,
                      "end": 959
                    },
                    "typeArguments": null,
                    "start": 958,
                    "end": 959
                  },
                  "start": 955,
                  "end": 959
                },
                "start": 948,
                "end": 959
              },
              "start": 946,
              "end": 959
            },
            "accessibility": null,
            "static": false,
            "start": 944,
            "end": 960
          }
        ],
        "start": 938,
        "end": 962
      },
      "declare": false,
      "start": 912,
      "end": 962
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 976
      },
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
              "start": 977,
              "end": 978
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 977,
            "end": 978
          }
        ],
        "start": 976,
        "end": 979
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 989
          },
          "typeArguments": null,
          "start": 988,
          "end": 989
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
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 998
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1001,
                        "end": 1002
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1001,
                      "end": 1002
                    }
                  ],
                  "start": 1000,
                  "end": 1003
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
                          "start": 1007,
                          "end": 1008
                        },
                        "typeArguments": null,
                        "start": 1007,
                        "end": 1008
                      },
                      "start": 1005,
                      "end": 1008
                    },
                    "start": 1004,
                    "end": 1008
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
                          "start": 1013,
                          "end": 1014
                        },
                        "typeArguments": null,
                        "start": 1013,
                        "end": 1014
                      },
                      "start": 1011,
                      "end": 1014
                    },
                    "start": 1010,
                    "end": 1014
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
                  },
                  "start": 1016,
                  "end": 1025
                },
                "start": 1000,
                "end": 1025
              },
              "start": 998,
              "end": 1025
            },
            "accessibility": null,
            "static": false,
            "start": 996,
            "end": 1026
          }
        ],
        "start": 990,
        "end": 1029
      },
      "declare": false,
      "start": 964,
      "end": 1029
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1043
      },
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
              "start": 1044,
              "end": 1045
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1044,
            "end": 1045
          }
        ],
        "start": 1043,
        "end": 1046
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1056
          },
          "typeArguments": null,
          "start": 1055,
          "end": 1056
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
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1065
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1069
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1068,
                      "end": 1069
                    }
                  ],
                  "start": 1067,
                  "end": 1070
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
                                  "start": 1080,
                                  "end": 1081
                                },
                                "typeArguments": null,
                                "start": 1080,
                                "end": 1081
                              },
                              "start": 1078,
                              "end": 1081
                            },
                            "start": 1075,
                            "end": 1081
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
                              "start": 1086,
                              "end": 1087
                            },
                            "typeArguments": null,
                            "start": 1086,
                            "end": 1087
                          },
                          "start": 1083,
                          "end": 1087
                        },
                        "start": 1074,
                        "end": 1087
                      },
                      "start": 1072,
                      "end": 1087
                    },
                    "start": 1071,
                    "end": 1087
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
                      "start": 1092,
                      "end": 1093
                    },
                    "typeArguments": null,
                    "start": 1092,
                    "end": 1093
                  },
                  "start": 1089,
                  "end": 1093
                },
                "start": 1067,
                "end": 1093
              },
              "start": 1065,
              "end": 1093
            },
            "accessibility": null,
            "static": false,
            "start": 1063,
            "end": 1094
          }
        ],
        "start": 1057,
        "end": 1097
      },
      "declare": false,
      "start": 1031,
      "end": 1097
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1111
      },
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
              "start": 1112,
              "end": 1113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1112,
            "end": 1113
          }
        ],
        "start": 1111,
        "end": 1114
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1124
          },
          "typeArguments": null,
          "start": 1123,
          "end": 1124
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
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1134
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1137,
                        "end": 1138
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1137,
                      "end": 1138
                    }
                  ],
                  "start": 1136,
                  "end": 1139
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1145,
                              "end": 1148
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
                                  "start": 1150,
                                  "end": 1151
                                },
                                "typeArguments": null,
                                "start": 1150,
                                "end": 1151
                              },
                              "start": 1148,
                              "end": 1151
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1145,
                            "end": 1151
                          }
                        ],
                        "start": 1143,
                        "end": 1153
                      },
                      "start": 1141,
                      "end": 1153
                    },
                    "start": 1140,
                    "end": 1153
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
                              "start": 1160,
                              "end": 1163
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
                                  "start": 1165,
                                  "end": 1166
                                },
                                "typeArguments": null,
                                "start": 1165,
                                "end": 1166
                              },
                              "start": 1163,
                              "end": 1166
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1160,
                            "end": 1167
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
                              "start": 1168,
                              "end": 1171
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
                                  "start": 1173,
                                  "end": 1174
                                },
                                "typeArguments": null,
                                "start": 1173,
                                "end": 1174
                              },
                              "start": 1171,
                              "end": 1174
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1168,
                            "end": 1174
                          }
                        ],
                        "start": 1158,
                        "end": 1176
                      },
                      "start": 1156,
                      "end": 1176
                    },
                    "start": 1155,
                    "end": 1176
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
                      "start": 1181,
                      "end": 1185
                    },
                    "typeArguments": null,
                    "start": 1181,
                    "end": 1185
                  },
                  "start": 1178,
                  "end": 1185
                },
                "start": 1136,
                "end": 1185
              },
              "start": 1134,
              "end": 1185
            },
            "accessibility": null,
            "static": false,
            "start": 1131,
            "end": 1186
          }
        ],
        "start": 1125,
        "end": 1189
      },
      "declare": false,
      "start": 1099,
      "end": 1189
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1203
      },
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
              "start": 1204,
              "end": 1205
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1204,
            "end": 1205
          }
        ],
        "start": 1203,
        "end": 1206
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1215,
            "end": 1216
          },
          "typeArguments": null,
          "start": 1215,
          "end": 1216
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
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1226
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
                              "start": 1234,
                              "end": 1235
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
                                  "start": 1237,
                                  "end": 1238
                                },
                                "typeArguments": null,
                                "start": 1237,
                                "end": 1238
                              },
                              "start": 1235,
                              "end": 1238
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1234,
                            "end": 1239
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
                              "start": 1240,
                              "end": 1241
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
                                  "start": 1243,
                                  "end": 1244
                                },
                                "typeArguments": null,
                                "start": 1243,
                                "end": 1244
                              },
                              "start": 1241,
                              "end": 1244
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1240,
                            "end": 1244
                          }
                        ],
                        "start": 1232,
                        "end": 1246
                      },
                      "start": 1230,
                      "end": 1246
                    },
                    "start": 1229,
                    "end": 1246
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
                        "start": 1251,
                        "end": 1252
                      },
                      "typeArguments": null,
                      "start": 1251,
                      "end": 1252
                    },
                    "start": 1251,
                    "end": 1254
                  },
                  "start": 1248,
                  "end": 1254
                },
                "start": 1228,
                "end": 1254
              },
              "start": 1226,
              "end": 1254
            },
            "accessibility": null,
            "static": false,
            "start": 1223,
            "end": 1255
          }
        ],
        "start": 1217,
        "end": 1258
      },
      "declare": false,
      "start": 1191,
      "end": 1258
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 1258
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 250,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 256,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 264,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 300,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 309,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 342,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 348,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 361,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 369,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
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
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
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
    "value": "x",
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
    "value": "T",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 466,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 476,
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
    "value": "a3",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
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
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 532,
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
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 569,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 575,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 592,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 618,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 621,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 640,
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
    "value": ">",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "y",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 677,
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
    "value": "T",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 687,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a15",
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
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "}",
    "start": 725,
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
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 748,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "b",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 799,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 840,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 852,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 868,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 884,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
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
    "value": "T",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 895,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 912,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 928,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 944,
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
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
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
    "value": "T",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 955,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 964,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 980,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 996,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1002,
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
    "value": "x",
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
    "value": "T",
    "start": 1007,
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
    "value": "y",
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
    "value": "U",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1031,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 1041,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1086,
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
    "value": "=>",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1099,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1150,
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
    "value": ",",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1181,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1191,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1207,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258
  }
]
```
