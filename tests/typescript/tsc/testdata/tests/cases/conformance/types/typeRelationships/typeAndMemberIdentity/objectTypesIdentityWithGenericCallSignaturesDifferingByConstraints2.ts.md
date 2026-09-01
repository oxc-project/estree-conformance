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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 364
                      },
                      "typeArguments": null,
                      "start": 363,
                      "end": 364
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 353,
                    "end": 364
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 380
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 366,
                    "end": 380
                  }
                ],
                "start": 352,
                "end": 381
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
                        "start": 391,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 392
                    },
                    "start": 389,
                    "end": 392
                  },
                  "start": 388,
                  "end": 392
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                },
                "start": 393,
                "end": 401
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
                      "start": 411,
                      "end": 415
                    },
                    "start": 404,
                    "end": 416
                  }
                ],
                "start": 402,
                "end": 418
              },
              "expression": false,
              "start": 352,
              "end": 418
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 418
          }
        ],
        "start": 343,
        "end": 420
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 420
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
        "start": 428,
        "end": 429
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
              "start": 430,
              "end": 431
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 430,
            "end": 441
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 458
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 459,
                    "end": 465
                  }
                ],
                "start": 458,
                "end": 466
              },
              "start": 453,
              "end": 466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 443,
            "end": 466
          }
        ],
        "start": 429,
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
                        "start": 487,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 488
                    },
                    "start": 485,
                    "end": 488
                  },
                  "start": 484,
                  "end": 488
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 491,
                  "end": 497
                },
                "start": 489,
                "end": 497
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
                      "start": 507,
                      "end": 511
                    },
                    "start": 500,
                    "end": 512
                  }
                ],
                "start": 498,
                "end": 514
              },
              "expression": false,
              "start": 477,
              "end": 514
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 474,
            "end": 514
          }
        ],
        "start": 468,
        "end": 516
      },
      "abstract": false,
      "declare": false,
      "start": 422,
      "end": 516
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
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 537
              },
              "typeArguments": null,
              "start": 536,
              "end": 537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 537
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 540
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 555
              },
              "typeArguments": null,
              "start": 549,
              "end": 555
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 539,
            "end": 555
          }
        ],
        "start": 525,
        "end": 556
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
              "start": 563,
              "end": 566
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
                        "start": 570,
                        "end": 571
                      },
                      "typeArguments": null,
                      "start": 570,
                      "end": 571
                    },
                    "start": 568,
                    "end": 571
                  },
                  "start": 567,
                  "end": 571
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
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 577
                    },
                    "start": 574,
                    "end": 577
                  },
                  "start": 573,
                  "end": 577
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 580,
                  "end": 586
                },
                "start": 578,
                "end": 586
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
                      "start": 596,
                      "end": 600
                    },
                    "start": 589,
                    "end": 601
                  }
                ],
                "start": 587,
                "end": 603
              },
              "expression": false,
              "start": 566,
              "end": 603
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 563,
            "end": 603
          }
        ],
        "start": 557,
        "end": 605
      },
      "abstract": false,
      "declare": false,
      "start": 518,
      "end": 605
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 614
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
              "start": 615,
              "end": 616
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 626
              },
              "typeArguments": null,
              "start": 625,
              "end": 626
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 615,
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
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 644
              },
              "typeArguments": null,
              "start": 638,
              "end": 644
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 628,
            "end": 644
          }
        ],
        "start": 614,
        "end": 645
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
              "start": 652,
              "end": 655
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
                        "start": 659,
                        "end": 660
                      },
                      "typeArguments": null,
                      "start": 659,
                      "end": 660
                    },
                    "start": 657,
                    "end": 660
                  },
                  "start": 656,
                  "end": 660
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
                        "start": 665,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 665,
                      "end": 666
                    },
                    "start": 663,
                    "end": 666
                  },
                  "start": 662,
                  "end": 666
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 669,
                  "end": 675
                },
                "start": 667,
                "end": 675
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
                      "start": 685,
                      "end": 689
                    },
                    "start": 678,
                    "end": 690
                  }
                ],
                "start": 676,
                "end": 692
              },
              "expression": false,
              "start": 655,
              "end": 692
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 652,
            "end": 692
          }
        ],
        "start": 646,
        "end": 694
      },
      "abstract": false,
      "declare": false,
      "start": 607,
      "end": 694
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 707
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
              "start": 708,
              "end": 709
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 719
              },
              "typeArguments": null,
              "start": 718,
              "end": 719
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 708,
            "end": 719
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 722
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 737
              },
              "typeArguments": null,
              "start": 731,
              "end": 737
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 721,
            "end": 737
          }
        ],
        "start": 707,
        "end": 738
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
              "start": 745,
              "end": 748
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
                      "start": 752,
                      "end": 753
                    },
                    "typeArguments": null,
                    "start": 752,
                    "end": 753
                  },
                  "start": 750,
                  "end": 753
                },
                "start": 749,
                "end": 753
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
                      "start": 758,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 758,
                    "end": 759
                  },
                  "start": 756,
                  "end": 759
                },
                "start": 755,
                "end": 759
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 762,
                "end": 768
              },
              "start": 760,
              "end": 768
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 745,
            "end": 769
          }
        ],
        "start": 739,
        "end": 771
      },
      "declare": false,
      "start": 696,
      "end": 771
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 785
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
              "start": 792,
              "end": 795
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
                    "start": 796,
                    "end": 797
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 806,
                      "end": 807
                    },
                    "typeArguments": null,
                    "start": 806,
                    "end": 807
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 796,
                  "end": 807
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 826
                    },
                    "typeArguments": null,
                    "start": 819,
                    "end": 826
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 809,
                  "end": 826
                }
              ],
              "start": 795,
              "end": 827
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
                      "start": 831,
                      "end": 832
                    },
                    "typeArguments": null,
                    "start": 831,
                    "end": 832
                  },
                  "start": 829,
                  "end": 832
                },
                "start": 828,
                "end": 832
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
                      "start": 837,
                      "end": 838
                    },
                    "typeArguments": null,
                    "start": 837,
                    "end": 838
                  },
                  "start": 835,
                  "end": 838
                },
                "start": 834,
                "end": 838
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              },
              "start": 839,
              "end": 847
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 792,
            "end": 848
          }
        ],
        "start": 786,
        "end": 850
      },
      "declare": false,
      "start": 773,
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
                      "start": 861,
                      "end": 864
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
                            "start": 865,
                            "end": 866
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 875,
                              "end": 876
                            },
                            "typeArguments": null,
                            "start": 875,
                            "end": 876
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 865,
                          "end": 876
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 878,
                            "end": 879
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 888,
                              "end": 893
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 894,
                                  "end": 900
                                }
                              ],
                              "start": 893,
                              "end": 901
                            },
                            "start": 888,
                            "end": 901
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 878,
                          "end": 901
                        }
                      ],
                      "start": 864,
                      "end": 902
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
                              "start": 906,
                              "end": 907
                            },
                            "typeArguments": null,
                            "start": 906,
                            "end": 907
                          },
                          "start": 904,
                          "end": 907
                        },
                        "start": 903,
                        "end": 907
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
                              "start": 912,
                              "end": 913
                            },
                            "typeArguments": null,
                            "start": 912,
                            "end": 913
                          },
                          "start": 910,
                          "end": 913
                        },
                        "start": 909,
                        "end": 913
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 916,
                        "end": 922
                      },
                      "start": 914,
                      "end": 922
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 861,
                    "end": 922
                  }
                ],
                "start": 859,
                "end": 924
              },
              "start": 857,
              "end": 924
            },
            "start": 856,
            "end": 924
          },
          "init": null,
          "definite": false,
          "start": 856,
          "end": 924
        }
      ],
      "declare": false,
      "start": 852,
      "end": 924
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
            "start": 929,
            "end": 930
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
                  "start": 935,
                  "end": 938
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
                          "start": 939,
                          "end": 940
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 949,
                            "end": 950
                          },
                          "typeArguments": null,
                          "start": 949,
                          "end": 950
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 939,
                        "end": 950
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 953
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 962,
                            "end": 968
                          },
                          "typeArguments": null,
                          "start": 962,
                          "end": 968
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 952,
                        "end": 968
                      }
                    ],
                    "start": 938,
                    "end": 969
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
                            "start": 973,
                            "end": 974
                          },
                          "typeArguments": null,
                          "start": 973,
                          "end": 974
                        },
                        "start": 971,
                        "end": 974
                      },
                      "start": 970,
                      "end": 974
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
                            "start": 979,
                            "end": 980
                          },
                          "typeArguments": null,
                          "start": 979,
                          "end": 980
                        },
                        "start": 977,
                        "end": 980
                      },
                      "start": 976,
                      "end": 980
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
                          "start": 991,
                          "end": 993
                        },
                        "start": 984,
                        "end": 994
                      }
                    ],
                    "start": 982,
                    "end": 996
                  },
                  "expression": false,
                  "start": 938,
                  "end": 996
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 935,
                "end": 996
              }
            ],
            "start": 933,
            "end": 998
          },
          "definite": false,
          "start": 929,
          "end": 998
        }
      ],
      "declare": false,
      "start": 925,
      "end": 999
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1019
              },
              "typeArguments": null,
              "start": 1018,
              "end": 1019
            },
            "start": 1016,
            "end": 1019
          },
          "start": 1015,
          "end": 1019
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1001,
      "end": 1021
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1031,
        "end": 1035
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1039,
                "end": 1040
              },
              "typeArguments": null,
              "start": 1039,
              "end": 1040
            },
            "start": 1037,
            "end": 1040
          },
          "start": 1036,
          "end": 1040
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1042
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1065
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1069,
              "end": 1072
            },
            "start": 1067,
            "end": 1072
          },
          "start": 1066,
          "end": 1072
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1074,
        "end": 1077
      },
      "expression": false,
      "start": 1052,
      "end": 1077
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1088,
        "end": 1093
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1097,
                "end": 1098
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
                      "start": 1099,
                      "end": 1104
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1105,
                          "end": 1111
                        }
                      ],
                      "start": 1104,
                      "end": 1112
                    },
                    "start": 1099,
                    "end": 1112
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1114,
                      "end": 1119
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1120,
                          "end": 1126
                        }
                      ],
                      "start": 1119,
                      "end": 1127
                    },
                    "start": 1114,
                    "end": 1127
                  }
                ],
                "start": 1098,
                "end": 1128
              },
              "start": 1097,
              "end": 1128
            },
            "start": 1095,
            "end": 1128
          },
          "start": 1094,
          "end": 1128
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1130
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1140,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1150
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
                      "start": 1151,
                      "end": 1156
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1157,
                          "end": 1163
                        }
                      ],
                      "start": 1156,
                      "end": 1164
                    },
                    "start": 1151,
                    "end": 1164
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1166,
                      "end": 1171
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1172,
                          "end": 1178
                        }
                      ],
                      "start": 1171,
                      "end": 1179
                    },
                    "start": 1166,
                    "end": 1179
                  }
                ],
                "start": 1150,
                "end": 1180
              },
              "start": 1149,
              "end": 1180
            },
            "start": 1147,
            "end": 1180
          },
          "start": 1146,
          "end": 1180
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1131,
      "end": 1182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1206
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1210,
              "end": 1213
            },
            "start": 1208,
            "end": 1213
          },
          "start": 1207,
          "end": 1213
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1215,
        "end": 1218
      },
      "expression": false,
      "start": 1192,
      "end": 1218
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1238,
                "end": 1239
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
                      "start": 1240,
                      "end": 1246
                    },
                    "typeArguments": null,
                    "start": 1240,
                    "end": 1246
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1248,
                      "end": 1254
                    },
                    "typeArguments": null,
                    "start": 1248,
                    "end": 1254
                  }
                ],
                "start": 1239,
                "end": 1255
              },
              "start": 1238,
              "end": 1255
            },
            "start": 1236,
            "end": 1255
          },
          "start": 1235,
          "end": 1255
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1220,
      "end": 1257
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1267,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1276,
                "end": 1277
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
                      "start": 1278,
                      "end": 1284
                    },
                    "typeArguments": null,
                    "start": 1278,
                    "end": 1284
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1286,
                    "end": 1292
                  }
                ],
                "start": 1277,
                "end": 1293
              },
              "start": 1276,
              "end": 1293
            },
            "start": 1274,
            "end": 1293
          },
          "start": 1273,
          "end": 1293
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1258,
      "end": 1295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1314,
        "end": 1319
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1323,
              "end": 1326
            },
            "start": 1321,
            "end": 1326
          },
          "start": 1320,
          "end": 1326
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1328,
        "end": 1331
      },
      "expression": false,
      "start": 1305,
      "end": 1331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1342,
        "end": 1346
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1350,
                "end": 1351
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
                      "start": 1352,
                      "end": 1358
                    },
                    "typeArguments": null,
                    "start": 1352,
                    "end": 1358
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1360,
                      "end": 1366
                    },
                    "typeArguments": null,
                    "start": 1360,
                    "end": 1366
                  }
                ],
                "start": 1351,
                "end": 1367
              },
              "start": 1350,
              "end": 1367
            },
            "start": 1348,
            "end": 1367
          },
          "start": 1347,
          "end": 1367
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1333,
      "end": 1369
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1379,
        "end": 1383
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1387,
                "end": 1388
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
                      "start": 1389,
                      "end": 1395
                    },
                    "typeArguments": null,
                    "start": 1389,
                    "end": 1395
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1397,
                      "end": 1403
                    },
                    "typeArguments": null,
                    "start": 1397,
                    "end": 1403
                  }
                ],
                "start": 1388,
                "end": 1404
              },
              "start": 1387,
              "end": 1404
            },
            "start": 1385,
            "end": 1404
          },
          "start": 1384,
          "end": 1404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1370,
      "end": 1406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1429
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1433,
              "end": 1436
            },
            "start": 1431,
            "end": 1436
          },
          "start": 1430,
          "end": 1436
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1438,
        "end": 1441
      },
      "expression": false,
      "start": 1416,
      "end": 1441
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1452,
        "end": 1456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1467,
                "end": 1468
              },
              "typeArguments": null,
              "start": 1460,
              "end": 1468
            },
            "start": 1458,
            "end": 1468
          },
          "start": 1457,
          "end": 1468
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1443,
      "end": 1470
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1480,
        "end": 1484
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1495,
                "end": 1496
              },
              "typeArguments": null,
              "start": 1488,
              "end": 1496
            },
            "start": 1486,
            "end": 1496
          },
          "start": 1485,
          "end": 1496
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1471,
      "end": 1498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1517,
        "end": 1521
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1525,
              "end": 1528
            },
            "start": 1523,
            "end": 1528
          },
          "start": 1522,
          "end": 1528
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1530,
        "end": 1533
      },
      "expression": false,
      "start": 1508,
      "end": 1533
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1544,
        "end": 1548
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1559,
                "end": 1560
              },
              "typeArguments": null,
              "start": 1552,
              "end": 1560
            },
            "start": 1550,
            "end": 1560
          },
          "start": 1549,
          "end": 1560
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1535,
      "end": 1562
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1572,
        "end": 1576
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1587,
                "end": 1588
              },
              "typeArguments": null,
              "start": 1580,
              "end": 1588
            },
            "start": 1578,
            "end": 1588
          },
          "start": 1577,
          "end": 1588
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1563,
      "end": 1590
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1609,
        "end": 1613
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1617,
              "end": 1620
            },
            "start": 1615,
            "end": 1620
          },
          "start": 1614,
          "end": 1620
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1622,
        "end": 1625
      },
      "expression": false,
      "start": 1600,
      "end": 1625
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1640
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1644,
                "end": 1645
              },
              "typeArguments": null,
              "start": 1644,
              "end": 1645
            },
            "start": 1642,
            "end": 1645
          },
          "start": 1641,
          "end": 1645
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1627,
      "end": 1647
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1661
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1665,
                "end": 1666
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
                      "start": 1667,
                      "end": 1672
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1673,
                          "end": 1679
                        }
                      ],
                      "start": 1672,
                      "end": 1680
                    },
                    "start": 1667,
                    "end": 1680
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1687
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1688,
                          "end": 1694
                        }
                      ],
                      "start": 1687,
                      "end": 1695
                    },
                    "start": 1682,
                    "end": 1695
                  }
                ],
                "start": 1666,
                "end": 1696
              },
              "start": 1665,
              "end": 1696
            },
            "start": 1663,
            "end": 1696
          },
          "start": 1662,
          "end": 1696
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1648,
      "end": 1698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
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
              "type": "TSAnyKeyword",
              "start": 1722,
              "end": 1725
            },
            "start": 1720,
            "end": 1725
          },
          "start": 1719,
          "end": 1725
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1727,
        "end": 1730
      },
      "expression": false,
      "start": 1705,
      "end": 1730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1741,
        "end": 1746
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1750,
                "end": 1751
              },
              "typeArguments": null,
              "start": 1750,
              "end": 1751
            },
            "start": 1748,
            "end": 1751
          },
          "start": 1747,
          "end": 1751
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1732,
      "end": 1753
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1774,
                      "end": 1780
                    },
                    "typeArguments": null,
                    "start": 1774,
                    "end": 1780
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1782,
                      "end": 1788
                    },
                    "typeArguments": null,
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
        "name": "foo5b",
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
        "name": "foo5c",
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1844,
                "end": 1845
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
                      "start": 1846,
                      "end": 1852
                    },
                    "typeArguments": null,
                    "start": 1846,
                    "end": 1852
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1854,
                      "end": 1860
                    },
                    "typeArguments": null,
                    "start": 1854,
                    "end": 1860
                  }
                ],
                "start": 1845,
                "end": 1861
              },
              "start": 1844,
              "end": 1861
            },
            "start": 1842,
            "end": 1861
          },
          "start": 1841,
          "end": 1861
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1826,
      "end": 1863
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1878
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1882,
                "end": 1883
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
                      "start": 1884,
                      "end": 1890
                    },
                    "typeArguments": null,
                    "start": 1884,
                    "end": 1890
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1892,
                      "end": 1898
                    },
                    "typeArguments": null,
                    "start": 1892,
                    "end": 1898
                  }
                ],
                "start": 1883,
                "end": 1899
              },
              "start": 1882,
              "end": 1899
            },
            "start": 1880,
            "end": 1899
          },
          "start": 1879,
          "end": 1899
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1864,
      "end": 1901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1917,
        "end": 1922
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1926,
              "end": 1929
            },
            "start": 1924,
            "end": 1929
          },
          "start": 1923,
          "end": 1929
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1931,
        "end": 1934
      },
      "expression": false,
      "start": 1908,
      "end": 1934
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1945,
        "end": 1950
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1954,
                "end": 1955
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
                      "start": 1956,
                      "end": 1962
                    },
                    "typeArguments": null,
                    "start": 1956,
                    "end": 1962
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1964,
                      "end": 1970
                    },
                    "typeArguments": null,
                    "start": 1964,
                    "end": 1970
                  }
                ],
                "start": 1955,
                "end": 1971
              },
              "start": 1954,
              "end": 1971
            },
            "start": 1952,
            "end": 1971
          },
          "start": 1951,
          "end": 1971
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1936,
      "end": 1973
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1983,
        "end": 1988
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1992,
                "end": 1993
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1994,
                    "end": 1997
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1999,
                      "end": 2005
                    },
                    "typeArguments": null,
                    "start": 1999,
                    "end": 2005
                  }
                ],
                "start": 1993,
                "end": 2006
              },
              "start": 1992,
              "end": 2006
            },
            "start": 1990,
            "end": 2006
          },
          "start": 1989,
          "end": 2006
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1974,
      "end": 2008
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2066,
        "end": 2071
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2075,
              "end": 2078
            },
            "start": 2073,
            "end": 2078
          },
          "start": 2072,
          "end": 2078
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2080,
        "end": 2083
      },
      "expression": false,
      "start": 2057,
      "end": 2083
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2098
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2102,
                "end": 2103
              },
              "typeArguments": null,
              "start": 2102,
              "end": 2103
            },
            "start": 2100,
            "end": 2103
          },
          "start": 2099,
          "end": 2103
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2085,
      "end": 2105
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2115,
        "end": 2119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2123,
                "end": 2124
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
                      "start": 2125,
                      "end": 2131
                    },
                    "typeArguments": null,
                    "start": 2125,
                    "end": 2131
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2133,
                      "end": 2139
                    },
                    "typeArguments": null,
                    "start": 2133,
                    "end": 2139
                  }
                ],
                "start": 2124,
                "end": 2140
              },
              "start": 2123,
              "end": 2140
            },
            "start": 2121,
            "end": 2140
          },
          "start": 2120,
          "end": 2140
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2106,
      "end": 2142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2158,
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
              "type": "TSAnyKeyword",
              "start": 2166,
              "end": 2169
            },
            "start": 2164,
            "end": 2169
          },
          "start": 2163,
          "end": 2169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2171,
        "end": 2174
      },
      "expression": false,
      "start": 2149,
      "end": 2174
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2193,
                "end": 2194
              },
              "typeArguments": null,
              "start": 2193,
              "end": 2194
            },
            "start": 2191,
            "end": 2194
          },
          "start": 2190,
          "end": 2194
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2176,
      "end": 2196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2206,
        "end": 2210
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2221,
                "end": 2222
              },
              "typeArguments": null,
              "start": 2214,
              "end": 2222
            },
            "start": 2212,
            "end": 2222
          },
          "start": 2211,
          "end": 2222
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2197,
      "end": 2224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2240,
        "end": 2244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2248,
              "end": 2251
            },
            "start": 2246,
            "end": 2251
          },
          "start": 2245,
          "end": 2251
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2253,
        "end": 2256
      },
      "expression": false,
      "start": 2231,
      "end": 2256
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2267,
        "end": 2271
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2275,
                "end": 2276
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
                      "start": 2277,
                      "end": 2282
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2283,
                          "end": 2289
                        }
                      ],
                      "start": 2282,
                      "end": 2290
                    },
                    "start": 2277,
                    "end": 2290
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2292,
                      "end": 2297
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2298,
                          "end": 2304
                        }
                      ],
                      "start": 2297,
                      "end": 2305
                    },
                    "start": 2292,
                    "end": 2305
                  }
                ],
                "start": 2276,
                "end": 2306
              },
              "start": 2275,
              "end": 2306
            },
            "start": 2273,
            "end": 2306
          },
          "start": 2272,
          "end": 2306
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2258,
      "end": 2308
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2318,
        "end": 2322
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2326,
                "end": 2327
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
                      "start": 2328,
                      "end": 2334
                    },
                    "typeArguments": null,
                    "start": 2328,
                    "end": 2334
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2336,
                      "end": 2342
                    },
                    "typeArguments": null,
                    "start": 2336,
                    "end": 2342
                  }
                ],
                "start": 2327,
                "end": 2343
              },
              "start": 2326,
              "end": 2343
            },
            "start": 2324,
            "end": 2343
          },
          "start": 2323,
          "end": 2343
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2309,
      "end": 2345
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2361,
        "end": 2365
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2369,
              "end": 2372
            },
            "start": 2367,
            "end": 2372
          },
          "start": 2366,
          "end": 2372
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2374,
        "end": 2377
      },
      "expression": false,
      "start": 2352,
      "end": 2377
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2388,
        "end": 2392
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2396,
                "end": 2397
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
                      "start": 2398,
                      "end": 2403
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2404,
                          "end": 2410
                        }
                      ],
                      "start": 2403,
                      "end": 2411
                    },
                    "start": 2398,
                    "end": 2411
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2413,
                      "end": 2418
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2419,
                          "end": 2425
                        }
                      ],
                      "start": 2418,
                      "end": 2426
                    },
                    "start": 2413,
                    "end": 2426
                  }
                ],
                "start": 2397,
                "end": 2427
              },
              "start": 2396,
              "end": 2427
            },
            "start": 2394,
            "end": 2427
          },
          "start": 2393,
          "end": 2427
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2379,
      "end": 2429
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2439,
        "end": 2443
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2447,
                "end": 2448
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
                      "start": 2449,
                      "end": 2455
                    },
                    "typeArguments": null,
                    "start": 2449,
                    "end": 2455
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2457,
                      "end": 2463
                    },
                    "typeArguments": null,
                    "start": 2457,
                    "end": 2463
                  }
                ],
                "start": 2448,
                "end": 2464
              },
              "start": 2447,
              "end": 2464
            },
            "start": 2445,
            "end": 2464
          },
          "start": 2444,
          "end": 2464
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2430,
      "end": 2466
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2482,
        "end": 2486
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2490,
              "end": 2493
            },
            "start": 2488,
            "end": 2493
          },
          "start": 2487,
          "end": 2493
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2495,
        "end": 2498
      },
      "expression": false,
      "start": 2473,
      "end": 2498
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2509,
        "end": 2514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2518,
                "end": 2519
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
                      "start": 2520,
                      "end": 2525
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2526,
                          "end": 2532
                        }
                      ],
                      "start": 2525,
                      "end": 2533
                    },
                    "start": 2520,
                    "end": 2533
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2540
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2541,
                          "end": 2547
                        }
                      ],
                      "start": 2540,
                      "end": 2548
                    },
                    "start": 2535,
                    "end": 2548
                  }
                ],
                "start": 2519,
                "end": 2549
              },
              "start": 2518,
              "end": 2549
            },
            "start": 2516,
            "end": 2549
          },
          "start": 2515,
          "end": 2549
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2500,
      "end": 2551
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2561,
        "end": 2566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2577,
                "end": 2578
              },
              "typeArguments": null,
              "start": 2570,
              "end": 2578
            },
            "start": 2568,
            "end": 2578
          },
          "start": 2567,
          "end": 2578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2552,
      "end": 2580
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2596,
        "end": 2601
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2605,
              "end": 2608
            },
            "start": 2603,
            "end": 2608
          },
          "start": 2602,
          "end": 2608
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2610,
        "end": 2613
      },
      "expression": false,
      "start": 2587,
      "end": 2613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2624,
        "end": 2629
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2633,
                "end": 2634
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
                      "start": 2635,
                      "end": 2640
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2641,
                          "end": 2647
                        }
                      ],
                      "start": 2640,
                      "end": 2648
                    },
                    "start": 2635,
                    "end": 2648
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2650,
                      "end": 2655
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2656,
                          "end": 2662
                        }
                      ],
                      "start": 2655,
                      "end": 2663
                    },
                    "start": 2650,
                    "end": 2663
                  }
                ],
                "start": 2634,
                "end": 2664
              },
              "start": 2633,
              "end": 2664
            },
            "start": 2631,
            "end": 2664
          },
          "start": 2630,
          "end": 2664
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2615,
      "end": 2666
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2676,
        "end": 2681
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2692,
                "end": 2693
              },
              "typeArguments": null,
              "start": 2685,
              "end": 2693
            },
            "start": 2683,
            "end": 2693
          },
          "start": 2682,
          "end": 2693
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2667,
      "end": 2695
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2711,
        "end": 2716
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2720,
              "end": 2723
            },
            "start": 2718,
            "end": 2723
          },
          "start": 2717,
          "end": 2723
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2725,
        "end": 2728
      },
      "expression": false,
      "start": 2702,
      "end": 2728
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2739,
        "end": 2744
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2748,
                "end": 2749
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
                      "start": 2750,
                      "end": 2756
                    },
                    "typeArguments": null,
                    "start": 2750,
                    "end": 2756
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2758,
                      "end": 2764
                    },
                    "typeArguments": null,
                    "start": 2758,
                    "end": 2764
                  }
                ],
                "start": 2749,
                "end": 2765
              },
              "start": 2748,
              "end": 2765
            },
            "start": 2746,
            "end": 2765
          },
          "start": 2745,
          "end": 2765
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2730,
      "end": 2767
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2777,
        "end": 2782
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2786,
                "end": 2787
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
                      "start": 2788,
                      "end": 2794
                    },
                    "typeArguments": null,
                    "start": 2788,
                    "end": 2794
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2796,
                      "end": 2802
                    },
                    "typeArguments": null,
                    "start": 2796,
                    "end": 2802
                  }
                ],
                "start": 2787,
                "end": 2803
              },
              "start": 2786,
              "end": 2803
            },
            "start": 2784,
            "end": 2803
          },
          "start": 2783,
          "end": 2803
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2768,
      "end": 2805
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2821,
        "end": 2826
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2830,
              "end": 2833
            },
            "start": 2828,
            "end": 2833
          },
          "start": 2827,
          "end": 2833
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2835,
        "end": 2838
      },
      "expression": false,
      "start": 2812,
      "end": 2838
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2849,
        "end": 2855
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2859,
                "end": 2861
              },
              "typeArguments": null,
              "start": 2859,
              "end": 2861
            },
            "start": 2857,
            "end": 2861
          },
          "start": 2856,
          "end": 2861
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2840,
      "end": 2863
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2873,
        "end": 2879
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2883,
                "end": 2884
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
                      "start": 2885,
                      "end": 2891
                    },
                    "typeArguments": null,
                    "start": 2885,
                    "end": 2891
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2893,
                      "end": 2899
                    },
                    "typeArguments": null,
                    "start": 2893,
                    "end": 2899
                  }
                ],
                "start": 2884,
                "end": 2900
              },
              "start": 2883,
              "end": 2900
            },
            "start": 2881,
            "end": 2900
          },
          "start": 2880,
          "end": 2900
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2864,
      "end": 2902
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2918,
        "end": 2924
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2928,
              "end": 2931
            },
            "start": 2926,
            "end": 2931
          },
          "start": 2925,
          "end": 2931
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2933,
        "end": 2936
      },
      "expression": false,
      "start": 2909,
      "end": 2936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2947,
        "end": 2952
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2956,
                "end": 2957
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
                      "start": 2958,
                      "end": 2964
                    },
                    "typeArguments": null,
                    "start": 2958,
                    "end": 2964
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2966,
                      "end": 2972
                    },
                    "typeArguments": null,
                    "start": 2966,
                    "end": 2972
                  }
                ],
                "start": 2957,
                "end": 2973
              },
              "start": 2956,
              "end": 2973
            },
            "start": 2954,
            "end": 2973
          },
          "start": 2953,
          "end": 2973
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2938,
      "end": 2975
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2985,
        "end": 2990
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 3001,
                "end": 3002
              },
              "typeArguments": null,
              "start": 2994,
              "end": 3002
            },
            "start": 2992,
            "end": 3002
          },
          "start": 2991,
          "end": 3002
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2976,
      "end": 3004
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3020,
        "end": 3025
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 3029,
              "end": 3032
            },
            "start": 3027,
            "end": 3032
          },
          "start": 3026,
          "end": 3032
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3034,
        "end": 3037
      },
      "expression": false,
      "start": 3011,
      "end": 3037
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3048,
        "end": 3053
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 3057,
                "end": 3058
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
                      "start": 3059,
                      "end": 3065
                    },
                    "typeArguments": null,
                    "start": 3059,
                    "end": 3065
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3067,
                      "end": 3073
                    },
                    "typeArguments": null,
                    "start": 3067,
                    "end": 3073
                  }
                ],
                "start": 3058,
                "end": 3074
              },
              "start": 3057,
              "end": 3074
            },
            "start": 3055,
            "end": 3074
          },
          "start": 3054,
          "end": 3074
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3039,
      "end": 3076
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3086,
        "end": 3091
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 3102,
                "end": 3103
              },
              "typeArguments": null,
              "start": 3095,
              "end": 3103
            },
            "start": 3093,
            "end": 3103
          },
          "start": 3092,
          "end": 3103
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3077,
      "end": 3105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3121,
        "end": 3126
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 3130,
              "end": 3133
            },
            "start": 3128,
            "end": 3133
          },
          "start": 3127,
          "end": 3133
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3135,
        "end": 3138
      },
      "expression": false,
      "start": 3112,
      "end": 3138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3149,
        "end": 3154
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 3158,
                "end": 3160
              },
              "typeArguments": null,
              "start": 3158,
              "end": 3160
            },
            "start": 3156,
            "end": 3160
          },
          "start": 3155,
          "end": 3160
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3140,
      "end": 3162
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3172,
        "end": 3177
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 3181,
                "end": 3182
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
                      "start": 3183,
                      "end": 3189
                    },
                    "typeArguments": null,
                    "start": 3183,
                    "end": 3189
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3191,
                      "end": 3197
                    },
                    "typeArguments": null,
                    "start": 3191,
                    "end": 3197
                  }
                ],
                "start": 3182,
                "end": 3198
              },
              "start": 3181,
              "end": 3198
            },
            "start": 3179,
            "end": 3198
          },
          "start": 3178,
          "end": 3198
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3163,
      "end": 3200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3216,
        "end": 3221
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 3225,
              "end": 3228
            },
            "start": 3223,
            "end": 3228
          },
          "start": 3222,
          "end": 3228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3230,
        "end": 3233
      },
      "expression": false,
      "start": 3207,
      "end": 3233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 3233
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
    "value": "U",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 368,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 376,
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
    "value": "x",
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
    "value": ",",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 404,
    "end": 410
  },
  {
    "type": "Null",
    "value": "null",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 422,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 432,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 445,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 500,
    "end": 506
  },
  {
    "type": "Null",
    "value": "null",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "class",
    "start": 518,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 541,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 589,
    "end": 595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 617,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Keyword",
    "value": "extends",
    "start": 630,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 669,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 678,
    "end": 684
  },
  {
    "type": "Null",
    "value": "null",
    "start": 685,
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
    "type": "Keyword",
    "value": "interface",
    "start": 696,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 710,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 723,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 745,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 762,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 773,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 798,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 811,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 819,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
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
    "value": "T",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 867,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 880,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 888,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 894,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 901,
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
    "value": "T",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 935,
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
    "value": "T",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 941,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 954,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 962,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 984,
    "end": 990
  },
  {
    "type": "String",
    "value": "''",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "foo1",
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
    "value": "A",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1022,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1031,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1052,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1069,
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
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1079,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1088,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1114,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1131,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1140,
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
    "value": "B",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1151,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1220,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1229,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1258,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1267,
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
    "value": "C",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1278,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1305,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1314,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1333,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1370,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1387,
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
    "value": "Number",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1416,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1425,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1433,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1443,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1452,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1471,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1480,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1488,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 1508,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1517,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1544,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1552,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1563,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1572,
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
    "value": "x",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1600,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1609,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1617,
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
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1627,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1648,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1657,
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
    "value": "x",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1673,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1682,
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
    "value": "number",
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
    "value": ">",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1705,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "foo5",
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
    "value": "any",
    "start": 1722,
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
    "value": "{",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1732,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1741,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "foo5b",
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
    "value": "String",
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
    "value": "String",
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
    "value": "foo5b",
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
    "value": "foo5c",
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
    "value": "C",
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
    "value": "String",
    "start": 1846,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1854,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1864,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1873,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1884,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1908,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1917,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1926,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1936,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1945,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1956,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1964,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1974,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1983,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1994,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "Number",
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
    "start": 2057,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 2066,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2075,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2085,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2094,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2106,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2115,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2133,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2149,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2158,
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
    "value": "any",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2185,
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
    "value": "A",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2197,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2206,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2214,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2221,
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
    "value": ";",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2231,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2240,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2248,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2258,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2267,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2277,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2283,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2292,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2298,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2309,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2318,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2328,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2352,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2361,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2369,
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
    "value": "{",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2379,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2388,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2398,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2413,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2430,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2439,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2449,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2457,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2473,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2482,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2490,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2500,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2509,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2520,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2526,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2535,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2541,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2552,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2561,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2570,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2587,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2596,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2605,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2615,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2624,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2635,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2641,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2650,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2656,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2667,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2676,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2685,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2702,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2711,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2720,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2730,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2739,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2750,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2758,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2768,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2777,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2788,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2796,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2812,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2821,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2830,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2840,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2849,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2859,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2864,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2873,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2885,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2893,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2909,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2918,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2928,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2938,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2947,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2958,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2966,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2976,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2985,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2994,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3011,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 3020,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3029,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3039,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3048,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3059,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3067,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3077,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3086,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3095,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3112,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3121,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3130,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3140,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3149,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 3158,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3163,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3172,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3183,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 3191,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3207,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3216,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3225,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3232,
    "end": 3233
  }
]
```
