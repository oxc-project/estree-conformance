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
                  }
                ],
                "start": 352,
                "end": 355
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
                        "start": 359,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 357,
                    "end": 360
                  },
                  "start": 356,
                  "end": 360
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 366,
                      "end": 367
                    },
                    "start": 364,
                    "end": 367
                  },
                  "start": 362,
                  "end": 367
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
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 381,
                      "end": 385
                    },
                    "start": 374,
                    "end": 386
                  }
                ],
                "start": 372,
                "end": 388
              },
              "expression": false,
              "start": 352,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 388
          }
        ],
        "start": 343,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 390
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
        "start": 398,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
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
              "start": 409,
              "end": 412
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
                        "start": 416,
                        "end": 417
                      },
                      "typeArguments": null,
                      "start": 416,
                      "end": 417
                    },
                    "start": 414,
                    "end": 417
                  },
                  "start": 413,
                  "end": 417
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 423,
                      "end": 424
                    },
                    "start": 421,
                    "end": 424
                  },
                  "start": 419,
                  "end": 424
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
                    "start": 427,
                    "end": 428
                  },
                  "typeArguments": null,
                  "start": 427,
                  "end": 428
                },
                "start": 425,
                "end": 428
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
                      "start": 438,
                      "end": 442
                    },
                    "start": 431,
                    "end": 443
                  }
                ],
                "start": 429,
                "end": 445
              },
              "expression": false,
              "start": 412,
              "end": 445
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 409,
            "end": 445
          }
        ],
        "start": 403,
        "end": 447
      },
      "abstract": false,
      "declare": false,
      "start": 392,
      "end": 447
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
              "start": 466,
              "end": 469
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 481
                      },
                      "typeArguments": null,
                      "start": 480,
                      "end": 481
                    },
                    "start": 478,
                    "end": 481
                  },
                  "start": 476,
                  "end": 481
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
                    "start": 484,
                    "end": 485
                  },
                  "typeArguments": null,
                  "start": 484,
                  "end": 485
                },
                "start": 482,
                "end": 485
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
                      "start": 495,
                      "end": 499
                    },
                    "start": 488,
                    "end": 500
                  }
                ],
                "start": 486,
                "end": 502
              },
              "expression": false,
              "start": 469,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 466,
            "end": 502
          }
        ],
        "start": 460,
        "end": 504
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 504
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
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
              "start": 518,
              "end": 519
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 518,
            "end": 519
          }
        ],
        "start": 517,
        "end": 520
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
              "start": 527,
              "end": 530
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
                      "start": 534,
                      "end": 535
                    },
                    "typeArguments": null,
                    "start": 534,
                    "end": 535
                  },
                  "start": 532,
                  "end": 535
                },
                "start": 531,
                "end": 535
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 542
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 542
                  },
                  "start": 539,
                  "end": 542
                },
                "start": 537,
                "end": 542
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
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 527,
            "end": 547
          }
        ],
        "start": 521,
        "end": 549
      },
      "declare": false,
      "start": 506,
      "end": 549
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 563
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
              "start": 570,
              "end": 573
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
                    "start": 574,
                    "end": 575
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 574,
                  "end": 575
                }
              ],
              "start": 573,
              "end": 576
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
                      "start": 580,
                      "end": 581
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 581
                  },
                  "start": 578,
                  "end": 581
                },
                "start": 577,
                "end": 581
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 588
                    },
                    "typeArguments": null,
                    "start": 587,
                    "end": 588
                  },
                  "start": 585,
                  "end": 588
                },
                "start": 583,
                "end": 588
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
                  "start": 591,
                  "end": 592
                },
                "typeArguments": null,
                "start": 591,
                "end": 592
              },
              "start": 589,
              "end": 592
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 593
          }
        ],
        "start": 564,
        "end": 595
      },
      "declare": false,
      "start": 551,
      "end": 595
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
                      "start": 606,
                      "end": 609
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
                            "start": 610,
                            "end": 611
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 610,
                          "end": 611
                        }
                      ],
                      "start": 609,
                      "end": 612
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
                              "start": 616,
                              "end": 617
                            },
                            "typeArguments": null,
                            "start": 616,
                            "end": 617
                          },
                          "start": 614,
                          "end": 617
                        },
                        "start": 613,
                        "end": 617
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 624
                            },
                            "typeArguments": null,
                            "start": 623,
                            "end": 624
                          },
                          "start": 621,
                          "end": 624
                        },
                        "start": 619,
                        "end": 624
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
                          "start": 627,
                          "end": 628
                        },
                        "typeArguments": null,
                        "start": 627,
                        "end": 628
                      },
                      "start": 625,
                      "end": 628
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 606,
                    "end": 628
                  }
                ],
                "start": 604,
                "end": 630
              },
              "start": 602,
              "end": 630
            },
            "start": 601,
            "end": 630
          },
          "init": null,
          "definite": false,
          "start": 601,
          "end": 630
        }
      ],
      "declare": false,
      "start": 597,
      "end": 630
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
            "start": 635,
            "end": 636
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
                  "start": 641,
                  "end": 644
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
                          "start": 645,
                          "end": 646
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 645,
                        "end": 646
                      }
                    ],
                    "start": 644,
                    "end": 647
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
                            "start": 651,
                            "end": 652
                          },
                          "typeArguments": null,
                          "start": 651,
                          "end": 652
                        },
                        "start": 649,
                        "end": 652
                      },
                      "start": 648,
                      "end": 652
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 659
                          },
                          "typeArguments": null,
                          "start": 658,
                          "end": 659
                        },
                        "start": 656,
                        "end": 659
                      },
                      "start": 654,
                      "end": 659
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
                          "start": 670,
                          "end": 671
                        },
                        "start": 663,
                        "end": 672
                      }
                    ],
                    "start": 661,
                    "end": 674
                  },
                  "expression": false,
                  "start": 644,
                  "end": 674
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 641,
                "end": 674
              }
            ],
            "start": 639,
            "end": 676
          },
          "definite": false,
          "start": 635,
          "end": 676
        }
      ],
      "declare": false,
      "start": 631,
      "end": 677
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 688,
        "end": 692
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
                "start": 696,
                "end": 697
              },
              "typeArguments": null,
              "start": 696,
              "end": 697
            },
            "start": 694,
            "end": 697
          },
          "start": 693,
          "end": 697
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 679,
      "end": 699
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 743
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
              "start": 747,
              "end": 750
            },
            "start": 745,
            "end": 750
          },
          "start": 744,
          "end": 750
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 752,
        "end": 755
      },
      "expression": false,
      "start": 730,
      "end": 755
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 771
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
                "start": 775,
                "end": 776
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 777,
                    "end": 783
                  }
                ],
                "start": 776,
                "end": 784
              },
              "start": 775,
              "end": 784
            },
            "start": 773,
            "end": 784
          },
          "start": 772,
          "end": 784
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 757,
      "end": 786
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 796,
        "end": 801
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
                "start": 805,
                "end": 806
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 807,
                    "end": 813
                  }
                ],
                "start": 806,
                "end": 814
              },
              "start": 805,
              "end": 814
            },
            "start": 803,
            "end": 814
          },
          "start": 802,
          "end": 814
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 787,
      "end": 816
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 835,
        "end": 840
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
              "start": 844,
              "end": 847
            },
            "start": 842,
            "end": 847
          },
          "start": 841,
          "end": 847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 849,
        "end": 852
      },
      "expression": false,
      "start": 826,
      "end": 852
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 863,
        "end": 868
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
                "start": 872,
                "end": 873
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 874,
                    "end": 880
                  }
                ],
                "start": 873,
                "end": 881
              },
              "start": 872,
              "end": 881
            },
            "start": 870,
            "end": 881
          },
          "start": 869,
          "end": 881
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 854,
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
                  }
                ],
                "start": 903,
                "end": 911
              },
              "start": 902,
              "end": 911
            },
            "start": 900,
            "end": 911
          },
          "start": 899,
          "end": 911
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 884,
      "end": 913
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 932,
        "end": 937
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
              "start": 941,
              "end": 944
            },
            "start": 939,
            "end": 944
          },
          "start": 938,
          "end": 944
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 949
      },
      "expression": false,
      "start": 923,
      "end": 949
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 964
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
                "start": 968,
                "end": 969
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 970,
                    "end": 976
                  }
                ],
                "start": 969,
                "end": 977
              },
              "start": 968,
              "end": 977
            },
            "start": 966,
            "end": 977
          },
          "start": 965,
          "end": 977
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 951,
      "end": 979
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 989,
        "end": 993
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
                "start": 997,
                "end": 998
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 999,
                    "end": 1005
                  }
                ],
                "start": 998,
                "end": 1006
              },
              "start": 997,
              "end": 1006
            },
            "start": 995,
            "end": 1006
          },
          "start": 994,
          "end": 1006
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 980,
      "end": 1008
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1027,
        "end": 1031
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
              "start": 1035,
              "end": 1038
            },
            "start": 1033,
            "end": 1038
          },
          "start": 1032,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1040,
        "end": 1043
      },
      "expression": false,
      "start": 1018,
      "end": 1043
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1054,
        "end": 1058
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
                "start": 1069,
                "end": 1070
              },
              "typeArguments": null,
              "start": 1062,
              "end": 1070
            },
            "start": 1060,
            "end": 1070
          },
          "start": 1059,
          "end": 1070
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1045,
      "end": 1072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1086
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
                "start": 1097,
                "end": 1098
              },
              "typeArguments": null,
              "start": 1090,
              "end": 1098
            },
            "start": 1088,
            "end": 1098
          },
          "start": 1087,
          "end": 1098
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1073,
      "end": 1100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1119,
        "end": 1123
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
              "start": 1127,
              "end": 1130
            },
            "start": 1125,
            "end": 1130
          },
          "start": 1124,
          "end": 1130
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1132,
        "end": 1135
      },
      "expression": false,
      "start": 1110,
      "end": 1135
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1150
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
                "start": 1161,
                "end": 1162
              },
              "typeArguments": null,
              "start": 1154,
              "end": 1162
            },
            "start": 1152,
            "end": 1162
          },
          "start": 1151,
          "end": 1162
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1137,
      "end": 1164
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1178
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
                "start": 1189,
                "end": 1190
              },
              "typeArguments": null,
              "start": 1182,
              "end": 1190
            },
            "start": 1180,
            "end": 1190
          },
          "start": 1179,
          "end": 1190
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1165,
      "end": 1192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1215
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
              "start": 1219,
              "end": 1222
            },
            "start": 1217,
            "end": 1222
          },
          "start": 1216,
          "end": 1222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1224,
        "end": 1227
      },
      "expression": false,
      "start": 1202,
      "end": 1227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1242
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
                "start": 1246,
                "end": 1247
              },
              "typeArguments": null,
              "start": 1246,
              "end": 1247
            },
            "start": 1244,
            "end": 1247
          },
          "start": 1243,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1229,
      "end": 1249
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1263
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
                "start": 1267,
                "end": 1268
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1269,
                    "end": 1275
                  }
                ],
                "start": 1268,
                "end": 1276
              },
              "start": 1267,
              "end": 1276
            },
            "start": 1265,
            "end": 1276
          },
          "start": 1264,
          "end": 1276
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1250,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1298
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
              "start": 1302,
              "end": 1305
            },
            "start": 1300,
            "end": 1305
          },
          "start": 1299,
          "end": 1305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1307,
        "end": 1310
      },
      "expression": false,
      "start": 1285,
      "end": 1310
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1326
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
                "start": 1330,
                "end": 1331
              },
              "typeArguments": null,
              "start": 1330,
              "end": 1331
            },
            "start": 1328,
            "end": 1331
          },
          "start": 1327,
          "end": 1331
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1312,
      "end": 1333
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1348
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
                "start": 1352,
                "end": 1353
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1354,
                    "end": 1360
                  }
                ],
                "start": 1353,
                "end": 1361
              },
              "start": 1352,
              "end": 1361
            },
            "start": 1350,
            "end": 1361
          },
          "start": 1349,
          "end": 1361
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1334,
      "end": 1363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1384
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
              "start": 1388,
              "end": 1391
            },
            "start": 1386,
            "end": 1391
          },
          "start": 1385,
          "end": 1391
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1393,
        "end": 1396
      },
      "expression": false,
      "start": 1370,
      "end": 1396
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1407,
        "end": 1411
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
                "start": 1415,
                "end": 1416
              },
              "typeArguments": null,
              "start": 1415,
              "end": 1416
            },
            "start": 1413,
            "end": 1416
          },
          "start": 1412,
          "end": 1416
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1398,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1428,
        "end": 1432
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
                "start": 1436,
                "end": 1437
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1438,
                    "end": 1444
                  }
                ],
                "start": 1437,
                "end": 1445
              },
              "start": 1436,
              "end": 1445
            },
            "start": 1434,
            "end": 1445
          },
          "start": 1433,
          "end": 1445
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1419,
      "end": 1447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1463,
        "end": 1467
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
              "start": 1471,
              "end": 1474
            },
            "start": 1469,
            "end": 1474
          },
          "start": 1468,
          "end": 1474
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1476,
        "end": 1479
      },
      "expression": false,
      "start": 1454,
      "end": 1479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1494
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
                "start": 1498,
                "end": 1499
              },
              "typeArguments": null,
              "start": 1498,
              "end": 1499
            },
            "start": 1496,
            "end": 1499
          },
          "start": 1495,
          "end": 1499
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1481,
      "end": 1501
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1511,
        "end": 1515
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
                "start": 1526,
                "end": 1527
              },
              "typeArguments": null,
              "start": 1519,
              "end": 1527
            },
            "start": 1517,
            "end": 1527
          },
          "start": 1516,
          "end": 1527
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1502,
      "end": 1529
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1561
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
              "start": 1565,
              "end": 1568
            },
            "start": 1563,
            "end": 1568
          },
          "start": 1562,
          "end": 1568
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1570,
        "end": 1573
      },
      "expression": false,
      "start": 1548,
      "end": 1573
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1592,
                "end": 1593
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1594,
                    "end": 1600
                  }
                ],
                "start": 1593,
                "end": 1601
              },
              "start": 1592,
              "end": 1601
            },
            "start": 1590,
            "end": 1601
          },
          "start": 1589,
          "end": 1601
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1575,
      "end": 1603
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1613,
        "end": 1617
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
                "start": 1621,
                "end": 1622
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1623,
                    "end": 1629
                  }
                ],
                "start": 1622,
                "end": 1630
              },
              "start": 1621,
              "end": 1630
            },
            "start": 1619,
            "end": 1630
          },
          "start": 1618,
          "end": 1630
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1604,
      "end": 1632
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1651,
        "end": 1655
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
              "start": 1659,
              "end": 1662
            },
            "start": 1657,
            "end": 1662
          },
          "start": 1656,
          "end": 1662
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1664,
        "end": 1667
      },
      "expression": false,
      "start": 1642,
      "end": 1667
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1678,
        "end": 1682
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
                "start": 1686,
                "end": 1687
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1688,
                    "end": 1694
                  }
                ],
                "start": 1687,
                "end": 1695
              },
              "start": 1686,
              "end": 1695
            },
            "start": 1684,
            "end": 1695
          },
          "start": 1683,
          "end": 1695
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1669,
      "end": 1697
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1707,
        "end": 1711
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
                "start": 1715,
                "end": 1716
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1717,
                    "end": 1723
                  }
                ],
                "start": 1716,
                "end": 1724
              },
              "start": 1715,
              "end": 1724
            },
            "start": 1713,
            "end": 1724
          },
          "start": 1712,
          "end": 1724
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1698,
      "end": 1726
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1745,
        "end": 1749
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
              "start": 1753,
              "end": 1756
            },
            "start": 1751,
            "end": 1756
          },
          "start": 1750,
          "end": 1756
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1758,
        "end": 1761
      },
      "expression": false,
      "start": 1736,
      "end": 1761
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1777
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
                "start": 1781,
                "end": 1782
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1783,
                    "end": 1789
                  }
                ],
                "start": 1782,
                "end": 1790
              },
              "start": 1781,
              "end": 1790
            },
            "start": 1779,
            "end": 1790
          },
          "start": 1778,
          "end": 1790
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1763,
      "end": 1792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1807
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
                "start": 1818,
                "end": 1819
              },
              "typeArguments": null,
              "start": 1811,
              "end": 1819
            },
            "start": 1809,
            "end": 1819
          },
          "start": 1808,
          "end": 1819
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1793,
      "end": 1821
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1837,
        "end": 1842
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
              "start": 1846,
              "end": 1849
            },
            "start": 1844,
            "end": 1849
          },
          "start": 1843,
          "end": 1849
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1851,
        "end": 1854
      },
      "expression": false,
      "start": 1828,
      "end": 1854
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1874,
                "end": 1875
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1876,
                    "end": 1882
                  }
                ],
                "start": 1875,
                "end": 1883
              },
              "start": 1874,
              "end": 1883
            },
            "start": 1872,
            "end": 1883
          },
          "start": 1871,
          "end": 1883
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1856,
      "end": 1885
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1895,
        "end": 1900
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
                "start": 1911,
                "end": 1912
              },
              "typeArguments": null,
              "start": 1904,
              "end": 1912
            },
            "start": 1902,
            "end": 1912
          },
          "start": 1901,
          "end": 1912
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1886,
      "end": 1914
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1930,
        "end": 1935
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
              "start": 1939,
              "end": 1942
            },
            "start": 1937,
            "end": 1942
          },
          "start": 1936,
          "end": 1942
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1944,
        "end": 1947
      },
      "expression": false,
      "start": 1921,
      "end": 1947
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1967,
                "end": 1968
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1969,
                    "end": 1975
                  }
                ],
                "start": 1968,
                "end": 1976
              },
              "start": 1967,
              "end": 1976
            },
            "start": 1965,
            "end": 1976
          },
          "start": 1964,
          "end": 1976
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1949,
      "end": 1978
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1988,
        "end": 1993
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
                "start": 1997,
                "end": 1998
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1999,
                    "end": 2005
                  }
                ],
                "start": 1998,
                "end": 2006
              },
              "start": 1997,
              "end": 2006
            },
            "start": 1995,
            "end": 2006
          },
          "start": 1994,
          "end": 2006
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1979,
      "end": 2008
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
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
              "type": "TSAnyKeyword",
              "start": 2036,
              "end": 2039
            },
            "start": 2034,
            "end": 2039
          },
          "start": 2033,
          "end": 2039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2041,
        "end": 2044
      },
      "expression": false,
      "start": 2018,
      "end": 2044
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2055,
        "end": 2061
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
                "start": 2065,
                "end": 2067
              },
              "typeArguments": null,
              "start": 2065,
              "end": 2067
            },
            "start": 2063,
            "end": 2067
          },
          "start": 2062,
          "end": 2067
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2046,
      "end": 2069
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2079,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2089,
                "end": 2090
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2091,
                    "end": 2097
                  }
                ],
                "start": 2090,
                "end": 2098
              },
              "start": 2089,
              "end": 2098
            },
            "start": 2087,
            "end": 2098
          },
          "start": 2086,
          "end": 2098
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2070,
      "end": 2100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2116,
        "end": 2122
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
              "start": 2126,
              "end": 2129
            },
            "start": 2124,
            "end": 2129
          },
          "start": 2123,
          "end": 2129
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2131,
        "end": 2134
      },
      "expression": false,
      "start": 2107,
      "end": 2134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2145,
        "end": 2150
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
                "start": 2154,
                "end": 2155
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2156,
                    "end": 2162
                  }
                ],
                "start": 2155,
                "end": 2163
              },
              "start": 2154,
              "end": 2163
            },
            "start": 2152,
            "end": 2163
          },
          "start": 2151,
          "end": 2163
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2136,
      "end": 2165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2191,
                "end": 2192
              },
              "typeArguments": null,
              "start": 2184,
              "end": 2192
            },
            "start": 2182,
            "end": 2192
          },
          "start": 2181,
          "end": 2192
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2166,
      "end": 2194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2210,
        "end": 2215
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
              "start": 2219,
              "end": 2222
            },
            "start": 2217,
            "end": 2222
          },
          "start": 2216,
          "end": 2222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2224,
        "end": 2227
      },
      "expression": false,
      "start": 2201,
      "end": 2227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2238,
        "end": 2243
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
                "start": 2247,
                "end": 2248
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2249,
                    "end": 2255
                  }
                ],
                "start": 2248,
                "end": 2256
              },
              "start": 2247,
              "end": 2256
            },
            "start": 2245,
            "end": 2256
          },
          "start": 2244,
          "end": 2256
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2229,
      "end": 2258
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2268,
        "end": 2273
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
                "start": 2284,
                "end": 2285
              },
              "typeArguments": null,
              "start": 2277,
              "end": 2285
            },
            "start": 2275,
            "end": 2285
          },
          "start": 2274,
          "end": 2285
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2259,
      "end": 2287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
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
              "type": "TSAnyKeyword",
              "start": 2312,
              "end": 2315
            },
            "start": 2310,
            "end": 2315
          },
          "start": 2309,
          "end": 2315
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2317,
        "end": 2320
      },
      "expression": false,
      "start": 2294,
      "end": 2320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2331,
        "end": 2336
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
                "start": 2340,
                "end": 2342
              },
              "typeArguments": null,
              "start": 2340,
              "end": 2342
            },
            "start": 2338,
            "end": 2342
          },
          "start": 2337,
          "end": 2342
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2322,
      "end": 2344
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2354,
        "end": 2359
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
                "start": 2363,
                "end": 2364
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2365,
                    "end": 2371
                  }
                ],
                "start": 2364,
                "end": 2372
              },
              "start": 2363,
              "end": 2372
            },
            "start": 2361,
            "end": 2372
          },
          "start": 2360,
          "end": 2372
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2345,
      "end": 2374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2390,
        "end": 2395
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
              "start": 2399,
              "end": 2402
            },
            "start": 2397,
            "end": 2402
          },
          "start": 2396,
          "end": 2402
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2404,
        "end": 2407
      },
      "expression": false,
      "start": 2381,
      "end": 2407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2407
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
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "T",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 374,
    "end": 380
  },
  {
    "type": "Null",
    "value": "null",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 431,
    "end": 437
  },
  {
    "type": "Null",
    "value": "null",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 449,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "foo",
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
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 488,
    "end": 494
  },
  {
    "type": "Null",
    "value": "null",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 506,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 551,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "T",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
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
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 663,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 679,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
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
    "start": 730,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 739,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 757,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 766,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 787,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 826,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 854,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 923,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 932,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 941,
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
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 951,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 960,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 970,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 980,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1018,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1027,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1035,
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
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1045,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1054,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "function",
    "start": 1073,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1110,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1165,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1174,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1202,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1229,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1250,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1312,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1321,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1334,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 1370,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1379,
    "end": 1384
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
    "value": "any",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1398,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1419,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1428,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1454,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1481,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1498,
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
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1502,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1548,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1557,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1575,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "foo8",
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
    "value": "B",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1594,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1604,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1613,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1623,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1642,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1669,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1678,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1688,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1698,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1736,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1753,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1763,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1793,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1811,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1818,
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
    "value": ";",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1828,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1837,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1846,
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
    "value": "{",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1856,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "foo11",
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
    "type": "Identifier",
    "value": "B",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1876,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1886,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1895,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1904,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1911,
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
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1921,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1949,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "foo12",
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
    "type": "Identifier",
    "value": "I",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1969,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1979,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1988,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1999,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2018,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "foo12",
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
    "type": "Identifier",
    "value": "any",
    "start": 2036,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2046,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2055,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2065,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2070,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2079,
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
    "value": "C",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2091,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2107,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2116,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2126,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2136,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2145,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "start": 2166,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "foo13",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 2184,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2201,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2219,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2229,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2238,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2249,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2259,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2268,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2277,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2284,
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
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2294,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "foo14",
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
    "type": "Identifier",
    "value": "any",
    "start": 2312,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2322,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2331,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2340,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2345,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2354,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2365,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2381,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2390,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2399,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407
  }
]
```
