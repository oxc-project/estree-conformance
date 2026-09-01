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
        "start": 233,
        "end": 237
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
              "start": 240,
              "end": 243
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 245,
                "end": 251
              },
              "start": 243,
              "end": 251
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
            "start": 240,
            "end": 252
          }
        ],
        "start": 238,
        "end": 254
      },
      "abstract": false,
      "declare": false,
      "start": 227,
      "end": 254
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
        "start": 261,
        "end": 268
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 281
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
              "start": 284,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
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
            "start": 284,
            "end": 296
          }
        ],
        "start": 282,
        "end": 298
      },
      "abstract": false,
      "declare": false,
      "start": 255,
      "end": 298
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
        "start": 305,
        "end": 313
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 329
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
              "start": 332,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
              },
              "start": 335,
              "end": 343
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
            "start": 332,
            "end": 344
          }
        ],
        "start": 330,
        "end": 346
      },
      "abstract": false,
      "declare": false,
      "start": 299,
      "end": 346
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
        "start": 353,
        "end": 365
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 378
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
              "start": 381,
              "end": 385
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 387,
                "end": 393
              },
              "start": 385,
              "end": 393
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
            "start": 381,
            "end": 394
          }
        ],
        "start": 379,
        "end": 396
      },
      "abstract": false,
      "declare": false,
      "start": 347,
      "end": 396
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 409
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
              "start": 432,
              "end": 433
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
                        "start": 440,
                        "end": 441
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 440,
                      "end": 441
                    }
                  ],
                  "start": 439,
                  "end": 442
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
                          "start": 446,
                          "end": 447
                        },
                        "typeArguments": null,
                        "start": 446,
                        "end": 447
                      },
                      "start": 444,
                      "end": 447
                    },
                    "start": 443,
                    "end": 447
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
                        "start": 452,
                        "end": 453
                      },
                      "typeArguments": null,
                      "start": 452,
                      "end": 453
                    },
                    "start": 452,
                    "end": 455
                  },
                  "start": 449,
                  "end": 455
                },
                "start": 435,
                "end": 455
              },
              "start": 433,
              "end": 455
            },
            "accessibility": null,
            "static": false,
            "start": 432,
            "end": 456
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
              "start": 461,
              "end": 463
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
                        "start": 470,
                        "end": 471
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 470,
                      "end": 471
                    }
                  ],
                  "start": 469,
                  "end": 472
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
                          "start": 476,
                          "end": 477
                        },
                        "typeArguments": null,
                        "start": 476,
                        "end": 477
                      },
                      "start": 474,
                      "end": 477
                    },
                    "start": 473,
                    "end": 477
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 482,
                      "end": 488
                    },
                    "start": 482,
                    "end": 490
                  },
                  "start": 479,
                  "end": 490
                },
                "start": 465,
                "end": 490
              },
              "start": 463,
              "end": 490
            },
            "accessibility": null,
            "static": false,
            "start": 461,
            "end": 491
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
              "start": 496,
              "end": 498
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
                        "start": 505,
                        "end": 506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 505,
                      "end": 506
                    }
                  ],
                  "start": 504,
                  "end": 507
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
                          "start": 511,
                          "end": 512
                        },
                        "typeArguments": null,
                        "start": 511,
                        "end": 512
                      },
                      "start": 509,
                      "end": 512
                    },
                    "start": 508,
                    "end": 512
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  },
                  "start": 514,
                  "end": 521
                },
                "start": 500,
                "end": 521
              },
              "start": 498,
              "end": 521
            },
            "accessibility": null,
            "static": false,
            "start": 496,
            "end": 522
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
              "start": 527,
              "end": 529
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
                        "start": 536,
                        "end": 537
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 536,
                      "end": 537
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 540
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 539,
                      "end": 540
                    }
                  ],
                  "start": 535,
                  "end": 541
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
                          "start": 545,
                          "end": 546
                        },
                        "typeArguments": null,
                        "start": 545,
                        "end": 546
                      },
                      "start": 543,
                      "end": 546
                    },
                    "start": 542,
                    "end": 546
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
                          "start": 551,
                          "end": 552
                        },
                        "typeArguments": null,
                        "start": 551,
                        "end": 552
                      },
                      "start": 549,
                      "end": 552
                    },
                    "start": 548,
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
                "start": 531,
                "end": 563
              },
              "start": 529,
              "end": 563
            },
            "accessibility": null,
            "static": false,
            "start": 527,
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
                        "start": 578,
                        "end": 579
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 578,
                      "end": 579
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 581,
                        "end": 582
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 581,
                      "end": 582
                    }
                  ],
                  "start": 577,
                  "end": 583
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
                                  "start": 593,
                                  "end": 594
                                },
                                "typeArguments": null,
                                "start": 593,
                                "end": 594
                              },
                              "start": 591,
                              "end": 594
                            },
                            "start": 588,
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 600
                            },
                            "typeArguments": null,
                            "start": 599,
                            "end": 600
                          },
                          "start": 596,
                          "end": 600
                        },
                        "start": 587,
                        "end": 600
                      },
                      "start": 585,
                      "end": 600
                    },
                    "start": 584,
                    "end": 600
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
                      "start": 605,
                      "end": 606
                    },
                    "typeArguments": null,
                    "start": 605,
                    "end": 606
                  },
                  "start": 602,
                  "end": 606
                },
                "start": 573,
                "end": 606
              },
              "start": 571,
              "end": 606
            },
            "accessibility": null,
            "static": false,
            "start": 569,
            "end": 607
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
              "start": 612,
              "end": 614
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
                        "start": 621,
                        "end": 622
                      },
                      "constraint": {
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
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 621,
                      "end": 635
                    }
                  ],
                  "start": 620,
                  "end": 636
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
                                  "start": 646,
                                  "end": 647
                                },
                                "typeArguments": null,
                                "start": 646,
                                "end": 647
                              },
                              "start": 644,
                              "end": 647
                            },
                            "start": 641,
                            "end": 647
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
                              "start": 652,
                              "end": 659
                            },
                            "typeArguments": null,
                            "start": 652,
                            "end": 659
                          },
                          "start": 649,
                          "end": 659
                        },
                        "start": 640,
                        "end": 659
                      },
                      "start": 638,
                      "end": 659
                    },
                    "start": 637,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 665
                    },
                    "typeArguments": null,
                    "start": 664,
                    "end": 665
                  },
                  "start": 661,
                  "end": 665
                },
                "start": 616,
                "end": 665
              },
              "start": 614,
              "end": 665
            },
            "accessibility": null,
            "static": false,
            "start": 612,
            "end": 666
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
              "start": 671,
              "end": 674
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
                        "start": 681,
                        "end": 682
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 681,
                      "end": 682
                    }
                  ],
                  "start": 680,
                  "end": 683
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
                              "start": 689,
                              "end": 692
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
                                  "start": 694,
                                  "end": 695
                                },
                                "typeArguments": null,
                                "start": 694,
                                "end": 695
                              },
                              "start": 692,
                              "end": 695
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 689,
                            "end": 695
                          }
                        ],
                        "start": 687,
                        "end": 697
                      },
                      "start": 685,
                      "end": 697
                    },
                    "start": 684,
                    "end": 697
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
                              "start": 704,
                              "end": 707
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
                                  "start": 709,
                                  "end": 710
                                },
                                "typeArguments": null,
                                "start": 709,
                                "end": 710
                              },
                              "start": 707,
                              "end": 710
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 704,
                            "end": 711
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
                              "start": 712,
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
                            "start": 712,
                            "end": 718
                          }
                        ],
                        "start": 702,
                        "end": 720
                      },
                      "start": 700,
                      "end": 720
                    },
                    "start": 699,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 729
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 729
                  },
                  "start": 722,
                  "end": 729
                },
                "start": 676,
                "end": 729
              },
              "start": 674,
              "end": 729
            },
            "accessibility": null,
            "static": false,
            "start": 671,
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
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 738
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
                        "start": 745,
                        "end": 746
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 745,
                      "end": 746
                    }
                  ],
                  "start": 744,
                  "end": 747
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
                              "start": 753,
                              "end": 754
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
                                  "start": 756,
                                  "end": 757
                                },
                                "typeArguments": null,
                                "start": 756,
                                "end": 757
                              },
                              "start": 754,
                              "end": 757
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 753,
                            "end": 758
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
                              "start": 759,
                              "end": 760
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
                                  "start": 762,
                                  "end": 763
                                },
                                "typeArguments": null,
                                "start": 762,
                                "end": 763
                              },
                              "start": 760,
                              "end": 763
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 759,
                            "end": 763
                          }
                        ],
                        "start": 751,
                        "end": 765
                      },
                      "start": 749,
                      "end": 765
                    },
                    "start": 748,
                    "end": 765
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
                        "start": 770,
                        "end": 771
                      },
                      "typeArguments": null,
                      "start": 770,
                      "end": 771
                    },
                    "start": 770,
                    "end": 773
                  },
                  "start": 767,
                  "end": 773
                },
                "start": 740,
                "end": 773
              },
              "start": 738,
              "end": 773
            },
            "accessibility": null,
            "static": false,
            "start": 735,
            "end": 774
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
              "start": 779,
              "end": 782
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
                        "start": 789,
                        "end": 790
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 803
                        },
                        "typeArguments": null,
                        "start": 799,
                        "end": 803
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 789,
                      "end": 803
                    }
                  ],
                  "start": 788,
                  "end": 804
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
                              "start": 810,
                              "end": 811
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
                                  "start": 813,
                                  "end": 814
                                },
                                "typeArguments": null,
                                "start": 813,
                                "end": 814
                              },
                              "start": 811,
                              "end": 814
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 810,
                            "end": 815
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
                              "start": 816,
                              "end": 817
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
                                  "start": 819,
                                  "end": 820
                                },
                                "typeArguments": null,
                                "start": 819,
                                "end": 820
                              },
                              "start": 817,
                              "end": 820
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 816,
                            "end": 820
                          }
                        ],
                        "start": 808,
                        "end": 822
                      },
                      "start": 806,
                      "end": 822
                    },
                    "start": 805,
                    "end": 822
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
                        "start": 827,
                        "end": 828
                      },
                      "typeArguments": null,
                      "start": 827,
                      "end": 828
                    },
                    "start": 827,
                    "end": 830
                  },
                  "start": 824,
                  "end": 830
                },
                "start": 784,
                "end": 830
              },
              "start": 782,
              "end": 830
            },
            "accessibility": null,
            "static": false,
            "start": 779,
            "end": 831
          }
        ],
        "start": 410,
        "end": 833
      },
      "declare": false,
      "start": 398,
      "end": 833
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 852,
        "end": 853
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
              "start": 854,
              "end": 855
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 854,
            "end": 855
          }
        ],
        "start": 853,
        "end": 856
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
            "start": 865,
            "end": 866
          },
          "typeArguments": null,
          "start": 865,
          "end": 866
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
              "start": 873,
              "end": 874
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 884,
                          "end": 885
                        },
                        "typeArguments": null,
                        "start": 884,
                        "end": 885
                      },
                      "start": 882,
                      "end": 885
                    },
                    "start": 881,
                    "end": 885
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
                        "start": 890,
                        "end": 891
                      },
                      "typeArguments": null,
                      "start": 890,
                      "end": 891
                    },
                    "start": 890,
                    "end": 893
                  },
                  "start": 887,
                  "end": 893
                },
                "start": 876,
                "end": 893
              },
              "start": 874,
              "end": 893
            },
            "accessibility": null,
            "static": false,
            "start": 873,
            "end": 894
          }
        ],
        "start": 867,
        "end": 897
      },
      "declare": false,
      "start": 842,
      "end": 897
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 911
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
              "start": 912,
              "end": 913
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 912,
            "end": 913
          }
        ],
        "start": 911,
        "end": 914
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
            "start": 923,
            "end": 924
          },
          "typeArguments": null,
          "start": 923,
          "end": 924
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
              "start": 931,
              "end": 933
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 944
                        },
                        "typeArguments": null,
                        "start": 943,
                        "end": 944
                      },
                      "start": 941,
                      "end": 944
                    },
                    "start": 940,
                    "end": 944
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 949,
                      "end": 955
                    },
                    "start": 949,
                    "end": 957
                  },
                  "start": 946,
                  "end": 957
                },
                "start": 935,
                "end": 957
              },
              "start": 933,
              "end": 957
            },
            "accessibility": null,
            "static": false,
            "start": 931,
            "end": 958
          }
        ],
        "start": 925,
        "end": 961
      },
      "declare": false,
      "start": 899,
      "end": 961
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 975
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
              "start": 976,
              "end": 977
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 976,
            "end": 977
          }
        ],
        "start": 975,
        "end": 978
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
            "start": 987,
            "end": 988
          },
          "typeArguments": null,
          "start": 987,
          "end": 988
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
              "start": 995,
              "end": 997
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
                      "start": 1013,
                      "end": 1014
                    },
                    "typeArguments": null,
                    "start": 1013,
                    "end": 1014
                  },
                  "start": 1010,
                  "end": 1014
                },
                "start": 999,
                "end": 1014
              },
              "start": 997,
              "end": 1014
            },
            "accessibility": null,
            "static": false,
            "start": 995,
            "end": 1015
          }
        ],
        "start": 989,
        "end": 1017
      },
      "declare": false,
      "start": 963,
      "end": 1017
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1029,
        "end": 1031
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
              "start": 1032,
              "end": 1033
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1032,
            "end": 1033
          }
        ],
        "start": 1031,
        "end": 1034
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
            "start": 1043,
            "end": 1044
          },
          "typeArguments": null,
          "start": 1043,
          "end": 1044
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
              "start": 1051,
              "end": 1053
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1060,
                        "end": 1061
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1060,
                      "end": 1061
                    }
                  ],
                  "start": 1059,
                  "end": 1062
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
                          "start": 1066,
                          "end": 1067
                        },
                        "typeArguments": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "start": 1064,
                      "end": 1067
                    },
                    "start": 1063,
                    "end": 1067
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
                          "start": 1072,
                          "end": 1073
                        },
                        "typeArguments": null,
                        "start": 1072,
                        "end": 1073
                      },
                      "start": 1070,
                      "end": 1073
                    },
                    "start": 1069,
                    "end": 1073
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1078,
                    "end": 1084
                  },
                  "start": 1075,
                  "end": 1084
                },
                "start": 1055,
                "end": 1084
              },
              "start": 1053,
              "end": 1084
            },
            "accessibility": null,
            "static": false,
            "start": 1051,
            "end": 1085
          }
        ],
        "start": 1045,
        "end": 1088
      },
      "declare": false,
      "start": 1019,
      "end": 1088
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1102
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
              "start": 1103,
              "end": 1104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1103,
            "end": 1104
          }
        ],
        "start": 1102,
        "end": 1105
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
            "start": 1114,
            "end": 1115
          },
          "typeArguments": null,
          "start": 1114,
          "end": 1115
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
              "start": 1122,
              "end": 1124
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1131,
                        "end": 1132
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1131,
                      "end": 1132
                    }
                  ],
                  "start": 1130,
                  "end": 1133
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
                                  "start": 1143,
                                  "end": 1144
                                },
                                "typeArguments": null,
                                "start": 1143,
                                "end": 1144
                              },
                              "start": 1141,
                              "end": 1144
                            },
                            "start": 1138,
                            "end": 1144
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
                              "start": 1149,
                              "end": 1150
                            },
                            "typeArguments": null,
                            "start": 1149,
                            "end": 1150
                          },
                          "start": 1146,
                          "end": 1150
                        },
                        "start": 1137,
                        "end": 1150
                      },
                      "start": 1135,
                      "end": 1150
                    },
                    "start": 1134,
                    "end": 1150
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
                      "start": 1155,
                      "end": 1156
                    },
                    "typeArguments": null,
                    "start": 1155,
                    "end": 1156
                  },
                  "start": 1152,
                  "end": 1156
                },
                "start": 1126,
                "end": 1156
              },
              "start": 1124,
              "end": 1156
            },
            "accessibility": null,
            "static": false,
            "start": 1122,
            "end": 1157
          }
        ],
        "start": 1116,
        "end": 1160
      },
      "declare": false,
      "start": 1090,
      "end": 1160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1174
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
              "start": 1175,
              "end": 1176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1175,
            "end": 1176
          }
        ],
        "start": 1174,
        "end": 1177
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
            "start": 1186,
            "end": 1187
          },
          "typeArguments": null,
          "start": 1186,
          "end": 1187
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
              "start": 1194,
              "end": 1197
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
                        "name": "U",
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
                              "start": 1212,
                              "end": 1215
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
                                  "start": 1217,
                                  "end": 1218
                                },
                                "typeArguments": null,
                                "start": 1217,
                                "end": 1218
                              },
                              "start": 1215,
                              "end": 1218
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1212,
                            "end": 1218
                          }
                        ],
                        "start": 1210,
                        "end": 1220
                      },
                      "start": 1208,
                      "end": 1220
                    },
                    "start": 1207,
                    "end": 1220
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
                              "start": 1227,
                              "end": 1230
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
                                  "start": 1232,
                                  "end": 1233
                                },
                                "typeArguments": null,
                                "start": 1232,
                                "end": 1233
                              },
                              "start": 1230,
                              "end": 1233
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1227,
                            "end": 1234
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
                              "start": 1235,
                              "end": 1238
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
                                  "start": 1240,
                                  "end": 1241
                                },
                                "typeArguments": null,
                                "start": 1240,
                                "end": 1241
                              },
                              "start": 1238,
                              "end": 1241
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1235,
                            "end": 1241
                          }
                        ],
                        "start": 1225,
                        "end": 1243
                      },
                      "start": 1223,
                      "end": 1243
                    },
                    "start": 1222,
                    "end": 1243
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
                      "start": 1248,
                      "end": 1252
                    },
                    "typeArguments": null,
                    "start": 1248,
                    "end": 1252
                  },
                  "start": 1245,
                  "end": 1252
                },
                "start": 1199,
                "end": 1252
              },
              "start": 1197,
              "end": 1252
            },
            "accessibility": null,
            "static": false,
            "start": 1194,
            "end": 1253
          }
        ],
        "start": 1188,
        "end": 1256
      },
      "declare": false,
      "start": 1162,
      "end": 1256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1270
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1282,
            "end": 1283
          },
          "typeArguments": null,
          "start": 1282,
          "end": 1283
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
              "start": 1290,
              "end": 1293
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
                              "start": 1305,
                              "end": 1306
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
                                  "start": 1308,
                                  "end": 1309
                                },
                                "typeArguments": null,
                                "start": 1308,
                                "end": 1309
                              },
                              "start": 1306,
                              "end": 1309
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1305,
                            "end": 1310
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
                              "start": 1311,
                              "end": 1312
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
                                  "start": 1314,
                                  "end": 1315
                                },
                                "typeArguments": null,
                                "start": 1314,
                                "end": 1315
                              },
                              "start": 1312,
                              "end": 1315
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1311,
                            "end": 1315
                          }
                        ],
                        "start": 1303,
                        "end": 1317
                      },
                      "start": 1301,
                      "end": 1317
                    },
                    "start": 1300,
                    "end": 1317
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
                        "start": 1322,
                        "end": 1323
                      },
                      "typeArguments": null,
                      "start": 1322,
                      "end": 1323
                    },
                    "start": 1322,
                    "end": 1325
                  },
                  "start": 1319,
                  "end": 1325
                },
                "start": 1295,
                "end": 1325
              },
              "start": 1293,
              "end": 1325
            },
            "accessibility": null,
            "static": false,
            "start": 1290,
            "end": 1326
          }
        ],
        "start": 1284,
        "end": 1329
      },
      "declare": false,
      "start": 1258,
      "end": 1329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 227,
  "end": 1329
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 255,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 261,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 269,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 305,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 314,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 353,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 366,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 398,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 446,
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
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 479,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 500,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 514,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 517,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 551,
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
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
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
    "value": "=>",
    "start": 596,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 602,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 623,
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
    "value": ">",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 652,
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
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 712,
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
    "value": "}",
    "start": 719,
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
    "value": "Base",
    "start": 725,
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
    "value": "a15",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 767,
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
    "value": "[",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 791,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 803,
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
    "value": "x",
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
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
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
    "value": "T",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 842,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 857,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 876,
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
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 887,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 899,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 915,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 943,
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
    "type": "Identifier",
    "value": "string",
    "start": 949,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 963,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 973,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 979,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 999,
    "end": 1002
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
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1019,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1035,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
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
    "value": "T",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1075,
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
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1090,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1122,
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
    "value": "new",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1131,
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
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1146,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1178,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1227,
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
    "value": "U",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1258,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1268,
    "end": 1270
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
    "type": "Keyword",
    "value": "extends",
    "start": 1274,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329
  }
]
```
