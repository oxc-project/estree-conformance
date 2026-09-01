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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 342
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
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 344
          }
        ],
        "start": 342,
        "end": 345
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 363
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
                        "start": 367,
                        "end": 368
                      },
                      "typeArguments": null,
                      "start": 367,
                      "end": 368
                    },
                    "start": 365,
                    "end": 368
                  },
                  "start": 364,
                  "end": 368
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
                      "value": null,
                      "raw": "null",
                      "start": 379,
                      "end": 383
                    },
                    "start": 372,
                    "end": 384
                  }
                ],
                "start": 370,
                "end": 386
              },
              "expression": false,
              "start": 363,
              "end": 386
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 386
          }
        ],
        "start": 346,
        "end": 388
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 388
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
        "start": 396,
        "end": 397
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
              "start": 398,
              "end": 399
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 398,
            "end": 399
          }
        ],
        "start": 397,
        "end": 400
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 418
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
                        "start": 422,
                        "end": 423
                      },
                      "typeArguments": null,
                      "start": 422,
                      "end": 423
                    },
                    "start": 420,
                    "end": 423
                  },
                  "start": 419,
                  "end": 423
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
                      "value": null,
                      "raw": "null",
                      "start": 434,
                      "end": 438
                    },
                    "start": 427,
                    "end": 439
                  }
                ],
                "start": 425,
                "end": 441
              },
              "expression": false,
              "start": 418,
              "end": 441
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 407,
            "end": 441
          }
        ],
        "start": 401,
        "end": 443
      },
      "abstract": false,
      "declare": false,
      "start": 390,
      "end": 443
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 456
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 471,
                  "end": 474
                },
                "start": 470,
                "end": 474
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
                  "start": 477,
                  "end": 481
                },
                "typeArguments": null,
                "start": 477,
                "end": 481
              },
              "start": 475,
              "end": 481
            },
            "start": 466,
            "end": 482
          }
        ],
        "start": 460,
        "end": 484
      },
      "declare": false,
      "start": 445,
      "end": 484
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 509,
                    "end": 510
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 509,
                  "end": 510
                }
              ],
              "start": 508,
              "end": 511
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
                      "start": 515,
                      "end": 516
                    },
                    "typeArguments": null,
                    "start": 515,
                    "end": 516
                  },
                  "start": 513,
                  "end": 516
                },
                "start": 512,
                "end": 516
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 525
                },
                "typeArguments": null,
                "start": 519,
                "end": 525
              },
              "start": 517,
              "end": 525
            },
            "start": 505,
            "end": 526
          }
        ],
        "start": 499,
        "end": 528
      },
      "declare": false,
      "start": 486,
      "end": 528
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
                            "start": 543,
                            "end": 544
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 543,
                          "end": 544
                        }
                      ],
                      "start": 542,
                      "end": 545
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
                              "start": 549,
                              "end": 550
                            },
                            "typeArguments": null,
                            "start": 549,
                            "end": 550
                          },
                          "start": 547,
                          "end": 550
                        },
                        "start": 546,
                        "end": 550
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
                          "start": 553,
                          "end": 554
                        },
                        "typeArguments": null,
                        "start": 553,
                        "end": 554
                      },
                      "start": 551,
                      "end": 554
                    },
                    "start": 539,
                    "end": 554
                  }
                ],
                "start": 537,
                "end": 556
              },
              "start": 535,
              "end": 556
            },
            "start": 534,
            "end": 556
          },
          "init": null,
          "definite": false,
          "start": 534,
          "end": 556
        }
      ],
      "declare": false,
      "start": 530,
      "end": 556
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
            "start": 561,
            "end": 562
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
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 570
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
                          "start": 571,
                          "end": 572
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 571,
                        "end": 572
                      }
                    ],
                    "start": 570,
                    "end": 573
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
                            "start": 577,
                            "end": 578
                          },
                          "typeArguments": null,
                          "start": 577,
                          "end": 578
                        },
                        "start": 575,
                        "end": 578
                      },
                      "start": 574,
                      "end": 578
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
                        "start": 581,
                        "end": 582
                      },
                      "typeArguments": null,
                      "start": 581,
                      "end": 582
                    },
                    "start": 579,
                    "end": 582
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
                          "start": 592,
                          "end": 596
                        },
                        "start": 585,
                        "end": 597
                      }
                    ],
                    "start": 583,
                    "end": 599
                  },
                  "expression": false,
                  "start": 570,
                  "end": 599
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 567,
                "end": 599
              }
            ],
            "start": 565,
            "end": 601
          },
          "definite": false,
          "start": 561,
          "end": 601
        }
      ],
      "declare": false,
      "start": 557,
      "end": 602
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 668
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
                "start": 672,
                "end": 673
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 674,
                    "end": 680
                  }
                ],
                "start": 673,
                "end": 681
              },
              "start": 672,
              "end": 681
            },
            "start": 670,
            "end": 681
          },
          "start": 669,
          "end": 681
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 654,
      "end": 683
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 698
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
                "start": 702,
                "end": 703
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 704,
                    "end": 710
                  }
                ],
                "start": 703,
                "end": 711
              },
              "start": 702,
              "end": 711
            },
            "start": 700,
            "end": 711
          },
          "start": 699,
          "end": 711
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 684,
      "end": 713
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 737
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
              "start": 741,
              "end": 744
            },
            "start": 739,
            "end": 744
          },
          "start": 738,
          "end": 744
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 746,
        "end": 749
      },
      "expression": false,
      "start": 723,
      "end": 749
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 765
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
                "start": 769,
                "end": 770
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 771,
                    "end": 777
                  }
                ],
                "start": 770,
                "end": 778
              },
              "start": 769,
              "end": 778
            },
            "start": 767,
            "end": 778
          },
          "start": 766,
          "end": 778
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 751,
      "end": 780
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 795
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
                "start": 799,
                "end": 800
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 801,
                    "end": 807
                  }
                ],
                "start": 800,
                "end": 808
              },
              "start": 799,
              "end": 808
            },
            "start": 797,
            "end": 808
          },
          "start": 796,
          "end": 808
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 781,
      "end": 810
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 829,
        "end": 834
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
              "start": 838,
              "end": 841
            },
            "start": 836,
            "end": 841
          },
          "start": 835,
          "end": 841
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 843,
        "end": 846
      },
      "expression": false,
      "start": 820,
      "end": 846
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 861
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
                "start": 865,
                "end": 866
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 867,
                    "end": 873
                  }
                ],
                "start": 866,
                "end": 874
              },
              "start": 865,
              "end": 874
            },
            "start": 863,
            "end": 874
          },
          "start": 862,
          "end": 874
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 848,
      "end": 876
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 890
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
                "start": 894,
                "end": 895
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 896,
                    "end": 902
                  }
                ],
                "start": 895,
                "end": 903
              },
              "start": 894,
              "end": 903
            },
            "start": 892,
            "end": 903
          },
          "start": 891,
          "end": 903
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 877,
      "end": 905
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 924,
        "end": 928
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
              "start": 932,
              "end": 935
            },
            "start": 930,
            "end": 935
          },
          "start": 929,
          "end": 935
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 937,
        "end": 940
      },
      "expression": false,
      "start": 915,
      "end": 940
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 955
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
                "start": 966,
                "end": 967
              },
              "typeArguments": null,
              "start": 959,
              "end": 967
            },
            "start": 957,
            "end": 967
          },
          "start": 956,
          "end": 967
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 942,
      "end": 969
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 983
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
                "start": 994,
                "end": 995
              },
              "typeArguments": null,
              "start": 987,
              "end": 995
            },
            "start": 985,
            "end": 995
          },
          "start": 984,
          "end": 995
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 970,
      "end": 997
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1020
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
              "start": 1024,
              "end": 1027
            },
            "start": 1022,
            "end": 1027
          },
          "start": 1021,
          "end": 1027
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1029,
        "end": 1032
      },
      "expression": false,
      "start": 1007,
      "end": 1032
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1047
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
                "start": 1058,
                "end": 1059
              },
              "typeArguments": null,
              "start": 1051,
              "end": 1059
            },
            "start": 1049,
            "end": 1059
          },
          "start": 1048,
          "end": 1059
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1034,
      "end": 1061
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1075
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
                "start": 1086,
                "end": 1087
              },
              "typeArguments": null,
              "start": 1079,
              "end": 1087
            },
            "start": 1077,
            "end": 1087
          },
          "start": 1076,
          "end": 1087
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1062,
      "end": 1089
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1108,
        "end": 1112
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
              "start": 1116,
              "end": 1119
            },
            "start": 1114,
            "end": 1119
          },
          "start": 1113,
          "end": 1119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1121,
        "end": 1124
      },
      "expression": false,
      "start": 1099,
      "end": 1124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1139
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
                "start": 1150,
                "end": 1151
              },
              "typeArguments": null,
              "start": 1143,
              "end": 1151
            },
            "start": 1141,
            "end": 1151
          },
          "start": 1140,
          "end": 1151
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1154,
          "end": 1160
        },
        "start": 1152,
        "end": 1160
      },
      "body": null,
      "expression": false,
      "start": 1126,
      "end": 1161
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1175
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
                "start": 1186,
                "end": 1187
              },
              "typeArguments": null,
              "start": 1179,
              "end": 1187
            },
            "start": 1177,
            "end": 1187
          },
          "start": 1176,
          "end": 1187
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1190,
          "end": 1196
        },
        "start": 1188,
        "end": 1196
      },
      "body": null,
      "expression": false,
      "start": 1162,
      "end": 1197
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1213,
        "end": 1217
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
              "start": 1221,
              "end": 1224
            },
            "start": 1219,
            "end": 1224
          },
          "start": 1218,
          "end": 1224
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        },
        "start": 1225,
        "end": 1230
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1231,
        "end": 1234
      },
      "expression": false,
      "start": 1204,
      "end": 1234
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1249
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
                "start": 1253,
                "end": 1254
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1255,
                    "end": 1261
                  }
                ],
                "start": 1254,
                "end": 1262
              },
              "start": 1253,
              "end": 1262
            },
            "start": 1251,
            "end": 1262
          },
          "start": 1250,
          "end": 1262
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1236,
      "end": 1264
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1274,
        "end": 1278
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
                "start": 1282,
                "end": 1283
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1284,
                    "end": 1290
                  }
                ],
                "start": 1283,
                "end": 1291
              },
              "start": 1282,
              "end": 1291
            },
            "start": 1280,
            "end": 1291
          },
          "start": 1279,
          "end": 1291
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1265,
      "end": 1293
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1313
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
              "start": 1317,
              "end": 1320
            },
            "start": 1315,
            "end": 1320
          },
          "start": 1314,
          "end": 1320
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1322,
        "end": 1325
      },
      "expression": false,
      "start": 1300,
      "end": 1325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1340
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
                "start": 1344,
                "end": 1345
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1346,
                    "end": 1352
                  }
                ],
                "start": 1345,
                "end": 1353
              },
              "start": 1344,
              "end": 1353
            },
            "start": 1342,
            "end": 1353
          },
          "start": 1341,
          "end": 1353
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1327,
      "end": 1355
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1369
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
                "start": 1373,
                "end": 1374
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1375,
                    "end": 1381
                  }
                ],
                "start": 1374,
                "end": 1382
              },
              "start": 1373,
              "end": 1382
            },
            "start": 1371,
            "end": 1382
          },
          "start": 1370,
          "end": 1382
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1356,
      "end": 1384
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1438,
        "end": 1442
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
              "start": 1446,
              "end": 1449
            },
            "start": 1444,
            "end": 1449
          },
          "start": 1443,
          "end": 1449
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1451,
        "end": 1454
      },
      "expression": false,
      "start": 1429,
      "end": 1454
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1465,
        "end": 1470
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
                "start": 1474,
                "end": 1475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1476,
                    "end": 1482
                  }
                ],
                "start": 1475,
                "end": 1483
              },
              "start": 1474,
              "end": 1483
            },
            "start": 1472,
            "end": 1483
          },
          "start": 1471,
          "end": 1483
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1456,
      "end": 1485
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1495,
        "end": 1500
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
                "start": 1511,
                "end": 1512
              },
              "typeArguments": null,
              "start": 1504,
              "end": 1512
            },
            "start": 1502,
            "end": 1512
          },
          "start": 1501,
          "end": 1512
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1486,
      "end": 1514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1530,
        "end": 1535
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
              "start": 1539,
              "end": 1542
            },
            "start": 1537,
            "end": 1542
          },
          "start": 1536,
          "end": 1542
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1544,
        "end": 1547
      },
      "expression": false,
      "start": 1521,
      "end": 1547
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1563
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
                "start": 1567,
                "end": 1568
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1569,
                    "end": 1575
                  }
                ],
                "start": 1568,
                "end": 1576
              },
              "start": 1567,
              "end": 1576
            },
            "start": 1565,
            "end": 1576
          },
          "start": 1564,
          "end": 1576
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1549,
      "end": 1578
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1588,
        "end": 1593
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
                "start": 1604,
                "end": 1605
              },
              "typeArguments": null,
              "start": 1597,
              "end": 1605
            },
            "start": 1595,
            "end": 1605
          },
          "start": 1594,
          "end": 1605
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1579,
      "end": 1607
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1628
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
              "start": 1632,
              "end": 1635
            },
            "start": 1630,
            "end": 1635
          },
          "start": 1629,
          "end": 1635
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1637,
        "end": 1640
      },
      "expression": false,
      "start": 1614,
      "end": 1640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1651,
        "end": 1656
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
                "start": 1660,
                "end": 1661
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1662,
                    "end": 1668
                  }
                ],
                "start": 1661,
                "end": 1669
              },
              "start": 1660,
              "end": 1669
            },
            "start": 1658,
            "end": 1669
          },
          "start": 1657,
          "end": 1669
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1642,
      "end": 1671
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1681,
        "end": 1686
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
                "start": 1690,
                "end": 1691
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1692,
                    "end": 1698
                  }
                ],
                "start": 1691,
                "end": 1699
              },
              "start": 1690,
              "end": 1699
            },
            "start": 1688,
            "end": 1699
          },
          "start": 1687,
          "end": 1699
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1672,
      "end": 1701
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1717,
        "end": 1722
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
              "start": 1726,
              "end": 1729
            },
            "start": 1724,
            "end": 1729
          },
          "start": 1723,
          "end": 1729
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1731,
        "end": 1734
      },
      "expression": false,
      "start": 1708,
      "end": 1734
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1745,
        "end": 1751
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
                "start": 1755,
                "end": 1757
              },
              "typeArguments": null,
              "start": 1755,
              "end": 1757
            },
            "start": 1753,
            "end": 1757
          },
          "start": 1752,
          "end": 1757
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1736,
      "end": 1759
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1769,
        "end": 1775
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
                "start": 1779,
                "end": 1780
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1781,
                    "end": 1787
                  }
                ],
                "start": 1780,
                "end": 1788
              },
              "start": 1779,
              "end": 1788
            },
            "start": 1777,
            "end": 1788
          },
          "start": 1776,
          "end": 1788
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1760,
      "end": 1790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1812
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
              "start": 1816,
              "end": 1819
            },
            "start": 1814,
            "end": 1819
          },
          "start": 1813,
          "end": 1819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1821,
        "end": 1824
      },
      "expression": false,
      "start": 1797,
      "end": 1824
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1840
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
                "start": 1844,
                "end": 1845
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1846,
                    "end": 1852
                  }
                ],
                "start": 1845,
                "end": 1853
              },
              "start": 1844,
              "end": 1853
            },
            "start": 1842,
            "end": 1853
          },
          "start": 1841,
          "end": 1853
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1826,
      "end": 1855
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1865,
        "end": 1870
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
                "start": 1881,
                "end": 1882
              },
              "typeArguments": null,
              "start": 1874,
              "end": 1882
            },
            "start": 1872,
            "end": 1882
          },
          "start": 1871,
          "end": 1882
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1856,
      "end": 1884
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1900,
        "end": 1905
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
              "start": 1909,
              "end": 1912
            },
            "start": 1907,
            "end": 1912
          },
          "start": 1906,
          "end": 1912
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1914,
        "end": 1917
      },
      "expression": false,
      "start": 1891,
      "end": 1917
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1933
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
                "start": 1937,
                "end": 1938
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1939,
                    "end": 1945
                  }
                ],
                "start": 1938,
                "end": 1946
              },
              "start": 1937,
              "end": 1946
            },
            "start": 1935,
            "end": 1946
          },
          "start": 1934,
          "end": 1946
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1919,
      "end": 1948
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1958,
        "end": 1963
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
                "start": 1974,
                "end": 1975
              },
              "typeArguments": null,
              "start": 1967,
              "end": 1975
            },
            "start": 1965,
            "end": 1975
          },
          "start": 1964,
          "end": 1975
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1949,
      "end": 1977
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1993,
        "end": 1998
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
              "start": 2002,
              "end": 2005
            },
            "start": 2000,
            "end": 2005
          },
          "start": 1999,
          "end": 2005
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2007,
        "end": 2010
      },
      "expression": false,
      "start": 1984,
      "end": 2010
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2021,
        "end": 2026
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
                "start": 2030,
                "end": 2032
              },
              "typeArguments": null,
              "start": 2030,
              "end": 2032
            },
            "start": 2028,
            "end": 2032
          },
          "start": 2027,
          "end": 2032
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2012,
      "end": 2034
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2044,
        "end": 2049
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
                "start": 2053,
                "end": 2054
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2055,
                    "end": 2061
                  }
                ],
                "start": 2054,
                "end": 2062
              },
              "start": 2053,
              "end": 2062
            },
            "start": 2051,
            "end": 2062
          },
          "start": 2050,
          "end": 2062
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2035,
      "end": 2064
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2080,
        "end": 2085
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
              "start": 2089,
              "end": 2092
            },
            "start": 2087,
            "end": 2092
          },
          "start": 2086,
          "end": 2092
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2094,
        "end": 2097
      },
      "expression": false,
      "start": 2071,
      "end": 2097
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2097
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
    "value": "B",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 352,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
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
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 372,
    "end": 378
  },
  {
    "type": "Null",
    "value": "null",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 390,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 407,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Null",
    "value": "null",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 445,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 455,
    "end": 456
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
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 486,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "RegExp",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 530,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 585,
    "end": 591
  },
  {
    "type": "Null",
    "value": "null",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 654,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 663,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 684,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "B",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 710,
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
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 723,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
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
    "value": "foo1c",
    "start": 790,
    "end": 795
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
    "type": "Identifier",
    "value": "C",
    "start": 799,
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
    "value": "string",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 820,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 829,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 867,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 877,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 902,
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
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 915,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 924,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 932,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 942,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 959,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 970,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 979,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 987,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 1007,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1016,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1034,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1126,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1135,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1143,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1162,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "string",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1204,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1213,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "B",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1265,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1300,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1317,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1356,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1375,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1429,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1438,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1456,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1465,
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
    "value": "B",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1476,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1486,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1495,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1511,
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
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1521,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1530,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1539,
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
    "value": "{",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1549,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1579,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1623,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1632,
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
    "value": "{",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1642,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1651,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1672,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1681,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1692,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1708,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1717,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1726,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1736,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1755,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1760,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1769,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1781,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1797,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1806,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1826,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1835,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1846,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1856,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1891,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1919,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1928,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1939,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1949,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1958,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1967,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1984,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1993,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2012,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2021,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2027,
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
    "value": "I2",
    "start": 2030,
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
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2035,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2044,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2055,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2071,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2080,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2089,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  }
]
```
