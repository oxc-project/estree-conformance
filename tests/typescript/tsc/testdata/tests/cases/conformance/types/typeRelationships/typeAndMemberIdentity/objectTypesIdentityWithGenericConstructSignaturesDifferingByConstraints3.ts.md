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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 344
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 347,
            "end": 358
          }
        ],
        "start": 345,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              },
              "start": 376,
              "end": 384
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 384
          }
        ],
        "start": 371,
        "end": 386
      },
      "abstract": false,
      "declare": false,
      "start": 361,
      "end": 386
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 402
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 408
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 410,
                "end": 416
              },
              "start": 408,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 405,
            "end": 416
          }
        ],
        "start": 403,
        "end": 418
      },
      "declare": false,
      "start": 387,
      "end": 418
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Four",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 433
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
              "start": 434,
              "end": 435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 434,
            "end": 435
          }
        ],
        "start": 433,
        "end": 436
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 442
            },
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
            "accessibility": null,
            "static": false,
            "start": 439,
            "end": 445
          }
        ],
        "start": 437,
        "end": 447
      },
      "declare": false,
      "start": 419,
      "end": 447
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Five",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
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
          }
        ],
        "start": 462,
        "end": 465
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Four",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 478
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
                  "start": 479,
                  "end": 480
                },
                "typeArguments": null,
                "start": 479,
                "end": 480
              }
            ],
            "start": 478,
            "end": 481
          },
          "start": 474,
          "end": 481
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 482,
        "end": 485
      },
      "declare": false,
      "start": 448,
      "end": 485
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Six",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 499
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
              "start": 500,
              "end": 501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 500,
            "end": 501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 503,
            "end": 504
          }
        ],
        "start": 499,
        "end": 505
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 515
            },
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
                  "start": 517,
                  "end": 518
                },
                "typeArguments": null,
                "start": 517,
                "end": 518
              },
              "start": 515,
              "end": 518
            },
            "accessibility": null,
            "static": false,
            "start": 512,
            "end": 519
          }
        ],
        "start": 506,
        "end": 521
      },
      "declare": false,
      "start": 486,
      "end": 521
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
        "start": 529,
        "end": 530
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
              "start": 531,
              "end": 532
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "typeArguments": null,
              "start": 541,
              "end": 542
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
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
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 557
              },
              "typeArguments": null,
              "start": 554,
              "end": 557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 544,
            "end": 557
          }
        ],
        "start": 530,
        "end": 558
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
              "start": 565,
              "end": 576
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
                        "start": 586,
                        "end": 587
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 587
                    },
                    "start": 584,
                    "end": 587
                  },
                  "start": 583,
                  "end": 587
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
                      "start": 598,
                      "end": 602
                    },
                    "start": 591,
                    "end": 603
                  }
                ],
                "start": 589,
                "end": 605
              },
              "expression": false,
              "start": 576,
              "end": 605
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 565,
            "end": 605
          }
        ],
        "start": 559,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 523,
      "end": 607
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
        "start": 615,
        "end": 616
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
              "start": 617,
              "end": 618
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "typeArguments": null,
              "start": 627,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 617,
            "end": 628
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Three",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 645
              },
              "typeArguments": null,
              "start": 640,
              "end": 645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 630,
            "end": 645
          }
        ],
        "start": 616,
        "end": 646
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
              "start": 653,
              "end": 664
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
                        "start": 668,
                        "end": 669
                      },
                      "typeArguments": null,
                      "start": 668,
                      "end": 669
                    },
                    "start": 666,
                    "end": 669
                  },
                  "start": 665,
                  "end": 669
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
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 686,
                      "end": 690
                    },
                    "start": 679,
                    "end": 691
                  }
                ],
                "start": 677,
                "end": 693
              },
              "expression": false,
              "start": 664,
              "end": 693
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 653,
            "end": 693
          }
        ],
        "start": 647,
        "end": 695
      },
      "abstract": false,
      "declare": false,
      "start": 609,
      "end": 695
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
        "start": 703,
        "end": 704
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
              "start": 705,
              "end": 706
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "typeArguments": null,
              "start": 715,
              "end": 716
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 705,
            "end": 716
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Four",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 732
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 733,
                    "end": 739
                  }
                ],
                "start": 732,
                "end": 740
              },
              "start": 728,
              "end": 740
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 740
          }
        ],
        "start": 704,
        "end": 741
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
              "start": 748,
              "end": 759
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
                        "start": 763,
                        "end": 764
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 764
                    },
                    "start": 761,
                    "end": 764
                  },
                  "start": 760,
                  "end": 764
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
                        "start": 769,
                        "end": 770
                      },
                      "typeArguments": null,
                      "start": 769,
                      "end": 770
                    },
                    "start": 767,
                    "end": 770
                  },
                  "start": 766,
                  "end": 770
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
                      "start": 781,
                      "end": 785
                    },
                    "start": 774,
                    "end": 786
                  }
                ],
                "start": 772,
                "end": 788
              },
              "expression": false,
              "start": 759,
              "end": 788
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 748,
            "end": 788
          }
        ],
        "start": 742,
        "end": 790
      },
      "abstract": false,
      "declare": false,
      "start": 697,
      "end": 790
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 803
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
              "start": 804,
              "end": 805
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 815
              },
              "typeArguments": null,
              "start": 814,
              "end": 815
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 804,
            "end": 815
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Five",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 832,
                    "end": 838
                  }
                ],
                "start": 831,
                "end": 839
              },
              "start": 827,
              "end": 839
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 817,
            "end": 839
          }
        ],
        "start": 803,
        "end": 840
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
                      "start": 854,
                      "end": 855
                    },
                    "typeArguments": null,
                    "start": 854,
                    "end": 855
                  },
                  "start": 852,
                  "end": 855
                },
                "start": 851,
                "end": 855
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
                      "start": 860,
                      "end": 861
                    },
                    "typeArguments": null,
                    "start": 860,
                    "end": 861
                  },
                  "start": 858,
                  "end": 861
                },
                "start": 857,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 864,
                "end": 870
              },
              "start": 862,
              "end": 870
            },
            "start": 847,
            "end": 871
          }
        ],
        "start": 841,
        "end": 873
      },
      "declare": false,
      "start": 792,
      "end": 873
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 887
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
                    "start": 898,
                    "end": 899
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 908,
                      "end": 909
                    },
                    "typeArguments": null,
                    "start": 908,
                    "end": 909
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 898,
                  "end": 909
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 911,
                    "end": 912
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Six",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 921,
                      "end": 924
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 925,
                          "end": 931
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 933,
                          "end": 939
                        }
                      ],
                      "start": 924,
                      "end": 940
                    },
                    "start": 921,
                    "end": 940
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 911,
                  "end": 940
                }
              ],
              "start": 897,
              "end": 941
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
                      "start": 945,
                      "end": 946
                    },
                    "typeArguments": null,
                    "start": 945,
                    "end": 946
                  },
                  "start": 943,
                  "end": 946
                },
                "start": 942,
                "end": 946
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
                      "start": 951,
                      "end": 952
                    },
                    "typeArguments": null,
                    "start": 951,
                    "end": 952
                  },
                  "start": 949,
                  "end": 952
                },
                "start": 948,
                "end": 952
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 955,
                "end": 961
              },
              "start": 953,
              "end": 961
            },
            "start": 894,
            "end": 962
          }
        ],
        "start": 888,
        "end": 964
      },
      "declare": false,
      "start": 875,
      "end": 964
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
                            "start": 979,
                            "end": 980
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 989,
                              "end": 990
                            },
                            "typeArguments": null,
                            "start": 989,
                            "end": 990
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 979,
                          "end": 990
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 992,
                            "end": 993
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "One",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1002,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1002,
                            "end": 1005
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 992,
                          "end": 1005
                        }
                      ],
                      "start": 978,
                      "end": 1006
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
                              "start": 1010,
                              "end": 1011
                            },
                            "typeArguments": null,
                            "start": 1010,
                            "end": 1011
                          },
                          "start": 1008,
                          "end": 1011
                        },
                        "start": 1007,
                        "end": 1011
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
                              "start": 1016,
                              "end": 1017
                            },
                            "typeArguments": null,
                            "start": 1016,
                            "end": 1017
                          },
                          "start": 1014,
                          "end": 1017
                        },
                        "start": 1013,
                        "end": 1017
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1020,
                        "end": 1026
                      },
                      "start": 1018,
                      "end": 1026
                    },
                    "start": 975,
                    "end": 1026
                  }
                ],
                "start": 973,
                "end": 1028
              },
              "start": 971,
              "end": 1028
            },
            "start": 970,
            "end": 1028
          },
          "init": null,
          "definite": false,
          "start": 970,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 966,
      "end": 1028
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
            "start": 1033,
            "end": 1034
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
                  "start": 1039,
                  "end": 1042
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
                          "start": 1043,
                          "end": 1044
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1053,
                            "end": 1054
                          },
                          "typeArguments": null,
                          "start": 1053,
                          "end": 1054
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1043,
                        "end": 1054
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1056,
                          "end": 1057
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1066,
                            "end": 1069
                          },
                          "typeArguments": null,
                          "start": 1066,
                          "end": 1069
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1056,
                        "end": 1069
                      }
                    ],
                    "start": 1042,
                    "end": 1070
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
                            "start": 1074,
                            "end": 1075
                          },
                          "typeArguments": null,
                          "start": 1074,
                          "end": 1075
                        },
                        "start": 1072,
                        "end": 1075
                      },
                      "start": 1071,
                      "end": 1075
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
                            "start": 1080,
                            "end": 1081
                          },
                          "typeArguments": null,
                          "start": 1080,
                          "end": 1081
                        },
                        "start": 1078,
                        "end": 1081
                      },
                      "start": 1077,
                      "end": 1081
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
                          "start": 1092,
                          "end": 1094
                        },
                        "start": 1085,
                        "end": 1095
                      }
                    ],
                    "start": 1083,
                    "end": 1097
                  },
                  "expression": false,
                  "start": 1042,
                  "end": 1097
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1039,
                "end": 1097
              }
            ],
            "start": 1037,
            "end": 1099
          },
          "definite": false,
          "start": 1033,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1170,
                "end": 1171
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1172,
                      "end": 1175
                    },
                    "typeArguments": null,
                    "start": 1172,
                    "end": 1175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1177,
                      "end": 1180
                    },
                    "typeArguments": null,
                    "start": 1177,
                    "end": 1180
                  }
                ],
                "start": 1171,
                "end": 1181
              },
              "start": 1170,
              "end": 1181
            },
            "start": 1168,
            "end": 1181
          },
          "start": 1167,
          "end": 1181
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1152,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1198
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1202,
                "end": 1203
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1204,
                      "end": 1207
                    },
                    "typeArguments": null,
                    "start": 1204,
                    "end": 1207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1209,
                      "end": 1212
                    },
                    "typeArguments": null,
                    "start": 1209,
                    "end": 1212
                  }
                ],
                "start": 1203,
                "end": 1213
              },
              "start": 1202,
              "end": 1213
            },
            "start": 1200,
            "end": 1213
          },
          "start": 1199,
          "end": 1213
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1184,
      "end": 1215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
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
      "start": 1225,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1271,
                "end": 1272
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1278
                    },
                    "typeArguments": null,
                    "start": 1273,
                    "end": 1278
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1285
                    },
                    "typeArguments": null,
                    "start": 1280,
                    "end": 1285
                  }
                ],
                "start": 1272,
                "end": 1286
              },
              "start": 1271,
              "end": 1286
            },
            "start": 1269,
            "end": 1286
          },
          "start": 1268,
          "end": 1286
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1253,
      "end": 1288
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1308
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1309,
                      "end": 1314
                    },
                    "typeArguments": null,
                    "start": 1309,
                    "end": 1314
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1321
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1321
                  }
                ],
                "start": 1308,
                "end": 1322
              },
              "start": 1307,
              "end": 1322
            },
            "start": 1305,
            "end": 1322
          },
          "start": 1304,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1289,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
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
              "type": "TSAnyKeyword",
              "start": 1352,
              "end": 1355
            },
            "start": 1350,
            "end": 1355
          },
          "start": 1349,
          "end": 1355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1357,
        "end": 1360
      },
      "expression": false,
      "start": 1334,
      "end": 1360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1379,
                "end": 1380
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1381,
                      "end": 1385
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1386,
                          "end": 1392
                        }
                      ],
                      "start": 1385,
                      "end": 1393
                    },
                    "start": 1381,
                    "end": 1393
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1395,
                      "end": 1399
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1400,
                          "end": 1406
                        }
                      ],
                      "start": 1399,
                      "end": 1407
                    },
                    "start": 1395,
                    "end": 1407
                  }
                ],
                "start": 1380,
                "end": 1408
              },
              "start": 1379,
              "end": 1408
            },
            "start": 1377,
            "end": 1408
          },
          "start": 1376,
          "end": 1408
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1362,
      "end": 1410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1420,
        "end": 1424
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1428,
                "end": 1429
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1430,
                      "end": 1434
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1435,
                          "end": 1441
                        }
                      ],
                      "start": 1434,
                      "end": 1442
                    },
                    "start": 1430,
                    "end": 1442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1444,
                      "end": 1448
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1449,
                          "end": 1455
                        }
                      ],
                      "start": 1448,
                      "end": 1456
                    },
                    "start": 1444,
                    "end": 1456
                  }
                ],
                "start": 1429,
                "end": 1457
              },
              "start": 1428,
              "end": 1457
            },
            "start": 1426,
            "end": 1457
          },
          "start": 1425,
          "end": 1457
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1411,
      "end": 1459
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1478,
        "end": 1482
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1486,
              "end": 1489
            },
            "start": 1484,
            "end": 1489
          },
          "start": 1483,
          "end": 1489
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1491,
        "end": 1494
      },
      "expression": false,
      "start": 1469,
      "end": 1494
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1509
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1520,
                "end": 1521
              },
              "typeArguments": null,
              "start": 1513,
              "end": 1521
            },
            "start": 1511,
            "end": 1521
          },
          "start": 1510,
          "end": 1521
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1496,
      "end": 1523
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1537
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1548,
                "end": 1549
              },
              "typeArguments": null,
              "start": 1541,
              "end": 1549
            },
            "start": 1539,
            "end": 1549
          },
          "start": 1538,
          "end": 1549
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1524,
      "end": 1551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1574
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1578,
              "end": 1581
            },
            "start": 1576,
            "end": 1581
          },
          "start": 1575,
          "end": 1581
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1583,
        "end": 1586
      },
      "expression": false,
      "start": 1561,
      "end": 1586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1612,
                "end": 1613
              },
              "typeArguments": null,
              "start": 1605,
              "end": 1613
            },
            "start": 1603,
            "end": 1613
          },
          "start": 1602,
          "end": 1613
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1588,
      "end": 1615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1625,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1640,
                "end": 1641
              },
              "typeArguments": null,
              "start": 1633,
              "end": 1641
            },
            "start": 1631,
            "end": 1641
          },
          "start": 1630,
          "end": 1641
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1616,
      "end": 1643
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1666
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1670,
              "end": 1673
            },
            "start": 1668,
            "end": 1673
          },
          "start": 1667,
          "end": 1673
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1675,
        "end": 1678
      },
      "expression": false,
      "start": 1653,
      "end": 1678
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1689,
        "end": 1694
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1698,
                "end": 1699
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1700,
                      "end": 1705
                    },
                    "typeArguments": null,
                    "start": 1700,
                    "end": 1705
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1707,
                      "end": 1712
                    },
                    "typeArguments": null,
                    "start": 1707,
                    "end": 1712
                  }
                ],
                "start": 1699,
                "end": 1713
              },
              "start": 1698,
              "end": 1713
            },
            "start": 1696,
            "end": 1713
          },
          "start": 1695,
          "end": 1713
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1680,
      "end": 1715
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1735
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1736,
                      "end": 1740
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1741,
                          "end": 1747
                        }
                      ],
                      "start": 1740,
                      "end": 1748
                    },
                    "start": 1736,
                    "end": 1748
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1750,
                      "end": 1754
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1755,
                          "end": 1761
                        }
                      ],
                      "start": 1754,
                      "end": 1762
                    },
                    "start": 1750,
                    "end": 1762
                  }
                ],
                "start": 1735,
                "end": 1763
              },
              "start": 1734,
              "end": 1763
            },
            "start": 1732,
            "end": 1763
          },
          "start": 1731,
          "end": 1763
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1716,
      "end": 1765
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1784,
        "end": 1789
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1793,
              "end": 1796
            },
            "start": 1791,
            "end": 1796
          },
          "start": 1790,
          "end": 1796
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1798,
        "end": 1801
      },
      "expression": false,
      "start": 1775,
      "end": 1801
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1812,
        "end": 1817
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1821,
                "end": 1822
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1823,
                      "end": 1828
                    },
                    "typeArguments": null,
                    "start": 1823,
                    "end": 1828
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1830,
                      "end": 1835
                    },
                    "typeArguments": null,
                    "start": 1830,
                    "end": 1835
                  }
                ],
                "start": 1822,
                "end": 1836
              },
              "start": 1821,
              "end": 1836
            },
            "start": 1819,
            "end": 1836
          },
          "start": 1818,
          "end": 1836
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1803,
      "end": 1838
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1848,
        "end": 1853
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1857,
                "end": 1858
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1859,
                      "end": 1863
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1864,
                          "end": 1870
                        }
                      ],
                      "start": 1863,
                      "end": 1871
                    },
                    "start": 1859,
                    "end": 1871
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1873,
                      "end": 1877
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1878,
                          "end": 1884
                        }
                      ],
                      "start": 1877,
                      "end": 1885
                    },
                    "start": 1873,
                    "end": 1885
                  }
                ],
                "start": 1858,
                "end": 1886
              },
              "start": 1857,
              "end": 1886
            },
            "start": 1855,
            "end": 1886
          },
          "start": 1854,
          "end": 1886
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1839,
      "end": 1888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1907,
        "end": 1912
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1916,
              "end": 1919
            },
            "start": 1914,
            "end": 1919
          },
          "start": 1913,
          "end": 1919
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1921,
        "end": 1924
      },
      "expression": false,
      "start": 1898,
      "end": 1924
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1935,
        "end": 1939
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1943,
                "end": 1944
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1945,
                      "end": 1948
                    },
                    "typeArguments": null,
                    "start": 1945,
                    "end": 1948
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1950,
                      "end": 1953
                    },
                    "typeArguments": null,
                    "start": 1950,
                    "end": 1953
                  }
                ],
                "start": 1944,
                "end": 1954
              },
              "start": 1943,
              "end": 1954
            },
            "start": 1941,
            "end": 1954
          },
          "start": 1940,
          "end": 1954
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1926,
      "end": 1956
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1966,
        "end": 1970
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 1974,
                "end": 1975
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1976,
                      "end": 1980
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1981,
                          "end": 1987
                        }
                      ],
                      "start": 1980,
                      "end": 1988
                    },
                    "start": 1976,
                    "end": 1988
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1994
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1995,
                          "end": 2001
                        }
                      ],
                      "start": 1994,
                      "end": 2002
                    },
                    "start": 1990,
                    "end": 2002
                  }
                ],
                "start": 1975,
                "end": 2003
              },
              "start": 1974,
              "end": 2003
            },
            "start": 1972,
            "end": 2003
          },
          "start": 1971,
          "end": 2003
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1957,
      "end": 2005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2024,
        "end": 2028
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2032,
              "end": 2035
            },
            "start": 2030,
            "end": 2035
          },
          "start": 2029,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2037,
        "end": 2040
      },
      "expression": false,
      "start": 2015,
      "end": 2040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2051,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2060
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2061,
                      "end": 2064
                    },
                    "typeArguments": null,
                    "start": 2061,
                    "end": 2064
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2069
                    },
                    "typeArguments": null,
                    "start": 2066,
                    "end": 2069
                  }
                ],
                "start": 2060,
                "end": 2070
              },
              "start": 2059,
              "end": 2070
            },
            "start": 2057,
            "end": 2070
          },
          "start": 2056,
          "end": 2070
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2042,
      "end": 2072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2082,
        "end": 2086
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2090,
                "end": 2091
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2092,
                      "end": 2097
                    },
                    "typeArguments": null,
                    "start": 2092,
                    "end": 2097
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2099,
                      "end": 2104
                    },
                    "typeArguments": null,
                    "start": 2099,
                    "end": 2104
                  }
                ],
                "start": 2091,
                "end": 2105
              },
              "start": 2090,
              "end": 2105
            },
            "start": 2088,
            "end": 2105
          },
          "start": 2087,
          "end": 2105
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2073,
      "end": 2107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2134,
              "end": 2137
            },
            "start": 2132,
            "end": 2137
          },
          "start": 2131,
          "end": 2137
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2139,
        "end": 2142
      },
      "expression": false,
      "start": 2117,
      "end": 2142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2153,
        "end": 2158
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2162,
                "end": 2163
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2164,
                      "end": 2167
                    },
                    "typeArguments": null,
                    "start": 2164,
                    "end": 2167
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2172
                    },
                    "typeArguments": null,
                    "start": 2169,
                    "end": 2172
                  }
                ],
                "start": 2163,
                "end": 2173
              },
              "start": 2162,
              "end": 2173
            },
            "start": 2160,
            "end": 2173
          },
          "start": 2159,
          "end": 2173
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2144,
      "end": 2175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
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
        "name": "foo10",
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
        "name": "foo11",
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
                "name": "B",
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
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2262
                    },
                    "typeArguments": null,
                    "start": 2259,
                    "end": 2262
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2264,
                      "end": 2267
                    },
                    "typeArguments": null,
                    "start": 2264,
                    "end": 2267
                  }
                ],
                "start": 2258,
                "end": 2268
              },
              "start": 2257,
              "end": 2268
            },
            "start": 2255,
            "end": 2268
          },
          "start": 2254,
          "end": 2268
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2239,
      "end": 2270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2280,
        "end": 2285
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2296,
                "end": 2297
              },
              "typeArguments": null,
              "start": 2289,
              "end": 2297
            },
            "start": 2287,
            "end": 2297
          },
          "start": 2286,
          "end": 2297
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2271,
      "end": 2299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2315,
        "end": 2320
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2324,
              "end": 2327
            },
            "start": 2322,
            "end": 2327
          },
          "start": 2321,
          "end": 2327
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2329,
        "end": 2332
      },
      "expression": false,
      "start": 2306,
      "end": 2332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2343,
        "end": 2348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2352,
                "end": 2353
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2354,
                      "end": 2358
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2359,
                          "end": 2365
                        }
                      ],
                      "start": 2358,
                      "end": 2366
                    },
                    "start": 2354,
                    "end": 2366
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2368,
                      "end": 2372
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2373,
                          "end": 2379
                        }
                      ],
                      "start": 2372,
                      "end": 2380
                    },
                    "start": 2368,
                    "end": 2380
                  }
                ],
                "start": 2353,
                "end": 2381
              },
              "start": 2352,
              "end": 2381
            },
            "start": 2350,
            "end": 2381
          },
          "start": 2349,
          "end": 2381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2334,
      "end": 2383
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2393,
        "end": 2398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2402,
                "end": 2403
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2404,
                      "end": 2409
                    },
                    "typeArguments": null,
                    "start": 2404,
                    "end": 2409
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2411,
                      "end": 2416
                    },
                    "typeArguments": null,
                    "start": 2411,
                    "end": 2416
                  }
                ],
                "start": 2403,
                "end": 2417
              },
              "start": 2402,
              "end": 2417
            },
            "start": 2400,
            "end": 2417
          },
          "start": 2399,
          "end": 2417
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2384,
      "end": 2419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2435,
        "end": 2440
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2444,
              "end": 2447
            },
            "start": 2442,
            "end": 2447
          },
          "start": 2441,
          "end": 2447
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2449,
        "end": 2452
      },
      "expression": false,
      "start": 2426,
      "end": 2452
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2463,
        "end": 2469
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2473,
                "end": 2475
              },
              "typeArguments": null,
              "start": 2473,
              "end": 2475
            },
            "start": 2471,
            "end": 2475
          },
          "start": 2470,
          "end": 2475
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2454,
      "end": 2477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2487,
        "end": 2493
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2497,
                "end": 2498
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2499,
                      "end": 2504
                    },
                    "typeArguments": null,
                    "start": 2499,
                    "end": 2504
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2506,
                      "end": 2511
                    },
                    "typeArguments": null,
                    "start": 2506,
                    "end": 2511
                  }
                ],
                "start": 2498,
                "end": 2512
              },
              "start": 2497,
              "end": 2512
            },
            "start": 2495,
            "end": 2512
          },
          "start": 2494,
          "end": 2512
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2478,
      "end": 2514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2530,
        "end": 2536
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2540,
              "end": 2543
            },
            "start": 2538,
            "end": 2543
          },
          "start": 2537,
          "end": 2543
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2545,
        "end": 2548
      },
      "expression": false,
      "start": 2521,
      "end": 2548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2564
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2568,
                "end": 2569
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2570,
                      "end": 2574
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2575,
                          "end": 2581
                        }
                      ],
                      "start": 2574,
                      "end": 2582
                    },
                    "start": 2570,
                    "end": 2582
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2584,
                      "end": 2588
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2589,
                          "end": 2595
                        }
                      ],
                      "start": 2588,
                      "end": 2596
                    },
                    "start": 2584,
                    "end": 2596
                  }
                ],
                "start": 2569,
                "end": 2597
              },
              "start": 2568,
              "end": 2597
            },
            "start": 2566,
            "end": 2597
          },
          "start": 2565,
          "end": 2597
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2550,
      "end": 2599
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2609,
        "end": 2614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2625,
                "end": 2626
              },
              "typeArguments": null,
              "start": 2618,
              "end": 2626
            },
            "start": 2616,
            "end": 2626
          },
          "start": 2615,
          "end": 2626
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2600,
      "end": 2628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2644,
        "end": 2649
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2653,
              "end": 2656
            },
            "start": 2651,
            "end": 2656
          },
          "start": 2650,
          "end": 2656
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2658,
        "end": 2661
      },
      "expression": false,
      "start": 2635,
      "end": 2661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2672,
        "end": 2677
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
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
                "start": 2681,
                "end": 2682
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2683,
                      "end": 2687
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2688,
                          "end": 2694
                        }
                      ],
                      "start": 2687,
                      "end": 2695
                    },
                    "start": 2683,
                    "end": 2695
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2697,
                      "end": 2701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2702,
                          "end": 2708
                        }
                      ],
                      "start": 2701,
                      "end": 2709
                    },
                    "start": 2697,
                    "end": 2709
                  }
                ],
                "start": 2682,
                "end": 2710
              },
              "start": 2681,
              "end": 2710
            },
            "start": 2679,
            "end": 2710
          },
          "start": 2678,
          "end": 2710
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2663,
      "end": 2712
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2722,
        "end": 2727
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2738,
                "end": 2739
              },
              "typeArguments": null,
              "start": 2731,
              "end": 2739
            },
            "start": 2729,
            "end": 2739
          },
          "start": 2728,
          "end": 2739
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2713,
      "end": 2741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2757,
        "end": 2762
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2766,
              "end": 2769
            },
            "start": 2764,
            "end": 2769
          },
          "start": 2763,
          "end": 2769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2771,
        "end": 2774
      },
      "expression": false,
      "start": 2748,
      "end": 2774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2774
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
    "value": "One",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 387,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 397,
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
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 419,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 439,
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
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 448,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 458,
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
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 466,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 474,
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
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 486,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 533,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Keyword",
    "value": "extends",
    "start": 546,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 565,
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
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 591,
    "end": 597
  },
  {
    "type": "Null",
    "value": "null",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 609,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 615,
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
    "value": "U",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 632,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 653,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
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
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 679,
    "end": 685
  },
  {
    "type": "Null",
    "value": "null",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "class",
    "start": 697,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 703,
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
    "value": "U",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 720,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 748,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 774,
    "end": 780
  },
  {
    "type": "Null",
    "value": "null",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 792,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 806,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 819,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 832,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "new",
    "start": 847,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 864,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 875,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 900,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 913,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 951,
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
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
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
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 981,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 994,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1002,
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
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1045,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1058,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "String",
    "value": "''",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 1152,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1170,
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
    "value": "Two",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1184,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1212,
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
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1225,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1234,
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
    "value": "foo1c",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1273,
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
    "value": "Three",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1289,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1298,
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
    "value": "C",
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
    "value": "Three",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1316,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1334,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "foo1c",
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
    "value": "any",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1362,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "foo2",
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
    "value": "I",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1381,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1392,
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
    "value": "Five",
    "start": 1395,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "foo2",
    "start": 1420,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1428,
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
    "value": "Five",
    "start": 1430,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1435,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1469,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1496,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1513,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1524,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1533,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1541,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1588,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1597,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1605,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1616,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1625,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1633,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1653,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1662,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1670,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1680,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1707,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1716,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "foo5c",
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
    "value": "D",
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
    "value": "Four",
    "start": 1736,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1741,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 1750,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1755,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1775,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1784,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1803,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1812,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1830,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1848,
    "end": 1853
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
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 1859,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1878,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
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
    "start": 1898,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1907,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1926,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1935,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1953,
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
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1957,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1966,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1990,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1995,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2015,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2024,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2042,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2051,
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
    "value": "B",
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
    "value": "Two",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2066,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2073,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2082,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2092,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2099,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 2117,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2126,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2134,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2144,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2153,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2169,
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
    "value": "foo10",
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
    "value": "foo10",
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
    "value": "foo11",
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
    "value": "B",
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
    "value": "Two",
    "start": 2259,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2264,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2271,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2280,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2289,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2306,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2315,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2324,
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
    "value": "{",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2334,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2343,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2354,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2359,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2368,
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
    "value": "string",
    "start": 2373,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2384,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2393,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2402,
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
    "value": "Three",
    "start": 2404,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2411,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2426,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2444,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2454,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2463,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2478,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2487,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2499,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2506,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2521,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2530,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2540,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2550,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2559,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2570,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2575,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2584,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2589,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2600,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2609,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2618,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2635,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2644,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2653,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2663,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2672,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2688,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2697,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2702,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2713,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2722,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2731,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2748,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2757,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2773,
    "end": 2774
  }
]
```
