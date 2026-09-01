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
                        "start": 428,
                        "end": 429
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 429
                    },
                    "start": 426,
                    "end": 429
                  },
                  "start": 425,
                  "end": 429
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
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 443,
                      "end": 447
                    },
                    "start": 436,
                    "end": 448
                  }
                ],
                "start": 434,
                "end": 450
              },
              "expression": false,
              "start": 418,
              "end": 450
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 415,
            "end": 450
          }
        ],
        "start": 409,
        "end": 452
      },
      "abstract": false,
      "declare": false,
      "start": 395,
      "end": 452
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
        "start": 460,
        "end": 461
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
              "start": 462,
              "end": 463
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 462,
            "end": 463
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 466
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 465,
            "end": 466
          }
        ],
        "start": 461,
        "end": 467
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
              "start": 474,
              "end": 477
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
                        "start": 481,
                        "end": 482
                      },
                      "typeArguments": null,
                      "start": 481,
                      "end": 482
                    },
                    "start": 479,
                    "end": 482
                  },
                  "start": 478,
                  "end": 482
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
                        "start": 488,
                        "end": 489
                      },
                      "typeArguments": null,
                      "start": 488,
                      "end": 489
                    },
                    "start": 486,
                    "end": 489
                  },
                  "start": 484,
                  "end": 489
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
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 503,
                      "end": 507
                    },
                    "start": 496,
                    "end": 508
                  }
                ],
                "start": 494,
                "end": 510
              },
              "expression": false,
              "start": 477,
              "end": 510
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 474,
            "end": 510
          }
        ],
        "start": 468,
        "end": 512
      },
      "abstract": false,
      "declare": false,
      "start": 454,
      "end": 512
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 525
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
              "start": 526,
              "end": 527
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 527
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 529,
            "end": 530
          }
        ],
        "start": 525,
        "end": 531
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
              "start": 538,
              "end": 541
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
                      "start": 552,
                      "end": 553
                    },
                    "typeArguments": null,
                    "start": 552,
                    "end": 553
                  },
                  "start": 550,
                  "end": 553
                },
                "start": 548,
                "end": 553
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
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 538,
            "end": 558
          }
        ],
        "start": 532,
        "end": 560
      },
      "declare": false,
      "start": 514,
      "end": 560
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 574
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
              "start": 581,
              "end": 584
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
                    "start": 585,
                    "end": 586
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 585,
                  "end": 586
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 588,
                    "end": 589
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 588,
                  "end": 589
                }
              ],
              "start": 584,
              "end": 590
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
                      "start": 594,
                      "end": 595
                    },
                    "typeArguments": null,
                    "start": 594,
                    "end": 595
                  },
                  "start": 592,
                  "end": 595
                },
                "start": 591,
                "end": 595
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
                      "start": 600,
                      "end": 601
                    },
                    "typeArguments": null,
                    "start": 600,
                    "end": 601
                  },
                  "start": 598,
                  "end": 601
                },
                "start": 597,
                "end": 601
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
                  "start": 604,
                  "end": 605
                },
                "typeArguments": null,
                "start": 604,
                "end": 605
              },
              "start": 602,
              "end": 605
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 581,
            "end": 606
          }
        ],
        "start": 575,
        "end": 608
      },
      "declare": false,
      "start": 562,
      "end": 608
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
                      "start": 619,
                      "end": 622
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
                            "start": 623,
                            "end": 624
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 623,
                          "end": 624
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 626,
                            "end": 627
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 626,
                          "end": 627
                        }
                      ],
                      "start": 622,
                      "end": 628
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
                              "start": 632,
                              "end": 633
                            },
                            "typeArguments": null,
                            "start": 632,
                            "end": 633
                          },
                          "start": 630,
                          "end": 633
                        },
                        "start": 629,
                        "end": 633
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
                              "start": 639,
                              "end": 640
                            },
                            "typeArguments": null,
                            "start": 639,
                            "end": 640
                          },
                          "start": 637,
                          "end": 640
                        },
                        "start": 635,
                        "end": 640
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
                          "start": 643,
                          "end": 644
                        },
                        "typeArguments": null,
                        "start": 643,
                        "end": 644
                      },
                      "start": 641,
                      "end": 644
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 619,
                    "end": 644
                  }
                ],
                "start": 617,
                "end": 646
              },
              "start": 615,
              "end": 646
            },
            "start": 614,
            "end": 646
          },
          "init": null,
          "definite": false,
          "start": 614,
          "end": 646
        }
      ],
      "declare": false,
      "start": 610,
      "end": 646
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
            "start": 651,
            "end": 652
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
                  "start": 657,
                  "end": 660
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
                          "start": 661,
                          "end": 662
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 661,
                        "end": 662
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 665
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 664,
                        "end": 665
                      }
                    ],
                    "start": 660,
                    "end": 666
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
                            "start": 670,
                            "end": 671
                          },
                          "typeArguments": null,
                          "start": 670,
                          "end": 671
                        },
                        "start": 668,
                        "end": 671
                      },
                      "start": 667,
                      "end": 671
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
                            "start": 676,
                            "end": 677
                          },
                          "typeArguments": null,
                          "start": 676,
                          "end": 677
                        },
                        "start": 674,
                        "end": 677
                      },
                      "start": 673,
                      "end": 677
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
                          "start": 688,
                          "end": 689
                        },
                        "start": 681,
                        "end": 690
                      }
                    ],
                    "start": 679,
                    "end": 692
                  },
                  "expression": false,
                  "start": 660,
                  "end": 692
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 657,
                "end": 692
              }
            ],
            "start": 655,
            "end": 694
          },
          "definite": false,
          "start": 651,
          "end": 694
        }
      ],
      "declare": false,
      "start": 647,
      "end": 695
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 710
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
                "start": 714,
                "end": 715
              },
              "typeArguments": null,
              "start": 714,
              "end": 715
            },
            "start": 712,
            "end": 715
          },
          "start": 711,
          "end": 715
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 697,
      "end": 717
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 731
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
                "start": 735,
                "end": 736
              },
              "typeArguments": null,
              "start": 735,
              "end": 736
            },
            "start": 733,
            "end": 736
          },
          "start": 732,
          "end": 736
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 718,
      "end": 738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 761
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
              "start": 765,
              "end": 768
            },
            "start": 763,
            "end": 768
          },
          "start": 762,
          "end": 768
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 770,
        "end": 773
      },
      "expression": false,
      "start": 748,
      "end": 773
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 789
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
                "start": 793,
                "end": 794
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 795,
                    "end": 801
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 803,
                    "end": 809
                  }
                ],
                "start": 794,
                "end": 810
              },
              "start": 793,
              "end": 810
            },
            "start": 791,
            "end": 810
          },
          "start": 790,
          "end": 810
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 775,
      "end": 812
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 827
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
                "start": 831,
                "end": 832
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 841,
                    "end": 847
                  }
                ],
                "start": 832,
                "end": 848
              },
              "start": 831,
              "end": 848
            },
            "start": 829,
            "end": 848
          },
          "start": 828,
          "end": 848
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 813,
      "end": 850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 874
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
              "start": 878,
              "end": 881
            },
            "start": 876,
            "end": 881
          },
          "start": 875,
          "end": 881
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 883,
        "end": 886
      },
      "expression": false,
      "start": 860,
      "end": 886
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 902
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
                "start": 906,
                "end": 907
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 908,
                    "end": 914
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 916,
                    "end": 922
                  }
                ],
                "start": 907,
                "end": 923
              },
              "start": 906,
              "end": 923
            },
            "start": 904,
            "end": 923
          },
          "start": 903,
          "end": 923
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 888,
      "end": 925
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 940
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
                "start": 944,
                "end": 945
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 946,
                    "end": 952
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 954,
                    "end": 960
                  }
                ],
                "start": 945,
                "end": 961
              },
              "start": 944,
              "end": 961
            },
            "start": 942,
            "end": 961
          },
          "start": 941,
          "end": 961
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 926,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 987
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
              "start": 991,
              "end": 994
            },
            "start": 989,
            "end": 994
          },
          "start": 988,
          "end": 994
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 996,
        "end": 999
      },
      "expression": false,
      "start": 973,
      "end": 999
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1010,
        "end": 1014
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
                "start": 1018,
                "end": 1019
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1020,
                    "end": 1026
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1028,
                    "end": 1034
                  }
                ],
                "start": 1019,
                "end": 1035
              },
              "start": 1018,
              "end": 1035
            },
            "start": 1016,
            "end": 1035
          },
          "start": 1015,
          "end": 1035
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1001,
      "end": 1037
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1056
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1057,
                    "end": 1063
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1065,
                    "end": 1071
                  }
                ],
                "start": 1056,
                "end": 1072
              },
              "start": 1055,
              "end": 1072
            },
            "start": 1053,
            "end": 1072
          },
          "start": 1052,
          "end": 1072
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1038,
      "end": 1074
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1097
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
              "start": 1101,
              "end": 1104
            },
            "start": 1099,
            "end": 1104
          },
          "start": 1098,
          "end": 1104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1106,
        "end": 1109
      },
      "expression": false,
      "start": 1084,
      "end": 1109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1124
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
                "start": 1135,
                "end": 1136
              },
              "typeArguments": null,
              "start": 1128,
              "end": 1136
            },
            "start": 1126,
            "end": 1136
          },
          "start": 1125,
          "end": 1136
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1111,
      "end": 1138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1152
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
                "start": 1163,
                "end": 1164
              },
              "typeArguments": null,
              "start": 1156,
              "end": 1164
            },
            "start": 1154,
            "end": 1164
          },
          "start": 1153,
          "end": 1164
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1139,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1189
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
              "start": 1193,
              "end": 1196
            },
            "start": 1191,
            "end": 1196
          },
          "start": 1190,
          "end": 1196
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1198,
        "end": 1201
      },
      "expression": false,
      "start": 1176,
      "end": 1201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
        "end": 1216
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
                "start": 1227,
                "end": 1228
              },
              "typeArguments": null,
              "start": 1220,
              "end": 1228
            },
            "start": 1218,
            "end": 1228
          },
          "start": 1217,
          "end": 1228
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1203,
      "end": 1230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1244
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
                "start": 1255,
                "end": 1256
              },
              "typeArguments": null,
              "start": 1248,
              "end": 1256
            },
            "start": 1246,
            "end": 1256
          },
          "start": 1245,
          "end": 1256
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1231,
      "end": 1258
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1281
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
              "start": 1285,
              "end": 1288
            },
            "start": 1283,
            "end": 1288
          },
          "start": 1282,
          "end": 1288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1290,
        "end": 1293
      },
      "expression": false,
      "start": 1268,
      "end": 1293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1304,
        "end": 1308
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
                "start": 1312,
                "end": 1313
              },
              "typeArguments": null,
              "start": 1312,
              "end": 1313
            },
            "start": 1310,
            "end": 1313
          },
          "start": 1309,
          "end": 1313
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1295,
      "end": 1315
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1334
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1335,
                    "end": 1341
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1343,
                    "end": 1349
                  }
                ],
                "start": 1334,
                "end": 1350
              },
              "start": 1333,
              "end": 1350
            },
            "start": 1331,
            "end": 1350
          },
          "start": 1330,
          "end": 1350
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1316,
      "end": 1352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1372
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
              "start": 1376,
              "end": 1379
            },
            "start": 1374,
            "end": 1379
          },
          "start": 1373,
          "end": 1379
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1381,
        "end": 1384
      },
      "expression": false,
      "start": 1359,
      "end": 1384
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1395,
        "end": 1400
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
                "start": 1404,
                "end": 1405
              },
              "typeArguments": null,
              "start": 1404,
              "end": 1405
            },
            "start": 1402,
            "end": 1405
          },
          "start": 1401,
          "end": 1405
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1386,
      "end": 1407
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1417,
        "end": 1422
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
                "start": 1426,
                "end": 1427
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1428,
                    "end": 1434
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1436,
                    "end": 1442
                  }
                ],
                "start": 1427,
                "end": 1443
              },
              "start": 1426,
              "end": 1443
            },
            "start": 1424,
            "end": 1443
          },
          "start": 1423,
          "end": 1443
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1408,
      "end": 1445
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1461,
        "end": 1466
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
              "start": 1470,
              "end": 1473
            },
            "start": 1468,
            "end": 1473
          },
          "start": 1467,
          "end": 1473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1475,
        "end": 1478
      },
      "expression": false,
      "start": 1452,
      "end": 1478
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1493
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
                "start": 1497,
                "end": 1498
              },
              "typeArguments": null,
              "start": 1497,
              "end": 1498
            },
            "start": 1495,
            "end": 1498
          },
          "start": 1494,
          "end": 1498
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1480,
      "end": 1500
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1510,
        "end": 1514
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
                "start": 1518,
                "end": 1519
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1520,
                    "end": 1526
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1528,
                    "end": 1534
                  }
                ],
                "start": 1519,
                "end": 1535
              },
              "start": 1518,
              "end": 1535
            },
            "start": 1516,
            "end": 1535
          },
          "start": 1515,
          "end": 1535
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1501,
      "end": 1537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1557
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
              "start": 1561,
              "end": 1564
            },
            "start": 1559,
            "end": 1564
          },
          "start": 1558,
          "end": 1564
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1566,
        "end": 1569
      },
      "expression": false,
      "start": 1544,
      "end": 1569
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1580,
        "end": 1584
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
                "start": 1588,
                "end": 1589
              },
              "typeArguments": null,
              "start": 1588,
              "end": 1589
            },
            "start": 1586,
            "end": 1589
          },
          "start": 1585,
          "end": 1589
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1571,
      "end": 1591
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1601,
        "end": 1605
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
                "start": 1616,
                "end": 1617
              },
              "typeArguments": null,
              "start": 1609,
              "end": 1617
            },
            "start": 1607,
            "end": 1617
          },
          "start": 1606,
          "end": 1617
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1592,
      "end": 1619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1647,
        "end": 1651
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
              "start": 1655,
              "end": 1658
            },
            "start": 1653,
            "end": 1658
          },
          "start": 1652,
          "end": 1658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1660,
        "end": 1663
      },
      "expression": false,
      "start": 1638,
      "end": 1663
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1674,
        "end": 1678
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
                "start": 1682,
                "end": 1683
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1684,
                    "end": 1690
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1692,
                    "end": 1698
                  }
                ],
                "start": 1683,
                "end": 1699
              },
              "start": 1682,
              "end": 1699
            },
            "start": 1680,
            "end": 1699
          },
          "start": 1679,
          "end": 1699
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1665,
      "end": 1701
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1711,
        "end": 1715
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
                "start": 1719,
                "end": 1720
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1721,
                    "end": 1727
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1729,
                    "end": 1735
                  }
                ],
                "start": 1720,
                "end": 1736
              },
              "start": 1719,
              "end": 1736
            },
            "start": 1717,
            "end": 1736
          },
          "start": 1716,
          "end": 1736
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1702,
      "end": 1738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1754,
        "end": 1758
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
              "start": 1762,
              "end": 1765
            },
            "start": 1760,
            "end": 1765
          },
          "start": 1759,
          "end": 1765
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1767,
        "end": 1770
      },
      "expression": false,
      "start": 1745,
      "end": 1770
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1781,
        "end": 1785
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
                "start": 1789,
                "end": 1790
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1791,
                    "end": 1797
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1799,
                    "end": 1805
                  }
                ],
                "start": 1790,
                "end": 1806
              },
              "start": 1789,
              "end": 1806
            },
            "start": 1787,
            "end": 1806
          },
          "start": 1786,
          "end": 1806
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1772,
      "end": 1808
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1818,
        "end": 1822
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
                "start": 1826,
                "end": 1827
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1828,
                    "end": 1834
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1836,
                    "end": 1842
                  }
                ],
                "start": 1827,
                "end": 1843
              },
              "start": 1826,
              "end": 1843
            },
            "start": 1824,
            "end": 1843
          },
          "start": 1823,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1809,
      "end": 1845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1861,
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
              "type": "TSAnyKeyword",
              "start": 1869,
              "end": 1872
            },
            "start": 1867,
            "end": 1872
          },
          "start": 1866,
          "end": 1872
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1874,
        "end": 1877
      },
      "expression": false,
      "start": 1852,
      "end": 1877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1888,
        "end": 1893
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
                "start": 1897,
                "end": 1898
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1899,
                    "end": 1905
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1907,
                    "end": 1913
                  }
                ],
                "start": 1898,
                "end": 1914
              },
              "start": 1897,
              "end": 1914
            },
            "start": 1895,
            "end": 1914
          },
          "start": 1894,
          "end": 1914
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1879,
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
                    "type": "TSStringKeyword",
                    "start": 2000,
                    "end": 2006
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2008,
                    "end": 2014
                  }
                ],
                "start": 1999,
                "end": 2015
              },
              "start": 1998,
              "end": 2015
            },
            "start": 1996,
            "end": 2015
          },
          "start": 1995,
          "end": 2015
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1980,
      "end": 2017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2027,
        "end": 2032
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
                "start": 2043,
                "end": 2044
              },
              "typeArguments": null,
              "start": 2036,
              "end": 2044
            },
            "start": 2034,
            "end": 2044
          },
          "start": 2033,
          "end": 2044
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2018,
      "end": 2046
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2067
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2076,
        "end": 2079
      },
      "expression": false,
      "start": 2053,
      "end": 2079
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2090,
        "end": 2095
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
                "start": 2099,
                "end": 2100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2101,
                    "end": 2107
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2109,
                    "end": 2115
                  }
                ],
                "start": 2100,
                "end": 2116
              },
              "start": 2099,
              "end": 2116
            },
            "start": 2097,
            "end": 2116
          },
          "start": 2096,
          "end": 2116
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2081,
      "end": 2118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2133
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
                "start": 2137,
                "end": 2138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2139,
                    "end": 2145
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2147,
                    "end": 2153
                  }
                ],
                "start": 2138,
                "end": 2154
              },
              "start": 2137,
              "end": 2154
            },
            "start": 2135,
            "end": 2154
          },
          "start": 2134,
          "end": 2154
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2119,
      "end": 2156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2175,
        "end": 2180
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
              "start": 2184,
              "end": 2187
            },
            "start": 2182,
            "end": 2187
          },
          "start": 2181,
          "end": 2187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2189,
        "end": 2192
      },
      "expression": false,
      "start": 2166,
      "end": 2192
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2203,
        "end": 2209
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
                "start": 2213,
                "end": 2215
              },
              "typeArguments": null,
              "start": 2213,
              "end": 2215
            },
            "start": 2211,
            "end": 2215
          },
          "start": 2210,
          "end": 2215
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2194,
      "end": 2217
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2227,
        "end": 2233
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
                "start": 2237,
                "end": 2238
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2239,
                    "end": 2245
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2247,
                    "end": 2253
                  }
                ],
                "start": 2238,
                "end": 2254
              },
              "start": 2237,
              "end": 2254
            },
            "start": 2235,
            "end": 2254
          },
          "start": 2234,
          "end": 2254
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2218,
      "end": 2256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2272,
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
              "type": "TSAnyKeyword",
              "start": 2282,
              "end": 2285
            },
            "start": 2280,
            "end": 2285
          },
          "start": 2279,
          "end": 2285
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2287,
        "end": 2290
      },
      "expression": false,
      "start": 2263,
      "end": 2290
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2301,
        "end": 2306
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
                "start": 2310,
                "end": 2311
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2312,
                    "end": 2318
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2320,
                    "end": 2326
                  }
                ],
                "start": 2311,
                "end": 2327
              },
              "start": 2310,
              "end": 2327
            },
            "start": 2308,
            "end": 2327
          },
          "start": 2307,
          "end": 2327
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2292,
      "end": 2329
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2339,
        "end": 2344
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
                "start": 2355,
                "end": 2356
              },
              "typeArguments": null,
              "start": 2348,
              "end": 2356
            },
            "start": 2346,
            "end": 2356
          },
          "start": 2345,
          "end": 2356
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2330,
      "end": 2358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2374,
        "end": 2379
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
              "start": 2383,
              "end": 2386
            },
            "start": 2381,
            "end": 2386
          },
          "start": 2380,
          "end": 2386
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2388,
        "end": 2391
      },
      "expression": false,
      "start": 2365,
      "end": 2391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2402,
        "end": 2407
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
                "start": 2411,
                "end": 2412
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2413,
                    "end": 2419
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2421,
                    "end": 2427
                  }
                ],
                "start": 2412,
                "end": 2428
              },
              "start": 2411,
              "end": 2428
            },
            "start": 2409,
            "end": 2428
          },
          "start": 2408,
          "end": 2428
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2393,
      "end": 2430
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2440,
        "end": 2445
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
                "start": 2456,
                "end": 2457
              },
              "typeArguments": null,
              "start": 2449,
              "end": 2457
            },
            "start": 2447,
            "end": 2457
          },
          "start": 2446,
          "end": 2457
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2431,
      "end": 2459
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2475,
        "end": 2480
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
              "start": 2484,
              "end": 2487
            },
            "start": 2482,
            "end": 2487
          },
          "start": 2481,
          "end": 2487
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2489,
        "end": 2492
      },
      "expression": false,
      "start": 2466,
      "end": 2492
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2503,
        "end": 2508
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
                "start": 2512,
                "end": 2514
              },
              "typeArguments": null,
              "start": 2512,
              "end": 2514
            },
            "start": 2510,
            "end": 2514
          },
          "start": 2509,
          "end": 2514
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2494,
      "end": 2516
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2526,
        "end": 2531
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
                "start": 2535,
                "end": 2536
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2537,
                    "end": 2543
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2545,
                    "end": 2551
                  }
                ],
                "start": 2536,
                "end": 2552
              },
              "start": 2535,
              "end": 2552
            },
            "start": 2533,
            "end": 2552
          },
          "start": 2532,
          "end": 2552
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2517,
      "end": 2554
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2570,
        "end": 2575
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
              "start": 2579,
              "end": 2582
            },
            "start": 2577,
            "end": 2582
          },
          "start": 2576,
          "end": 2582
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2584,
        "end": 2587
      },
      "expression": false,
      "start": 2561,
      "end": 2587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2587
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
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 436,
    "end": 442
  },
  {
    "type": "Null",
    "value": "null",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 454,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 496,
    "end": 502
  },
  {
    "type": "Null",
    "value": "null",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 514,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 538,
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
    "value": "?",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 562,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 647,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
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
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 681,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 697,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 706,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
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
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 748,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 757,
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
    "type": "Identifier",
    "value": "any",
    "start": 765,
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
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 775,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 813,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 833,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 878,
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
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 888,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 897,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 926,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 935,
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
    "value": "x",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 954,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
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
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 982,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1001,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1047,
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
    "value": "I",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1057,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1065,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1111,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1139,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1156,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1163,
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
    "value": "function",
    "start": 1176,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1212,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1231,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1295,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1304,
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
    "value": "x",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1316,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "foo5",
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
    "value": "B",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1343,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1368,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1386,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1395,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1408,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1428,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1452,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1461,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1497,
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
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1501,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1510,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1553,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1571,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1580,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1592,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1638,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1647,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1655,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1665,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1684,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "start": 1702,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1711,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1729,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1745,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1754,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1772,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1781,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1809,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1818,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1828,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1836,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1861,
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
    "value": "any",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1879,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1888,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1907,
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
    "value": "string",
    "start": 2000,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2008,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2018,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "foo11",
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
    "value": "x",
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
    "value": "{",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2081,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2090,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2101,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2109,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2119,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2128,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2139,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2147,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2166,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2175,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2194,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2213,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2218,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2239,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2247,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2263,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2272,
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
    "value": "any",
    "start": 2282,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2292,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2301,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2312,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2320,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2330,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2339,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2348,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2365,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2374,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2383,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2393,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2402,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2413,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2421,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2431,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2440,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2449,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2466,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2475,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2484,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2494,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2503,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2512,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 2517,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2526,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2537,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2545,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2561,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2570,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2579,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2586,
    "end": 2587
  }
]
```
