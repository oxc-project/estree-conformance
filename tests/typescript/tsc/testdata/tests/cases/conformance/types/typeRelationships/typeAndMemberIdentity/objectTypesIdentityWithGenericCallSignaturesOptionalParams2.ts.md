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
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 353,
                    "end": 354
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 357
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 356,
                    "end": 357
                  }
                ],
                "start": 352,
                "end": 358
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
                        "start": 362,
                        "end": 363
                      },
                      "typeArguments": null,
                      "start": 362,
                      "end": 363
                    },
                    "start": 360,
                    "end": 363
                  },
                  "start": 359,
                  "end": 363
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
                        "start": 369,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 370
                    },
                    "start": 367,
                    "end": 370
                  },
                  "start": 365,
                  "end": 370
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
                    "start": 373,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 373,
                  "end": 374
                },
                "start": 371,
                "end": 374
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
                      "start": 384,
                      "end": 388
                    },
                    "start": 377,
                    "end": 389
                  }
                ],
                "start": 375,
                "end": 391
              },
              "expression": false,
              "start": 352,
              "end": 391
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 391
          }
        ],
        "start": 343,
        "end": 393
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 393
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
        "start": 401,
        "end": 402
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
              "start": 403,
              "end": 404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 404
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 407
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 406,
            "end": 407
          }
        ],
        "start": 402,
        "end": 408
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
              "start": 415,
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
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
                        "start": 429,
                        "end": 430
                      },
                      "typeArguments": null,
                      "start": 429,
                      "end": 430
                    },
                    "start": 427,
                    "end": 430
                  },
                  "start": 425,
                  "end": 430
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
                    "start": 433,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 433,
                  "end": 434
                },
                "start": 431,
                "end": 434
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
                      "start": 444,
                      "end": 448
                    },
                    "start": 437,
                    "end": 449
                  }
                ],
                "start": 435,
                "end": 451
              },
              "expression": false,
              "start": 418,
              "end": 451
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 415,
            "end": 451
          }
        ],
        "start": 409,
        "end": 453
      },
      "abstract": false,
      "declare": false,
      "start": 395,
      "end": 453
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
        "start": 461,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 467
          }
        ],
        "start": 462,
        "end": 468
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
              "start": 475,
              "end": 478
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
                        "start": 482,
                        "end": 483
                      },
                      "typeArguments": null,
                      "start": 482,
                      "end": 483
                    },
                    "start": 480,
                    "end": 483
                  },
                  "start": 479,
                  "end": 483
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
                        "start": 489,
                        "end": 490
                      },
                      "typeArguments": null,
                      "start": 489,
                      "end": 490
                    },
                    "start": 487,
                    "end": 490
                  },
                  "start": 485,
                  "end": 490
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
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                },
                "start": 491,
                "end": 494
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
                      "start": 504,
                      "end": 508
                    },
                    "start": 497,
                    "end": 509
                  }
                ],
                "start": 495,
                "end": 511
              },
              "expression": false,
              "start": 478,
              "end": 511
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 475,
            "end": 511
          }
        ],
        "start": 469,
        "end": 513
      },
      "abstract": false,
      "declare": false,
      "start": 455,
      "end": 513
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 525,
        "end": 526
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
              "start": 527,
              "end": 528
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 527,
            "end": 528
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 531
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 530,
            "end": 531
          }
        ],
        "start": 526,
        "end": 532
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
              "start": 539,
              "end": 542
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
                      "start": 546,
                      "end": 547
                    },
                    "typeArguments": null,
                    "start": 546,
                    "end": 547
                  },
                  "start": 544,
                  "end": 547
                },
                "start": 543,
                "end": 547
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": true,
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
                "start": 549,
                "end": 554
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
                  "start": 557,
                  "end": 558
                },
                "typeArguments": null,
                "start": 557,
                "end": 558
              },
              "start": 555,
              "end": 558
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 539,
            "end": 559
          }
        ],
        "start": 533,
        "end": 561
      },
      "declare": false,
      "start": 515,
      "end": 561
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 575
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
              "start": 582,
              "end": 585
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
                    "start": 586,
                    "end": 587
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 586,
                  "end": 587
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 590
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 589,
                  "end": 590
                }
              ],
              "start": 585,
              "end": 591
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
                      "start": 595,
                      "end": 596
                    },
                    "typeArguments": null,
                    "start": 595,
                    "end": 596
                  },
                  "start": 593,
                  "end": 596
                },
                "start": 592,
                "end": 596
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": true,
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
                      "start": 602,
                      "end": 603
                    },
                    "typeArguments": null,
                    "start": 602,
                    "end": 603
                  },
                  "start": 600,
                  "end": 603
                },
                "start": 598,
                "end": 603
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
                  "start": 606,
                  "end": 607
                },
                "typeArguments": null,
                "start": 606,
                "end": 607
              },
              "start": 604,
              "end": 607
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 582,
            "end": 608
          }
        ],
        "start": 576,
        "end": 610
      },
      "declare": false,
      "start": 563,
      "end": 610
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
                      "start": 621,
                      "end": 624
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
                            "start": 625,
                            "end": 626
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 625,
                          "end": 626
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 628,
                            "end": 629
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 628,
                          "end": 629
                        }
                      ],
                      "start": 624,
                      "end": 630
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
                              "start": 634,
                              "end": 635
                            },
                            "typeArguments": null,
                            "start": 634,
                            "end": 635
                          },
                          "start": 632,
                          "end": 635
                        },
                        "start": 631,
                        "end": 635
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
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
                              "start": 641,
                              "end": 642
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 642
                          },
                          "start": 639,
                          "end": 642
                        },
                        "start": 637,
                        "end": 642
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
                          "start": 645,
                          "end": 646
                        },
                        "typeArguments": null,
                        "start": 645,
                        "end": 646
                      },
                      "start": 643,
                      "end": 646
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 621,
                    "end": 646
                  }
                ],
                "start": 619,
                "end": 648
              },
              "start": 617,
              "end": 648
            },
            "start": 616,
            "end": 648
          },
          "init": null,
          "definite": false,
          "start": 616,
          "end": 648
        }
      ],
      "declare": false,
      "start": 612,
      "end": 648
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
            "start": 653,
            "end": 654
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
                  "start": 659,
                  "end": 662
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
                          "start": 663,
                          "end": 664
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 663,
                        "end": 664
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 666,
                          "end": 667
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 666,
                        "end": 667
                      }
                    ],
                    "start": 662,
                    "end": 668
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
                            "start": 672,
                            "end": 673
                          },
                          "typeArguments": null,
                          "start": 672,
                          "end": 673
                        },
                        "start": 670,
                        "end": 673
                      },
                      "start": 669,
                      "end": 673
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": true,
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
                            "start": 679,
                            "end": 680
                          },
                          "typeArguments": null,
                          "start": 679,
                          "end": 680
                        },
                        "start": 677,
                        "end": 680
                      },
                      "start": 675,
                      "end": 680
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 691,
                          "end": 692
                        },
                        "start": 684,
                        "end": 693
                      }
                    ],
                    "start": 682,
                    "end": 695
                  },
                  "expression": false,
                  "start": 662,
                  "end": 695
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 659,
                "end": 695
              }
            ],
            "start": 657,
            "end": 697
          },
          "definite": false,
          "start": 653,
          "end": 697
        }
      ],
      "declare": false,
      "start": 649,
      "end": 698
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 713
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
          "start": 714,
          "end": 718
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 700,
      "end": 720
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 734
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
                "start": 738,
                "end": 739
              },
              "typeArguments": null,
              "start": 738,
              "end": 739
            },
            "start": 736,
            "end": 739
          },
          "start": 735,
          "end": 739
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 721,
      "end": 741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 764
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
              "start": 768,
              "end": 771
            },
            "start": 766,
            "end": 771
          },
          "start": 765,
          "end": 771
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 773,
        "end": 776
      },
      "expression": false,
      "start": 751,
      "end": 776
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 798,
                    "end": 804
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 806,
                    "end": 812
                  }
                ],
                "start": 797,
                "end": 813
              },
              "start": 796,
              "end": 813
            },
            "start": 794,
            "end": 813
          },
          "start": 793,
          "end": 813
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 778,
      "end": 815
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 830
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
                "start": 834,
                "end": 835
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 836,
                    "end": 842
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 844,
                    "end": 850
                  }
                ],
                "start": 835,
                "end": 851
              },
              "start": 834,
              "end": 851
            },
            "start": 832,
            "end": 851
          },
          "start": 831,
          "end": 851
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 816,
      "end": 853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 877
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 886,
        "end": 889
      },
      "expression": false,
      "start": 863,
      "end": 889
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 905
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
                "start": 909,
                "end": 910
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 911,
                    "end": 917
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 919,
                    "end": 925
                  }
                ],
                "start": 910,
                "end": 926
              },
              "start": 909,
              "end": 926
            },
            "start": 907,
            "end": 926
          },
          "start": 906,
          "end": 926
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 891,
      "end": 928
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 943
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
                "start": 947,
                "end": 948
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 949,
                    "end": 955
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 957,
                    "end": 963
                  }
                ],
                "start": 948,
                "end": 964
              },
              "start": 947,
              "end": 964
            },
            "start": 945,
            "end": 964
          },
          "start": 944,
          "end": 964
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 929,
      "end": 966
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 985,
        "end": 990
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
              "start": 994,
              "end": 997
            },
            "start": 992,
            "end": 997
          },
          "start": 991,
          "end": 997
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 999,
        "end": 1002
      },
      "expression": false,
      "start": 976,
      "end": 1002
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1013,
        "end": 1017
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
                "start": 1021,
                "end": 1022
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1023,
                    "end": 1029
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1031,
                    "end": 1037
                  }
                ],
                "start": 1022,
                "end": 1038
              },
              "start": 1021,
              "end": 1038
            },
            "start": 1019,
            "end": 1038
          },
          "start": 1018,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1004,
      "end": 1040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1054
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
                "start": 1058,
                "end": 1059
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1060,
                    "end": 1066
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1068,
                    "end": 1074
                  }
                ],
                "start": 1059,
                "end": 1075
              },
              "start": 1058,
              "end": 1075
            },
            "start": 1056,
            "end": 1075
          },
          "start": 1055,
          "end": 1075
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1041,
      "end": 1077
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1096,
        "end": 1100
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
              "start": 1104,
              "end": 1107
            },
            "start": 1102,
            "end": 1107
          },
          "start": 1101,
          "end": 1107
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1109,
        "end": 1112
      },
      "expression": false,
      "start": 1087,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1123,
        "end": 1127
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
                "start": 1138,
                "end": 1139
              },
              "typeArguments": null,
              "start": 1131,
              "end": 1139
            },
            "start": 1129,
            "end": 1139
          },
          "start": 1128,
          "end": 1139
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1114,
      "end": 1141
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1155
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
                "start": 1166,
                "end": 1167
              },
              "typeArguments": null,
              "start": 1159,
              "end": 1167
            },
            "start": 1157,
            "end": 1167
          },
          "start": 1156,
          "end": 1167
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1142,
      "end": 1169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1192
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
              "start": 1196,
              "end": 1199
            },
            "start": 1194,
            "end": 1199
          },
          "start": 1193,
          "end": 1199
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1201,
        "end": 1204
      },
      "expression": false,
      "start": 1179,
      "end": 1204
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1215,
        "end": 1219
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
                "start": 1230,
                "end": 1231
              },
              "typeArguments": null,
              "start": 1223,
              "end": 1231
            },
            "start": 1221,
            "end": 1231
          },
          "start": 1220,
          "end": 1231
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1206,
      "end": 1233
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1243,
        "end": 1247
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
                "start": 1258,
                "end": 1259
              },
              "typeArguments": null,
              "start": 1251,
              "end": 1259
            },
            "start": 1249,
            "end": 1259
          },
          "start": 1248,
          "end": 1259
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1234,
      "end": 1261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1284
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
              "start": 1288,
              "end": 1291
            },
            "start": 1286,
            "end": 1291
          },
          "start": 1285,
          "end": 1291
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1293,
        "end": 1296
      },
      "expression": false,
      "start": 1271,
      "end": 1296
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1311
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
                "start": 1315,
                "end": 1316
              },
              "typeArguments": null,
              "start": 1315,
              "end": 1316
            },
            "start": 1313,
            "end": 1316
          },
          "start": 1312,
          "end": 1316
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1298,
      "end": 1318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1328,
        "end": 1332
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
                "start": 1336,
                "end": 1337
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1338,
                    "end": 1344
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1346,
                    "end": 1352
                  }
                ],
                "start": 1337,
                "end": 1353
              },
              "start": 1336,
              "end": 1353
            },
            "start": 1334,
            "end": 1353
          },
          "start": 1333,
          "end": 1353
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1319,
      "end": 1355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1371,
        "end": 1375
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
              "start": 1379,
              "end": 1382
            },
            "start": 1377,
            "end": 1382
          },
          "start": 1376,
          "end": 1382
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1384,
        "end": 1387
      },
      "expression": false,
      "start": 1362,
      "end": 1387
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1398,
        "end": 1403
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
                "start": 1407,
                "end": 1408
              },
              "typeArguments": null,
              "start": 1407,
              "end": 1408
            },
            "start": 1405,
            "end": 1408
          },
          "start": 1404,
          "end": 1408
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1389,
      "end": 1410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1420,
        "end": 1425
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
                "start": 1429,
                "end": 1430
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1431,
                    "end": 1437
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1439,
                    "end": 1445
                  }
                ],
                "start": 1430,
                "end": 1446
              },
              "start": 1429,
              "end": 1446
            },
            "start": 1427,
            "end": 1446
          },
          "start": 1426,
          "end": 1446
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1411,
      "end": 1448
    },
    {
      "type": "FunctionDeclaration",
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
              "type": "TSAnyKeyword",
              "start": 1473,
              "end": 1476
            },
            "start": 1471,
            "end": 1476
          },
          "start": 1470,
          "end": 1476
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1478,
        "end": 1481
      },
      "expression": false,
      "start": 1455,
      "end": 1481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1492,
        "end": 1496
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
                "start": 1500,
                "end": 1501
              },
              "typeArguments": null,
              "start": 1500,
              "end": 1501
            },
            "start": 1498,
            "end": 1501
          },
          "start": 1497,
          "end": 1501
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1483,
      "end": 1503
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1513,
        "end": 1517
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
                "start": 1521,
                "end": 1522
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1523,
                    "end": 1529
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1531,
                    "end": 1537
                  }
                ],
                "start": 1522,
                "end": 1538
              },
              "start": 1521,
              "end": 1538
            },
            "start": 1519,
            "end": 1538
          },
          "start": 1518,
          "end": 1538
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1504,
      "end": 1540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1556,
        "end": 1560
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
              "start": 1564,
              "end": 1567
            },
            "start": 1562,
            "end": 1567
          },
          "start": 1561,
          "end": 1567
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1569,
        "end": 1572
      },
      "expression": false,
      "start": 1547,
      "end": 1572
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1583,
        "end": 1587
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
                "start": 1591,
                "end": 1592
              },
              "typeArguments": null,
              "start": 1591,
              "end": 1592
            },
            "start": 1589,
            "end": 1592
          },
          "start": 1588,
          "end": 1592
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1574,
      "end": 1594
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1604,
        "end": 1608
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
                "start": 1619,
                "end": 1620
              },
              "typeArguments": null,
              "start": 1612,
              "end": 1620
            },
            "start": 1610,
            "end": 1620
          },
          "start": 1609,
          "end": 1620
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1595,
      "end": 1622
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1650,
        "end": 1654
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
              "start": 1658,
              "end": 1661
            },
            "start": 1656,
            "end": 1661
          },
          "start": 1655,
          "end": 1661
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1663,
        "end": 1666
      },
      "expression": false,
      "start": 1641,
      "end": 1666
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1677,
        "end": 1681
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
                "start": 1685,
                "end": 1686
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1687,
                    "end": 1693
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
                  }
                ],
                "start": 1686,
                "end": 1702
              },
              "start": 1685,
              "end": 1702
            },
            "start": 1683,
            "end": 1702
          },
          "start": 1682,
          "end": 1702
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1668,
      "end": 1704
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1714,
        "end": 1718
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
                "start": 1722,
                "end": 1723
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1724,
                    "end": 1730
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1732,
                    "end": 1738
                  }
                ],
                "start": 1723,
                "end": 1739
              },
              "start": 1722,
              "end": 1739
            },
            "start": 1720,
            "end": 1739
          },
          "start": 1719,
          "end": 1739
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1705,
      "end": 1741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1760,
        "end": 1764
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
              "start": 1768,
              "end": 1771
            },
            "start": 1766,
            "end": 1771
          },
          "start": 1765,
          "end": 1771
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1773,
        "end": 1776
      },
      "expression": false,
      "start": 1751,
      "end": 1776
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1787,
        "end": 1791
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
                "start": 1795,
                "end": 1796
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1797,
                    "end": 1803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1805,
                    "end": 1811
                  }
                ],
                "start": 1796,
                "end": 1812
              },
              "start": 1795,
              "end": 1812
            },
            "start": 1793,
            "end": 1812
          },
          "start": 1792,
          "end": 1812
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1778,
      "end": 1814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1828
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
                "start": 1832,
                "end": 1833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1834,
                    "end": 1840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1842,
                    "end": 1848
                  }
                ],
                "start": 1833,
                "end": 1849
              },
              "start": 1832,
              "end": 1849
            },
            "start": 1830,
            "end": 1849
          },
          "start": 1829,
          "end": 1849
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1815,
      "end": 1851
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1870,
        "end": 1874
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
              "start": 1878,
              "end": 1881
            },
            "start": 1876,
            "end": 1881
          },
          "start": 1875,
          "end": 1881
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1883,
        "end": 1886
      },
      "expression": false,
      "start": 1861,
      "end": 1886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1897,
        "end": 1902
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
                "start": 1906,
                "end": 1907
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1908,
                    "end": 1914
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1916,
                    "end": 1922
                  }
                ],
                "start": 1907,
                "end": 1923
              },
              "start": 1906,
              "end": 1923
            },
            "start": 1904,
            "end": 1923
          },
          "start": 1903,
          "end": 1923
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1888,
      "end": 1925
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1935,
        "end": 1940
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
                "start": 1951,
                "end": 1952
              },
              "typeArguments": null,
              "start": 1944,
              "end": 1952
            },
            "start": 1942,
            "end": 1952
          },
          "start": 1941,
          "end": 1952
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1926,
      "end": 1954
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1970,
        "end": 1975
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
              "start": 1979,
              "end": 1982
            },
            "start": 1977,
            "end": 1982
          },
          "start": 1976,
          "end": 1982
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1984,
        "end": 1987
      },
      "expression": false,
      "start": 1961,
      "end": 1987
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1998,
        "end": 2003
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
                "start": 2007,
                "end": 2008
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2009,
                    "end": 2015
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2017,
                    "end": 2023
                  }
                ],
                "start": 2008,
                "end": 2024
              },
              "start": 2007,
              "end": 2024
            },
            "start": 2005,
            "end": 2024
          },
          "start": 2004,
          "end": 2024
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1989,
      "end": 2026
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2036,
        "end": 2041
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
                "start": 2052,
                "end": 2053
              },
              "typeArguments": null,
              "start": 2045,
              "end": 2053
            },
            "start": 2043,
            "end": 2053
          },
          "start": 2042,
          "end": 2053
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2027,
      "end": 2055
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2071,
        "end": 2076
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
              "start": 2080,
              "end": 2083
            },
            "start": 2078,
            "end": 2083
          },
          "start": 2077,
          "end": 2083
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2085,
        "end": 2088
      },
      "expression": false,
      "start": 2062,
      "end": 2088
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2099,
        "end": 2104
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
                "start": 2108,
                "end": 2109
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2110,
                    "end": 2116
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2118,
                    "end": 2124
                  }
                ],
                "start": 2109,
                "end": 2125
              },
              "start": 2108,
              "end": 2125
            },
            "start": 2106,
            "end": 2125
          },
          "start": 2105,
          "end": 2125
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2090,
      "end": 2127
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2137,
        "end": 2142
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
                "start": 2146,
                "end": 2147
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2148,
                    "end": 2154
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2156,
                    "end": 2162
                  }
                ],
                "start": 2147,
                "end": 2163
              },
              "start": 2146,
              "end": 2163
            },
            "start": 2144,
            "end": 2163
          },
          "start": 2143,
          "end": 2163
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2128,
      "end": 2165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2184,
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
              "type": "TSAnyKeyword",
              "start": 2193,
              "end": 2196
            },
            "start": 2191,
            "end": 2196
          },
          "start": 2190,
          "end": 2196
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2198,
        "end": 2201
      },
      "expression": false,
      "start": 2175,
      "end": 2201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2212,
        "end": 2218
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
                "start": 2222,
                "end": 2224
              },
              "typeArguments": null,
              "start": 2222,
              "end": 2224
            },
            "start": 2220,
            "end": 2224
          },
          "start": 2219,
          "end": 2224
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2203,
      "end": 2226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2236,
        "end": 2242
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
                "start": 2246,
                "end": 2247
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2248,
                    "end": 2254
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2256,
                    "end": 2262
                  }
                ],
                "start": 2247,
                "end": 2263
              },
              "start": 2246,
              "end": 2263
            },
            "start": 2244,
            "end": 2263
          },
          "start": 2243,
          "end": 2263
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2227,
      "end": 2265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2287
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
              "start": 2291,
              "end": 2294
            },
            "start": 2289,
            "end": 2294
          },
          "start": 2288,
          "end": 2294
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2296,
        "end": 2299
      },
      "expression": false,
      "start": 2272,
      "end": 2299
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2310,
        "end": 2315
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
                "start": 2319,
                "end": 2320
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2321,
                    "end": 2327
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2329,
                    "end": 2335
                  }
                ],
                "start": 2320,
                "end": 2336
              },
              "start": 2319,
              "end": 2336
            },
            "start": 2317,
            "end": 2336
          },
          "start": 2316,
          "end": 2336
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2301,
      "end": 2338
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2348,
        "end": 2353
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
                "start": 2364,
                "end": 2365
              },
              "typeArguments": null,
              "start": 2357,
              "end": 2365
            },
            "start": 2355,
            "end": 2365
          },
          "start": 2354,
          "end": 2365
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2339,
      "end": 2367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2388
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
              "start": 2392,
              "end": 2395
            },
            "start": 2390,
            "end": 2395
          },
          "start": 2389,
          "end": 2395
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2397,
        "end": 2400
      },
      "expression": false,
      "start": 2374,
      "end": 2400
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2411,
        "end": 2416
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
                "start": 2420,
                "end": 2421
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2422,
                    "end": 2428
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2430,
                    "end": 2436
                  }
                ],
                "start": 2421,
                "end": 2437
              },
              "start": 2420,
              "end": 2437
            },
            "start": 2418,
            "end": 2437
          },
          "start": 2417,
          "end": 2437
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2402,
      "end": 2439
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2449,
        "end": 2454
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
                "start": 2465,
                "end": 2466
              },
              "typeArguments": null,
              "start": 2458,
              "end": 2466
            },
            "start": 2456,
            "end": 2466
          },
          "start": 2455,
          "end": 2466
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2440,
      "end": 2468
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2484,
        "end": 2489
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
              "start": 2493,
              "end": 2496
            },
            "start": 2491,
            "end": 2496
          },
          "start": 2490,
          "end": 2496
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2498,
        "end": 2501
      },
      "expression": false,
      "start": 2475,
      "end": 2501
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2512,
        "end": 2517
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
                "start": 2521,
                "end": 2523
              },
              "typeArguments": null,
              "start": 2521,
              "end": 2523
            },
            "start": 2519,
            "end": 2523
          },
          "start": 2518,
          "end": 2523
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2503,
      "end": 2525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2535,
        "end": 2540
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
                "start": 2544,
                "end": 2545
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2546,
                    "end": 2552
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2554,
                    "end": 2560
                  }
                ],
                "start": 2545,
                "end": 2561
              },
              "start": 2544,
              "end": 2561
            },
            "start": 2542,
            "end": 2561
          },
          "start": 2541,
          "end": 2561
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2526,
      "end": 2563
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2579,
        "end": 2584
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
              "start": 2588,
              "end": 2591
            },
            "start": 2586,
            "end": 2591
          },
          "start": 2585,
          "end": 2591
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2593,
        "end": 2596
      },
      "expression": false,
      "start": 2570,
      "end": 2596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2596
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
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 373,
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
    "value": "return",
    "start": 377,
    "end": 383
  },
  {
    "type": "Null",
    "value": "null",
    "start": 384,
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
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 395,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 406,
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
    "type": "Identifier",
    "value": "foo",
    "start": 415,
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
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 455,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 497,
    "end": 503
  },
  {
    "type": "Null",
    "value": "null",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 515,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "U",
    "start": 553,
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
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 563,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
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
    "value": "U",
    "start": 602,
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
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 684,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 700,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 721,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
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
    "value": "A",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 778,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 787,
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
    "value": "B",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 806,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 816,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 825,
    "end": 830
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
    "type": "Identifier",
    "value": "B",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 836,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 844,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 863,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 872,
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
    "value": "x",
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
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 891,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 949,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 976,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 985,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1004,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1013,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1041,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1096,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1114,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1131,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1142,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1159,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1206,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1234,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1243,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1271,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1288,
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
    "value": "{",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1298,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "foo5",
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
    "value": "x",
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
    "value": "A",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
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
    "value": "foo5",
    "start": 1328,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "start": 1362,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1379,
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
    "value": "{",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1389,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1398,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1411,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1420,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
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
    "value": "any",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1483,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1492,
    "end": 1496
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
    "value": ":",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1504,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1513,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1547,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1556,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1574,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1595,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1604,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1612,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 1641,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1650,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1668,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1695,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1701,
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
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1705,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1714,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1724,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1732,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1738,
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
    "value": "function",
    "start": 1751,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1760,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1778,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1787,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1815,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1824,
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
    "type": "Identifier",
    "value": "C",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1834,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1861,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1870,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1888,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1897,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1926,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1944,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1970,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
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
    "value": "any",
    "start": 1979,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1989,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1998,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2009,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2027,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2036,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2045,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2062,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2071,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2080,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2090,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2099,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2110,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2118,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2128,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2137,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2148,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2156,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2175,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2184,
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
    "value": "any",
    "start": 2193,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2203,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2212,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2222,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2227,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2248,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2256,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2272,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2281,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2291,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2301,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2310,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2321,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2329,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2339,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2348,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2357,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 2374,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2383,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2392,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2402,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2411,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2422,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2430,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2440,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2449,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2458,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2475,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2484,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2493,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2503,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2512,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2521,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2526,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2535,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2546,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2554,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2570,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2579,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2588,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2595,
    "end": 2596
  }
]
```
