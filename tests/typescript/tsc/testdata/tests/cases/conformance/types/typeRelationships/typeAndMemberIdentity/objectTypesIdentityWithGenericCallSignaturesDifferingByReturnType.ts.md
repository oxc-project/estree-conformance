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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 363,
                  "end": 369
                },
                "start": 361,
                "end": 369
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
              "start": 352,
              "end": 386
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 386
          }
        ],
        "start": 343,
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
        "name": "B",
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 410
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
                        "start": 414,
                        "end": 415
                      },
                      "typeArguments": null,
                      "start": 414,
                      "end": 415
                    },
                    "start": 412,
                    "end": 415
                  },
                  "start": 411,
                  "end": 415
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 418,
                  "end": 424
                },
                "start": 416,
                "end": 424
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
              "start": 410,
              "end": 441
            },
            "kind": "method",
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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 452
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
              "start": 453,
              "end": 454
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 453,
            "end": 454
          }
        ],
        "start": 452,
        "end": 455
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
              "start": 462,
              "end": 465
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
                        "start": 469,
                        "end": 470
                      },
                      "typeArguments": null,
                      "start": 469,
                      "end": 470
                    },
                    "start": 467,
                    "end": 470
                  },
                  "start": 466,
                  "end": 470
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 473,
                  "end": 480
                },
                "start": 471,
                "end": 480
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
                      "start": 490,
                      "end": 494
                    },
                    "start": 483,
                    "end": 495
                  }
                ],
                "start": 481,
                "end": 497
              },
              "expression": false,
              "start": 465,
              "end": 497
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 462,
            "end": 497
          }
        ],
        "start": 456,
        "end": 499
      },
      "abstract": false,
      "declare": false,
      "start": 445,
      "end": 499
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 512
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
              "start": 513,
              "end": 514
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 513,
            "end": 514
          }
        ],
        "start": 512,
        "end": 515
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
              "start": 522,
              "end": 525
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
                      "start": 529,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 530
                  },
                  "start": 527,
                  "end": 530
                },
                "start": 526,
                "end": 530
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
                  "start": 533,
                  "end": 537
                },
                "typeArguments": null,
                "start": 533,
                "end": 537
              },
              "start": 531,
              "end": 537
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 522,
            "end": 538
          }
        ],
        "start": 516,
        "end": 540
      },
      "declare": false,
      "start": 501,
      "end": 540
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 554
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
              "start": 561,
              "end": 564
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
                    "start": 565,
                    "end": 566
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 565,
                  "end": 566
                }
              ],
              "start": 564,
              "end": 567
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
                      "start": 571,
                      "end": 572
                    },
                    "typeArguments": null,
                    "start": 571,
                    "end": 572
                  },
                  "start": 569,
                  "end": 572
                },
                "start": 568,
                "end": 572
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
                  "start": 575,
                  "end": 581
                },
                "typeArguments": null,
                "start": 575,
                "end": 581
              },
              "start": 573,
              "end": 581
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 561,
            "end": 582
          }
        ],
        "start": 555,
        "end": 584
      },
      "declare": false,
      "start": 542,
      "end": 584
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
                      "start": 595,
                      "end": 598
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
                            "start": 599,
                            "end": 600
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 599,
                          "end": 600
                        }
                      ],
                      "start": 598,
                      "end": 601
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
                              "start": 605,
                              "end": 606
                            },
                            "typeArguments": null,
                            "start": 605,
                            "end": 606
                          },
                          "start": 603,
                          "end": 606
                        },
                        "start": 602,
                        "end": 606
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
                          "start": 609,
                          "end": 610
                        },
                        "typeArguments": null,
                        "start": 609,
                        "end": 610
                      },
                      "start": 607,
                      "end": 610
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 595,
                    "end": 610
                  }
                ],
                "start": 593,
                "end": 612
              },
              "start": 591,
              "end": 612
            },
            "start": 590,
            "end": 612
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 612
        }
      ],
      "declare": false,
      "start": 586,
      "end": 612
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
            "start": 617,
            "end": 618
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
                  "start": 623,
                  "end": 626
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
                          "start": 627,
                          "end": 628
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 627,
                        "end": 628
                      }
                    ],
                    "start": 626,
                    "end": 629
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
                            "start": 633,
                            "end": 634
                          },
                          "typeArguments": null,
                          "start": 633,
                          "end": 634
                        },
                        "start": 631,
                        "end": 634
                      },
                      "start": 630,
                      "end": 634
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
                          "start": 645,
                          "end": 649
                        },
                        "start": 638,
                        "end": 650
                      }
                    ],
                    "start": 636,
                    "end": 652
                  },
                  "expression": false,
                  "start": 626,
                  "end": 652
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 623,
                "end": 652
              }
            ],
            "start": 621,
            "end": 654
          },
          "definite": false,
          "start": 617,
          "end": 654
        }
      ],
      "declare": false,
      "start": 613,
      "end": 655
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 670
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 674,
                "end": 675
              },
              "typeArguments": null,
              "start": 674,
              "end": 675
            },
            "start": 672,
            "end": 675
          },
          "start": 671,
          "end": 675
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 657,
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
        "start": 687,
        "end": 691
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 695,
                "end": 696
              },
              "typeArguments": null,
              "start": 695,
              "end": 696
            },
            "start": 693,
            "end": 696
          },
          "start": 692,
          "end": 696
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 678,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 721
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          "start": 722,
          "end": 728
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 730,
        "end": 733
      },
      "expression": false,
      "start": 708,
      "end": 733
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 744,
        "end": 749
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 753,
                "end": 754
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 755,
                    "end": 761
                  }
                ],
                "start": 754,
                "end": 762
              },
              "start": 753,
              "end": 762
            },
            "start": 751,
            "end": 762
          },
          "start": 750,
          "end": 762
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 735,
      "end": 764
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 779
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 783,
                "end": 784
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 785,
                    "end": 791
                  }
                ],
                "start": 784,
                "end": 792
              },
              "start": 783,
              "end": 792
            },
            "start": 781,
            "end": 792
          },
          "start": 780,
          "end": 792
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 765,
      "end": 794
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 813,
        "end": 818
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 822,
              "end": 825
            },
            "start": 820,
            "end": 825
          },
          "start": 819,
          "end": 825
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 827,
        "end": 830
      },
      "expression": false,
      "start": 804,
      "end": 830
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 846
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 850,
                "end": 851
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 852,
                    "end": 858
                  }
                ],
                "start": 851,
                "end": 859
              },
              "start": 850,
              "end": 859
            },
            "start": 848,
            "end": 859
          },
          "start": 847,
          "end": 859
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 832,
      "end": 861
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 876
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 880,
                "end": 881
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 882,
                    "end": 888
                  }
                ],
                "start": 881,
                "end": 889
              },
              "start": 880,
              "end": 889
            },
            "start": 878,
            "end": 889
          },
          "start": 877,
          "end": 889
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 862,
      "end": 891
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 915
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 919,
              "end": 922
            },
            "start": 917,
            "end": 922
          },
          "start": 916,
          "end": 922
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 924,
        "end": 927
      },
      "expression": false,
      "start": 901,
      "end": 927
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 942
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 946,
                "end": 947
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 948,
                    "end": 954
                  }
                ],
                "start": 947,
                "end": 955
              },
              "start": 946,
              "end": 955
            },
            "start": 944,
            "end": 955
          },
          "start": 943,
          "end": 955
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 929,
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
        "start": 967,
        "end": 971
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 975,
                "end": 976
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 977,
                    "end": 983
                  }
                ],
                "start": 976,
                "end": 984
              },
              "start": 975,
              "end": 984
            },
            "start": 973,
            "end": 984
          },
          "start": 972,
          "end": 984
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 958,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
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
              "type": "TSAnyKeyword",
              "start": 1013,
              "end": 1016
            },
            "start": 1011,
            "end": 1016
          },
          "start": 1010,
          "end": 1016
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1018,
        "end": 1021
      },
      "expression": false,
      "start": 996,
      "end": 1021
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1036
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1047,
                "end": 1048
              },
              "typeArguments": null,
              "start": 1040,
              "end": 1048
            },
            "start": 1038,
            "end": 1048
          },
          "start": 1037,
          "end": 1048
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1023,
      "end": 1050
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1060,
        "end": 1064
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1075,
                "end": 1076
              },
              "typeArguments": null,
              "start": 1068,
              "end": 1076
            },
            "start": 1066,
            "end": 1076
          },
          "start": 1065,
          "end": 1076
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1051,
      "end": 1078
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1101
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1105,
              "end": 1108
            },
            "start": 1103,
            "end": 1108
          },
          "start": 1102,
          "end": 1108
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1110,
        "end": 1113
      },
      "expression": false,
      "start": 1088,
      "end": 1113
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1124,
        "end": 1128
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1139,
                "end": 1140
              },
              "typeArguments": null,
              "start": 1132,
              "end": 1140
            },
            "start": 1130,
            "end": 1140
          },
          "start": 1129,
          "end": 1140
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1115,
      "end": 1142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1156
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1167,
                "end": 1168
              },
              "typeArguments": null,
              "start": 1160,
              "end": 1168
            },
            "start": 1158,
            "end": 1168
          },
          "start": 1157,
          "end": 1168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1143,
      "end": 1170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1197,
              "end": 1200
            },
            "start": 1195,
            "end": 1200
          },
          "start": 1194,
          "end": 1200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1202,
        "end": 1205
      },
      "expression": false,
      "start": 1180,
      "end": 1205
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1220
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1224,
                "end": 1225
              },
              "typeArguments": null,
              "start": 1224,
              "end": 1225
            },
            "start": 1222,
            "end": 1225
          },
          "start": 1221,
          "end": 1225
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1207,
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
        "start": 1237,
        "end": 1241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1245,
                "end": 1246
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1247,
                    "end": 1253
                  }
                ],
                "start": 1246,
                "end": 1254
              },
              "start": 1245,
              "end": 1254
            },
            "start": 1243,
            "end": 1254
          },
          "start": 1242,
          "end": 1254
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1228,
      "end": 1256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1276
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1280,
              "end": 1283
            },
            "start": 1278,
            "end": 1283
          },
          "start": 1277,
          "end": 1283
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1285,
        "end": 1288
      },
      "expression": false,
      "start": 1263,
      "end": 1288
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1304
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "start": 1305,
          "end": 1309
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1290,
      "end": 1311
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1331
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1332,
                    "end": 1338
                  }
                ],
                "start": 1331,
                "end": 1339
              },
              "start": 1330,
              "end": 1339
            },
            "start": 1328,
            "end": 1339
          },
          "start": 1327,
          "end": 1339
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1312,
      "end": 1341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1362
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1366,
              "end": 1369
            },
            "start": 1364,
            "end": 1369
          },
          "start": 1363,
          "end": 1369
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1371,
        "end": 1374
      },
      "expression": false,
      "start": 1348,
      "end": 1374
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1385,
        "end": 1389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1393,
                "end": 1394
              },
              "typeArguments": null,
              "start": 1393,
              "end": 1394
            },
            "start": 1391,
            "end": 1394
          },
          "start": 1390,
          "end": 1394
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1376,
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
        "start": 1406,
        "end": 1410
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1414,
                "end": 1415
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1416,
                    "end": 1422
                  }
                ],
                "start": 1415,
                "end": 1423
              },
              "start": 1414,
              "end": 1423
            },
            "start": 1412,
            "end": 1423
          },
          "start": 1411,
          "end": 1423
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1397,
      "end": 1425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1441,
        "end": 1445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1449,
              "end": 1452
            },
            "start": 1447,
            "end": 1452
          },
          "start": 1446,
          "end": 1452
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1454,
        "end": 1457
      },
      "expression": false,
      "start": 1432,
      "end": 1457
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1472
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1476,
                "end": 1477
              },
              "typeArguments": null,
              "start": 1476,
              "end": 1477
            },
            "start": 1474,
            "end": 1477
          },
          "start": 1473,
          "end": 1477
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1459,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1504,
                "end": 1505
              },
              "typeArguments": null,
              "start": 1497,
              "end": 1505
            },
            "start": 1495,
            "end": 1505
          },
          "start": 1494,
          "end": 1505
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1480,
      "end": 1507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1527
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1531,
              "end": 1534
            },
            "start": 1529,
            "end": 1534
          },
          "start": 1528,
          "end": 1534
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1536,
        "end": 1539
      },
      "expression": false,
      "start": 1514,
      "end": 1539
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1550,
        "end": 1554
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1558,
                "end": 1559
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1560,
                    "end": 1566
                  }
                ],
                "start": 1559,
                "end": 1567
              },
              "start": 1558,
              "end": 1567
            },
            "start": 1556,
            "end": 1567
          },
          "start": 1555,
          "end": 1567
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1541,
      "end": 1569
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1587,
                "end": 1588
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1589,
                    "end": 1595
                  }
                ],
                "start": 1588,
                "end": 1596
              },
              "start": 1587,
              "end": 1596
            },
            "start": 1585,
            "end": 1596
          },
          "start": 1584,
          "end": 1596
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1570,
      "end": 1598
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1614,
        "end": 1618
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1622,
              "end": 1625
            },
            "start": 1620,
            "end": 1625
          },
          "start": 1619,
          "end": 1625
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1627,
        "end": 1630
      },
      "expression": false,
      "start": 1605,
      "end": 1630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1645
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1649,
                "end": 1650
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1651,
                    "end": 1657
                  }
                ],
                "start": 1650,
                "end": 1658
              },
              "start": 1649,
              "end": 1658
            },
            "start": 1647,
            "end": 1658
          },
          "start": 1646,
          "end": 1658
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1632,
      "end": 1660
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1670,
        "end": 1674
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1678,
                "end": 1679
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1680,
                    "end": 1686
                  }
                ],
                "start": 1679,
                "end": 1687
              },
              "start": 1678,
              "end": 1687
            },
            "start": 1676,
            "end": 1687
          },
          "start": 1675,
          "end": 1687
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1661,
      "end": 1689
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1705,
        "end": 1709
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1713,
              "end": 1716
            },
            "start": 1711,
            "end": 1716
          },
          "start": 1710,
          "end": 1716
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1718,
        "end": 1721
      },
      "expression": false,
      "start": 1696,
      "end": 1721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1737
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1741,
                "end": 1742
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1743,
                    "end": 1749
                  }
                ],
                "start": 1742,
                "end": 1750
              },
              "start": 1741,
              "end": 1750
            },
            "start": 1739,
            "end": 1750
          },
          "start": 1738,
          "end": 1750
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1723,
      "end": 1752
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1762,
        "end": 1767
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1778,
                "end": 1779
              },
              "typeArguments": null,
              "start": 1771,
              "end": 1779
            },
            "start": 1769,
            "end": 1779
          },
          "start": 1768,
          "end": 1779
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1753,
      "end": 1781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1802
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1806,
              "end": 1809
            },
            "start": 1804,
            "end": 1809
          },
          "start": 1803,
          "end": 1809
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1811,
        "end": 1814
      },
      "expression": false,
      "start": 1788,
      "end": 1814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1825,
        "end": 1830
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1834,
                "end": 1835
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1836,
                    "end": 1842
                  }
                ],
                "start": 1835,
                "end": 1843
              },
              "start": 1834,
              "end": 1843
            },
            "start": 1832,
            "end": 1843
          },
          "start": 1831,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1816,
      "end": 1845
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1855,
        "end": 1860
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1871,
                "end": 1872
              },
              "typeArguments": null,
              "start": 1864,
              "end": 1872
            },
            "start": 1862,
            "end": 1872
          },
          "start": 1861,
          "end": 1872
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1846,
      "end": 1874
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1890,
        "end": 1895
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1899,
              "end": 1902
            },
            "start": 1897,
            "end": 1902
          },
          "start": 1896,
          "end": 1902
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1904,
        "end": 1907
      },
      "expression": false,
      "start": 1881,
      "end": 1907
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1918,
        "end": 1923
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1927,
                "end": 1928
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1929,
                    "end": 1935
                  }
                ],
                "start": 1928,
                "end": 1936
              },
              "start": 1927,
              "end": 1936
            },
            "start": 1925,
            "end": 1936
          },
          "start": 1924,
          "end": 1936
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1909,
      "end": 1938
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1948,
        "end": 1953
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1957,
                "end": 1958
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1959,
                    "end": 1965
                  }
                ],
                "start": 1958,
                "end": 1966
              },
              "start": 1957,
              "end": 1966
            },
            "start": 1955,
            "end": 1966
          },
          "start": 1954,
          "end": 1966
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1939,
      "end": 1968
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 1989
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1993,
              "end": 1996
            },
            "start": 1991,
            "end": 1996
          },
          "start": 1990,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1998,
        "end": 2001
      },
      "expression": false,
      "start": 1975,
      "end": 2001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2018
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2022,
                "end": 2024
              },
              "typeArguments": null,
              "start": 2022,
              "end": 2024
            },
            "start": 2020,
            "end": 2024
          },
          "start": 2019,
          "end": 2024
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2003,
      "end": 2026
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2036,
        "end": 2042
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2046,
                "end": 2047
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2048,
                    "end": 2054
                  }
                ],
                "start": 2047,
                "end": 2055
              },
              "start": 2046,
              "end": 2055
            },
            "start": 2044,
            "end": 2055
          },
          "start": 2043,
          "end": 2055
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2027,
      "end": 2057
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2073,
        "end": 2079
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2083,
              "end": 2086
            },
            "start": 2081,
            "end": 2086
          },
          "start": 2080,
          "end": 2086
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2088,
        "end": 2091
      },
      "expression": false,
      "start": 2064,
      "end": 2091
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2107
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2111,
                "end": 2112
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2113,
                    "end": 2119
                  }
                ],
                "start": 2112,
                "end": 2120
              },
              "start": 2111,
              "end": 2120
            },
            "start": 2109,
            "end": 2120
          },
          "start": 2108,
          "end": 2120
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2093,
      "end": 2122
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2132,
        "end": 2137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2148,
                "end": 2149
              },
              "typeArguments": null,
              "start": 2141,
              "end": 2149
            },
            "start": 2139,
            "end": 2149
          },
          "start": 2138,
          "end": 2149
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2123,
      "end": 2151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2167,
        "end": 2172
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2176,
              "end": 2179
            },
            "start": 2174,
            "end": 2179
          },
          "start": 2173,
          "end": 2179
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2181,
        "end": 2184
      },
      "expression": false,
      "start": 2158,
      "end": 2184
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2195,
        "end": 2200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2204,
                "end": 2205
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2206,
                    "end": 2212
                  }
                ],
                "start": 2205,
                "end": 2213
              },
              "start": 2204,
              "end": 2213
            },
            "start": 2202,
            "end": 2213
          },
          "start": 2201,
          "end": 2213
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2186,
      "end": 2215
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2225,
        "end": 2230
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2241,
                "end": 2242
              },
              "typeArguments": null,
              "start": 2234,
              "end": 2242
            },
            "start": 2232,
            "end": 2242
          },
          "start": 2231,
          "end": 2242
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2216,
      "end": 2244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2260,
        "end": 2265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2269,
              "end": 2272
            },
            "start": 2267,
            "end": 2272
          },
          "start": 2266,
          "end": 2272
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2274,
        "end": 2277
      },
      "expression": false,
      "start": 2251,
      "end": 2277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2288,
        "end": 2293
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2297,
                "end": 2299
              },
              "typeArguments": null,
              "start": 2297,
              "end": 2299
            },
            "start": 2295,
            "end": 2299
          },
          "start": 2294,
          "end": 2299
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2279,
      "end": 2301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2311,
        "end": 2316
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2320,
                "end": 2321
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2322,
                    "end": 2328
                  }
                ],
                "start": 2321,
                "end": 2329
              },
              "start": 2320,
              "end": 2329
            },
            "start": 2318,
            "end": 2329
          },
          "start": 2317,
          "end": 2329
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2302,
      "end": 2331
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2347,
        "end": 2352
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2356,
              "end": 2359
            },
            "start": 2354,
            "end": 2359
          },
          "start": 2353,
          "end": 2359
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2361,
        "end": 2364
      },
      "expression": false,
      "start": 2338,
      "end": 2364
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2364
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
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 363,
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
    "value": "B",
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
    "value": "foo",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 418,
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
    "value": "class",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "boolean",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 483,
    "end": 489
  },
  {
    "type": "Null",
    "value": "null",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 501,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 542,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
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
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
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
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644
  },
  {
    "type": "Null",
    "value": "null",
    "start": 645,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 657,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 678,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 695,
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
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 708,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 735,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 744,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 765,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 804,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 813,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 832,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 862,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 882,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 958,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 967,
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
    "value": "I",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
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
    "value": "any",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1023,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1051,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1068,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1097,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1143,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1180,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1207,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1228,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1263,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
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
    "value": "C",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1366,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1376,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1397,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1416,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1432,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1441,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1449,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1459,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1468,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "foo7",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1514,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1523,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1531,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1541,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1550,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1560,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1566,
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
    "value": ";",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1570,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1579,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1605,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1632,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1641,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1651,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1657,
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
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1661,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1670,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1680,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1696,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1705,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1723,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1732,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1753,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1762,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1771,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1788,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1797,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1816,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1825,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "start": 1846,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1855,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1871,
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
    "value": ";",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1890,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1909,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1918,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1929,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1939,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1948,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1984,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1993,
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
    "value": "{",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2003,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2012,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2022,
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
    "value": "foo12b",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2048,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2064,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2073,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2093,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2102,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2113,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2123,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2132,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2141,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2158,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2167,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2176,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2186,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2206,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2216,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2225,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2234,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2251,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2260,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2279,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2288,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2297,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2302,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2311,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2322,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2338,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2347,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2356,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2363,
    "end": 2364
  }
]
```
