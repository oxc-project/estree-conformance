__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 26
          }
        ],
        "start": 9,
        "end": 27
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "typeArguments": null,
          "start": 34,
          "end": 35
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 44,
              "end": 48
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 55,
              "end": 57
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 54,
                "end": 55
              },
              "start": 48,
              "end": 55
            }
          ],
          "start": 44,
          "end": 57
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
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
                  "start": 65,
                  "end": 66
                },
                "typeArguments": null,
                "start": 65,
                "end": 66
              }
            ],
            "start": 64,
            "end": 67
          },
          "start": 60,
          "end": 67
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeArguments": null,
            "start": 74,
            "end": 75
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 84,
                "end": 87
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " ",
                  "cooked": " "
                },
                "tail": true,
                "start": 94,
                "end": 97
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 93,
                  "end": 94
                },
                "start": 87,
                "end": 94
              }
            ],
            "start": 84,
            "end": 97
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
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
                    "start": 105,
                    "end": 106
                  },
                  "typeArguments": null,
                  "start": 105,
                  "end": 106
                }
              ],
              "start": 104,
              "end": 107
            },
            "start": 100,
            "end": 107
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeArguments": null,
            "start": 114,
            "end": 115
          },
          "start": 74,
          "end": 115
        },
        "start": 34,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "                                                                                                                                                hello ",
                "raw": "'                                                                                                                                                hello '",
                "start": 134,
                "end": 286
              },
              "start": 134,
              "end": 286
            }
          ],
          "start": 133,
          "end": 287
        },
        "start": 129,
        "end": 287
      },
      "declare": false,
      "start": 118,
      "end": 288
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 297
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 304
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " hello                                                                                                                                                ",
                "raw": "' hello                                                                                                                                                '",
                "start": 305,
                "end": 457
              },
              "start": 305,
              "end": 457
            }
          ],
          "start": 304,
          "end": 458
        },
        "start": 300,
        "end": 458
      },
      "declare": false,
      "start": 289,
      "end": 459
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetChars",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 474
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 475,
            "end": 476
          }
        ],
        "start": 474,
        "end": 477
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetCharsRec",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 491
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            {
              "type": "TSNeverKeyword",
              "start": 495,
              "end": 500
            }
          ],
          "start": 491,
          "end": 501
        },
        "start": 480,
        "end": 501
      },
      "declare": false,
      "start": 461,
      "end": 502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetCharsRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 519
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 521
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 520,
            "end": 521
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 526
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 526
          }
        ],
        "start": 519,
        "end": 527
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 535
          },
          "typeArguments": null,
          "start": 534,
          "end": 535
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 544,
              "end": 547
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 557,
              "end": 560
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 570,
              "end": 572
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Char",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 557
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 553,
                "end": 557
              },
              "start": 547,
              "end": 557
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 570
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 566,
                "end": 570
              },
              "start": 560,
              "end": 570
            }
          ],
          "start": 544,
          "end": 572
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetCharsRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 586
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 591
                },
                "typeArguments": null,
                "start": 587,
                "end": 591
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Char",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 597
                    },
                    "typeArguments": null,
                    "start": 593,
                    "end": 597
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Acc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 600,
                      "end": 603
                    },
                    "typeArguments": null,
                    "start": 600,
                    "end": 603
                  }
                ],
                "start": 593,
                "end": 603
              }
            ],
            "start": 586,
            "end": 604
          },
          "start": 575,
          "end": 604
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 610
          },
          "typeArguments": null,
          "start": 607,
          "end": 610
        },
        "start": 534,
        "end": 610
      },
      "declare": false,
      "start": 503,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 621
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetChars",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 632
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                "raw": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'",
                "start": 633,
                "end": 697
              },
              "start": 633,
              "end": 697
            }
          ],
          "start": 632,
          "end": 698
        },
        "start": 624,
        "end": 698
      },
      "declare": false,
      "start": 613,
      "end": 699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reverse",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 713
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
              "start": 714,
              "end": 715
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 714,
            "end": 715
          }
        ],
        "start": 713,
        "end": 716
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 719,
            "end": 722
          },
          "start": 719,
          "end": 724
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 734
          },
          "typeArguments": null,
          "start": 733,
          "end": 734
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 738
          },
          "typeArguments": null,
          "start": 737,
          "end": 738
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 751
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
                  "start": 752,
                  "end": 753
                },
                "typeArguments": null,
                "start": 752,
                "end": 753
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 755,
                "end": 757
              }
            ],
            "start": 751,
            "end": 758
          },
          "start": 741,
          "end": 758
        },
        "start": 719,
        "end": 758
      },
      "declare": false,
      "start": 701,
      "end": 759
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReverseRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 775
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
              "start": 776,
              "end": 777
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 776,
            "end": 777
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 782
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 791,
                "end": 798
              },
              "start": 791,
              "end": 800
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 800
          }
        ],
        "start": 775,
        "end": 801
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
            "start": 808,
            "end": 809
          },
          "typeArguments": null,
          "start": 808,
          "end": 809
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 825,
                  "end": 829
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 825,
                "end": 829
              },
              "start": 819,
              "end": 829
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 844
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 840,
                  "end": 844
                },
                "start": 834,
                "end": 844
              },
              "start": 831,
              "end": 844
            }
          ],
          "start": 818,
          "end": 845
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 858
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 863
                },
                "typeArguments": null,
                "start": 859,
                "end": 863
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Head",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 870
                    },
                    "typeArguments": null,
                    "start": 866,
                    "end": 870
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 875,
                        "end": 878
                      },
                      "typeArguments": null,
                      "start": 875,
                      "end": 878
                    },
                    "start": 872,
                    "end": 878
                  }
                ],
                "start": 865,
                "end": 879
              }
            ],
            "start": 858,
            "end": 880
          },
          "start": 848,
          "end": 880
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 886
          },
          "typeArguments": null,
          "start": 883,
          "end": 886
        },
        "start": 808,
        "end": 886
      },
      "declare": false,
      "start": 760,
      "end": 887
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 897
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null,
          "start": 900,
          "end": 907
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 909,
                    "end": 910
                  },
                  "start": 909,
                  "end": 910
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 912,
                    "end": 913
                  },
                  "start": 912,
                  "end": 913
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 915,
                    "end": 916
                  },
                  "start": 915,
                  "end": 916
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 918,
                    "end": 919
                  },
                  "start": 918,
                  "end": 919
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 921,
                    "end": 922
                  },
                  "start": 921,
                  "end": 922
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 924,
                    "end": 925
                  },
                  "start": 924,
                  "end": 925
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 927,
                    "end": 928
                  },
                  "start": 927,
                  "end": 928
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 930,
                    "end": 931
                  },
                  "start": 930,
                  "end": 931
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 933,
                    "end": 934
                  },
                  "start": 933,
                  "end": 934
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 936,
                    "end": 937
                  },
                  "start": 936,
                  "end": 937
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 939,
                    "end": 940
                  },
                  "start": 939,
                  "end": 940
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 942,
                    "end": 943
                  },
                  "start": 942,
                  "end": 943
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 945,
                    "end": 946
                  },
                  "start": 945,
                  "end": 946
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 948,
                    "end": 949
                  },
                  "start": 948,
                  "end": 949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 951,
                    "end": 952
                  },
                  "start": 951,
                  "end": 952
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 954,
                    "end": 955
                  },
                  "start": 954,
                  "end": 955
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 957,
                    "end": 958
                  },
                  "start": 957,
                  "end": 958
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 960,
                    "end": 961
                  },
                  "start": 960,
                  "end": 961
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 963,
                    "end": 964
                  },
                  "start": 963,
                  "end": 964
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 966,
                    "end": 967
                  },
                  "start": 966,
                  "end": 967
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 969,
                    "end": 970
                  },
                  "start": 969,
                  "end": 970
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 972,
                    "end": 973
                  },
                  "start": 972,
                  "end": 973
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 975,
                    "end": 976
                  },
                  "start": 975,
                  "end": 976
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 978,
                    "end": 979
                  },
                  "start": 978,
                  "end": 979
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 981,
                    "end": 982
                  },
                  "start": 981,
                  "end": 982
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 984,
                    "end": 985
                  },
                  "start": 984,
                  "end": 985
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 987,
                    "end": 988
                  },
                  "start": 987,
                  "end": 988
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 990,
                    "end": 991
                  },
                  "start": 990,
                  "end": 991
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 993,
                    "end": 994
                  },
                  "start": 993,
                  "end": 994
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 996,
                    "end": 997
                  },
                  "start": 996,
                  "end": 997
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 999,
                    "end": 1000
                  },
                  "start": 999,
                  "end": 1000
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1002,
                    "end": 1003
                  },
                  "start": 1002,
                  "end": 1003
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1005,
                    "end": 1006
                  },
                  "start": 1005,
                  "end": 1006
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1008,
                    "end": 1009
                  },
                  "start": 1008,
                  "end": 1009
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1011,
                    "end": 1012
                  },
                  "start": 1011,
                  "end": 1012
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 1014,
                    "end": 1015
                  },
                  "start": 1014,
                  "end": 1015
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1017,
                    "end": 1018
                  },
                  "start": 1017,
                  "end": 1018
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 1020,
                    "end": 1021
                  },
                  "start": 1020,
                  "end": 1021
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 1023,
                    "end": 1024
                  },
                  "start": 1023,
                  "end": 1024
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 1026,
                    "end": 1027
                  },
                  "start": 1026,
                  "end": 1027
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1029,
                    "end": 1030
                  },
                  "start": 1029,
                  "end": 1030
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1032,
                    "end": 1033
                  },
                  "start": 1032,
                  "end": 1033
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1035,
                    "end": 1036
                  },
                  "start": 1035,
                  "end": 1036
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1038,
                    "end": 1039
                  },
                  "start": 1038,
                  "end": 1039
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1041,
                    "end": 1042
                  },
                  "start": 1041,
                  "end": 1042
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 1044,
                    "end": 1045
                  },
                  "start": 1044,
                  "end": 1045
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1047,
                    "end": 1048
                  },
                  "start": 1047,
                  "end": 1048
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 1050,
                    "end": 1051
                  },
                  "start": 1050,
                  "end": 1051
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 1053,
                    "end": 1054
                  },
                  "start": 1053,
                  "end": 1054
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 1056,
                    "end": 1057
                  },
                  "start": 1056,
                  "end": 1057
                }
              ],
              "start": 908,
              "end": 1058
            }
          ],
          "start": 907,
          "end": 1059
        },
        "start": 900,
        "end": 1059
      },
      "declare": false,
      "start": 889,
      "end": 1060
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1069
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1079
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1080,
                "end": 1086
              },
              "start": 1080,
              "end": 1088
            }
          ],
          "start": 1079,
          "end": 1089
        },
        "start": 1072,
        "end": 1089
      },
      "declare": false,
      "start": 1061,
      "end": 1090
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1104
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
              "start": 1105,
              "end": 1106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1105,
            "end": 1106
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1109
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1118,
              "end": 1124
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1108,
            "end": 1124
          }
        ],
        "start": 1104,
        "end": 1125
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 1128,
          "end": 1134
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1144
          },
          "typeArguments": null,
          "start": 1143,
          "end": 1144
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1147,
              "end": 1148
            },
            "typeArguments": null,
            "start": 1147,
            "end": 1148
          },
          "start": 1147,
          "end": 1150
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1153,
            "end": 1163
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
                  "start": 1164,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1164,
                "end": 1165
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1168
                },
                "typeArguments": null,
                "start": 1167,
                "end": 1168
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1170,
                "end": 1172
              }
            ],
            "start": 1163,
            "end": 1173
          },
          "start": 1153,
          "end": 1173
        },
        "start": 1128,
        "end": 1173
      },
      "declare": false,
      "start": 1092,
      "end": 1174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOfRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1190
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
              "start": 1191,
              "end": 1192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1191,
            "end": 1192
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1195
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1194,
            "end": 1210
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1215
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1224,
                "end": 1231
              },
              "start": 1224,
              "end": 1233
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1233
          }
        ],
        "start": 1190,
        "end": 1234
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1241,
            "end": 1244
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "\"length\"",
              "start": 1245,
              "end": 1253
            },
            "start": 1245,
            "end": 1253
          },
          "start": 1241,
          "end": 1254
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1264
          },
          "typeArguments": null,
          "start": 1263,
          "end": 1264
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1270
          },
          "typeArguments": null,
          "start": 1267,
          "end": 1270
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1273,
            "end": 1283
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
                  "start": 1284,
                  "end": 1285
                },
                "typeArguments": null,
                "start": 1284,
                "end": 1285
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1287,
                "end": 1288
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1291,
                    "end": 1292
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1297,
                        "end": 1300
                      },
                      "typeArguments": null,
                      "start": 1297,
                      "end": 1300
                    },
                    "start": 1294,
                    "end": 1300
                  }
                ],
                "start": 1290,
                "end": 1301
              }
            ],
            "start": 1283,
            "end": 1302
          },
          "start": 1273,
          "end": 1302
        },
        "start": 1241,
        "end": 1302
      },
      "declare": false,
      "start": 1175,
      "end": 1303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1316,
          "end": 1323
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1324,
              "end": 1327
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 200,
                "raw": "200",
                "start": 1329,
                "end": 1332
              },
              "start": 1329,
              "end": 1332
            }
          ],
          "start": 1323,
          "end": 1333
        },
        "start": 1316,
        "end": 1333
      },
      "declare": false,
      "start": 1305,
      "end": 1334
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1340,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1353
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1354,
              "end": 1357
            },
            {
              "type": "TSNumberKeyword",
              "start": 1359,
              "end": 1365
            }
          ],
          "start": 1353,
          "end": 1366
        },
        "start": 1346,
        "end": 1366
      },
      "declare": false,
      "start": 1335,
      "end": 1367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1367
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43
  },
  {
    "type": "Template",
    "value": "` ${",
    "start": 44,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 54,
    "end": 55
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Template",
    "value": "} `",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "'                                                                                                                                                hello '",
    "start": 134,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 289,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Trim",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "' hello                                                                                                                                                '",
    "start": 305,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 461,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "GetChars",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "GetCharsRec",
    "start": 480,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 495,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 503,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "GetCharsRec",
    "start": 508,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 536,
    "end": 543
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 547,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Char",
    "start": 553,
    "end": 557
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 566,
    "end": 570
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "GetCharsRec",
    "start": 575,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "Char",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 613,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "GetChars",
    "start": 624,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'",
    "start": 633,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 701,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 725,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "ReverseRec",
    "start": 741,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
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
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 760,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "ReverseRec",
    "start": 765,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 779,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 783,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 791,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 819,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 834,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "ReverseRec",
    "start": 848,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 889,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 900,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 908,
    "end": 909
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 919,
    "end": 920
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 922,
    "end": 923
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 931,
    "end": 932
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 934,
    "end": 935
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 940,
    "end": 941
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Numeric",
    "value": "3",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 952,
    "end": 953
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 985,
    "end": 986
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 991,
    "end": 992
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 997,
    "end": 998
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "type": "Numeric",
    "value": "0",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Numeric",
    "value": "8",
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
    "type": "Numeric",
    "value": "9",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 1072,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1080,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1092,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1097,
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
    "value": "T",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1110,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "TupleOfRec",
    "start": 1153,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1175,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "TupleOfRec",
    "start": 1180,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1196,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1204,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1216,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1224,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 1245,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1255,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "TupleOfRec",
    "start": 1273,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "Acc",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1305,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1316,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "T41",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1346,
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
    "value": "any",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  }
]
```
