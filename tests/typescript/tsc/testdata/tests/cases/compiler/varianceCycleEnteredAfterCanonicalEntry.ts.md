__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StubBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 479
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
              "start": 480,
              "end": 481
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 484,
              "end": 491
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 480,
            "end": 491
          }
        ],
        "start": 479,
        "end": 492
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
              "name": "brand",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 502
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
                  "start": 504,
                  "end": 505
                },
                "typeArguments": null,
                "start": 504,
                "end": 505
              },
              "start": 502,
              "end": 505
            },
            "accessibility": null,
            "static": false,
            "start": 497,
            "end": 506
          }
        ],
        "start": 493,
        "end": 508
      },
      "declare": false,
      "start": 461,
      "end": 508
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stub",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 520
          }
        ],
        "start": 518,
        "end": 521
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 524,
            "end": 525
          },
          "typeArguments": null,
          "start": 524,
          "end": 525
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 534,
          "end": 540
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Provider",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 551
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
                      "start": 552,
                      "end": 553
                    },
                    "typeArguments": null,
                    "start": 552,
                    "end": 553
                  }
                ],
                "start": 551,
                "end": 554
              },
              "start": 543,
              "end": 554
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StubBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 565
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
                      "start": 566,
                      "end": 567
                    },
                    "typeArguments": null,
                    "start": 566,
                    "end": 567
                  }
                ],
                "start": 565,
                "end": 568
              },
              "start": 557,
              "end": 568
            }
          ],
          "start": 543,
          "end": 568
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StubBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 579
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
                  "start": 580,
                  "end": 581
                },
                "typeArguments": null,
                "start": 580,
                "end": 581
              }
            ],
            "start": 579,
            "end": 582
          },
          "start": 571,
          "end": 582
        },
        "start": 524,
        "end": 582
      },
      "declare": false,
      "start": 509,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stubify",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 596
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
              "start": 597,
              "end": 598
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 597,
            "end": 598
          }
        ],
        "start": 596,
        "end": 599
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 603
          },
          "typeArguments": null,
          "start": 602,
          "end": 603
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StubBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 612,
            "end": 620
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 621,
                "end": 624
              }
            ],
            "start": 620,
            "end": 625
          },
          "start": 612,
          "end": 625
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 629
          },
          "typeArguments": null,
          "start": 628,
          "end": 629
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
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
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 650
            },
            "typeArguments": null,
            "start": 642,
            "end": 650
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Stub",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 657
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
                    "start": 658,
                    "end": 659
                  },
                  "typeArguments": null,
                  "start": 658,
                  "end": 659
                }
              ],
              "start": 657,
              "end": 660
            },
            "start": 653,
            "end": 660
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "typeArguments": null,
            "start": 663,
            "end": 664
          },
          "start": 632,
          "end": 664
        },
        "start": 602,
        "end": 664
      },
      "declare": false,
      "start": 584,
      "end": 665
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RpcPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 681
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
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 694
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Stubify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 702
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
                          "start": 703,
                          "end": 704
                        },
                        "typeArguments": null,
                        "start": 703,
                        "end": 704
                      }
                    ],
                    "start": 702,
                    "end": 705
                  },
                  "start": 695,
                  "end": 705
                }
              ],
              "start": 694,
              "end": 706
            },
            "start": 687,
            "end": 706
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Provider",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 717
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
                    "start": 718,
                    "end": 719
                  },
                  "typeArguments": null,
                  "start": 718,
                  "end": 719
                }
              ],
              "start": 717,
              "end": 720
            },
            "start": 709,
            "end": 720
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StubBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 731
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
                    "start": 732,
                    "end": 733
                  },
                  "typeArguments": null,
                  "start": 732,
                  "end": 733
                }
              ],
              "start": 731,
              "end": 734
            },
            "start": 723,
            "end": 734
          }
        ],
        "start": 687,
        "end": 734
      },
      "declare": false,
      "start": 666,
      "end": 735
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 747
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 749
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 748,
            "end": 749
          }
        ],
        "start": 747,
        "end": 750
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 754
          },
          "typeArguments": null,
          "start": 753,
          "end": 754
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StubBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 771
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 778,
                    "end": 779
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 778,
                  "end": 779
                },
                "start": 772,
                "end": 779
              }
            ],
            "start": 771,
            "end": 780
          },
          "start": 763,
          "end": 780
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 789
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
                },
                "typeArguments": null,
                "start": 790,
                "end": 791
              }
            ],
            "start": 789,
            "end": 792
          },
          "start": 783,
          "end": 792
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RpcPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 805
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 807
                },
                "typeArguments": null,
                "start": 806,
                "end": 807
              }
            ],
            "start": 805,
            "end": 808
          },
          "start": 795,
          "end": 808
        },
        "start": 753,
        "end": 808
      },
      "declare": false,
      "start": 736,
      "end": 809
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MethodOrProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 831
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 833
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 832,
            "end": 833
          }
        ],
        "start": 831,
        "end": 834
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 838
          },
          "typeArguments": null,
          "start": 837,
          "end": 838
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 855
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 864
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 863,
                    "end": 864
                  },
                  "start": 857,
                  "end": 864
                },
                "start": 855,
                "end": 864
              },
              "value": null,
              "start": 848,
              "end": 864
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 876
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 875,
                "end": 876
              },
              "start": 869,
              "end": 876
            },
            "start": 866,
            "end": 876
          },
          "start": 847,
          "end": 876
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 887
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 890
                  },
                  "typeArguments": null,
                  "start": 889,
                  "end": 890
                },
                "start": 887,
                "end": 890
              },
              "value": null,
              "start": 880,
              "end": 890
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 895,
                "end": 901
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Awaited",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 909
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 910,
                            "end": 911
                          },
                          "typeArguments": null,
                          "start": 910,
                          "end": 911
                        }
                      ],
                      "start": 909,
                      "end": 912
                    },
                    "start": 902,
                    "end": 912
                  }
                ],
                "start": 901,
                "end": 913
              },
              "start": 895,
              "end": 913
            },
            "start": 892,
            "end": 913
          },
          "start": 879,
          "end": 913
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 916,
            "end": 922
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Awaited",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 930
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 932
                      },
                      "typeArguments": null,
                      "start": 931,
                      "end": 932
                    }
                  ],
                  "start": 930,
                  "end": 933
                },
                "start": 923,
                "end": 933
              }
            ],
            "start": 922,
            "end": 934
          },
          "start": 916,
          "end": 934
        },
        "start": 837,
        "end": 934
      },
      "declare": false,
      "start": 810,
      "end": 935
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Provider",
        "optional": false,
        "typeAnnotation": null,
        "start": 941,
        "end": 949
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
              "start": 950,
              "end": 951
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 950,
            "end": 951
          }
        ],
        "start": 949,
        "end": 952
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 958,
          "end": 959
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 970
            },
            "typeArguments": null,
            "start": 969,
            "end": 970
          },
          "start": 963,
          "end": 970
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MethodOrProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 973,
            "end": 989
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 991
                  },
                  "typeArguments": null,
                  "start": 990,
                  "end": 991
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 993
                  },
                  "typeArguments": null,
                  "start": 992,
                  "end": 993
                },
                "start": 990,
                "end": 994
              }
            ],
            "start": 989,
            "end": 995
          },
          "start": 973,
          "end": 995
        },
        "optional": false,
        "readonly": null,
        "start": 955,
        "end": 997
      },
      "declare": false,
      "start": 936,
      "end": 998
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1009,
        "end": 1010
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
              "start": 1011,
              "end": 1012
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1011,
            "end": 1012
          }
        ],
        "start": 1010,
        "end": 1013
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
                "name": "Stubify",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1024
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
                      "start": 1025,
                      "end": 1026
                    },
                    "typeArguments": null,
                    "start": 1025,
                    "end": 1026
                  }
                ],
                "start": 1024,
                "end": 1027
              },
              "start": 1017,
              "end": 1027
            },
            "start": 1015,
            "end": 1027
          },
          "start": 1014,
          "end": 1027
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
                "name": "Stubify",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1039
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1040,
                          "end": 1041
                        },
                        "typeArguments": null,
                        "start": 1040,
                        "end": 1041
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1044,
                        "end": 1053
                      }
                    ],
                    "start": 1040,
                    "end": 1053
                  }
                ],
                "start": 1039,
                "end": 1054
              },
              "start": 1032,
              "end": 1054
            },
            "start": 1030,
            "end": 1054
          },
          "start": 1029,
          "end": 1054
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1061
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1065
              },
              "start": 1060,
              "end": 1065
            },
            "directive": null,
            "start": 1060,
            "end": 1066
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1069,
                "end": 1070
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1074
              },
              "start": 1069,
              "end": 1074
            },
            "directive": null,
            "start": 1069,
            "end": 1075
          }
        ],
        "start": 1056,
        "end": 1077
      },
      "expression": false,
      "start": 1000,
      "end": 1077
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "api",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stub",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1102
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sub",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1105,
                            "end": 1108
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1112,
                                "end": 1119
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Stub",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1120,
                                      "end": 1124
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeLiteral",
                                          "members": [],
                                          "start": 1125,
                                          "end": 1127
                                        }
                                      ],
                                      "start": 1124,
                                      "end": 1128
                                    },
                                    "start": 1120,
                                    "end": 1128
                                  }
                                ],
                                "start": 1119,
                                "end": 1129
                              },
                              "start": 1112,
                              "end": 1129
                            },
                            "start": 1110,
                            "end": 1129
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 1105,
                          "end": 1129
                        }
                      ],
                      "start": 1103,
                      "end": 1131
                    }
                  ],
                  "start": 1102,
                  "end": 1132
                },
                "start": 1098,
                "end": 1132
              },
              "start": 1096,
              "end": 1132
            },
            "start": 1093,
            "end": 1132
          },
          "init": null,
          "definite": false,
          "start": 1093,
          "end": 1132
        }
      ],
      "declare": true,
      "start": 1079,
      "end": 1133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 1156,
          "end": 1157
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "api",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1170,
                      "end": 1173
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sub",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1174,
                      "end": 1177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1170,
                    "end": 1177
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1170,
                  "end": 1179
                },
                "start": 1164,
                "end": 1179
              },
              "directive": null,
              "start": 1164,
              "end": 1180
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "api",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sub",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1187,
                        "end": 1190
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1183,
                      "end": 1190
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1183,
                    "end": 1192
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1193,
                    "end": 1197
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1183,
                  "end": 1197
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1199
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1203,
                      "end": 1204
                    },
                    "id": null,
                    "generator": false,
                    "start": 1198,
                    "end": 1204
                  }
                ],
                "optional": false,
                "start": 1183,
                "end": 1205
              },
              "directive": null,
              "start": 1183,
              "end": 1206
            }
          ],
          "start": 1160,
          "end": 1208
        },
        "expression": false,
        "start": 1141,
        "end": 1208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1134,
      "end": 1208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1208
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 461,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 471,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 484,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "brand",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 509,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "Stub",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 526,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 543,
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
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 557,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 571,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 584,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "Stubify",
    "start": 589,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 604,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 612,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 628,
    "end": 629
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
    "type": "Keyword",
    "value": "extends",
    "start": 634,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 642,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Stub",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 666,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "RpcPromise",
    "start": 671,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 687,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Stubify",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 709,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 718,
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
    "value": "&",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 736,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 755,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "StubBase",
    "start": 763,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 772,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 790,
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
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "RpcPromise",
    "start": 795,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 810,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "MethodOrProperty",
    "start": 815,
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
    "value": "V",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 839,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 848,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 851,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 857,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "infer",
    "start": 869,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 880,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 889,
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
    "value": "=>",
    "start": 892,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 902,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 916,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 923,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 936,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 941,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 960,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 963,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "MethodOrProperty",
    "start": 973,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1000,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "Stubify",
    "start": 1017,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Stubify",
    "start": 1032,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1044,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Stub",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1112,
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
    "value": "Stub",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ">",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1164,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  }
]
```
