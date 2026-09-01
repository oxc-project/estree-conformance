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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 346,
            "end": 347
          }
        ],
        "start": 342,
        "end": 348
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
              "start": 355,
              "end": 366
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
                        "start": 376,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 377
                    },
                    "start": 374,
                    "end": 377
                  },
                  "start": 373,
                  "end": 377
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
                      "start": 388,
                      "end": 392
                    },
                    "start": 381,
                    "end": 393
                  }
                ],
                "start": 379,
                "end": 395
              },
              "expression": false,
              "start": 366,
              "end": 395
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 355,
            "end": 395
          }
        ],
        "start": 349,
        "end": 397
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 397
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
        "start": 405,
        "end": 406
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
              "start": 407,
              "end": 408
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 407,
            "end": 408
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 411
          }
        ],
        "start": 406,
        "end": 412
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
              "start": 419,
              "end": 430
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
                        "start": 434,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 434,
                      "end": 435
                    },
                    "start": 432,
                    "end": 435
                  },
                  "start": 431,
                  "end": 435
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
                        "start": 441,
                        "end": 442
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 442
                    },
                    "start": 439,
                    "end": 442
                  },
                  "start": 437,
                  "end": 442
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
                      "start": 453,
                      "end": 457
                    },
                    "start": 446,
                    "end": 458
                  }
                ],
                "start": 444,
                "end": 460
              },
              "expression": false,
              "start": 430,
              "end": 460
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 419,
            "end": 460
          }
        ],
        "start": 413,
        "end": 462
      },
      "abstract": false,
      "declare": false,
      "start": 399,
      "end": 462
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 475
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
              "start": 476,
              "end": 477
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 476,
            "end": 477
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 480
          }
        ],
        "start": 475,
        "end": 481
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
                      "start": 495,
                      "end": 496
                    },
                    "typeArguments": null,
                    "start": 495,
                    "end": 496
                  },
                  "start": 493,
                  "end": 496
                },
                "start": 492,
                "end": 496
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
                      "start": 502,
                      "end": 503
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 503
                  },
                  "start": 500,
                  "end": 503
                },
                "start": 498,
                "end": 503
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
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
                        "start": 508,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 509
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 511,
                        "end": 512
                      },
                      "typeArguments": null,
                      "start": 511,
                      "end": 512
                    }
                  ],
                  "start": 507,
                  "end": 513
                },
                "start": 506,
                "end": 513
              },
              "start": 504,
              "end": 513
            },
            "start": 488,
            "end": 514
          }
        ],
        "start": 482,
        "end": 516
      },
      "declare": false,
      "start": 464,
      "end": 516
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 530
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
                    "start": 541,
                    "end": 542
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 541,
                  "end": 542
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 545
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 544,
                  "end": 545
                }
              ],
              "start": 540,
              "end": 546
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
                      "start": 550,
                      "end": 551
                    },
                    "typeArguments": null,
                    "start": 550,
                    "end": 551
                  },
                  "start": 548,
                  "end": 551
                },
                "start": 547,
                "end": 551
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
                      "start": 556,
                      "end": 557
                    },
                    "typeArguments": null,
                    "start": 556,
                    "end": 557
                  },
                  "start": 554,
                  "end": 557
                },
                "start": 553,
                "end": 557
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
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
                        "start": 562,
                        "end": 563
                      },
                      "typeArguments": null,
                      "start": 562,
                      "end": 563
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "typeArguments": null,
                      "start": 565,
                      "end": 566
                    }
                  ],
                  "start": 561,
                  "end": 567
                },
                "start": 560,
                "end": 567
              },
              "start": 558,
              "end": 567
            },
            "start": 537,
            "end": 568
          }
        ],
        "start": 531,
        "end": 570
      },
      "declare": false,
      "start": 518,
      "end": 570
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
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 607
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
                                "start": 608,
                                "end": 609
                              },
                              "typeArguments": null,
                              "start": 608,
                              "end": 609
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 611,
                                "end": 612
                              },
                              "typeArguments": null,
                              "start": 611,
                              "end": 612
                            }
                          ],
                          "start": 607,
                          "end": 613
                        },
                        "start": 606,
                        "end": 613
                      },
                      "start": 604,
                      "end": 613
                    },
                    "start": 581,
                    "end": 613
                  }
                ],
                "start": 579,
                "end": 615
              },
              "start": 577,
              "end": 615
            },
            "start": 576,
            "end": 615
          },
          "init": null,
          "definite": false,
          "start": 576,
          "end": 615
        }
      ],
      "declare": false,
      "start": 572,
      "end": 616
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
            "start": 621,
            "end": 622
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
                  "start": 627,
                  "end": 630
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
                          "start": 631,
                          "end": 632
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 631,
                        "end": 632
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 634,
                          "end": 635
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 634,
                        "end": 635
                      }
                    ],
                    "start": 630,
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 641
                          },
                          "typeArguments": null,
                          "start": 640,
                          "end": 641
                        },
                        "start": 638,
                        "end": 641
                      },
                      "start": 637,
                      "end": 641
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
                      "start": 643,
                      "end": 647
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 662,
                            "end": 663
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
                                  "start": 664,
                                  "end": 665
                                },
                                "typeArguments": null,
                                "start": 664,
                                "end": 665
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 667,
                                  "end": 668
                                },
                                "typeArguments": null,
                                "start": 667,
                                "end": 668
                              }
                            ],
                            "start": 663,
                            "end": 669
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 670,
                              "end": 671
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 674
                            }
                          ],
                          "start": 658,
                          "end": 675
                        },
                        "start": 651,
                        "end": 676
                      }
                    ],
                    "start": 649,
                    "end": 678
                  },
                  "expression": false,
                  "start": 630,
                  "end": 678
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 627,
                "end": 678
              }
            ],
            "start": 625,
            "end": 680
          },
          "definite": false,
          "start": 621,
          "end": 680
        }
      ],
      "declare": false,
      "start": 617,
      "end": 681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 747
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
                "start": 751,
                "end": 752
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 753,
                    "end": 759
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 761,
                    "end": 767
                  }
                ],
                "start": 752,
                "end": 768
              },
              "start": 751,
              "end": 768
            },
            "start": 749,
            "end": 768
          },
          "start": 748,
          "end": 768
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 733,
      "end": 770
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 780,
        "end": 785
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
                "start": 789,
                "end": 790
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 791,
                    "end": 797
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 799,
                    "end": 805
                  }
                ],
                "start": 790,
                "end": 806
              },
              "start": 789,
              "end": 806
            },
            "start": 787,
            "end": 806
          },
          "start": 786,
          "end": 806
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 771,
      "end": 808
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 827,
        "end": 832
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
              "start": 836,
              "end": 839
            },
            "start": 834,
            "end": 839
          },
          "start": 833,
          "end": 839
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 841,
        "end": 844
      },
      "expression": false,
      "start": 818,
      "end": 844
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 860
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
                "start": 864,
                "end": 865
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 866,
                    "end": 872
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 874,
                    "end": 880
                  }
                ],
                "start": 865,
                "end": 881
              },
              "start": 864,
              "end": 881
            },
            "start": 862,
            "end": 881
          },
          "start": 861,
          "end": 881
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 846,
      "end": 883
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 898
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
                "start": 902,
                "end": 903
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 904,
                    "end": 910
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 912,
                    "end": 918
                  }
                ],
                "start": 903,
                "end": 919
              },
              "start": 902,
              "end": 919
            },
            "start": 900,
            "end": 919
          },
          "start": 899,
          "end": 919
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 884,
      "end": 921
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 945
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
              "start": 949,
              "end": 952
            },
            "start": 947,
            "end": 952
          },
          "start": 946,
          "end": 952
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 954,
        "end": 957
      },
      "expression": false,
      "start": 931,
      "end": 957
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 972
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
                "start": 976,
                "end": 977
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 978,
                    "end": 984
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 986,
                    "end": 992
                  }
                ],
                "start": 977,
                "end": 993
              },
              "start": 976,
              "end": 993
            },
            "start": 974,
            "end": 993
          },
          "start": 973,
          "end": 993
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 959,
      "end": 995
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1009
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
                "start": 1013,
                "end": 1014
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1015,
                    "end": 1021
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1023,
                    "end": 1029
                  }
                ],
                "start": 1014,
                "end": 1030
              },
              "start": 1013,
              "end": 1030
            },
            "start": 1011,
            "end": 1030
          },
          "start": 1010,
          "end": 1030
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 996,
      "end": 1032
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1051,
        "end": 1055
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
              "start": 1059,
              "end": 1062
            },
            "start": 1057,
            "end": 1062
          },
          "start": 1056,
          "end": 1062
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1064,
        "end": 1067
      },
      "expression": false,
      "start": 1042,
      "end": 1067
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1078,
        "end": 1082
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
                "start": 1093,
                "end": 1094
              },
              "typeArguments": null,
              "start": 1086,
              "end": 1094
            },
            "start": 1084,
            "end": 1094
          },
          "start": 1083,
          "end": 1094
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1069,
      "end": 1096
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1110
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
                "start": 1121,
                "end": 1122
              },
              "typeArguments": null,
              "start": 1114,
              "end": 1122
            },
            "start": 1112,
            "end": 1122
          },
          "start": 1111,
          "end": 1122
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1097,
      "end": 1124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1143,
        "end": 1147
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
              "start": 1151,
              "end": 1154
            },
            "start": 1149,
            "end": 1154
          },
          "start": 1148,
          "end": 1154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1156,
        "end": 1159
      },
      "expression": false,
      "start": 1134,
      "end": 1159
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1170,
        "end": 1174
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
                "start": 1185,
                "end": 1186
              },
              "typeArguments": null,
              "start": 1178,
              "end": 1186
            },
            "start": 1176,
            "end": 1186
          },
          "start": 1175,
          "end": 1186
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1161,
      "end": 1188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1198,
        "end": 1202
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
                "start": 1213,
                "end": 1214
              },
              "typeArguments": null,
              "start": 1206,
              "end": 1214
            },
            "start": 1204,
            "end": 1214
          },
          "start": 1203,
          "end": 1214
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1189,
      "end": 1216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1239
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
              "start": 1243,
              "end": 1246
            },
            "start": 1241,
            "end": 1246
          },
          "start": 1240,
          "end": 1246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1248,
        "end": 1251
      },
      "expression": false,
      "start": 1226,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1266
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
                "start": 1270,
                "end": 1271
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1272,
                    "end": 1278
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1280,
                    "end": 1286
                  }
                ],
                "start": 1271,
                "end": 1287
              },
              "start": 1270,
              "end": 1287
            },
            "start": 1268,
            "end": 1287
          },
          "start": 1267,
          "end": 1287
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1253,
      "end": 1289
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1303
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
                "start": 1307,
                "end": 1308
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1309,
                    "end": 1315
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1317,
                    "end": 1323
                  }
                ],
                "start": 1308,
                "end": 1324
              },
              "start": 1307,
              "end": 1324
            },
            "start": 1305,
            "end": 1324
          },
          "start": 1304,
          "end": 1324
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1290,
      "end": 1326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1350,
        "end": 1354
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
              "start": 1358,
              "end": 1361
            },
            "start": 1356,
            "end": 1361
          },
          "start": 1355,
          "end": 1361
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1363,
        "end": 1366
      },
      "expression": false,
      "start": 1341,
      "end": 1366
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1377,
        "end": 1381
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
                "start": 1385,
                "end": 1386
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1387,
                    "end": 1393
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1395,
                    "end": 1401
                  }
                ],
                "start": 1386,
                "end": 1402
              },
              "start": 1385,
              "end": 1402
            },
            "start": 1383,
            "end": 1402
          },
          "start": 1382,
          "end": 1402
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1368,
      "end": 1404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1418
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
                "start": 1422,
                "end": 1423
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1424,
                    "end": 1430
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1432,
                    "end": 1438
                  }
                ],
                "start": 1423,
                "end": 1439
              },
              "start": 1422,
              "end": 1439
            },
            "start": 1420,
            "end": 1439
          },
          "start": 1419,
          "end": 1439
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1405,
      "end": 1441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1492
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
              "start": 1496,
              "end": 1499
            },
            "start": 1494,
            "end": 1499
          },
          "start": 1493,
          "end": 1499
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1501,
        "end": 1504
      },
      "expression": false,
      "start": 1479,
      "end": 1504
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1515,
        "end": 1520
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
                "start": 1524,
                "end": 1525
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1526,
                    "end": 1532
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1534,
                    "end": 1540
                  }
                ],
                "start": 1525,
                "end": 1541
              },
              "start": 1524,
              "end": 1541
            },
            "start": 1522,
            "end": 1541
          },
          "start": 1521,
          "end": 1541
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1506,
      "end": 1543
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1558
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
                "start": 1569,
                "end": 1570
              },
              "typeArguments": null,
              "start": 1562,
              "end": 1570
            },
            "start": 1560,
            "end": 1570
          },
          "start": 1559,
          "end": 1570
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1544,
      "end": 1572
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1596,
        "end": 1601
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
              "start": 1605,
              "end": 1608
            },
            "start": 1603,
            "end": 1608
          },
          "start": 1602,
          "end": 1608
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1610,
        "end": 1613
      },
      "expression": false,
      "start": 1587,
      "end": 1613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1624,
        "end": 1629
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
                "start": 1633,
                "end": 1634
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1635,
                    "end": 1641
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1643,
                    "end": 1649
                  }
                ],
                "start": 1634,
                "end": 1650
              },
              "start": 1633,
              "end": 1650
            },
            "start": 1631,
            "end": 1650
          },
          "start": 1630,
          "end": 1650
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1615,
      "end": 1652
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1667
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
                "start": 1678,
                "end": 1679
              },
              "typeArguments": null,
              "start": 1671,
              "end": 1679
            },
            "start": 1669,
            "end": 1679
          },
          "start": 1668,
          "end": 1679
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1653,
      "end": 1681
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1697,
        "end": 1702
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
              "start": 1706,
              "end": 1709
            },
            "start": 1704,
            "end": 1709
          },
          "start": 1703,
          "end": 1709
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1711,
        "end": 1714
      },
      "expression": false,
      "start": 1688,
      "end": 1714
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1725,
        "end": 1730
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
                "start": 1734,
                "end": 1735
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1736,
                    "end": 1742
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1744,
                    "end": 1750
                  }
                ],
                "start": 1735,
                "end": 1751
              },
              "start": 1734,
              "end": 1751
            },
            "start": 1732,
            "end": 1751
          },
          "start": 1731,
          "end": 1751
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1716,
      "end": 1753
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1763,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1772,
                "end": 1773
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1774,
                    "end": 1780
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1782,
                    "end": 1788
                  }
                ],
                "start": 1773,
                "end": 1789
              },
              "start": 1772,
              "end": 1789
            },
            "start": 1770,
            "end": 1789
          },
          "start": 1769,
          "end": 1789
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1754,
      "end": 1791
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1807,
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
      "start": 1798,
      "end": 1824
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1841
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
                "start": 1845,
                "end": 1847
              },
              "typeArguments": null,
              "start": 1845,
              "end": 1847
            },
            "start": 1843,
            "end": 1847
          },
          "start": 1842,
          "end": 1847
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1826,
      "end": 1849
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1865
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
                "start": 1869,
                "end": 1870
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1871,
                    "end": 1877
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1879,
                    "end": 1885
                  }
                ],
                "start": 1870,
                "end": 1886
              },
              "start": 1869,
              "end": 1886
            },
            "start": 1867,
            "end": 1886
          },
          "start": 1866,
          "end": 1886
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1850,
      "end": 1888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1912,
        "end": 1918
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
              "start": 1922,
              "end": 1925
            },
            "start": 1920,
            "end": 1925
          },
          "start": 1919,
          "end": 1925
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1927,
        "end": 1930
      },
      "expression": false,
      "start": 1903,
      "end": 1930
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1941,
        "end": 1946
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
                "start": 1950,
                "end": 1951
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1952,
                    "end": 1958
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1960,
                    "end": 1966
                  }
                ],
                "start": 1951,
                "end": 1967
              },
              "start": 1950,
              "end": 1967
            },
            "start": 1948,
            "end": 1967
          },
          "start": 1947,
          "end": 1967
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1932,
      "end": 1969
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1984
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
                "start": 1995,
                "end": 1996
              },
              "typeArguments": null,
              "start": 1988,
              "end": 1996
            },
            "start": 1986,
            "end": 1996
          },
          "start": 1985,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1970,
      "end": 1998
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2022,
        "end": 2027
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
              "start": 2031,
              "end": 2034
            },
            "start": 2029,
            "end": 2034
          },
          "start": 2028,
          "end": 2034
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2036,
        "end": 2039
      },
      "expression": false,
      "start": 2013,
      "end": 2039
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2050,
        "end": 2055
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
                "start": 2059,
                "end": 2060
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2061,
                    "end": 2067
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2069,
                    "end": 2075
                  }
                ],
                "start": 2060,
                "end": 2076
              },
              "start": 2059,
              "end": 2076
            },
            "start": 2057,
            "end": 2076
          },
          "start": 2056,
          "end": 2076
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2041,
      "end": 2078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2088,
        "end": 2093
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
                "start": 2104,
                "end": 2105
              },
              "typeArguments": null,
              "start": 2097,
              "end": 2105
            },
            "start": 2095,
            "end": 2105
          },
          "start": 2094,
          "end": 2105
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2079,
      "end": 2107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2123,
        "end": 2128
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
              "start": 2132,
              "end": 2135
            },
            "start": 2130,
            "end": 2135
          },
          "start": 2129,
          "end": 2135
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2137,
        "end": 2140
      },
      "expression": false,
      "start": 2114,
      "end": 2140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2140
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
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 355,
    "end": 366
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
    "value": ",",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387
  },
  {
    "type": "Null",
    "value": "null",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 419,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
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
    "value": "y",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 446,
    "end": 452
  },
  {
    "type": "Null",
    "value": "null",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 464,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 518,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 556,
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
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 581,
    "end": 584
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
    "value": "B",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "U",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "new",
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
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 634,
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
    "type": "Identifier",
    "value": "T",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 643,
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
    "value": "U",
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
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 651,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 733,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 742,
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
    "type": "Identifier",
    "value": "B",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 771,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 780,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 799,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
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
    "value": "function",
    "start": 818,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 827,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 855,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 884,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 904,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 931,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 940,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 959,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 986,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 992,
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
    "value": "function",
    "start": 996,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1042,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1069,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1097,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1134,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1143,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1161,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1170,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1189,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1235,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1243,
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
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1253,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1262,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1280,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1299,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1317,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1341,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1350,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 1358,
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
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1368,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1377,
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
    "value": "x",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1387,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1405,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1424,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1479,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1506,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1515,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1534,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1553,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1587,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1596,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1605,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1615,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1624,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1635,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1643,
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
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1653,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1662,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1688,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1697,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1706,
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
    "value": "{",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1716,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1725,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1736,
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
    "value": "number",
    "start": 1744,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1754,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1763,
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
    "value": "C",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1782,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1798,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1807,
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
    "value": "foo12b",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1845,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1850,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1859,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1871,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1879,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1903,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1912,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1932,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1941,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1952,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1960,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1988,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2022,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 2041,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2050,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2069,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2079,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2088,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2097,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2114,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2123,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  }
]
```
