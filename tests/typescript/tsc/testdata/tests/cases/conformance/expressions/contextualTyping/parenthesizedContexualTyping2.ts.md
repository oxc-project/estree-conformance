__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FuncType",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 371
      },
      "typeParameters": null,
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
                        "start": 379,
                        "end": 380
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 379,
                      "end": 380
                    }
                  ],
                  "start": 378,
                  "end": 381
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
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
                          "start": 385,
                          "end": 386
                        },
                        "typeArguments": null,
                        "start": 385,
                        "end": 386
                      },
                      "start": 383,
                      "end": 386
                    },
                    "start": 382,
                    "end": 386
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
                      "start": 391,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 388,
                  "end": 392
                },
                "start": 378,
                "end": 392
              },
              "start": 376,
              "end": 392
            },
            "start": 375,
            "end": 392
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "typeArguments": null,
            "start": 397,
            "end": 405
          },
          "start": 394,
          "end": 405
        },
        "start": 374,
        "end": 405
      },
      "declare": false,
      "start": 358,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 420
      },
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
              "start": 421,
              "end": 422
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 422
          }
        ],
        "start": 420,
        "end": 423
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 435
              },
              "typeArguments": null,
              "start": 427,
              "end": 435
            },
            "start": 425,
            "end": 435
          },
          "start": 424,
          "end": 435
        },
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
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 438,
            "end": 441
          },
          "start": 437,
          "end": 441
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
            "start": 444,
            "end": 445
          },
          "typeArguments": null,
          "start": 444,
          "end": 445
        },
        "start": 442,
        "end": 445
      },
      "body": null,
      "expression": false,
      "start": 408,
      "end": 446
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 459
      },
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
              "start": 460,
              "end": 461
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 460,
            "end": 461
          }
        ],
        "start": 459,
        "end": 462
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 474
              },
              "typeArguments": null,
              "start": 466,
              "end": 474
            },
            "start": 464,
            "end": 474
          },
          "start": 463,
          "end": 474
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 487
              },
              "typeArguments": null,
              "start": 479,
              "end": 487
            },
            "start": 477,
            "end": 487
          },
          "start": 476,
          "end": 487
        },
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
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            "start": 490,
            "end": 493
          },
          "start": 489,
          "end": 493
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
            "start": 496,
            "end": 497
          },
          "typeArguments": null,
          "start": 496,
          "end": 497
        },
        "start": 494,
        "end": 497
      },
      "body": null,
      "expression": false,
      "start": 447,
      "end": 498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 511
      },
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
              "start": 512,
              "end": 513
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 513
          }
        ],
        "start": 511,
        "end": 514
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 522
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 524,
                "end": 527
              },
              "start": 524,
              "end": 529
            },
            "start": 522,
            "end": 529
          },
          "value": null,
          "start": 515,
          "end": 529
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
            "start": 532,
            "end": 533
          },
          "typeArguments": null,
          "start": 532,
          "end": 533
        },
        "start": 530,
        "end": 533
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 556
            },
            "start": 540,
            "end": 557
          }
        ],
        "start": 534,
        "end": 559
      },
      "expression": false,
      "start": 499,
      "end": 559
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
            "typeAnnotation": null,
            "start": 565,
            "end": 566
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 572
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 580,
                          "end": 581
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 582,
                              "end": 588
                            }
                          ],
                          "start": 581,
                          "end": 589
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 590,
                            "end": 599
                          }
                        ],
                        "optional": false,
                        "start": 580,
                        "end": 600
                      },
                      "directive": null,
                      "start": 580,
                      "end": 601
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 610
                      },
                      "start": 602,
                      "end": 611
                    }
                  ],
                  "start": 578,
                  "end": 613
                },
                "id": null,
                "generator": false,
                "start": 573,
                "end": 613
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 615,
                "end": 617
              }
            ],
            "optional": false,
            "start": 569,
            "end": 618
          },
          "definite": false,
          "start": 565,
          "end": 618
        }
      ],
      "declare": false,
      "start": 561,
      "end": 619
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
            "start": 624,
            "end": 625
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 641
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 642,
                              "end": 648
                            }
                          ],
                          "start": 641,
                          "end": 649
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 650,
                            "end": 659
                          }
                        ],
                        "optional": false,
                        "start": 640,
                        "end": 660
                      },
                      "directive": null,
                      "start": 640,
                      "end": 661
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 669,
                        "end": 670
                      },
                      "start": 662,
                      "end": 671
                    }
                  ],
                  "start": 638,
                  "end": 673
                },
                "id": null,
                "generator": false,
                "start": 633,
                "end": 673
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 676,
                "end": 678
              }
            ],
            "optional": false,
            "start": 628,
            "end": 679
          },
          "definite": false,
          "start": 624,
          "end": 679
        }
      ],
      "declare": false,
      "start": 620,
      "end": 680
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 685,
            "end": 686
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 692
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 696
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 702,
                          "end": 703
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 704,
                              "end": 710
                            }
                          ],
                          "start": 703,
                          "end": 711
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 712,
                            "end": 721
                          }
                        ],
                        "optional": false,
                        "start": 702,
                        "end": 722
                      },
                      "directive": null,
                      "start": 702,
                      "end": 723
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 731,
                        "end": 732
                      },
                      "start": 724,
                      "end": 733
                    }
                  ],
                  "start": 700,
                  "end": 735
                },
                "id": null,
                "generator": false,
                "start": 695,
                "end": 735
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 739,
                "end": 741
              }
            ],
            "optional": false,
            "start": 689,
            "end": 742
          },
          "definite": false,
          "start": 685,
          "end": 742
        }
      ],
      "declare": false,
      "start": 681,
      "end": 743
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 749
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 755
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 760
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 766,
                          "end": 767
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 768,
                              "end": 774
                            }
                          ],
                          "start": 767,
                          "end": 775
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 776,
                            "end": 785
                          }
                        ],
                        "optional": false,
                        "start": 766,
                        "end": 786
                      },
                      "directive": null,
                      "start": 766,
                      "end": 787
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 796
                      },
                      "start": 788,
                      "end": 797
                    }
                  ],
                  "start": 764,
                  "end": 799
                },
                "id": null,
                "generator": false,
                "start": 759,
                "end": 799
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 804,
                "end": 806
              }
            ],
            "optional": false,
            "start": 752,
            "end": 807
          },
          "definite": false,
          "start": 748,
          "end": 807
        }
      ],
      "declare": false,
      "start": 744,
      "end": 808
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 821
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 823
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 829,
                          "end": 830
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 831,
                              "end": 837
                            }
                          ],
                          "start": 830,
                          "end": 838
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 839,
                            "end": 848
                          }
                        ],
                        "optional": false,
                        "start": 829,
                        "end": 849
                      },
                      "directive": null,
                      "start": 829,
                      "end": 850
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 858,
                        "end": 859
                      },
                      "start": 851,
                      "end": 860
                    }
                  ],
                  "start": 827,
                  "end": 862
                },
                "id": null,
                "generator": false,
                "start": 822,
                "end": 862
              },
              {
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
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 865
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 873,
                              "end": 879
                            }
                          ],
                          "start": 872,
                          "end": 880
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 881,
                            "end": 890
                          }
                        ],
                        "optional": false,
                        "start": 871,
                        "end": 891
                      },
                      "directive": null,
                      "start": 871,
                      "end": 892
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 900,
                        "end": 901
                      },
                      "start": 893,
                      "end": 902
                    }
                  ],
                  "start": 869,
                  "end": 904
                },
                "id": null,
                "generator": false,
                "start": 864,
                "end": 904
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 906,
                "end": 908
              }
            ],
            "optional": false,
            "start": 818,
            "end": 909
          },
          "definite": false,
          "start": 814,
          "end": 909
        }
      ],
      "declare": false,
      "start": 810,
      "end": 910
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 916
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 922
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 925
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 931,
                          "end": 932
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 933,
                              "end": 939
                            }
                          ],
                          "start": 932,
                          "end": 940
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 941,
                            "end": 950
                          }
                        ],
                        "optional": false,
                        "start": 931,
                        "end": 951
                      },
                      "directive": null,
                      "start": 931,
                      "end": 952
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "start": 953,
                      "end": 962
                    }
                  ],
                  "start": 929,
                  "end": 964
                },
                "id": null,
                "generator": false,
                "start": 924,
                "end": 964
              },
              {
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
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 968
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 974,
                          "end": 975
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 976,
                              "end": 982
                            }
                          ],
                          "start": 975,
                          "end": 983
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 984,
                            "end": 993
                          }
                        ],
                        "optional": false,
                        "start": 974,
                        "end": 994
                      },
                      "directive": null,
                      "start": 974,
                      "end": 995
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1003,
                        "end": 1004
                      },
                      "start": 996,
                      "end": 1005
                    }
                  ],
                  "start": 972,
                  "end": 1007
                },
                "id": null,
                "generator": false,
                "start": 967,
                "end": 1007
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1010,
                "end": 1012
              }
            ],
            "optional": false,
            "start": 919,
            "end": 1013
          },
          "definite": false,
          "start": 915,
          "end": 1013
        }
      ],
      "declare": false,
      "start": 911,
      "end": 1014
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1020
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1026
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 1029,
                    "end": 1030
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1037
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1038,
                              "end": 1044
                            }
                          ],
                          "start": 1037,
                          "end": 1045
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1055
                          }
                        ],
                        "optional": false,
                        "start": 1036,
                        "end": 1056
                      },
                      "directive": null,
                      "start": 1036,
                      "end": 1057
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1065,
                        "end": 1066
                      },
                      "start": 1058,
                      "end": 1067
                    }
                  ],
                  "start": 1034,
                  "end": 1069
                },
                "id": null,
                "generator": false,
                "start": 1029,
                "end": 1069
              },
              {
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
                    "typeAnnotation": null,
                    "start": 1074,
                    "end": 1075
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1082
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1083,
                              "end": 1089
                            }
                          ],
                          "start": 1082,
                          "end": 1090
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1091,
                            "end": 1100
                          }
                        ],
                        "optional": false,
                        "start": 1081,
                        "end": 1101
                      },
                      "directive": null,
                      "start": 1081,
                      "end": 1102
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1110,
                        "end": 1111
                      },
                      "start": 1103,
                      "end": 1112
                    }
                  ],
                  "start": 1079,
                  "end": 1114
                },
                "id": null,
                "generator": false,
                "start": 1074,
                "end": 1114
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1118,
                "end": 1120
              }
            ],
            "optional": false,
            "start": 1023,
            "end": 1121
          },
          "definite": false,
          "start": 1019,
          "end": 1121
        }
      ],
      "declare": false,
      "start": 1015,
      "end": 1122
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1134
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1139
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1145,
                          "end": 1146
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1147,
                              "end": 1153
                            }
                          ],
                          "start": 1146,
                          "end": 1154
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1155,
                            "end": 1164
                          }
                        ],
                        "optional": false,
                        "start": 1145,
                        "end": 1165
                      },
                      "directive": null,
                      "start": 1145,
                      "end": 1166
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1174,
                        "end": 1175
                      },
                      "start": 1167,
                      "end": 1176
                    }
                  ],
                  "start": 1143,
                  "end": 1178
                },
                "id": null,
                "generator": false,
                "start": 1138,
                "end": 1178
              },
              {
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
                    "typeAnnotation": null,
                    "start": 1184,
                    "end": 1185
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1191,
                          "end": 1192
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1193,
                              "end": 1199
                            }
                          ],
                          "start": 1192,
                          "end": 1200
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1210
                          }
                        ],
                        "optional": false,
                        "start": 1191,
                        "end": 1211
                      },
                      "directive": null,
                      "start": 1191,
                      "end": 1212
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1220,
                        "end": 1221
                      },
                      "start": 1213,
                      "end": 1222
                    }
                  ],
                  "start": 1189,
                  "end": 1224
                },
                "id": null,
                "generator": false,
                "start": 1184,
                "end": 1224
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1228,
                "end": 1230
              }
            ],
            "optional": false,
            "start": 1131,
            "end": 1231
          },
          "definite": false,
          "start": 1127,
          "end": 1231
        }
      ],
      "declare": false,
      "start": 1123,
      "end": 1232
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1261,
            "end": 1262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1270,
                        "end": 1274
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1281
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1270,
                      "end": 1281
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1270,
                    "end": 1283
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1286,
                    "end": 1289
                  },
                  "start": 1270,
                  "end": 1289
                },
                "consequent": {
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
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1293
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1299,
                            "end": 1300
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1301,
                                "end": 1307
                              }
                            ],
                            "start": 1300,
                            "end": 1308
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1309,
                              "end": 1318
                            }
                          ],
                          "optional": false,
                          "start": 1299,
                          "end": 1319
                        },
                        "directive": null,
                        "start": 1299,
                        "end": 1320
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1328,
                          "end": 1329
                        },
                        "start": 1321,
                        "end": 1330
                      }
                    ],
                    "start": 1297,
                    "end": 1332
                  },
                  "id": null,
                  "generator": false,
                  "start": 1292,
                  "end": 1332
                },
                "alternate": {
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
                      "typeAnnotation": null,
                      "start": 1335,
                      "end": 1336
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1340,
                    "end": 1349
                  },
                  "id": null,
                  "generator": false,
                  "start": 1335,
                  "end": 1349
                },
                "start": 1270,
                "end": 1349
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1352,
                "end": 1354
              }
            ],
            "optional": false,
            "start": 1265,
            "end": 1355
          },
          "definite": false,
          "start": 1261,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1257,
      "end": 1356
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 1361,
            "end": 1362
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1368
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1374
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1381
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1370,
                      "end": 1381
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1370,
                    "end": 1383
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1386,
                    "end": 1389
                  },
                  "start": 1370,
                  "end": 1389
                },
                "consequent": {
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
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1394
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1400,
                            "end": 1401
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1402,
                                "end": 1408
                              }
                            ],
                            "start": 1401,
                            "end": 1409
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1410,
                              "end": 1419
                            }
                          ],
                          "optional": false,
                          "start": 1400,
                          "end": 1420
                        },
                        "directive": null,
                        "start": 1400,
                        "end": 1421
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1429,
                          "end": 1430
                        },
                        "start": 1422,
                        "end": 1431
                      }
                    ],
                    "start": 1398,
                    "end": 1433
                  },
                  "id": null,
                  "generator": false,
                  "start": 1393,
                  "end": 1433
                },
                "alternate": {
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
                      "typeAnnotation": null,
                      "start": 1438,
                      "end": 1439
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1452
                  },
                  "id": null,
                  "generator": false,
                  "start": 1438,
                  "end": 1452
                },
                "start": 1370,
                "end": 1453
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1456,
                "end": 1458
              }
            ],
            "optional": false,
            "start": 1365,
            "end": 1459
          },
          "definite": false,
          "start": 1361,
          "end": 1459
        }
      ],
      "declare": false,
      "start": 1357,
      "end": 1460
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1466
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1469,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1474,
                        "end": 1478
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1479,
                        "end": 1485
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1474,
                      "end": 1485
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1474,
                    "end": 1487
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1490,
                    "end": 1493
                  },
                  "start": 1474,
                  "end": 1493
                },
                "consequent": {
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
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1498
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1504,
                            "end": 1505
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1506,
                                "end": 1512
                              }
                            ],
                            "start": 1505,
                            "end": 1513
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1514,
                              "end": 1523
                            }
                          ],
                          "optional": false,
                          "start": 1504,
                          "end": 1524
                        },
                        "directive": null,
                        "start": 1504,
                        "end": 1525
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1533,
                          "end": 1534
                        },
                        "start": 1526,
                        "end": 1535
                      }
                    ],
                    "start": 1502,
                    "end": 1537
                  },
                  "id": null,
                  "generator": false,
                  "start": 1497,
                  "end": 1537
                },
                "alternate": {
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
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1543
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1547,
                    "end": 1556
                  },
                  "id": null,
                  "generator": false,
                  "start": 1542,
                  "end": 1556
                },
                "start": 1474,
                "end": 1557
              },
              {
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
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1561
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1567,
                          "end": 1568
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1569,
                              "end": 1575
                            }
                          ],
                          "start": 1568,
                          "end": 1576
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1577,
                            "end": 1586
                          }
                        ],
                        "optional": false,
                        "start": 1567,
                        "end": 1587
                      },
                      "directive": null,
                      "start": 1567,
                      "end": 1588
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "start": 1589,
                      "end": 1598
                    }
                  ],
                  "start": 1565,
                  "end": 1600
                },
                "id": null,
                "generator": false,
                "start": 1560,
                "end": 1600
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1602,
                "end": 1604
              }
            ],
            "optional": false,
            "start": 1469,
            "end": 1605
          },
          "definite": false,
          "start": 1465,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1461,
      "end": 1606
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1612
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1621,
                        "end": 1625
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1626,
                        "end": 1632
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1621,
                      "end": 1632
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1621,
                    "end": 1634
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1637,
                    "end": 1640
                  },
                  "start": 1621,
                  "end": 1640
                },
                "consequent": {
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
                      "typeAnnotation": null,
                      "start": 1645,
                      "end": 1646
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1652,
                            "end": 1653
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1654,
                                "end": 1660
                              }
                            ],
                            "start": 1653,
                            "end": 1661
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1662,
                              "end": 1671
                            }
                          ],
                          "optional": false,
                          "start": 1652,
                          "end": 1672
                        },
                        "directive": null,
                        "start": 1652,
                        "end": 1673
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1681,
                          "end": 1682
                        },
                        "start": 1674,
                        "end": 1683
                      }
                    ],
                    "start": 1650,
                    "end": 1685
                  },
                  "id": null,
                  "generator": false,
                  "start": 1645,
                  "end": 1685
                },
                "alternate": {
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
                      "typeAnnotation": null,
                      "start": 1692,
                      "end": 1693
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1697,
                    "end": 1706
                  },
                  "id": null,
                  "generator": false,
                  "start": 1692,
                  "end": 1706
                },
                "start": 1621,
                "end": 1708
              },
              {
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
                    "typeAnnotation": null,
                    "start": 1713,
                    "end": 1714
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1721
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1722,
                              "end": 1728
                            }
                          ],
                          "start": 1721,
                          "end": 1729
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1730,
                            "end": 1739
                          }
                        ],
                        "optional": false,
                        "start": 1720,
                        "end": 1740
                      },
                      "directive": null,
                      "start": 1720,
                      "end": 1741
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1750
                      },
                      "start": 1742,
                      "end": 1751
                    }
                  ],
                  "start": 1718,
                  "end": 1753
                },
                "id": null,
                "generator": false,
                "start": 1713,
                "end": 1753
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1757,
                "end": 1759
              }
            ],
            "optional": false,
            "start": 1615,
            "end": 1760
          },
          "definite": false,
          "start": 1611,
          "end": 1760
        }
      ],
      "declare": false,
      "start": 1607,
      "end": 1761
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
            "name": "lambda1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1784
                },
                "typeArguments": null,
                "start": 1776,
                "end": 1784
              },
              "start": 1774,
              "end": 1784
            },
            "start": 1767,
            "end": 1784
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
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1794,
                      "end": 1795
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1796,
                          "end": 1802
                        }
                      ],
                      "start": 1795,
                      "end": 1803
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1804,
                        "end": 1813
                      }
                    ],
                    "optional": false,
                    "start": 1794,
                    "end": 1814
                  },
                  "directive": null,
                  "start": 1794,
                  "end": 1815
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1823,
                    "end": 1824
                  },
                  "start": 1816,
                  "end": 1825
                }
              ],
              "start": 1792,
              "end": 1827
            },
            "id": null,
            "generator": false,
            "start": 1787,
            "end": 1827
          },
          "definite": false,
          "start": 1767,
          "end": 1827
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1828
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
            "name": "lambda2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1850
                },
                "typeArguments": null,
                "start": 1842,
                "end": 1850
              },
              "start": 1840,
              "end": 1850
            },
            "start": 1833,
            "end": 1850
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
                "typeAnnotation": null,
                "start": 1854,
                "end": 1855
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1861,
                      "end": 1862
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1863,
                          "end": 1869
                        }
                      ],
                      "start": 1862,
                      "end": 1870
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1871,
                        "end": 1880
                      }
                    ],
                    "optional": false,
                    "start": 1861,
                    "end": 1881
                  },
                  "directive": null,
                  "start": 1861,
                  "end": 1882
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1890,
                    "end": 1891
                  },
                  "start": 1883,
                  "end": 1892
                }
              ],
              "start": 1859,
              "end": 1894
            },
            "id": null,
            "generator": false,
            "start": 1854,
            "end": 1894
          },
          "definite": false,
          "start": 1833,
          "end": 1895
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1896
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1903,
        "end": 1910
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1916
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1922,
                        "end": 1928
                      },
                      "start": 1920,
                      "end": 1928
                    },
                    "start": 1919,
                    "end": 1928
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1933,
                    "end": 1939
                  },
                  "start": 1930,
                  "end": 1939
                },
                "start": 1918,
                "end": 1939
              },
              "start": 1916,
              "end": 1939
            },
            "accessibility": null,
            "static": false,
            "start": 1915,
            "end": 1940
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1941,
              "end": 1942
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1948,
                        "end": 1954
                      },
                      "start": 1946,
                      "end": 1954
                    },
                    "start": 1945,
                    "end": 1954
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1959,
                    "end": 1965
                  },
                  "start": 1956,
                  "end": 1965
                },
                "start": 1944,
                "end": 1965
              },
              "start": 1942,
              "end": 1965
            },
            "accessibility": null,
            "static": false,
            "start": 1941,
            "end": 1965
          }
        ],
        "start": 1913,
        "end": 1967
      },
      "declare": false,
      "start": 1898,
      "end": 1968
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1979,
                  "end": 1986
                },
                "typeArguments": null,
                "start": 1979,
                "end": 1986
              },
              "start": 1977,
              "end": 1986
            },
            "start": 1973,
            "end": 1986
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1991,
                  "end": 1992
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 1994,
                      "end": 1995
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2000,
                        "end": 2001
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2003,
                        "end": 2012
                      }
                    ],
                    "start": 2000,
                    "end": 2012
                  },
                  "id": null,
                  "generator": false,
                  "start": 1994,
                  "end": 2013
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1991,
                "end": 2013
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2015,
                  "end": 2016
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2024,
                        "end": 2025
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2027,
                        "end": 2036
                      }
                    ],
                    "start": 2024,
                    "end": 2036
                  },
                  "id": null,
                  "generator": false,
                  "start": 2018,
                  "end": 2037
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2015,
                "end": 2037
              }
            ],
            "start": 1989,
            "end": 2039
          },
          "definite": false,
          "start": 1973,
          "end": 2039
        }
      ],
      "declare": false,
      "start": 1969,
      "end": 2040
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2051,
                  "end": 2058
                },
                "typeArguments": null,
                "start": 2051,
                "end": 2058
              },
              "start": 2049,
              "end": 2058
            },
            "start": 2045,
            "end": 2058
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2065
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 2067,
                      "end": 2068
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2073,
                        "end": 2074
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2076,
                        "end": 2085
                      }
                    ],
                    "start": 2073,
                    "end": 2085
                  },
                  "id": null,
                  "generator": false,
                  "start": 2067,
                  "end": 2086
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2064,
                "end": 2086
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2089
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2097,
                        "end": 2098
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2100,
                        "end": 2109
                      }
                    ],
                    "start": 2097,
                    "end": 2109
                  },
                  "id": null,
                  "generator": false,
                  "start": 2091,
                  "end": 2110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2088,
                "end": 2110
              }
            ],
            "start": 2062,
            "end": 2112
          },
          "definite": false,
          "start": 2045,
          "end": 2113
        }
      ],
      "declare": false,
      "start": 2041,
      "end": 2114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 358,
  "end": 2114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 358,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Identifier",
    "value": "FuncType",
    "start": 427,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 447,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 479,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 540,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 547,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
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
    "value": "undefined",
    "start": 590,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 602,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 642,
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
    "value": "undefined",
    "start": 650,
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
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 681,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
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
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 712,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 724,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 768,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 776,
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
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 788,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 810,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 831,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 839,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 851,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
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
    "value": "x",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 881,
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
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 893,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 911,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 926,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 933,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 941,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 953,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 969,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 974,
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
    "value": "number",
    "start": 976,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
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
    "value": "undefined",
    "start": 984,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Numeric",
    "value": "10",
    "start": 1010,
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
    "value": ";",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1046,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
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
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1091,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1118,
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
    "value": "var",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1140,
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
    "value": "x",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1155,
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
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1167,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1199,
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
    "value": "undefined",
    "start": 1201,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1213,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
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
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1275,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1309,
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
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1340,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1352,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
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
    "value": "Math",
    "start": 1370,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1375,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "<",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1395,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1410,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1422,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1440,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1443,
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
    "value": ")",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1456,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1474,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1479,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1506,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1514,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "undefined",
    "start": 1547,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1562,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
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
    "value": "(",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1577,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ",",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1602,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1621,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1637,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1654,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1662,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1674,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1685,
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
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1697,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ")",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1722,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1730,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1742,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1757,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "lambda1",
    "start": 1767,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 1776,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1789,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1796,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1804,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "lambda2",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "FuncType",
    "start": 1842,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1863,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1869,
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
    "value": "undefined",
    "start": 1871,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1883,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1898,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "ObjType",
    "start": 1903,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1922,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1933,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1956,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1973,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "ObjType",
    "start": 1979,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2003,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2020,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2027,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "ObjType",
    "start": 2051,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2069,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2076,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2093,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2100,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  }
]
```
