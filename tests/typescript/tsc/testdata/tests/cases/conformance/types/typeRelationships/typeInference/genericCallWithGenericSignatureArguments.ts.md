__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 317
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
              "start": 318,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 318,
            "end": 319
          }
        ],
        "start": 317,
        "end": 320
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
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    "start": 326,
                    "end": 329
                  },
                  "start": 325,
                  "end": 329
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
                    "start": 334,
                    "end": 335
                  },
                  "typeArguments": null,
                  "start": 334,
                  "end": 335
                },
                "start": 331,
                "end": 335
              },
              "start": 324,
              "end": 335
            },
            "start": 322,
            "end": 335
          },
          "start": 321,
          "end": 335
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 345
                    },
                    "start": 342,
                    "end": 345
                  },
                  "start": 341,
                  "end": 345
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
                    "start": 350,
                    "end": 351
                  },
                  "typeArguments": null,
                  "start": 350,
                  "end": 351
                },
                "start": 347,
                "end": 351
              },
              "start": 340,
              "end": 351
            },
            "start": 338,
            "end": 351
          },
          "start": 337,
          "end": 351
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              },
                              "typeArguments": null,
                              "start": 370,
                              "end": 371
                            },
                            "start": 368,
                            "end": 371
                          },
                          "start": 367,
                          "end": 371
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
                            "start": 376,
                            "end": 377
                          },
                          "typeArguments": null,
                          "start": 376,
                          "end": 377
                        },
                        "start": 373,
                        "end": 377
                      },
                      "start": 366,
                      "end": 377
                    },
                    "start": 364,
                    "end": 377
                  },
                  "start": 363,
                  "end": 377
                },
                "init": null,
                "definite": false,
                "start": 363,
                "end": 377
              }
            ],
            "declare": false,
            "start": 359,
            "end": 378
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "start": 383,
            "end": 392
          }
        ],
        "start": 353,
        "end": 394
      },
      "expression": false,
      "start": 305,
      "end": 394
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
            "start": 462,
            "end": 465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 471
            },
            "typeArguments": null,
            "arguments": [
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
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 479,
                  "end": 480
                },
                "id": null,
                "generator": false,
                "start": 472,
                "end": 480
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
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 489,
                  "end": 491
                },
                "id": null,
                "generator": false,
                "start": 482,
                "end": 491
              }
            ],
            "optional": false,
            "start": 468,
            "end": 492
          },
          "definite": false,
          "start": 462,
          "end": 492
        }
      ],
      "declare": false,
      "start": 458,
      "end": 493
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
            "start": 510,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
            },
            "typeArguments": null,
            "arguments": [
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 529
                        },
                        "typeArguments": null,
                        "start": 523,
                        "end": 529
                      },
                      "start": 521,
                      "end": 529
                    },
                    "start": 520,
                    "end": 529
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 534,
                  "end": 538
                },
                "id": null,
                "generator": false,
                "start": 519,
                "end": 538
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
                        "type": "TSStringKeyword",
                        "start": 544,
                        "end": 550
                      },
                      "start": 542,
                      "end": 550
                    },
                    "start": 541,
                    "end": 550
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 555,
                  "end": 557
                },
                "id": null,
                "generator": false,
                "start": 540,
                "end": 557
              }
            ],
            "optional": false,
            "start": 515,
            "end": 558
          },
          "definite": false,
          "start": 510,
          "end": 558
        }
      ],
      "declare": false,
      "start": 506,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 586
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 592
            },
            "typeArguments": null,
            "arguments": [
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
                        "start": 597,
                        "end": 603
                      },
                      "start": 595,
                      "end": 603
                    },
                    "start": 594,
                    "end": 603
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 608,
                  "end": 609
                },
                "id": null,
                "generator": false,
                "start": 593,
                "end": 609
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 621
                        },
                        "typeArguments": null,
                        "start": 615,
                        "end": 621
                      },
                      "start": 613,
                      "end": 621
                    },
                    "start": 612,
                    "end": 621
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 626,
                  "end": 630
                },
                "id": null,
                "generator": false,
                "start": 611,
                "end": 630
              }
            ],
            "optional": false,
            "start": 589,
            "end": 631
          },
          "definite": false,
          "start": 584,
          "end": 631
        }
      ],
      "declare": false,
      "start": 580,
      "end": 632
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
            "name": "r3ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 661
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 667
            },
            "typeArguments": null,
            "arguments": [
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
                        "start": 672,
                        "end": 678
                      },
                      "start": 670,
                      "end": 678
                    },
                    "start": 669,
                    "end": 678
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 683,
                  "end": 684
                },
                "id": null,
                "generator": false,
                "start": 668,
                "end": 684
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
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "start": 687,
                    "end": 696
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 701,
                  "end": 702
                },
                "id": null,
                "generator": false,
                "start": 686,
                "end": 702
              }
            ],
            "optional": false,
            "start": 664,
            "end": 703
          },
          "definite": false,
          "start": 657,
          "end": 703
        }
      ],
      "declare": false,
      "start": 653,
      "end": 704
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
                      "start": 735,
                      "end": 736
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      },
                      "start": 736,
                      "end": 744
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 735,
                    "end": 745
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 750,
                        "end": 756
                      },
                      "start": 748,
                      "end": 756
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 746,
                    "end": 757
                  }
                ],
                "start": 733,
                "end": 759
              },
              "start": 731,
              "end": 759
            },
            "start": 730,
            "end": 759
          },
          "init": null,
          "definite": false,
          "start": 730,
          "end": 759
        }
      ],
      "declare": false,
      "start": 726,
      "end": 760
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 771
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 773,
                        "end": 779
                      },
                      "start": 771,
                      "end": 779
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 770,
                    "end": 780
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 785,
                        "end": 791
                      },
                      "start": 783,
                      "end": 791
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 781,
                    "end": 792
                  }
                ],
                "start": 768,
                "end": 794
              },
              "start": 766,
              "end": 794
            },
            "start": 765,
            "end": 794
          },
          "init": null,
          "definite": false,
          "start": 765,
          "end": 794
        }
      ],
      "declare": false,
      "start": 761,
      "end": 795
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
            "start": 801,
            "end": 803
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 809
            },
            "typeArguments": null,
            "arguments": [
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 821,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 814,
                        "end": 822
                      },
                      "start": 812,
                      "end": 822
                    },
                    "start": 811,
                    "end": 822
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 828
                },
                "id": null,
                "generator": false,
                "start": 810,
                "end": 828
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 841,
                          "end": 842
                        },
                        "typeArguments": null,
                        "start": 834,
                        "end": 842
                      },
                      "start": 832,
                      "end": 842
                    },
                    "start": 831,
                    "end": 842
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 848
                },
                "id": null,
                "generator": false,
                "start": 830,
                "end": 848
              }
            ],
            "optional": false,
            "start": 806,
            "end": 849
          },
          "definite": false,
          "start": 801,
          "end": 849
        }
      ],
      "declare": false,
      "start": 797,
      "end": 850
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
            "start": 879,
            "end": 881
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 887
            },
            "typeArguments": null,
            "arguments": [
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        },
                        "typeArguments": null,
                        "start": 892,
                        "end": 900
                      },
                      "start": 890,
                      "end": 900
                    },
                    "start": 889,
                    "end": 900
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 906
                },
                "id": null,
                "generator": false,
                "start": 888,
                "end": 906
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 919,
                          "end": 920
                        },
                        "typeArguments": null,
                        "start": 912,
                        "end": 920
                      },
                      "start": 910,
                      "end": 920
                    },
                    "start": 909,
                    "end": 920
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 926
                },
                "id": null,
                "generator": false,
                "start": 908,
                "end": 926
              }
            ],
            "optional": false,
            "start": 884,
            "end": 927
          },
          "definite": false,
          "start": 879,
          "end": 927
        }
      ],
      "declare": false,
      "start": 875,
      "end": 928
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 963,
        "end": 968
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
              "start": 969,
              "end": 970
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 969,
            "end": 970
          }
        ],
        "start": 968,
        "end": 971
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
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 975,
              "end": 976
            },
            "start": 973,
            "end": 976
          },
          "start": 972,
          "end": 976
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 988,
                  "end": 990
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 993,
                    "end": 996
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                                "start": 1001,
                                "end": 1002
                              },
                              "typeArguments": null,
                              "start": 1001,
                              "end": 1002
                            },
                            "start": 999,
                            "end": 1002
                          },
                          "start": 998,
                          "end": 1002
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1008
                      },
                      "id": null,
                      "generator": false,
                      "start": 997,
                      "end": 1008
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
                          "name": "b",
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
                                "start": 1014,
                                "end": 1015
                              },
                              "typeArguments": null,
                              "start": 1014,
                              "end": 1015
                            },
                            "start": 1012,
                            "end": 1015
                          },
                          "start": 1011,
                          "end": 1015
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1021
                      },
                      "id": null,
                      "generator": false,
                      "start": 1010,
                      "end": 1021
                    }
                  ],
                  "optional": false,
                  "start": 993,
                  "end": 1022
                },
                "definite": false,
                "start": 988,
                "end": 1022
              }
            ],
            "declare": false,
            "start": 984,
            "end": 1023
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
                  "start": 1042,
                  "end": 1045
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1048,
                    "end": 1051
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1054
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1059,
                        "end": 1060
                      },
                      "id": null,
                      "generator": false,
                      "start": 1052,
                      "end": 1060
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1063,
                          "end": 1064
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1069,
                        "end": 1070
                      },
                      "id": null,
                      "generator": false,
                      "start": 1062,
                      "end": 1070
                    }
                  ],
                  "optional": false,
                  "start": 1048,
                  "end": 1071
                },
                "definite": false,
                "start": 1042,
                "end": 1071
              }
            ],
            "declare": false,
            "start": 1038,
            "end": 1072
          }
        ],
        "start": 978,
        "end": 1086
      },
      "expression": false,
      "start": 954,
      "end": 1086
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1103
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
              "start": 1104,
              "end": 1105
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1114,
                "end": 1118
              },
              "typeArguments": null,
              "start": 1114,
              "end": 1118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1104,
            "end": 1118
          }
        ],
        "start": 1103,
        "end": 1119
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
                "start": 1123,
                "end": 1124
              },
              "typeArguments": null,
              "start": 1123,
              "end": 1124
            },
            "start": 1121,
            "end": 1124
          },
          "start": 1120,
          "end": 1124
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 1136,
                  "end": 1138
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1144
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                                "start": 1149,
                                "end": 1150
                              },
                              "typeArguments": null,
                              "start": 1149,
                              "end": 1150
                            },
                            "start": 1147,
                            "end": 1150
                          },
                          "start": 1146,
                          "end": 1150
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1155,
                        "end": 1156
                      },
                      "id": null,
                      "generator": false,
                      "start": 1145,
                      "end": 1156
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
                          "name": "b",
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
                                "start": 1162,
                                "end": 1163
                              },
                              "typeArguments": null,
                              "start": 1162,
                              "end": 1163
                            },
                            "start": 1160,
                            "end": 1163
                          },
                          "start": 1159,
                          "end": 1163
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1168,
                        "end": 1169
                      },
                      "id": null,
                      "generator": false,
                      "start": 1158,
                      "end": 1169
                    }
                  ],
                  "optional": false,
                  "start": 1141,
                  "end": 1170
                },
                "definite": false,
                "start": 1136,
                "end": 1170
              }
            ],
            "declare": false,
            "start": 1132,
            "end": 1171
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
                  "start": 1190,
                  "end": 1193
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1199
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1201,
                          "end": 1202
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1207,
                        "end": 1208
                      },
                      "id": null,
                      "generator": false,
                      "start": 1200,
                      "end": 1208
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1212
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "id": null,
                      "generator": false,
                      "start": 1210,
                      "end": 1218
                    }
                  ],
                  "optional": false,
                  "start": 1196,
                  "end": 1219
                },
                "definite": false,
                "start": 1190,
                "end": 1219
              }
            ],
            "declare": false,
            "start": 1186,
            "end": 1220
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
                  "start": 1241,
                  "end": 1243
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1246,
                    "end": 1248
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1249,
                      "end": 1253
                    }
                  ],
                  "optional": false,
                  "start": 1246,
                  "end": 1254
                },
                "definite": false,
                "start": 1241,
                "end": 1254
              }
            ],
            "declare": false,
            "start": 1237,
            "end": 1255
          }
        ],
        "start": 1126,
        "end": 1306
      },
      "expression": false,
      "start": 1088,
      "end": 1306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1322
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
              "start": 1323,
              "end": 1324
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1337
              },
              "typeArguments": null,
              "start": 1333,
              "end": 1337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1323,
            "end": 1337
          }
        ],
        "start": 1322,
        "end": 1338
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
                "start": 1349,
                "end": 1353
              },
              "start": 1342,
              "end": 1353
            },
            "start": 1340,
            "end": 1353
          },
          "start": 1339,
          "end": 1353
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1362,
                        "end": 1363
                      },
                      "typeArguments": null,
                      "start": 1362,
                      "end": 1363
                    },
                    "start": 1360,
                    "end": 1363
                  },
                  "start": 1359,
                  "end": 1363
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
                    "start": 1368,
                    "end": 1369
                  },
                  "typeArguments": null,
                  "start": 1368,
                  "end": 1369
                },
                "start": 1365,
                "end": 1369
              },
              "start": 1358,
              "end": 1369
            },
            "start": 1356,
            "end": 1369
          },
          "start": 1355,
          "end": 1369
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1388,
                                "end": 1389
                              },
                              "typeArguments": null,
                              "start": 1388,
                              "end": 1389
                            },
                            "start": 1386,
                            "end": 1389
                          },
                          "start": 1385,
                          "end": 1389
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
                            "start": 1394,
                            "end": 1395
                          },
                          "typeArguments": null,
                          "start": 1394,
                          "end": 1395
                        },
                        "start": 1391,
                        "end": 1395
                      },
                      "start": 1384,
                      "end": 1395
                    },
                    "start": 1382,
                    "end": 1395
                  },
                  "start": 1381,
                  "end": 1395
                },
                "init": null,
                "definite": false,
                "start": 1381,
                "end": 1395
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1396
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1409
            },
            "start": 1401,
            "end": 1410
          }
        ],
        "start": 1371,
        "end": 1412
      },
      "expression": false,
      "start": 1309,
      "end": 1412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1429
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
              "start": 1430,
              "end": 1431
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1446
              },
              "typeArguments": null,
              "start": 1440,
              "end": 1446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1430,
            "end": 1446
          }
        ],
        "start": 1429,
        "end": 1447
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
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "start": 1464,
                  "end": 1466
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1469,
                    "end": 1473
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                                "start": 1478,
                                "end": 1482
                              },
                              "typeArguments": null,
                              "start": 1478,
                              "end": 1482
                            },
                            "start": 1476,
                            "end": 1482
                          },
                          "start": 1475,
                          "end": 1482
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1487,
                        "end": 1488
                      },
                      "id": null,
                      "generator": false,
                      "start": 1474,
                      "end": 1488
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
                          "name": "b",
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
                                "start": 1494,
                                "end": 1498
                              },
                              "typeArguments": null,
                              "start": 1494,
                              "end": 1498
                            },
                            "start": 1492,
                            "end": 1498
                          },
                          "start": 1491,
                          "end": 1498
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1503,
                        "end": 1504
                      },
                      "id": null,
                      "generator": false,
                      "start": 1490,
                      "end": 1504
                    }
                  ],
                  "optional": false,
                  "start": 1469,
                  "end": 1505
                },
                "definite": false,
                "start": 1464,
                "end": 1505
              }
            ],
            "declare": false,
            "start": 1460,
            "end": 1506
          }
        ],
        "start": 1454,
        "end": 1524
      },
      "expression": false,
      "start": 1414,
      "end": 1524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 1524
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "(",
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
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 331,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 347,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 373,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 383,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 476,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 486,
    "end": 488
  },
  {
    "type": "String",
    "value": "''",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "Object",
    "start": 523,
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
    "value": "=>",
    "start": 531,
    "end": 533
  },
  {
    "type": "Null",
    "value": "null",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 544,
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
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "String",
    "value": "''",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 584,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 605,
    "end": 607
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 612,
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
    "value": "Object",
    "start": 615,
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
    "value": "=>",
    "start": 623,
    "end": 625
  },
  {
    "type": "Null",
    "value": "null",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "r3ii",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
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
    "value": "number",
    "start": 672,
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
    "value": "=>",
    "start": 680,
    "end": 682
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 698,
    "end": 700
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 726,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 738,
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
    "value": "y",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 814,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "a",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 834,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 844,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 847,
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
    "value": "var",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
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
    "type": "Keyword",
    "value": "typeof",
    "start": 892,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 902,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907
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
    "type": "Keyword",
    "value": "typeof",
    "start": 912,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 922,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 954,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 963,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 984,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 988,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 993,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1020,
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
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "other2",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "Date",
    "start": 1114,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
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
    "value": "a",
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
    "value": "T",
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
    "value": "a",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "a",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "=>",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1309,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1325,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1337,
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
    "value": "a",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
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
    "value": ",",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1401,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1414,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "other3",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1432,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1440,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1446,
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
    "value": "T",
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
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1460,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1464,
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
    "value": "foo2",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1478,
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
    "value": "=>",
    "start": 1484,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  }
]
```
