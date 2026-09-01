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
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 425
              },
              "typeArguments": null,
              "start": 421,
              "end": 425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 425
          }
        ],
        "start": 410,
        "end": 426
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
              "start": 433,
              "end": 436
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
                  "type": "TSNumberKeyword",
                  "start": 444,
                  "end": 450
                },
                "start": 442,
                "end": 450
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
                      "start": 460,
                      "end": 464
                    },
                    "start": 453,
                    "end": 465
                  }
                ],
                "start": 451,
                "end": 467
              },
              "expression": false,
              "start": 436,
              "end": 467
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 433,
            "end": 467
          }
        ],
        "start": 427,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 403,
      "end": 469
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
        "start": 477,
        "end": 478
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
              "start": 479,
              "end": 480
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 493
              },
              "typeArguments": null,
              "start": 489,
              "end": 493
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 493
          }
        ],
        "start": 478,
        "end": 494
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
              "start": 501,
              "end": 504
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
                        "start": 508,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 509
                    },
                    "start": 506,
                    "end": 509
                  },
                  "start": 505,
                  "end": 509
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 512,
                  "end": 519
                },
                "start": 510,
                "end": 519
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
                      "start": 529,
                      "end": 533
                    },
                    "start": 522,
                    "end": 534
                  }
                ],
                "start": 520,
                "end": 536
              },
              "expression": false,
              "start": 504,
              "end": 536
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 501,
            "end": 536
          }
        ],
        "start": 495,
        "end": 538
      },
      "abstract": false,
      "declare": false,
      "start": 471,
      "end": 538
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 551
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
              "start": 552,
              "end": 553
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 566
              },
              "typeArguments": null,
              "start": 562,
              "end": 566
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 552,
            "end": 566
          }
        ],
        "start": 551,
        "end": 567
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
              "start": 574,
              "end": 577
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
                "start": 578,
                "end": 582
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
                  "start": 585,
                  "end": 589
                },
                "typeArguments": null,
                "start": 585,
                "end": 589
              },
              "start": 583,
              "end": 589
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 574,
            "end": 590
          }
        ],
        "start": 568,
        "end": 592
      },
      "declare": false,
      "start": 540,
      "end": 592
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 606
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
              "start": 613,
              "end": 616
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
                    "start": 617,
                    "end": 618
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 627,
                      "end": 631
                    },
                    "typeArguments": null,
                    "start": 627,
                    "end": 631
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 617,
                  "end": 631
                }
              ],
              "start": 616,
              "end": 632
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
                      "start": 636,
                      "end": 637
                    },
                    "typeArguments": null,
                    "start": 636,
                    "end": 637
                  },
                  "start": 634,
                  "end": 637
                },
                "start": 633,
                "end": 637
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
                  "start": 640,
                  "end": 646
                },
                "typeArguments": null,
                "start": 640,
                "end": 646
              },
              "start": 638,
              "end": 646
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 613,
            "end": 647
          }
        ],
        "start": 607,
        "end": 649
      },
      "declare": false,
      "start": 594,
      "end": 649
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
                      "start": 660,
                      "end": 663
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
                            "start": 664,
                            "end": 665
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 674,
                              "end": 678
                            },
                            "typeArguments": null,
                            "start": 674,
                            "end": 678
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 664,
                          "end": 678
                        }
                      ],
                      "start": 663,
                      "end": 679
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
                              "start": 683,
                              "end": 684
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 684
                          },
                          "start": 681,
                          "end": 684
                        },
                        "start": 680,
                        "end": 684
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
                          "start": 687,
                          "end": 688
                        },
                        "typeArguments": null,
                        "start": 687,
                        "end": 688
                      },
                      "start": 685,
                      "end": 688
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 660,
                    "end": 688
                  }
                ],
                "start": 658,
                "end": 690
              },
              "start": 656,
              "end": 690
            },
            "start": 655,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 655,
          "end": 690
        }
      ],
      "declare": false,
      "start": 651,
      "end": 690
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
            "start": 695,
            "end": 696
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
                  "start": 701,
                  "end": 704
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
                          "start": 705,
                          "end": 706
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 719
                          },
                          "typeArguments": null,
                          "start": 715,
                          "end": 719
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 705,
                        "end": 719
                      }
                    ],
                    "start": 704,
                    "end": 720
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
                            "start": 724,
                            "end": 725
                          },
                          "typeArguments": null,
                          "start": 724,
                          "end": 725
                        },
                        "start": 722,
                        "end": 725
                      },
                      "start": 721,
                      "end": 725
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
                          "start": 736,
                          "end": 740
                        },
                        "start": 729,
                        "end": 741
                      }
                    ],
                    "start": 727,
                    "end": 743
                  },
                  "expression": false,
                  "start": 704,
                  "end": 743
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 743
              }
            ],
            "start": 699,
            "end": 745
          },
          "definite": false,
          "start": 695,
          "end": 745
        }
      ],
      "declare": false,
      "start": 691,
      "end": 746
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 766
              },
              "typeArguments": null,
              "start": 765,
              "end": 766
            },
            "start": 763,
            "end": 766
          },
          "start": 762,
          "end": 766
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 748,
      "end": 768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 782
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 786,
                "end": 787
              },
              "typeArguments": null,
              "start": 786,
              "end": 787
            },
            "start": 784,
            "end": 787
          },
          "start": 783,
          "end": 787
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 769,
      "end": 789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 812
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 816,
              "end": 819
            },
            "start": 814,
            "end": 819
          },
          "start": 813,
          "end": 819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 821,
        "end": 824
      },
      "expression": false,
      "start": 799,
      "end": 824
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 845
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 846,
                      "end": 850
                    },
                    "typeArguments": null,
                    "start": 846,
                    "end": 850
                  }
                ],
                "start": 845,
                "end": 851
              },
              "start": 844,
              "end": 851
            },
            "start": 842,
            "end": 851
          },
          "start": 841,
          "end": 851
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 826,
      "end": 853
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 873
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 874,
                      "end": 878
                    },
                    "typeArguments": null,
                    "start": 874,
                    "end": 878
                  }
                ],
                "start": 873,
                "end": 879
              },
              "start": 872,
              "end": 879
            },
            "start": 870,
            "end": 879
          },
          "start": 869,
          "end": 879
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 854,
      "end": 881
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
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
              "type": "TSAnyKeyword",
              "start": 909,
              "end": 912
            },
            "start": 907,
            "end": 912
          },
          "start": 906,
          "end": 912
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 914,
        "end": 917
      },
      "expression": false,
      "start": 891,
      "end": 917
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 928,
        "end": 933
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 937,
                "end": 938
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 943
                    },
                    "typeArguments": null,
                    "start": 939,
                    "end": 943
                  }
                ],
                "start": 938,
                "end": 944
              },
              "start": 937,
              "end": 944
            },
            "start": 935,
            "end": 944
          },
          "start": 934,
          "end": 944
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 919,
      "end": 946
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 956,
        "end": 961
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 965,
                "end": 966
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 971
                    },
                    "typeArguments": null,
                    "start": 967,
                    "end": 971
                  }
                ],
                "start": 966,
                "end": 972
              },
              "start": 965,
              "end": 972
            },
            "start": 963,
            "end": 972
          },
          "start": 962,
          "end": 972
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 947,
      "end": 974
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 993,
        "end": 998
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1002,
              "end": 1005
            },
            "start": 1000,
            "end": 1005
          },
          "start": 999,
          "end": 1005
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1007,
        "end": 1010
      },
      "expression": false,
      "start": 984,
      "end": 1010
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1021,
        "end": 1025
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1029,
                "end": 1030
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1031,
                      "end": 1035
                    },
                    "typeArguments": null,
                    "start": 1031,
                    "end": 1035
                  }
                ],
                "start": 1030,
                "end": 1036
              },
              "start": 1029,
              "end": 1036
            },
            "start": 1027,
            "end": 1036
          },
          "start": 1026,
          "end": 1036
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1012,
      "end": 1038
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1056,
                "end": 1057
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1058,
                      "end": 1062
                    },
                    "typeArguments": null,
                    "start": 1058,
                    "end": 1062
                  }
                ],
                "start": 1057,
                "end": 1063
              },
              "start": 1056,
              "end": 1063
            },
            "start": 1054,
            "end": 1063
          },
          "start": 1053,
          "end": 1063
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1039,
      "end": 1065
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1088
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1092,
              "end": 1095
            },
            "start": 1090,
            "end": 1095
          },
          "start": 1089,
          "end": 1095
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1097,
        "end": 1100
      },
      "expression": false,
      "start": 1075,
      "end": 1100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1115
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1126,
                "end": 1127
              },
              "typeArguments": null,
              "start": 1119,
              "end": 1127
            },
            "start": 1117,
            "end": 1127
          },
          "start": 1116,
          "end": 1127
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1102,
      "end": 1129
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1139,
        "end": 1143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1154,
                "end": 1155
              },
              "typeArguments": null,
              "start": 1147,
              "end": 1155
            },
            "start": 1145,
            "end": 1155
          },
          "start": 1144,
          "end": 1155
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1130,
      "end": 1157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1184,
              "end": 1187
            },
            "start": 1182,
            "end": 1187
          },
          "start": 1181,
          "end": 1187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1189,
        "end": 1192
      },
      "expression": false,
      "start": 1167,
      "end": 1192
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1203,
        "end": 1207
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1218,
                "end": 1219
              },
              "typeArguments": null,
              "start": 1211,
              "end": 1219
            },
            "start": 1209,
            "end": 1219
          },
          "start": 1208,
          "end": 1219
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1194,
      "end": 1221
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1231,
        "end": 1235
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1246,
                "end": 1247
              },
              "typeArguments": null,
              "start": 1239,
              "end": 1247
            },
            "start": 1237,
            "end": 1247
          },
          "start": 1236,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1222,
      "end": 1249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1272
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1276,
              "end": 1279
            },
            "start": 1274,
            "end": 1279
          },
          "start": 1273,
          "end": 1279
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1281,
        "end": 1284
      },
      "expression": false,
      "start": 1259,
      "end": 1284
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1295,
        "end": 1299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1303,
                "end": 1304
              },
              "typeArguments": null,
              "start": 1303,
              "end": 1304
            },
            "start": 1301,
            "end": 1304
          },
          "start": 1300,
          "end": 1304
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1286,
      "end": 1306
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1316,
        "end": 1320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1324,
                "end": 1325
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1326,
                      "end": 1330
                    },
                    "typeArguments": null,
                    "start": 1326,
                    "end": 1330
                  }
                ],
                "start": 1325,
                "end": 1331
              },
              "start": 1324,
              "end": 1331
            },
            "start": 1322,
            "end": 1331
          },
          "start": 1321,
          "end": 1331
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1307,
      "end": 1333
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1353
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1357,
              "end": 1360
            },
            "start": 1355,
            "end": 1360
          },
          "start": 1354,
          "end": 1360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1362,
        "end": 1365
      },
      "expression": false,
      "start": 1340,
      "end": 1365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1376,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1385,
                "end": 1386
              },
              "typeArguments": null,
              "start": 1385,
              "end": 1386
            },
            "start": 1383,
            "end": 1386
          },
          "start": 1382,
          "end": 1386
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1367,
      "end": 1388
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1407,
                "end": 1408
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1409,
                      "end": 1413
                    },
                    "typeArguments": null,
                    "start": 1409,
                    "end": 1413
                  }
                ],
                "start": 1408,
                "end": 1414
              },
              "start": 1407,
              "end": 1414
            },
            "start": 1405,
            "end": 1414
          },
          "start": 1404,
          "end": 1414
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1389,
      "end": 1416
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1432,
        "end": 1437
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1441,
              "end": 1444
            },
            "start": 1439,
            "end": 1444
          },
          "start": 1438,
          "end": 1444
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1446,
        "end": 1449
      },
      "expression": false,
      "start": 1423,
      "end": 1449
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1460,
        "end": 1464
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1468,
                "end": 1469
              },
              "typeArguments": null,
              "start": 1468,
              "end": 1469
            },
            "start": 1466,
            "end": 1469
          },
          "start": 1465,
          "end": 1469
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1451,
      "end": 1471
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1485
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1489,
                "end": 1490
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1491,
                      "end": 1495
                    },
                    "typeArguments": null,
                    "start": 1491,
                    "end": 1495
                  }
                ],
                "start": 1490,
                "end": 1496
              },
              "start": 1489,
              "end": 1496
            },
            "start": 1487,
            "end": 1496
          },
          "start": 1486,
          "end": 1496
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1472,
      "end": 1498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1514,
        "end": 1518
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1522,
              "end": 1525
            },
            "start": 1520,
            "end": 1525
          },
          "start": 1519,
          "end": 1525
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1527,
        "end": 1530
      },
      "expression": false,
      "start": 1505,
      "end": 1530
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1545
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1549,
                "end": 1550
              },
              "typeArguments": null,
              "start": 1549,
              "end": 1550
            },
            "start": 1547,
            "end": 1550
          },
          "start": 1546,
          "end": 1550
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1532,
      "end": 1552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1577,
                "end": 1578
              },
              "typeArguments": null,
              "start": 1570,
              "end": 1578
            },
            "start": 1568,
            "end": 1578
          },
          "start": 1567,
          "end": 1578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1553,
      "end": 1580
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1596,
        "end": 1600
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1604,
              "end": 1607
            },
            "start": 1602,
            "end": 1607
          },
          "start": 1601,
          "end": 1607
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1609,
        "end": 1612
      },
      "expression": false,
      "start": 1587,
      "end": 1612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1627
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1631,
                "end": 1632
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1633,
                      "end": 1637
                    },
                    "typeArguments": null,
                    "start": 1633,
                    "end": 1637
                  }
                ],
                "start": 1632,
                "end": 1638
              },
              "start": 1631,
              "end": 1638
            },
            "start": 1629,
            "end": 1638
          },
          "start": 1628,
          "end": 1638
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1614,
      "end": 1640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1658,
                "end": 1659
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1660,
                      "end": 1664
                    },
                    "typeArguments": null,
                    "start": 1660,
                    "end": 1664
                  }
                ],
                "start": 1659,
                "end": 1665
              },
              "start": 1658,
              "end": 1665
            },
            "start": 1656,
            "end": 1665
          },
          "start": 1655,
          "end": 1665
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1641,
      "end": 1667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1683,
        "end": 1687
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1691,
              "end": 1694
            },
            "start": 1689,
            "end": 1694
          },
          "start": 1688,
          "end": 1694
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1696,
        "end": 1699
      },
      "expression": false,
      "start": 1674,
      "end": 1699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1710,
        "end": 1714
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1718,
                "end": 1719
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1720,
                      "end": 1724
                    },
                    "typeArguments": null,
                    "start": 1720,
                    "end": 1724
                  }
                ],
                "start": 1719,
                "end": 1725
              },
              "start": 1718,
              "end": 1725
            },
            "start": 1716,
            "end": 1725
          },
          "start": 1715,
          "end": 1725
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1701,
      "end": 1727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1737,
        "end": 1741
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1745,
                "end": 1746
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1747,
                      "end": 1751
                    },
                    "typeArguments": null,
                    "start": 1747,
                    "end": 1751
                  }
                ],
                "start": 1746,
                "end": 1752
              },
              "start": 1745,
              "end": 1752
            },
            "start": 1743,
            "end": 1752
          },
          "start": 1742,
          "end": 1752
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1728,
      "end": 1754
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1770,
        "end": 1774
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1778,
              "end": 1781
            },
            "start": 1776,
            "end": 1781
          },
          "start": 1775,
          "end": 1781
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1783,
        "end": 1786
      },
      "expression": false,
      "start": 1761,
      "end": 1786
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1806,
                "end": 1807
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1812
                    },
                    "typeArguments": null,
                    "start": 1808,
                    "end": 1812
                  }
                ],
                "start": 1807,
                "end": 1813
              },
              "start": 1806,
              "end": 1813
            },
            "start": 1804,
            "end": 1813
          },
          "start": 1803,
          "end": 1813
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1788,
      "end": 1815
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1842
              },
              "typeArguments": null,
              "start": 1834,
              "end": 1842
            },
            "start": 1832,
            "end": 1842
          },
          "start": 1831,
          "end": 1842
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1816,
      "end": 1844
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1860,
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
      "start": 1851,
      "end": 1877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1899,
                      "end": 1903
                    },
                    "typeArguments": null,
                    "start": 1899,
                    "end": 1903
                  }
                ],
                "start": 1898,
                "end": 1904
              },
              "start": 1897,
              "end": 1904
            },
            "start": 1895,
            "end": 1904
          },
          "start": 1894,
          "end": 1904
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1879,
      "end": 1906
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1916,
        "end": 1921
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1932,
                "end": 1933
              },
              "typeArguments": null,
              "start": 1925,
              "end": 1933
            },
            "start": 1923,
            "end": 1933
          },
          "start": 1922,
          "end": 1933
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1907,
      "end": 1935
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1951,
        "end": 1956
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1960,
              "end": 1963
            },
            "start": 1958,
            "end": 1963
          },
          "start": 1957,
          "end": 1963
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1965,
        "end": 1968
      },
      "expression": false,
      "start": 1942,
      "end": 1968
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1989
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1994
                    },
                    "typeArguments": null,
                    "start": 1990,
                    "end": 1994
                  }
                ],
                "start": 1989,
                "end": 1995
              },
              "start": 1988,
              "end": 1995
            },
            "start": 1986,
            "end": 1995
          },
          "start": 1985,
          "end": 1995
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1970,
      "end": 1997
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2007,
        "end": 2012
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2016,
                "end": 2017
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2022
                    },
                    "typeArguments": null,
                    "start": 2018,
                    "end": 2022
                  }
                ],
                "start": 2017,
                "end": 2023
              },
              "start": 2016,
              "end": 2023
            },
            "start": 2014,
            "end": 2023
          },
          "start": 2013,
          "end": 2023
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1998,
      "end": 2025
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2041,
        "end": 2046
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2050,
              "end": 2053
            },
            "start": 2048,
            "end": 2053
          },
          "start": 2047,
          "end": 2053
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2055,
        "end": 2058
      },
      "expression": false,
      "start": 2032,
      "end": 2058
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2069,
        "end": 2075
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2079,
                "end": 2081
              },
              "typeArguments": null,
              "start": 2079,
              "end": 2081
            },
            "start": 2077,
            "end": 2081
          },
          "start": 2076,
          "end": 2081
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2060,
      "end": 2083
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2093,
        "end": 2099
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2103,
                "end": 2104
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2105,
                      "end": 2109
                    },
                    "typeArguments": null,
                    "start": 2105,
                    "end": 2109
                  }
                ],
                "start": 2104,
                "end": 2110
              },
              "start": 2103,
              "end": 2110
            },
            "start": 2101,
            "end": 2110
          },
          "start": 2100,
          "end": 2110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2084,
      "end": 2112
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2134
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2138,
              "end": 2141
            },
            "start": 2136,
            "end": 2141
          },
          "start": 2135,
          "end": 2141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2143,
        "end": 2146
      },
      "expression": false,
      "start": 2119,
      "end": 2146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2157,
        "end": 2162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2166,
                "end": 2167
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2168,
                      "end": 2172
                    },
                    "typeArguments": null,
                    "start": 2168,
                    "end": 2172
                  }
                ],
                "start": 2167,
                "end": 2173
              },
              "start": 2166,
              "end": 2173
            },
            "start": 2164,
            "end": 2173
          },
          "start": 2163,
          "end": 2173
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2148,
      "end": 2175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
        "end": 2190
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2201,
                "end": 2202
              },
              "typeArguments": null,
              "start": 2194,
              "end": 2202
            },
            "start": 2192,
            "end": 2202
          },
          "start": 2191,
          "end": 2202
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2176,
      "end": 2204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2220,
        "end": 2225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2229,
              "end": 2232
            },
            "start": 2227,
            "end": 2232
          },
          "start": 2226,
          "end": 2232
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2234,
        "end": 2237
      },
      "expression": false,
      "start": 2211,
      "end": 2237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2253
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2257,
                "end": 2258
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2263
                    },
                    "typeArguments": null,
                    "start": 2259,
                    "end": 2263
                  }
                ],
                "start": 2258,
                "end": 2264
              },
              "start": 2257,
              "end": 2264
            },
            "start": 2255,
            "end": 2264
          },
          "start": 2254,
          "end": 2264
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2239,
      "end": 2266
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2276,
        "end": 2281
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2292,
                "end": 2293
              },
              "typeArguments": null,
              "start": 2285,
              "end": 2293
            },
            "start": 2283,
            "end": 2293
          },
          "start": 2282,
          "end": 2293
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2267,
      "end": 2295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
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
              "type": "TSAnyKeyword",
              "start": 2320,
              "end": 2323
            },
            "start": 2318,
            "end": 2323
          },
          "start": 2317,
          "end": 2323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2325,
        "end": 2328
      },
      "expression": false,
      "start": 2302,
      "end": 2328
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2348,
                "end": 2350
              },
              "typeArguments": null,
              "start": 2348,
              "end": 2350
            },
            "start": 2346,
            "end": 2350
          },
          "start": 2345,
          "end": 2350
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2330,
      "end": 2352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2362,
        "end": 2367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2371,
                "end": 2372
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2373,
                      "end": 2377
                    },
                    "typeArguments": null,
                    "start": 2373,
                    "end": 2377
                  }
                ],
                "start": 2372,
                "end": 2378
              },
              "start": 2371,
              "end": 2378
            },
            "start": 2369,
            "end": 2378
          },
          "start": 2368,
          "end": 2378
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2353,
      "end": 2380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
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
              "type": "TSAnyKeyword",
              "start": 2405,
              "end": 2408
            },
            "start": 2403,
            "end": 2408
          },
          "start": 2402,
          "end": 2408
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2410,
        "end": 2413
      },
      "expression": false,
      "start": 2387,
      "end": 2413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2413
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
    "value": "Date",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
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
    "value": "number",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 453,
    "end": 459
  },
  {
    "type": "Null",
    "value": "null",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 471,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 481,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "foo",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 522,
    "end": 528
  },
  {
    "type": "Null",
    "value": "null",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 540,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 554,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 562,
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
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 594,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 613,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 619,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "RegExp",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 660,
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
    "type": "Keyword",
    "value": "extends",
    "start": 666,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 701,
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
    "value": "Date",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 729,
    "end": 735
  },
  {
    "type": "Null",
    "value": "null",
    "start": 736,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
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
    "value": "A",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 769,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
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
    "value": "B",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 846,
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
    "start": 854,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "foo1b",
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
    "value": "B",
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
    "value": "Date",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 891,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "foo1b",
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
    "value": "any",
    "start": 909,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 919,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 928,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 939,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 943,
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
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 947,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 967,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 984,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 993,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1012,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1039,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1048,
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
    "value": "x",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1075,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1102,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1119,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1130,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1167,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1176,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1184,
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
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1194,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1222,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1231,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 1259,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1268,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1295,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "start": 1307,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1367,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1376,
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
    "value": "A",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
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
    "value": "C",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1423,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1432,
    "end": 1437
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
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1451,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1460,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1472,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1481,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1505,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1514,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1532,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1562,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1587,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1596,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1633,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1641,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "foo8",
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
    "value": "I",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1660,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1674,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1683,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1701,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1720,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1728,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1747,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1761,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1770,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786
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
    "value": "B",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1812,
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
    "value": "function",
    "start": 1816,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "foo10",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1834,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1851,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1860,
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
    "value": "foo11",
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
    "value": "Date",
    "start": 1899,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1907,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1916,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1942,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1951,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "foo12",
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
    "type": "Identifier",
    "value": "I",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1990,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1998,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2007,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2018,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2032,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2041,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2050,
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
    "value": "{",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2060,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2069,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2079,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2084,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2093,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2105,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2119,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2128,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2138,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2148,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2157,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2168,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2185,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2194,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2229,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2239,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2248,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2267,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2276,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2285,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2302,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "foo14",
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
    "value": "any",
    "start": 2320,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2330,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "foo15",
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
    "type": "Identifier",
    "value": "I2",
    "start": 2348,
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
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2353,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2362,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2373,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2387,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "foo15",
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
    "type": "Identifier",
    "value": "any",
    "start": 2405,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2412,
    "end": 2413
  }
]
```
