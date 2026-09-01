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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "declare": false,
      "start": 62,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 111
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
            "start": 120,
            "end": 124
          },
          "typeArguments": null,
          "start": 120,
          "end": 124
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              },
              "start": 130,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 139
          }
        ],
        "start": 125,
        "end": 141
      },
      "declare": false,
      "start": 94,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "declare": false,
      "start": 142,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "start": 214,
                "end": 223
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 233
                },
                "typeArguments": null,
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 213,
            "end": 234
          }
        ],
        "start": 207,
        "end": 236
      },
      "declare": false,
      "start": 195,
      "end": 236
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 245
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "typeArguments": null,
          "start": 257,
          "end": 258
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
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
                "start": 266,
                "end": 275
              }
            ],
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
                  "start": 278,
                  "end": 282
                },
                "typeArguments": null,
                "start": 278,
                "end": 282
              },
              "start": 276,
              "end": 282
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 265,
            "end": 283
          }
        ],
        "start": 259,
        "end": 294
      },
      "abstract": false,
      "declare": false,
      "start": 238,
      "end": 294
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 304
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "typeArguments": null,
          "start": 316,
          "end": 317
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 328,
                    "end": 334
                  },
                  "start": 326,
                  "end": 334
                },
                "start": 325,
                "end": 334
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 345
                },
                "typeArguments": null,
                "start": 337,
                "end": 345
              },
              "start": 335,
              "end": 345
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 324,
            "end": 346
          }
        ],
        "start": 318,
        "end": 354
      },
      "abstract": false,
      "declare": false,
      "start": 296,
      "end": 354
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 374
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
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
                    "start": 393,
                    "end": 394
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 407
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 407
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 393,
                  "end": 407
                }
              ],
              "start": 392,
              "end": 408
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 423,
                          "end": 429
                        },
                        "start": 421,
                        "end": 429
                      },
                      "start": 420,
                      "end": 429
                    }
                  ],
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
                        "start": 432,
                        "end": 433
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 433
                    },
                    "start": 430,
                    "end": 433
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 419,
                  "end": 434
                }
              ],
              "start": 409,
              "end": 440
            },
            "declare": false,
            "start": 381,
            "end": 440
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
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
                        "start": 467,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 467,
                      "end": 471
                    }
                  ],
                  "start": 466,
                  "end": 472
                },
                "start": 465,
                "end": 472
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 487,
                          "end": 493
                        },
                        "start": 485,
                        "end": 493
                      },
                      "start": 484,
                      "end": 493
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 496,
                        "end": 503
                      },
                      "typeArguments": null,
                      "start": 496,
                      "end": 503
                    },
                    "start": 494,
                    "end": 503
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 483,
                  "end": 504
                }
              ],
              "start": 473,
              "end": 516
            },
            "abstract": false,
            "declare": false,
            "start": 446,
            "end": 516
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 530
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 543
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
                        "start": 544,
                        "end": 551
                      },
                      "typeArguments": null,
                      "start": 544,
                      "end": 551
                    }
                  ],
                  "start": 543,
                  "end": 552
                },
                "start": 542,
                "end": 552
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        },
                        "start": 565,
                        "end": 573
                      },
                      "start": 564,
                      "end": 573
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 584
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 584
                    },
                    "start": 574,
                    "end": 584
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 563,
                  "end": 585
                }
              ],
              "start": 553,
              "end": 597
            },
            "abstract": false,
            "declare": false,
            "start": 522,
            "end": 597
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 611
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
                    "start": 612,
                    "end": 613
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 629
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 629
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 612,
                  "end": 629
                }
              ],
              "start": 611,
              "end": 630
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 643
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 644,
                        "end": 645
                      },
                      "typeArguments": null,
                      "start": 644,
                      "end": 645
                    }
                  ],
                  "start": 643,
                  "end": 646
                },
                "start": 642,
                "end": 646
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 661,
                          "end": 667
                        },
                        "start": 659,
                        "end": 667
                      },
                      "start": 658,
                      "end": 667
                    }
                  ],
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
                        "start": 670,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 670,
                      "end": 674
                    },
                    "start": 668,
                    "end": 674
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 657,
                  "end": 675
                }
              ],
              "start": 647,
              "end": 690
            },
            "abstract": false,
            "declare": false,
            "start": 603,
            "end": 690
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B4",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 704
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
                    "start": 705,
                    "end": 706
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 722
                    },
                    "typeArguments": null,
                    "start": 715,
                    "end": 722
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 705,
                  "end": 722
                }
              ],
              "start": 704,
              "end": 723
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 736
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 737,
                        "end": 738
                      },
                      "typeArguments": null,
                      "start": 737,
                      "end": 738
                    }
                  ],
                  "start": 736,
                  "end": 739
                },
                "start": 735,
                "end": 739
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 754,
                          "end": 760
                        },
                        "start": 752,
                        "end": 760
                      },
                      "start": 751,
                      "end": 760
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 770
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 770
                    },
                    "start": 761,
                    "end": 770
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 750,
                  "end": 771
                }
              ],
              "start": 740,
              "end": 786
            },
            "abstract": false,
            "declare": false,
            "start": 696,
            "end": 786
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B5",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 800
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
                    "start": 801,
                    "end": 802
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 819
                    },
                    "typeArguments": null,
                    "start": 811,
                    "end": 819
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 801,
                  "end": 819
                }
              ],
              "start": 800,
              "end": 820
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 833
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 835
                      },
                      "typeArguments": null,
                      "start": 834,
                      "end": 835
                    }
                  ],
                  "start": 833,
                  "end": 836
                },
                "start": 832,
                "end": 836
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 851,
                          "end": 857
                        },
                        "start": 849,
                        "end": 857
                      },
                      "start": 848,
                      "end": 857
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 868
                      },
                      "typeArguments": null,
                      "start": 860,
                      "end": 868
                    },
                    "start": 858,
                    "end": 868
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 847,
                  "end": 869
                }
              ],
              "start": 837,
              "end": 884
            },
            "abstract": false,
            "declare": false,
            "start": 792,
            "end": 884
          }
        ],
        "start": 375,
        "end": 886
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 356,
      "end": 886
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 886
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 94,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 152,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 195,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 246,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
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
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 305,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
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
    "value": "Derived2",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 356,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Generics",
    "start": 366,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 381,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 395,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 446,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 454,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 467,
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
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 496,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 522,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 528,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 531,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 544,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 576,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 603,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 614,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 622,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 631,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 670,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 696,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 707,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 715,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 724,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 763,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 792,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 803,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 811,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 821,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 860,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  }
]
```
