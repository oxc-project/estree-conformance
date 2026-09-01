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
        "name": "Omit",
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
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
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 23,
              "end": 30
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 30
          }
        ],
        "start": 9,
        "end": 31
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
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
                "start": 39,
                "end": 40
              },
              "typeArguments": null,
              "start": 39,
              "end": 40
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 49
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 56,
                        "end": 57
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 50,
                    "end": 57
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 60
                    },
                    "typeArguments": null,
                    "start": 59,
                    "end": 60
                  }
                ],
                "start": 49,
                "end": 61
              },
              "start": 42,
              "end": 61
            }
          ],
          "start": 38,
          "end": 62
        },
        "start": 34,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 76
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 201
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 215
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 215
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 238
                    },
                    "typeArguments": null,
                    "start": 217,
                    "end": 238
                  }
                ],
                "start": 201,
                "end": 239
              },
              "start": 195,
              "end": 239
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 239
          }
        ],
        "start": 76,
        "end": 245
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 271
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 291
                  },
                  "typeArguments": null,
                  "start": 278,
                  "end": 291
                },
                "start": 272,
                "end": 291
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 320
                  },
                  "typeArguments": null,
                  "start": 299,
                  "end": 320
                },
                "start": 293,
                "end": 320
              }
            ],
            "start": 271,
            "end": 321
          },
          "start": 264,
          "end": 321
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 337
              },
              "typeArguments": null,
              "start": 324,
              "end": 337
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "typeArguments": null,
              "start": 338,
              "end": 339
            },
            "start": 324,
            "end": 340
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 370
              },
              "typeArguments": null,
              "start": 349,
              "end": 370
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 372
              },
              "typeArguments": null,
              "start": 371,
              "end": 372
            },
            "start": 349,
            "end": 373
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 397
              },
              "typeArguments": null,
              "start": 376,
              "end": 397
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "typeArguments": null,
              "start": 398,
              "end": 399
            },
            "start": 376,
            "end": 400
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 403,
            "end": 408
          },
          "start": 324,
          "end": 408
        },
        "optional": false,
        "readonly": null,
        "start": 248,
        "end": 415
      },
      "declare": false,
      "start": 65,
      "end": 416
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 442
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 443,
            "end": 444
          }
        ],
        "start": 442,
        "end": 445
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 464
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 474
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 476
                      },
                      "typeArguments": null,
                      "start": 475,
                      "end": 476
                    }
                  ],
                  "start": 474,
                  "end": 477
                },
                "start": 467,
                "end": 477
              },
              "start": 465,
              "end": 477
            },
            "accessibility": null,
            "static": false,
            "start": 452,
            "end": 478
          }
        ],
        "start": 446,
        "end": 530
      },
      "declare": false,
      "start": 418,
      "end": 530
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 577
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 592
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 578,
            "end": 592
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TNeedsProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 605
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 605
          }
        ],
        "start": 577,
        "end": 606
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shared",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 630
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TInjectedProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 631,
                            "end": 645
                          },
                          "typeArguments": null,
                          "start": 631,
                          "end": 645
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 648
                          },
                          "typeArguments": null,
                          "start": 647,
                          "end": 648
                        }
                      ],
                      "start": 630,
                      "end": 649
                    },
                    "start": 624,
                    "end": 649
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 614,
                  "end": 649
                }
              ],
              "start": 613,
              "end": 650
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 685
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 686,
                            "end": 687
                          },
                          "typeArguments": null,
                          "start": 686,
                          "end": 687
                        }
                      ],
                      "start": 685,
                      "end": 688
                    },
                    "start": 671,
                    "end": 688
                  },
                  "start": 669,
                  "end": 688
                },
                "start": 660,
                "end": 688
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 710
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Omit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 711,
                                "end": 715
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 716,
                                      "end": 717
                                    },
                                    "typeArguments": null,
                                    "start": 716,
                                    "end": 717
                                  },
                                  {
                                    "type": "TSTypeOperator",
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Shared",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 725,
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
                                              "name": "TInjectedProps",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 732,
                                              "end": 746
                                            },
                                            "typeArguments": null,
                                            "start": 732,
                                            "end": 746
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "P",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 748,
                                              "end": 749
                                            },
                                            "typeArguments": null,
                                            "start": 748,
                                            "end": 749
                                          }
                                        ],
                                        "start": 731,
                                        "end": 750
                                      },
                                      "start": 725,
                                      "end": 750
                                    },
                                    "start": 719,
                                    "end": 750
                                  }
                                ],
                                "start": 715,
                                "end": 751
                              },
                              "start": 711,
                              "end": 751
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TNeedsProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 754,
                                "end": 765
                              },
                              "typeArguments": null,
                              "start": 754,
                              "end": 765
                            }
                          ],
                          "start": 711,
                          "end": 765
                        }
                      ],
                      "start": 710,
                      "end": 766
                    },
                    "start": 696,
                    "end": 766
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WrappedComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 771,
                          "end": 787
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 789,
                              "end": 803
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 804,
                                    "end": 805
                                  },
                                  "typeArguments": null,
                                  "start": 804,
                                  "end": 805
                                }
                              ],
                              "start": 803,
                              "end": 806
                            },
                            "start": 789,
                            "end": 806
                          },
                          "start": 787,
                          "end": 806
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 771,
                        "end": 806
                      }
                    ],
                    "start": 769,
                    "end": 808
                  }
                ],
                "start": 696,
                "end": 808
              },
              "start": 694,
              "end": 808
            },
            "start": 613,
            "end": 808
          }
        ],
        "start": 607,
        "end": 810
      },
      "declare": false,
      "start": 532,
      "end": 810
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Connect",
        "optional": false,
        "typeAnnotation": null,
        "start": 874,
        "end": 881
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStateProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 953,
                    "end": 964
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 953,
                  "end": 964
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 975
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 966,
                  "end": 975
                }
              ],
              "start": 952,
              "end": 976
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1003,
                    "end": 1010
                  },
                  "start": 1001,
                  "end": 1010
                },
                "start": 986,
                "end": 1010
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1054
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TStateProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1066
                      },
                      "typeArguments": null,
                      "start": 1055,
                      "end": 1066
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1068,
                        "end": 1077
                      },
                      "typeArguments": null,
                      "start": 1068,
                      "end": 1077
                    }
                  ],
                  "start": 1054,
                  "end": 1078
                },
                "start": 1019,
                "end": 1078
              },
              "start": 1017,
              "end": 1078
            },
            "start": 952,
            "end": 1079
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDispatchProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1100
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1086,
                  "end": 1100
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1102,
                    "end": 1111
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1102,
                  "end": 1111
                }
              ],
              "start": 1085,
              "end": 1112
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapStateToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 1139,
                        "end": 1143
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1146,
                        "end": 1155
                      }
                    ],
                    "start": 1139,
                    "end": 1155
                  },
                  "start": 1137,
                  "end": 1155
                },
                "start": 1122,
                "end": 1155
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1185,
                    "end": 1192
                  },
                  "start": 1183,
                  "end": 1192
                },
                "start": 1165,
                "end": 1192
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 1214,
                        "end": 1218
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1221,
                        "end": 1230
                      }
                    ],
                    "start": 1214,
                    "end": 1230
                  },
                  "start": 1212,
                  "end": 1230
                },
                "start": 1202,
                "end": 1230
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 1249,
                    "end": 1256
                  },
                  "start": 1247,
                  "end": 1256
                },
                "start": 1240,
                "end": 1256
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferableComponentEnhancerWithProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDispatchProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1300,
                        "end": 1314
                      },
                      "typeArguments": null,
                      "start": 1300,
                      "end": 1314
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1325
                      },
                      "typeArguments": null,
                      "start": 1316,
                      "end": 1325
                    }
                  ],
                  "start": 1299,
                  "end": 1326
                },
                "start": 1264,
                "end": 1326
              },
              "start": 1262,
              "end": 1326
            },
            "start": 1085,
            "end": 1327
          }
        ],
        "start": 882,
        "end": 1329
      },
      "declare": false,
      "start": 864,
      "end": 1329
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
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1359
                },
                "typeArguments": null,
                "start": 1352,
                "end": 1359
              },
              "start": 1350,
              "end": 1359
            },
            "start": 1343,
            "end": 1359
          },
          "init": null,
          "definite": false,
          "start": 1343,
          "end": 1359
        }
      ],
      "declare": true,
      "start": 1331,
      "end": 1360
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
            "name": "myStoreConnect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Connect",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1384,
                  "end": 1391
                },
                "typeArguments": null,
                "start": 1384,
                "end": 1391
              },
              "start": 1382,
              "end": 1391
            },
            "start": 1368,
            "end": 1391
          },
          "init": {
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
                "name": "mapStateToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1426,
                    "end": 1429
                  },
                  "start": 1424,
                  "end": 1429
                },
                "start": 1408,
                "end": 1429
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapDispatchToProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1456,
                    "end": 1459
                  },
                  "start": 1454,
                  "end": 1459
                },
                "start": 1435,
                "end": 1459
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mergeProps",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1478,
                    "end": 1481
                  },
                  "start": 1476,
                  "end": 1481
                },
                "start": 1465,
                "end": 1481
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1496,
                      "end": 1503
                    },
                    "start": 1494,
                    "end": 1503
                  },
                  "start": 1487,
                  "end": 1503
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1506,
                  "end": 1508
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1508
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "connect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1532
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1557
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1567,
                        "end": 1585
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mergeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1595,
                        "end": 1605
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1622
                      }
                    ],
                    "optional": false,
                    "start": 1525,
                    "end": 1629
                  },
                  "start": 1518,
                  "end": 1630
                }
              ],
              "start": 1512,
              "end": 1632
            },
            "expression": false,
            "start": 1394,
            "end": 1632
          },
          "definite": false,
          "start": 1368,
          "end": 1632
        }
      ],
      "declare": false,
      "start": 1362,
      "end": 1633
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1635,
      "end": 1645
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1645
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
    "value": "Omit",
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
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 65,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 146,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 165,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 187,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 202,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 217,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 261,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 264,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 278,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 299,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "InjectedProps",
    "start": 324,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 341,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 349,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "DecorationTargetProps",
    "start": 376,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 418,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 428,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 452,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 467,
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
    "value": "P",
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
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 532,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 542,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "TInjectedProps",
    "start": 578,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 594,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 624,
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
    "value": "TInjectedProps",
    "start": 631,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 660,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 671,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "ComponentClass",
    "start": 696,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 719,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Shared",
    "start": 725,
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
    "value": "TInjectedProps",
    "start": 732,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "TNeedsProps",
    "start": 754,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "WrappedComponent",
    "start": 771,
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
    "value": "ComponentClass",
    "start": 789,
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
    "value": "P",
    "start": 804,
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
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 864,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Connect",
    "start": 874,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "TStateProps",
    "start": 953,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "TOwnProps",
    "start": 966,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "mapStateToProps",
    "start": 986,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1003,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 1019,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "TStateProps",
    "start": 1055,
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
    "value": "TOwnProps",
    "start": 1068,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 1086,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "TOwnProps",
    "start": 1102,
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
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "mapStateToProps",
    "start": 1122,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1146,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 1165,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1185,
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
    "value": "mergeProps",
    "start": 1202,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1221,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1249,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancerWithProps",
    "start": 1264,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "TDispatchProps",
    "start": 1300,
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
    "value": "TOwnProps",
    "start": 1316,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1331,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1339,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 1343,
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
    "value": "Connect",
    "start": 1352,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "myStoreConnect",
    "start": 1368,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "Connect",
    "start": 1384,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1394,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "mapStateToProps",
    "start": 1408,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 1435,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1456,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "mergeProps",
    "start": 1465,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1478,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1487,
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
    "value": "unknown",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1518,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 1525,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "mapStateToProps",
    "start": 1542,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "mapDispatchToProps",
    "start": 1567,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "mergeProps",
    "start": 1595,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1615,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1635,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  }
]
```
