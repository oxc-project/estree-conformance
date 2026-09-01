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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 342
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 352
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 353,
                      "end": 354
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 363,
                      "end": 367
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 353,
                    "end": 367
                  }
                ],
                "start": 352,
                "end": 368
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
                        "start": 372,
                        "end": 373
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 373
                    },
                    "start": 370,
                    "end": 373
                  },
                  "start": 369,
                  "end": 373
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 376,
                  "end": 382
                },
                "start": 374,
                "end": 382
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 392,
                      "end": 396
                    },
                    "start": 385,
                    "end": 397
                  }
                ],
                "start": 383,
                "end": 399
              },
              "expression": false,
              "start": 352,
              "end": 399
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 399
          }
        ],
        "start": 343,
        "end": 401
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 401
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
        "start": 409,
        "end": 410
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
              "start": 411,
              "end": 412
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 426
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 427,
                    "end": 433
                  }
                ],
                "start": 426,
                "end": 434
              },
              "start": 421,
              "end": 434
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 434
          }
        ],
        "start": 410,
        "end": 435
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 445
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 449,
                        "end": 450
                      },
                      "typeArguments": null,
                      "start": 449,
                      "end": 450
                    },
                    "start": 447,
                    "end": 450
                  },
                  "start": 446,
                  "end": 450
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 453,
                  "end": 459
                },
                "start": 451,
                "end": 459
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 469,
                      "end": 473
                    },
                    "start": 462,
                    "end": 474
                  }
                ],
                "start": 460,
                "end": 476
              },
              "expression": false,
              "start": 445,
              "end": 476
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 442,
            "end": 476
          }
        ],
        "start": 436,
        "end": 478
      },
      "abstract": false,
      "declare": false,
      "start": 403,
      "end": 478
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 487
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
              "start": 488,
              "end": 489
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 504
              },
              "typeArguments": null,
              "start": 498,
              "end": 504
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 504
          }
        ],
        "start": 487,
        "end": 505
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 515
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 519,
                        "end": 520
                      },
                      "typeArguments": null,
                      "start": 519,
                      "end": 520
                    },
                    "start": 517,
                    "end": 520
                  },
                  "start": 516,
                  "end": 520
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 523,
                  "end": 529
                },
                "start": 521,
                "end": 529
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 539,
                      "end": 543
                    },
                    "start": 532,
                    "end": 544
                  }
                ],
                "start": 530,
                "end": 546
              },
              "expression": false,
              "start": 515,
              "end": 546
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 512,
            "end": 546
          }
        ],
        "start": 506,
        "end": 548
      },
      "abstract": false,
      "declare": false,
      "start": 480,
      "end": 548
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 561
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
              "start": 562,
              "end": 563
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 578
              },
              "typeArguments": null,
              "start": 572,
              "end": 578
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 562,
            "end": 578
          }
        ],
        "start": 561,
        "end": 579
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 589
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                "start": 590,
                "end": 594
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 597,
                "end": 603
              },
              "start": 595,
              "end": 603
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 586,
            "end": 604
          }
        ],
        "start": 580,
        "end": 606
      },
      "declare": false,
      "start": 550,
      "end": 606
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 620
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 630
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 631,
                    "end": 632
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 641,
                      "end": 648
                    },
                    "typeArguments": null,
                    "start": 641,
                    "end": 648
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 631,
                  "end": 648
                }
              ],
              "start": 630,
              "end": 649
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
                      "start": 653,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 653,
                    "end": 654
                  },
                  "start": 651,
                  "end": 654
                },
                "start": 650,
                "end": 654
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              "start": 655,
              "end": 663
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 627,
            "end": 664
          }
        ],
        "start": 621,
        "end": 666
      },
      "declare": false,
      "start": 608,
      "end": 666
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 680
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 691,
                              "end": 696
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 697,
                                  "end": 703
                                }
                              ],
                              "start": 696,
                              "end": 704
                            },
                            "start": 691,
                            "end": 704
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 681,
                          "end": 704
                        }
                      ],
                      "start": 680,
                      "end": 705
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
                        "start": 706,
                        "end": 710
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 713,
                        "end": 719
                      },
                      "start": 711,
                      "end": 719
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 677,
                    "end": 719
                  }
                ],
                "start": 675,
                "end": 721
              },
              "start": 673,
              "end": 721
            },
            "start": 672,
            "end": 721
          },
          "init": null,
          "definite": false,
          "start": 672,
          "end": 721
        }
      ],
      "declare": false,
      "start": 668,
      "end": 721
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 735
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
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
                          "start": 736,
                          "end": 737
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 746,
                            "end": 752
                          },
                          "typeArguments": null,
                          "start": 746,
                          "end": 752
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 736,
                        "end": 752
                      }
                    ],
                    "start": 735,
                    "end": 753
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
                            "start": 757,
                            "end": 758
                          },
                          "typeArguments": null,
                          "start": 757,
                          "end": 758
                        },
                        "start": 755,
                        "end": 758
                      },
                      "start": 754,
                      "end": 758
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 769,
                          "end": 771
                        },
                        "start": 762,
                        "end": 772
                      }
                    ],
                    "start": 760,
                    "end": 774
                  },
                  "expression": false,
                  "start": 735,
                  "end": 774
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 732,
                "end": 774
              }
            ],
            "start": 730,
            "end": 776
          },
          "definite": false,
          "start": 726,
          "end": 776
        }
      ],
      "declare": false,
      "start": 722,
      "end": 777
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 792
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "typeArguments": null,
              "start": 796,
              "end": 797
            },
            "start": 794,
            "end": 797
          },
          "start": 793,
          "end": 797
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 779,
      "end": 799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 813
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 818
              },
              "typeArguments": null,
              "start": 817,
              "end": 818
            },
            "start": 815,
            "end": 818
          },
          "start": 814,
          "end": 818
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 800,
      "end": 820
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 839,
        "end": 843
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 847,
              "end": 850
            },
            "start": 845,
            "end": 850
          },
          "start": 844,
          "end": 850
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 852,
        "end": 855
      },
      "expression": false,
      "start": 830,
      "end": 855
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 866,
        "end": 871
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 876
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 877,
                      "end": 882
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 883,
                          "end": 889
                        }
                      ],
                      "start": 882,
                      "end": 890
                    },
                    "start": 877,
                    "end": 890
                  }
                ],
                "start": 876,
                "end": 891
              },
              "start": 875,
              "end": 891
            },
            "start": 873,
            "end": 891
          },
          "start": 872,
          "end": 891
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 857,
      "end": 893
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 908
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 913
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 914,
                      "end": 919
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 920,
                          "end": 926
                        }
                      ],
                      "start": 919,
                      "end": 927
                    },
                    "start": 914,
                    "end": 927
                  }
                ],
                "start": 913,
                "end": 928
              },
              "start": 912,
              "end": 928
            },
            "start": 910,
            "end": 928
          },
          "start": 909,
          "end": 928
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 894,
      "end": 930
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 954
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 958,
              "end": 961
            },
            "start": 956,
            "end": 961
          },
          "start": 955,
          "end": 961
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 963,
        "end": 966
      },
      "expression": false,
      "start": 940,
      "end": 966
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 982
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 987
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 994
                    },
                    "typeArguments": null,
                    "start": 988,
                    "end": 994
                  }
                ],
                "start": 987,
                "end": 995
              },
              "start": 986,
              "end": 995
            },
            "start": 984,
            "end": 995
          },
          "start": 983,
          "end": 995
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 968,
      "end": 997
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1012
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1018,
                      "end": 1024
                    },
                    "typeArguments": null,
                    "start": 1018,
                    "end": 1024
                  }
                ],
                "start": 1017,
                "end": 1025
              },
              "start": 1016,
              "end": 1025
            },
            "start": 1014,
            "end": 1025
          },
          "start": 1013,
          "end": 1025
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 998,
      "end": 1027
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1051
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1055,
              "end": 1058
            },
            "start": 1053,
            "end": 1058
          },
          "start": 1052,
          "end": 1058
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1060,
        "end": 1063
      },
      "expression": false,
      "start": 1037,
      "end": 1063
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1078
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1083
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1084,
                      "end": 1090
                    },
                    "typeArguments": null,
                    "start": 1084,
                    "end": 1090
                  }
                ],
                "start": 1083,
                "end": 1091
              },
              "start": 1082,
              "end": 1091
            },
            "start": 1080,
            "end": 1091
          },
          "start": 1079,
          "end": 1091
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1065,
      "end": 1093
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1103,
        "end": 1107
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1112
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1113,
                      "end": 1119
                    },
                    "typeArguments": null,
                    "start": 1113,
                    "end": 1119
                  }
                ],
                "start": 1112,
                "end": 1120
              },
              "start": 1111,
              "end": 1120
            },
            "start": 1109,
            "end": 1120
          },
          "start": 1108,
          "end": 1120
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1094,
      "end": 1122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1145
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1149,
              "end": 1152
            },
            "start": 1147,
            "end": 1152
          },
          "start": 1146,
          "end": 1152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1154,
        "end": 1157
      },
      "expression": false,
      "start": 1132,
      "end": 1157
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1172
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1184
              },
              "typeArguments": null,
              "start": 1176,
              "end": 1184
            },
            "start": 1174,
            "end": 1184
          },
          "start": 1173,
          "end": 1184
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1159,
      "end": 1186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1196,
        "end": 1200
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1212
              },
              "typeArguments": null,
              "start": 1204,
              "end": 1212
            },
            "start": 1202,
            "end": 1212
          },
          "start": 1201,
          "end": 1212
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1187,
      "end": 1214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1237
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1241,
              "end": 1244
            },
            "start": 1239,
            "end": 1244
          },
          "start": 1238,
          "end": 1244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1246,
        "end": 1249
      },
      "expression": false,
      "start": 1224,
      "end": 1249
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1260,
        "end": 1264
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1275,
                "end": 1276
              },
              "typeArguments": null,
              "start": 1268,
              "end": 1276
            },
            "start": 1266,
            "end": 1276
          },
          "start": 1265,
          "end": 1276
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1251,
      "end": 1278
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1292
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1304
              },
              "typeArguments": null,
              "start": 1296,
              "end": 1304
            },
            "start": 1294,
            "end": 1304
          },
          "start": 1293,
          "end": 1304
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1279,
      "end": 1306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1325,
        "end": 1329
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1333,
              "end": 1336
            },
            "start": 1331,
            "end": 1336
          },
          "start": 1330,
          "end": 1336
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1338,
        "end": 1341
      },
      "expression": false,
      "start": 1316,
      "end": 1341
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1352,
        "end": 1356
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
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
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1343,
      "end": 1363
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1373,
        "end": 1377
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1381,
                "end": 1382
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1383,
                      "end": 1388
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1389,
                          "end": 1395
                        }
                      ],
                      "start": 1388,
                      "end": 1396
                    },
                    "start": 1383,
                    "end": 1396
                  }
                ],
                "start": 1382,
                "end": 1397
              },
              "start": 1381,
              "end": 1397
            },
            "start": 1379,
            "end": 1397
          },
          "start": 1378,
          "end": 1397
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1364,
      "end": 1399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1415,
        "end": 1419
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1423,
              "end": 1426
            },
            "start": 1421,
            "end": 1426
          },
          "start": 1420,
          "end": 1426
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1428,
        "end": 1431
      },
      "expression": false,
      "start": 1406,
      "end": 1431
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1442,
        "end": 1447
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1451,
                "end": 1452
              },
              "typeArguments": null,
              "start": 1451,
              "end": 1452
            },
            "start": 1449,
            "end": 1452
          },
          "start": 1448,
          "end": 1452
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1433,
      "end": 1454
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1464,
        "end": 1469
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1473,
                "end": 1474
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1475,
                      "end": 1481
                    },
                    "typeArguments": null,
                    "start": 1475,
                    "end": 1481
                  }
                ],
                "start": 1474,
                "end": 1482
              },
              "start": 1473,
              "end": 1482
            },
            "start": 1471,
            "end": 1482
          },
          "start": 1470,
          "end": 1482
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1455,
      "end": 1484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1500,
        "end": 1505
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1509,
              "end": 1512
            },
            "start": 1507,
            "end": 1512
          },
          "start": 1506,
          "end": 1512
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1514,
        "end": 1517
      },
      "expression": false,
      "start": 1491,
      "end": 1517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1528,
        "end": 1532
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "typeArguments": null,
              "start": 1536,
              "end": 1537
            },
            "start": 1534,
            "end": 1537
          },
          "start": 1533,
          "end": 1537
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1519,
      "end": 1539
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1553
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1558
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1559,
                      "end": 1565
                    },
                    "typeArguments": null,
                    "start": 1559,
                    "end": 1565
                  }
                ],
                "start": 1558,
                "end": 1566
              },
              "start": 1557,
              "end": 1566
            },
            "start": 1555,
            "end": 1566
          },
          "start": 1554,
          "end": 1566
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1540,
      "end": 1568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1584,
        "end": 1588
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1592,
              "end": 1595
            },
            "start": 1590,
            "end": 1595
          },
          "start": 1589,
          "end": 1595
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1597,
        "end": 1600
      },
      "expression": false,
      "start": 1575,
      "end": 1600
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1611,
        "end": 1615
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1620
              },
              "typeArguments": null,
              "start": 1619,
              "end": 1620
            },
            "start": 1617,
            "end": 1620
          },
          "start": 1616,
          "end": 1620
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1602,
      "end": 1622
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1632,
        "end": 1636
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1648
              },
              "typeArguments": null,
              "start": 1640,
              "end": 1648
            },
            "start": 1638,
            "end": 1648
          },
          "start": 1637,
          "end": 1648
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1623,
      "end": 1650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1666,
        "end": 1670
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1674,
              "end": 1677
            },
            "start": 1672,
            "end": 1677
          },
          "start": 1671,
          "end": 1677
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1679,
        "end": 1682
      },
      "expression": false,
      "start": 1657,
      "end": 1682
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1693,
        "end": 1697
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1701,
                "end": 1702
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1703,
                      "end": 1708
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1709,
                          "end": 1715
                        }
                      ],
                      "start": 1708,
                      "end": 1716
                    },
                    "start": 1703,
                    "end": 1716
                  }
                ],
                "start": 1702,
                "end": 1717
              },
              "start": 1701,
              "end": 1717
            },
            "start": 1699,
            "end": 1717
          },
          "start": 1698,
          "end": 1717
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1684,
      "end": 1719
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1729,
        "end": 1733
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1738
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1745
                    },
                    "typeArguments": null,
                    "start": 1739,
                    "end": 1745
                  }
                ],
                "start": 1738,
                "end": 1746
              },
              "start": 1737,
              "end": 1746
            },
            "start": 1735,
            "end": 1746
          },
          "start": 1734,
          "end": 1746
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1720,
      "end": 1748
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1764,
        "end": 1768
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1772,
              "end": 1775
            },
            "start": 1770,
            "end": 1775
          },
          "start": 1769,
          "end": 1775
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1777,
        "end": 1780
      },
      "expression": false,
      "start": 1755,
      "end": 1780
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1791,
        "end": 1795
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1799,
                "end": 1800
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1801,
                      "end": 1806
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1807,
                          "end": 1813
                        }
                      ],
                      "start": 1806,
                      "end": 1814
                    },
                    "start": 1801,
                    "end": 1814
                  }
                ],
                "start": 1800,
                "end": 1815
              },
              "start": 1799,
              "end": 1815
            },
            "start": 1797,
            "end": 1815
          },
          "start": 1796,
          "end": 1815
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1782,
      "end": 1817
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1831
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1836
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1837,
                      "end": 1843
                    },
                    "typeArguments": null,
                    "start": 1837,
                    "end": 1843
                  }
                ],
                "start": 1836,
                "end": 1844
              },
              "start": 1835,
              "end": 1844
            },
            "start": 1833,
            "end": 1844
          },
          "start": 1832,
          "end": 1844
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1818,
      "end": 1846
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1866
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1870,
              "end": 1873
            },
            "start": 1868,
            "end": 1873
          },
          "start": 1867,
          "end": 1873
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1875,
        "end": 1878
      },
      "expression": false,
      "start": 1853,
      "end": 1878
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1889,
        "end": 1894
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1898,
                "end": 1899
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1905
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1906,
                          "end": 1912
                        }
                      ],
                      "start": 1905,
                      "end": 1913
                    },
                    "start": 1900,
                    "end": 1913
                  }
                ],
                "start": 1899,
                "end": 1914
              },
              "start": 1898,
              "end": 1914
            },
            "start": 1896,
            "end": 1914
          },
          "start": 1895,
          "end": 1914
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1880,
      "end": 1916
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1926,
        "end": 1931
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1942,
                "end": 1943
              },
              "typeArguments": null,
              "start": 1935,
              "end": 1943
            },
            "start": 1933,
            "end": 1943
          },
          "start": 1932,
          "end": 1943
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1917,
      "end": 1945
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1961,
        "end": 1966
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1970,
              "end": 1973
            },
            "start": 1968,
            "end": 1973
          },
          "start": 1967,
          "end": 1973
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1975,
        "end": 1978
      },
      "expression": false,
      "start": 1952,
      "end": 1978
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1989,
        "end": 1994
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1998,
                "end": 1999
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2005
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2006,
                          "end": 2012
                        }
                      ],
                      "start": 2005,
                      "end": 2013
                    },
                    "start": 2000,
                    "end": 2013
                  }
                ],
                "start": 1999,
                "end": 2014
              },
              "start": 1998,
              "end": 2014
            },
            "start": 1996,
            "end": 2014
          },
          "start": 1995,
          "end": 2014
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1980,
      "end": 2016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2026,
        "end": 2031
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
          "start": 2032,
          "end": 2043
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2017,
      "end": 2045
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2061,
        "end": 2066
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2070,
              "end": 2073
            },
            "start": 2068,
            "end": 2073
          },
          "start": 2067,
          "end": 2073
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2075,
        "end": 2078
      },
      "expression": false,
      "start": 2052,
      "end": 2078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2089,
        "end": 2094
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2098,
                "end": 2099
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2100,
                      "end": 2106
                    },
                    "typeArguments": null,
                    "start": 2100,
                    "end": 2106
                  }
                ],
                "start": 2099,
                "end": 2107
              },
              "start": 2098,
              "end": 2107
            },
            "start": 2096,
            "end": 2107
          },
          "start": 2095,
          "end": 2107
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2080,
      "end": 2109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2124
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2128,
                "end": 2129
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2130,
                      "end": 2136
                    },
                    "typeArguments": null,
                    "start": 2130,
                    "end": 2136
                  }
                ],
                "start": 2129,
                "end": 2137
              },
              "start": 2128,
              "end": 2137
            },
            "start": 2126,
            "end": 2137
          },
          "start": 2125,
          "end": 2137
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2110,
      "end": 2139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2155,
        "end": 2160
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2164,
              "end": 2167
            },
            "start": 2162,
            "end": 2167
          },
          "start": 2161,
          "end": 2167
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2169,
        "end": 2172
      },
      "expression": false,
      "start": 2146,
      "end": 2172
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2183,
        "end": 2189
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2193,
                "end": 2195
              },
              "typeArguments": null,
              "start": 2193,
              "end": 2195
            },
            "start": 2191,
            "end": 2195
          },
          "start": 2190,
          "end": 2195
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2174,
      "end": 2197
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2207,
        "end": 2213
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2217,
                "end": 2218
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2219,
                      "end": 2225
                    },
                    "typeArguments": null,
                    "start": 2219,
                    "end": 2225
                  }
                ],
                "start": 2218,
                "end": 2226
              },
              "start": 2217,
              "end": 2226
            },
            "start": 2215,
            "end": 2226
          },
          "start": 2214,
          "end": 2226
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2198,
      "end": 2228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2244,
        "end": 2250
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2254,
              "end": 2257
            },
            "start": 2252,
            "end": 2257
          },
          "start": 2251,
          "end": 2257
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2259,
        "end": 2262
      },
      "expression": false,
      "start": 2235,
      "end": 2262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2273,
        "end": 2278
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2282,
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
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2284,
                      "end": 2290
                    },
                    "typeArguments": null,
                    "start": 2284,
                    "end": 2290
                  }
                ],
                "start": 2283,
                "end": 2291
              },
              "start": 2282,
              "end": 2291
            },
            "start": 2280,
            "end": 2291
          },
          "start": 2279,
          "end": 2291
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2264,
      "end": 2293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2303,
        "end": 2308
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2319,
                "end": 2320
              },
              "typeArguments": null,
              "start": 2312,
              "end": 2320
            },
            "start": 2310,
            "end": 2320
          },
          "start": 2309,
          "end": 2320
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2294,
      "end": 2322
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2338,
        "end": 2343
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2347,
              "end": 2350
            },
            "start": 2345,
            "end": 2350
          },
          "start": 2344,
          "end": 2350
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2352,
        "end": 2355
      },
      "expression": false,
      "start": 2329,
      "end": 2355
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2366,
        "end": 2371
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2375,
                "end": 2376
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2377,
                      "end": 2383
                    },
                    "typeArguments": null,
                    "start": 2377,
                    "end": 2383
                  }
                ],
                "start": 2376,
                "end": 2384
              },
              "start": 2375,
              "end": 2384
            },
            "start": 2373,
            "end": 2384
          },
          "start": 2372,
          "end": 2384
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2357,
      "end": 2386
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2396,
        "end": 2401
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2412,
                "end": 2413
              },
              "typeArguments": null,
              "start": 2405,
              "end": 2413
            },
            "start": 2403,
            "end": 2413
          },
          "start": 2402,
          "end": 2413
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2387,
      "end": 2415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2431,
        "end": 2436
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2440,
              "end": 2443
            },
            "start": 2438,
            "end": 2443
          },
          "start": 2437,
          "end": 2443
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2445,
        "end": 2448
      },
      "expression": false,
      "start": 2422,
      "end": 2448
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2464
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2468,
                "end": 2470
              },
              "typeArguments": null,
              "start": 2468,
              "end": 2470
            },
            "start": 2466,
            "end": 2470
          },
          "start": 2465,
          "end": 2470
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2450,
      "end": 2472
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2482,
        "end": 2487
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2491,
                "end": 2492
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2493,
                      "end": 2499
                    },
                    "typeArguments": null,
                    "start": 2493,
                    "end": 2499
                  }
                ],
                "start": 2492,
                "end": 2500
              },
              "start": 2491,
              "end": 2500
            },
            "start": 2489,
            "end": 2500
          },
          "start": 2488,
          "end": 2500
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2473,
      "end": 2502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2518,
        "end": 2523
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2527,
              "end": 2530
            },
            "start": 2525,
            "end": 2530
          },
          "start": 2524,
          "end": 2530
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2532,
        "end": 2535
      },
      "expression": false,
      "start": 2509,
      "end": 2535
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2535
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
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
    "value": "T",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 385,
    "end": 391
  },
  {
    "type": "Null",
    "value": "null",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 413,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 462,
    "end": 468
  },
  {
    "type": "Null",
    "value": "null",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
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
    "value": "class",
    "start": 480,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 486,
    "end": 487
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
    "type": "Keyword",
    "value": "extends",
    "start": 490,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
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
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 532,
    "end": 538
  },
  {
    "type": "Null",
    "value": "null",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 550,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 564,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 590,
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
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 608,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 633,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 641,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 677,
    "end": 680
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
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
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
    "value": ")",
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
    "value": "string",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 738,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 762,
    "end": 768
  },
  {
    "type": "String",
    "value": "''",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 779,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 796,
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
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 800,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
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
    "value": "A",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 830,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 847,
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
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 857,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 866,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 877,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 883,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
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
    "value": "foo1b",
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
    "value": "x",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 914,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 940,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 949,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 958,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 968,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 977,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 988,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1007,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1018,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1037,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1046,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1055,
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
    "value": "{",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1065,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1079,
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
    "value": "I",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1094,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1103,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1149,
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
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1187,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1211,
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
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1224,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1251,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1260,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1296,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1316,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1325,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1343,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1352,
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
    "value": "A",
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
    "value": ";",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1364,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1406,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1415,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1423,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1433,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1442,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1455,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1464,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1470,
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
    "value": "C",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1491,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1500,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1519,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1528,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
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
    "value": "foo6",
    "start": 1549,
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
    "type": "Identifier",
    "value": "I",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1559,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1575,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1602,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1611,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1623,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1640,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1657,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1684,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1709,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1720,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1729,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1739,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1755,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1764,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1782,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1791,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1801,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1807,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1827,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1853,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1862,
    "end": 1866
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
    "type": "Identifier",
    "value": "any",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1889,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1906,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1915,
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
    "value": "foo10",
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
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1952,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1961,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1980,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1989,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2000,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2017,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "b",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2052,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2061,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2070,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2080,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2089,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2095,
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
    "value": "I",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2100,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2110,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2119,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2130,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2155,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2174,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2183,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2193,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2235,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2244,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2264,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2273,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I",
    "start": 2282,
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
    "value": "Number",
    "start": 2284,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 2294,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2303,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2312,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 2329,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2338,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2347,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 2357,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2366,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2377,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2387,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2396,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2405,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2422,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2431,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2459,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2468,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2473,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2482,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2493,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2509,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2518,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2527,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2534,
    "end": 2535
  }
]
```
