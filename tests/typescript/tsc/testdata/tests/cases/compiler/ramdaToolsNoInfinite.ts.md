__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tools",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 228
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Head",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 244
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
                    "start": 245,
                    "end": 246
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 255,
                      "end": 258
                    },
                    "start": 255,
                    "end": 260
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 245,
                  "end": 260
                }
              ],
              "start": 244,
              "end": 261
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
                  "start": 272,
                  "end": 273
                },
                "typeArguments": null,
                "start": 272,
                "end": 273
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 283,
                    "end": 286
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 291,
                        "end": 294
                      },
                      "start": 291,
                      "end": 296
                    },
                    "start": 288,
                    "end": 296
                  }
                ],
                "start": 282,
                "end": 297
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 309
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 309
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 310,
                    "end": 311
                  },
                  "start": 310,
                  "end": 311
                },
                "start": 308,
                "end": 312
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 323,
                "end": 328
              },
              "start": 272,
              "end": 328
            },
            "declare": false,
            "start": 235,
            "end": 329
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tail",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 344
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
                    "start": 345,
                    "end": 346
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 355,
                      "end": 358
                    },
                    "start": 355,
                    "end": 360
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 345,
                  "end": 360
                }
              ],
              "start": 344,
              "end": 361
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 378
                    },
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
                          "start": 380,
                          "end": 381
                        },
                        "typeArguments": null,
                        "start": 380,
                        "end": 381
                      },
                      "start": 378,
                      "end": 381
                    },
                    "value": null,
                    "start": 374,
                    "end": 381
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 386,
                    "end": 389
                  },
                  "start": 383,
                  "end": 389
                },
                "start": 373,
                "end": 389
              },
              "extendsType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 404,
                        "end": 407
                      },
                      "start": 402,
                      "end": 407
                    },
                    "start": 401,
                    "end": 407
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 416
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
                            "name": "TT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 424,
                            "end": 426
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 424,
                          "end": 426
                        },
                        "start": 418,
                        "end": 426
                      },
                      "start": 416,
                      "end": 426
                    },
                    "value": null,
                    "start": 409,
                    "end": 426
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 431,
                    "end": 434
                  },
                  "start": 428,
                  "end": 434
                },
                "start": 400,
                "end": 434
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 448
                },
                "typeArguments": null,
                "start": 446,
                "end": 448
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 459,
                "end": 461
              },
              "start": 372,
              "end": 461
            },
            "declare": false,
            "start": 335,
            "end": 462
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasTail",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 480
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
                    "start": 481,
                    "end": 482
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 491,
                      "end": 494
                    },
                    "start": 491,
                    "end": 496
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 481,
                  "end": 496
                }
              ],
              "start": 480,
              "end": 497
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
                  "start": 508,
                  "end": 509
                },
                "typeArguments": null,
                "start": 508,
                "end": 509
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 519,
                    "end": 521
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
                      }
                    ],
                    "start": 524,
                    "end": 529
                  }
                ],
                "start": 519,
                "end": 529
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 541,
                  "end": 546
                },
                "start": 541,
                "end": 546
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 557,
                  "end": 561
                },
                "start": 557,
                "end": 561
              },
              "start": 508,
              "end": 561
            },
            "declare": false,
            "start": 468,
            "end": 562
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Last",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 579
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 588,
                      "end": 591
                    },
                    "start": 588,
                    "end": 593
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 578,
                  "end": 593
                }
              ],
              "start": 577,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 607,
                      "end": 608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Last",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 610,
                          "end": 614
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
                                "start": 615,
                                "end": 619
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
                                      "start": 620,
                                      "end": 621
                                    },
                                    "typeArguments": null,
                                    "start": 620,
                                    "end": 621
                                  }
                                ],
                                "start": 619,
                                "end": 622
                              },
                              "start": 615,
                              "end": 622
                            }
                          ],
                          "start": 614,
                          "end": 623
                        },
                        "start": 610,
                        "end": 623
                      },
                      "start": 608,
                      "end": 623
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 607,
                    "end": 624
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 633,
                      "end": 634
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Head",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 640
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
                                "start": 641,
                                "end": 642
                              },
                              "typeArguments": null,
                              "start": 641,
                              "end": 642
                            }
                          ],
                          "start": 640,
                          "end": 643
                        },
                        "start": 636,
                        "end": 643
                      },
                      "start": 634,
                      "end": 643
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 633,
                    "end": 644
                  }
                ],
                "start": 597,
                "end": 650
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HasTail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 667
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
                          "start": 668,
                          "end": 669
                        },
                        "typeArguments": null,
                        "start": 668,
                        "end": 669
                      }
                    ],
                    "start": 667,
                    "end": 670
                  },
                  "start": 660,
                  "end": 670
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 679,
                    "end": 683
                  },
                  "start": 679,
                  "end": 683
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 694,
                    "end": 695
                  },
                  "start": 694,
                  "end": 695
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 706,
                    "end": 707
                  },
                  "start": 706,
                  "end": 707
                },
                "start": 660,
                "end": 707
              },
              "start": 597,
              "end": 713
            },
            "declare": false,
            "start": 568,
            "end": 714
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 731
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
                    "start": 732,
                    "end": 733
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 742,
                      "end": 745
                    },
                    "start": 742,
                    "end": 747
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 732,
                  "end": 747
                }
              ],
              "start": 731,
              "end": 748
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "typeArguments": null,
                "start": 759,
                "end": 760
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 761,
                  "end": 769
                },
                "start": 761,
                "end": 769
              },
              "start": 759,
              "end": 770
            },
            "declare": false,
            "start": 720,
            "end": 771
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prepend",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 789
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 791
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 790,
                  "end": 791
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 803,
                      "end": 806
                    },
                    "start": 803,
                    "end": 808
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 808
                }
              ],
              "start": 789,
              "end": 809
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "head",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 828,
                          "end": 829
                        },
                        "typeArguments": null,
                        "start": 828,
                        "end": 829
                      },
                      "start": 826,
                      "end": 829
                    },
                    "start": 822,
                    "end": 829
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 838
                    },
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
                          "start": 840,
                          "end": 841
                        },
                        "typeArguments": null,
                        "start": 840,
                        "end": 841
                      },
                      "start": 838,
                      "end": 841
                    },
                    "value": null,
                    "start": 831,
                    "end": 841
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 846,
                    "end": 849
                  },
                  "start": 843,
                  "end": 849
                },
                "start": 821,
                "end": 849
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
                      "start": 864,
                      "end": 868
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 876,
                            "end": 877
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 876,
                          "end": 877
                        },
                        "start": 870,
                        "end": 877
                      },
                      "start": 868,
                      "end": 877
                    },
                    "value": null,
                    "start": 861,
                    "end": 877
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 882,
                    "end": 885
                  },
                  "start": 879,
                  "end": 885
                },
                "start": 860,
                "end": 885
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 898
                },
                "typeArguments": null,
                "start": 897,
                "end": 898
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 909,
                  "end": 910
                },
                "typeArguments": null,
                "start": 909,
                "end": 910
              },
              "start": 820,
              "end": 910
            },
            "declare": false,
            "start": 777,
            "end": 911
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Drop",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 926
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 928
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 937,
                    "end": 943
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 927,
                  "end": 943
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 946
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 955,
                      "end": 958
                    },
                    "start": 955,
                    "end": 960
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 945,
                  "end": 960
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 972,
                      "end": 975
                    },
                    "start": 972,
                    "end": 977
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 980,
                    "end": 982
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 962,
                  "end": 982
                }
              ],
              "start": 926,
              "end": 983
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 996,
                      "end": 997
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Drop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 999,
                          "end": 1003
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "N",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1004,
                                "end": 1005
                              },
                              "typeArguments": null,
                              "start": 1004,
                              "end": 1005
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tail",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1007,
                                "end": 1011
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
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "typeArguments": null,
                                    "start": 1012,
                                    "end": 1013
                                  }
                                ],
                                "start": 1011,
                                "end": 1014
                              },
                              "start": 1007,
                              "end": 1014
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1023
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1024,
                                    "end": 1027
                                  },
                                  {
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
                                    "typeArguments": null,
                                    "start": 1029,
                                    "end": 1030
                                  }
                                ],
                                "start": 1023,
                                "end": 1031
                              },
                              "start": 1016,
                              "end": 1031
                            }
                          ],
                          "start": 1003,
                          "end": 1032
                        },
                        "start": 999,
                        "end": 1032
                      },
                      "start": 997,
                      "end": 1032
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 996,
                    "end": 1033
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1042,
                      "end": 1043
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
                          "start": 1045,
                          "end": 1046
                        },
                        "typeArguments": null,
                        "start": 1045,
                        "end": 1046
                      },
                      "start": 1043,
                      "end": 1046
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1042,
                    "end": 1047
                  }
                ],
                "start": 986,
                "end": 1053
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1069
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1071
                        },
                        "typeArguments": null,
                        "start": 1070,
                        "end": 1071
                      }
                    ],
                    "start": 1069,
                    "end": 1072
                  },
                  "start": 1063,
                  "end": 1072
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1082
                  },
                  "typeArguments": null,
                  "start": 1081,
                  "end": 1082
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1093,
                    "end": 1094
                  },
                  "start": 1093,
                  "end": 1094
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1105,
                    "end": 1106
                  },
                  "start": 1105,
                  "end": 1106
                },
                "start": 1063,
                "end": 1106
              },
              "start": 986,
              "end": 1112
            },
            "declare": false,
            "start": 917,
            "end": 1113
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cast",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1128
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1129,
                  "end": 1130
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1132,
                    "end": 1133
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1132,
                  "end": 1133
                }
              ],
              "start": 1128,
              "end": 1134
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1138
                },
                "typeArguments": null,
                "start": 1137,
                "end": 1138
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1148
                },
                "typeArguments": null,
                "start": 1147,
                "end": 1148
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1151,
                "end": 1152
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1155,
                "end": 1156
              },
              "start": 1137,
              "end": 1156
            },
            "declare": false,
            "start": 1119,
            "end": 1157
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1171
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1172,
                    "end": 1173
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1182,
                      "end": 1185
                    },
                    "start": 1182,
                    "end": 1187
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1172,
                  "end": 1187
                }
              ],
              "start": 1171,
              "end": 1188
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1205
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1206,
                      "end": 1207
                    },
                    "typeArguments": null,
                    "start": 1206,
                    "end": 1207
                  }
                ],
                "start": 1205,
                "end": 1208
              },
              "start": 1199,
              "end": 1208
            },
            "declare": false,
            "start": 1163,
            "end": 1209
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1224
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1235,
                      "end": 1238
                    },
                    "start": 1235,
                    "end": 1240
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1225,
                  "end": 1240
                }
              ],
              "start": 1224,
              "end": 1241
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prepend",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1259
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1260,
                    "end": 1263
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1266
                    },
                    "typeArguments": null,
                    "start": 1265,
                    "end": 1266
                  }
                ],
                "start": 1259,
                "end": 1267
              },
              "start": 1252,
              "end": 1267
            },
            "declare": false,
            "start": 1215,
            "end": 1268
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prev",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1283
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1285
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1294,
                      "end": 1297
                    },
                    "start": 1294,
                    "end": 1299
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1284,
                  "end": 1299
                }
              ],
              "start": 1283,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1317
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1317
                  }
                ],
                "start": 1315,
                "end": 1318
              },
              "start": 1311,
              "end": 1318
            },
            "declare": false,
            "start": 1274,
            "end": 1319
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1338
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1339,
                    "end": 1344
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 1353,
                    "end": 1359
                  },
                  "default": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1362,
                      "end": 1363
                    },
                    "start": 1362,
                    "end": 1363
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1339,
                  "end": 1363
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "From",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1369
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1378,
                      "end": 1381
                    },
                    "start": 1378,
                    "end": 1383
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1386,
                    "end": 1388
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1365,
                  "end": 1388
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1390,
                    "end": 1391
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1400,
                      "end": 1403
                    },
                    "start": 1400,
                    "end": 1405
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1408,
                    "end": 1410
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1390,
                  "end": 1410
                }
              ],
              "start": 1338,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1424,
                      "end": 1425
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1427,
                          "end": 1435
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1436,
                                "end": 1441
                              },
                              "typeArguments": null,
                              "start": 1436,
                              "end": 1441
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1443,
                                "end": 1447
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "From",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1448,
                                      "end": 1452
                                    },
                                    "typeArguments": null,
                                    "start": 1448,
                                    "end": 1452
                                  }
                                ],
                                "start": 1447,
                                "end": 1453
                              },
                              "start": 1443,
                              "end": 1453
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1455,
                                "end": 1459
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1460,
                                      "end": 1461
                                    },
                                    "typeArguments": null,
                                    "start": 1460,
                                    "end": 1461
                                  }
                                ],
                                "start": 1459,
                                "end": 1462
                              },
                              "start": 1455,
                              "end": 1462
                            }
                          ],
                          "start": 1435,
                          "end": 1463
                        },
                        "start": 1427,
                        "end": 1463
                      },
                      "start": 1425,
                      "end": 1463
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1424,
                    "end": 1464
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1473,
                      "end": 1474
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "From",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1476,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1476,
                        "end": 1480
                      },
                      "start": 1474,
                      "end": 1480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1473,
                    "end": 1481
                  }
                ],
                "start": 1414,
                "end": 1487
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1497,
                    "end": 1500
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1502
                        },
                        "typeArguments": null,
                        "start": 1501,
                        "end": 1502
                      }
                    ],
                    "start": 1500,
                    "end": 1503
                  },
                  "start": 1497,
                  "end": 1503
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1512,
                    "end": 1517
                  },
                  "typeArguments": null,
                  "start": 1512,
                  "end": 1517
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1528,
                    "end": 1529
                  },
                  "start": 1528,
                  "end": 1529
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1540,
                    "end": 1541
                  },
                  "start": 1540,
                  "end": 1541
                },
                "start": 1497,
                "end": 1541
              },
              "start": 1414,
              "end": 1547
            },
            "declare": false,
            "start": 1325,
            "end": 1548
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1566
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
                    "start": 1567,
                    "end": 1568
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1577,
                      "end": 1580
                    },
                    "start": 1577,
                    "end": 1582
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1567,
                  "end": 1582
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1584,
                    "end": 1585
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1594,
                      "end": 1597
                    },
                    "start": 1594,
                    "end": 1599
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1602,
                    "end": 1604
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1584,
                  "end": 1604
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1607
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    },
                    "start": 1616,
                    "end": 1621
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1624,
                    "end": 1626
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1606,
                  "end": 1626
                }
              ],
              "start": 1566,
              "end": 1627
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1640,
                      "end": 1641
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Reverse",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1643,
                          "end": 1650
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
                                "start": 1651,
                                "end": 1652
                              },
                              "typeArguments": null,
                              "start": 1651,
                              "end": 1652
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1654,
                                "end": 1661
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
                                        "start": 1662,
                                        "end": 1663
                                      },
                                      "typeArguments": null,
                                      "start": 1662,
                                      "end": 1663
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1664,
                                        "end": 1667
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1668,
                                              "end": 1669
                                            },
                                            "typeArguments": null,
                                            "start": 1668,
                                            "end": 1669
                                          }
                                        ],
                                        "start": 1667,
                                        "end": 1670
                                      },
                                      "start": 1664,
                                      "end": 1670
                                    },
                                    "start": 1662,
                                    "end": 1671
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1673,
                                      "end": 1674
                                    },
                                    "typeArguments": null,
                                    "start": 1673,
                                    "end": 1674
                                  }
                                ],
                                "start": 1661,
                                "end": 1675
                              },
                              "start": 1654,
                              "end": 1675
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1677,
                                "end": 1681
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1682,
                                      "end": 1683
                                    },
                                    "typeArguments": null,
                                    "start": 1682,
                                    "end": 1683
                                  }
                                ],
                                "start": 1681,
                                "end": 1684
                              },
                              "start": 1677,
                              "end": 1684
                            }
                          ],
                          "start": 1650,
                          "end": 1685
                        },
                        "start": 1643,
                        "end": 1685
                      },
                      "start": 1641,
                      "end": 1685
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1640,
                    "end": 1686
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1695,
                      "end": 1696
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1698,
                          "end": 1699
                        },
                        "typeArguments": null,
                        "start": 1698,
                        "end": 1699
                      },
                      "start": 1696,
                      "end": 1699
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1695,
                    "end": 1700
                  }
                ],
                "start": 1630,
                "end": 1706
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1716,
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
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1721
                        },
                        "typeArguments": null,
                        "start": 1720,
                        "end": 1721
                      }
                    ],
                    "start": 1719,
                    "end": 1722
                  },
                  "start": 1716,
                  "end": 1722
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1737
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
                          "start": 1738,
                          "end": 1739
                        },
                        "typeArguments": null,
                        "start": 1738,
                        "end": 1739
                      }
                    ],
                    "start": 1737,
                    "end": 1740
                  },
                  "start": 1731,
                  "end": 1740
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1751,
                    "end": 1752
                  },
                  "start": 1751,
                  "end": 1752
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1763,
                    "end": 1764
                  },
                  "start": 1763,
                  "end": 1764
                },
                "start": 1716,
                "end": 1764
              },
              "start": 1630,
              "end": 1770
            },
            "declare": false,
            "start": 1554,
            "end": 1771
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1782,
              "end": 1788
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1789,
                    "end": 1791
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1800,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1805
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1789,
                  "end": 1805
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1807,
                    "end": 1809
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1818,
                      "end": 1821
                    },
                    "start": 1818,
                    "end": 1823
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1807,
                  "end": 1823
                }
              ],
              "start": 1788,
              "end": 1824
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reverse",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1842
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Reverse",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1843,
                        "end": 1850
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1853
                            },
                            "typeArguments": null,
                            "start": 1851,
                            "end": 1853
                          }
                        ],
                        "start": 1850,
                        "end": 1854
                      },
                      "start": 1843,
                      "end": 1854
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1869,
                          "end": 1870
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1869,
                        "end": 1870
                      },
                      "start": 1863,
                      "end": 1870
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1873,
                        "end": 1877
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
                              "start": 1878,
                              "end": 1879
                            },
                            "typeArguments": null,
                            "start": 1878,
                            "end": 1879
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1881,
                              "end": 1884
                            },
                            "start": 1881,
                            "end": 1886
                          }
                        ],
                        "start": 1877,
                        "end": 1887
                      },
                      "start": 1873,
                      "end": 1887
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1890,
                      "end": 1895
                    },
                    "start": 1843,
                    "end": 1895
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1897,
                      "end": 1899
                    },
                    "typeArguments": null,
                    "start": 1897,
                    "end": 1899
                  }
                ],
                "start": 1842,
                "end": 1900
              },
              "start": 1835,
              "end": 1900
            },
            "declare": false,
            "start": 1777,
            "end": 1901
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Append",
              "optional": false,
              "typeAnnotation": null,
              "start": 1912,
              "end": 1918
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1919,
                    "end": 1920
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1919,
                  "end": 1920
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1923
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1932,
                      "end": 1935
                    },
                    "start": 1932,
                    "end": 1937
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1922,
                  "end": 1937
                }
              ],
              "start": 1918,
              "end": 1938
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Concat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1949,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1956,
                      "end": 1957
                    },
                    "typeArguments": null,
                    "start": 1956,
                    "end": 1957
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1960,
                          "end": 1961
                        },
                        "typeArguments": null,
                        "start": 1960,
                        "end": 1961
                      }
                    ],
                    "start": 1959,
                    "end": 1962
                  }
                ],
                "start": 1955,
                "end": 1963
              },
              "start": 1949,
              "end": 1963
            },
            "declare": false,
            "start": 1907,
            "end": 1964
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ValueOfRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 1975,
              "end": 1988
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
                    "start": 1989,
                    "end": 1990
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1989,
                  "end": 1990
                }
              ],
              "start": 1988,
              "end": 1991
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
                  "start": 1994,
                  "end": 1995
                },
                "typeArguments": null,
                "start": 1994,
                "end": 1995
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2010
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2011,
                      "end": 2014
                    },
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
                          "start": 2022,
                          "end": 2023
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2022,
                        "end": 2023
                      },
                      "start": 2016,
                      "end": 2023
                    }
                  ],
                  "start": 2010,
                  "end": 2024
                },
                "start": 2004,
                "end": 2024
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2027,
                  "end": 2028
                },
                "typeArguments": null,
                "start": 2027,
                "end": 2028
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2031,
                "end": 2036
              },
              "start": 1994,
              "end": 2036
            },
            "declare": false,
            "start": 1970,
            "end": 2037
          }
        ],
        "start": 229,
        "end": 2039
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 205,
      "end": 2039
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 2059,
        "end": 2060
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Placeholder",
                "optional": false,
                "typeAnnotation": null,
                "start": 2079,
                "end": 2090
              },
              "typeParameters": null,
              "typeAnnotation": {
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
                      "name": "__placeholder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2095,
                      "end": 2108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2110,
                        "end": 2114
                      },
                      "start": 2108,
                      "end": 2114
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2095,
                    "end": 2114
                  }
                ],
                "start": 2093,
                "end": 2116
              },
              "declare": false,
              "start": 2074,
              "end": 2117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2067,
            "end": 2117
          }
        ],
        "start": 2061,
        "end": 2119
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2041,
      "end": 2119
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Curry",
        "optional": false,
        "typeAnnotation": null,
        "start": 2139,
        "end": 2144
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2156,
              "end": 2161
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2162,
                    "end": 2164
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2173,
                      "end": 2176
                    },
                    "start": 2173,
                    "end": 2178
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2162,
                  "end": 2178
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2180,
                    "end": 2182
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2191,
                      "end": 2194
                    },
                    "start": 2191,
                    "end": 2196
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2180,
                  "end": 2196
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2198,
                    "end": 2200
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2209,
                      "end": 2212
                    },
                    "start": 2209,
                    "end": 2214
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2198,
                  "end": 2214
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2216,
                    "end": 2217
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2226,
                      "end": 2229
                    },
                    "start": 2226,
                    "end": 2231
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2216,
                  "end": 2231
                }
              ],
              "start": 2161,
              "end": 2232
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
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2243,
                    "end": 2245
                  },
                  "typeArguments": null,
                  "start": 2243,
                  "end": 2245
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2246,
                      "end": 2251
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2252,
                      "end": 2255
                    },
                    "start": 2246,
                    "end": 2255
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2256,
                          "end": 2257
                        },
                        "typeArguments": null,
                        "start": 2256,
                        "end": 2257
                      }
                    ],
                    "start": 2255,
                    "end": 2258
                  },
                  "start": 2246,
                  "end": 2258
                },
                "start": 2243,
                "end": 2259
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2269
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Placeholder",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2270,
                    "end": 2281
                  },
                  "start": 2268,
                  "end": 2281
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2281
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tools",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2292,
                    "end": 2297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Append",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2304
                  },
                  "start": 2292,
                  "end": 2304
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
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2305,
                          "end": 2307
                        },
                        "typeArguments": null,
                        "start": 2305,
                        "end": 2307
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tools",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2308,
                            "end": 2313
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pos",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2314,
                            "end": 2317
                          },
                          "start": 2308,
                          "end": 2317
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2318,
                                "end": 2319
                              },
                              "typeArguments": null,
                              "start": 2318,
                              "end": 2319
                            }
                          ],
                          "start": 2317,
                          "end": 2320
                        },
                        "start": 2308,
                        "end": 2320
                      },
                      "start": 2305,
                      "end": 2321
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2323,
                        "end": 2325
                      },
                      "typeArguments": null,
                      "start": 2323,
                      "end": 2325
                    }
                  ],
                  "start": 2304,
                  "end": 2326
                },
                "start": 2292,
                "end": 2326
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2339
                },
                "typeArguments": null,
                "start": 2337,
                "end": 2339
              },
              "start": 2243,
              "end": 2339
            },
            "declare": false,
            "start": 2151,
            "end": 2340
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOfWorker",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2368
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2369,
                    "end": 2371
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2380,
                      "end": 2383
                    },
                    "start": 2380,
                    "end": 2385
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2369,
                  "end": 2385
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2387,
                    "end": 2389
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2398,
                      "end": 2401
                    },
                    "start": 2398,
                    "end": 2403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2387,
                  "end": 2403
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2405,
                    "end": 2407
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2416,
                      "end": 2419
                    },
                    "start": 2416,
                    "end": 2421
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2424,
                    "end": 2426
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2405,
                  "end": 2426
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2428,
                    "end": 2429
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2438,
                      "end": 2441
                    },
                    "start": 2438,
                    "end": 2443
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2446,
                    "end": 2448
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2428,
                  "end": 2448
                }
              ],
              "start": 2368,
              "end": 2449
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2460,
                    "end": 2461
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GapsOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2463,
                        "end": 2469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2470,
                              "end": 2472
                            },
                            "typeArguments": null,
                            "start": 2470,
                            "end": 2472
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2474,
                              "end": 2476
                            },
                            "typeArguments": null,
                            "start": 2474,
                            "end": 2476
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "GapOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2478,
                                "end": 2483
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2484,
                                      "end": 2486
                                    },
                                    "typeArguments": null,
                                    "start": 2484,
                                    "end": 2486
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2488,
                                      "end": 2490
                                    },
                                    "typeArguments": null,
                                    "start": 2488,
                                    "end": 2490
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TN",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2492,
                                      "end": 2494
                                    },
                                    "typeArguments": null,
                                    "start": 2492,
                                    "end": 2494
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2496,
                                      "end": 2497
                                    },
                                    "typeArguments": null,
                                    "start": 2496,
                                    "end": 2497
                                  }
                                ],
                                "start": 2483,
                                "end": 2498
                              },
                              "start": 2478,
                              "end": 2498
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2513,
                                  "end": 2514
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2513,
                                "end": 2514
                              },
                              "start": 2507,
                              "end": 2514
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2517,
                                  "end": 2522
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2523,
                                  "end": 2527
                                },
                                "start": 2517,
                                "end": 2527
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "G",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2528,
                                      "end": 2529
                                    },
                                    "typeArguments": null,
                                    "start": 2528,
                                    "end": 2529
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2531,
                                      "end": 2534
                                    },
                                    "start": 2531,
                                    "end": 2536
                                  }
                                ],
                                "start": 2527,
                                "end": 2537
                              },
                              "start": 2517,
                              "end": 2537
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2540,
                              "end": 2545
                            },
                            "start": 2478,
                            "end": 2545
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2547,
                                "end": 2552
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2553,
                                "end": 2557
                              },
                              "start": 2547,
                              "end": 2557
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2558,
                                    "end": 2559
                                  },
                                  "typeArguments": null,
                                  "start": 2558,
                                  "end": 2559
                                }
                              ],
                              "start": 2557,
                              "end": 2560
                            },
                            "start": 2547,
                            "end": 2560
                          }
                        ],
                        "start": 2469,
                        "end": 2561
                      },
                      "start": 2463,
                      "end": 2561
                    },
                    "start": 2461,
                    "end": 2561
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2460,
                  "end": 2562
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2571,
                    "end": 2572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2574,
                          "end": 2579
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Concat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2580,
                          "end": 2586
                        },
                        "start": 2574,
                        "end": 2586
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2587,
                              "end": 2589
                            },
                            "typeArguments": null,
                            "start": 2587,
                            "end": 2589
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2591,
                                  "end": 2596
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Drop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2597,
                                  "end": 2601
                                },
                                "start": 2591,
                                "end": 2601
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2602,
                                        "end": 2607
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2608,
                                        "end": 2611
                                      },
                                      "start": 2602,
                                      "end": 2611
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "I",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2612,
                                            "end": 2613
                                          },
                                          "typeArguments": null,
                                          "start": 2612,
                                          "end": 2613
                                        }
                                      ],
                                      "start": 2611,
                                      "end": 2614
                                    },
                                    "start": 2602,
                                    "end": 2614
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2616,
                                      "end": 2618
                                    },
                                    "typeArguments": null,
                                    "start": 2616,
                                    "end": 2618
                                  }
                                ],
                                "start": 2601,
                                "end": 2619
                              },
                              "start": 2591,
                              "end": 2619
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2634,
                                  "end": 2635
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2634,
                                "end": 2635
                              },
                              "start": 2628,
                              "end": 2635
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2638,
                                  "end": 2643
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2644,
                                  "end": 2648
                                },
                                "start": 2638,
                                "end": 2648
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2649,
                                      "end": 2650
                                    },
                                    "typeArguments": null,
                                    "start": 2649,
                                    "end": 2650
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2652,
                                      "end": 2655
                                    },
                                    "start": 2652,
                                    "end": 2657
                                  }
                                ],
                                "start": 2648,
                                "end": 2658
                              },
                              "start": 2638,
                              "end": 2658
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2661,
                              "end": 2666
                            },
                            "start": 2591,
                            "end": 2666
                          }
                        ],
                        "start": 2586,
                        "end": 2667
                      },
                      "start": 2574,
                      "end": 2667
                    },
                    "start": 2572,
                    "end": 2667
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2571,
                  "end": 2668
                }
              ],
              "start": 2450,
              "end": 2674
            },
            "declare": false,
            "start": 2346,
            "end": 2674
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2684,
              "end": 2690
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2691,
                    "end": 2693
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2702,
                      "end": 2705
                    },
                    "start": 2702,
                    "end": 2707
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2691,
                  "end": 2707
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2709,
                    "end": 2711
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2720,
                      "end": 2723
                    },
                    "start": 2720,
                    "end": 2725
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2709,
                  "end": 2725
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2727,
                    "end": 2729
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2738,
                      "end": 2741
                    },
                    "start": 2738,
                    "end": 2743
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2746,
                    "end": 2748
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2727,
                  "end": 2748
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2750,
                    "end": 2751
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2760,
                      "end": 2763
                    },
                    "start": 2760,
                    "end": 2765
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2768,
                    "end": 2770
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2750,
                  "end": 2770
                }
              ],
              "start": 2690,
              "end": 2771
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GapsOfWorker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2774,
                  "end": 2786
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2789
                      },
                      "typeArguments": null,
                      "start": 2787,
                      "end": 2789
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2793
                      },
                      "typeArguments": null,
                      "start": 2791,
                      "end": 2793
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2795,
                        "end": 2797
                      },
                      "typeArguments": null,
                      "start": 2795,
                      "end": 2797
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2799,
                        "end": 2800
                      },
                      "typeArguments": null,
                      "start": 2799,
                      "end": 2800
                    }
                  ],
                  "start": 2786,
                  "end": 2801
                },
                "start": 2774,
                "end": 2801
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2811,
                      "end": 2816
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2817,
                      "end": 2820
                    },
                    "start": 2811,
                    "end": 2820
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2821,
                          "end": 2822
                        },
                        "typeArguments": null,
                        "start": 2821,
                        "end": 2822
                      }
                    ],
                    "start": 2820,
                    "end": 2823
                  },
                  "start": 2811,
                  "end": 2823
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2832,
                      "end": 2837
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2838,
                      "end": 2844
                    },
                    "start": 2832,
                    "end": 2844
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2845,
                          "end": 2847
                        },
                        "typeArguments": null,
                        "start": 2845,
                        "end": 2847
                      }
                    ],
                    "start": 2844,
                    "end": 2848
                  },
                  "start": 2832,
                  "end": 2848
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2859,
                    "end": 2860
                  },
                  "start": 2859,
                  "end": 2860
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2871,
                    "end": 2872
                  },
                  "start": 2871,
                  "end": 2872
                },
                "start": 2811,
                "end": 2872
              },
              "start": 2774,
              "end": 2878
            },
            "declare": false,
            "start": 2679,
            "end": 2879
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PartialGaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2890,
              "end": 2901
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
                    "start": 2902,
                    "end": 2903
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2912,
                      "end": 2915
                    },
                    "start": 2912,
                    "end": 2917
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2902,
                  "end": 2917
                }
              ],
              "start": 2901,
              "end": 2918
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2932,
                "end": 2933
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
                    "start": 2943,
                    "end": 2944
                  },
                  "typeArguments": null,
                  "start": 2943,
                  "end": 2944
                },
                "start": 2937,
                "end": 2944
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                        "start": 2948,
                        "end": 2949
                      },
                      "typeArguments": null,
                      "start": 2948,
                      "end": 2949
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2950,
                        "end": 2951
                      },
                      "typeArguments": null,
                      "start": 2950,
                      "end": 2951
                    },
                    "start": 2948,
                    "end": 2952
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2955,
                        "end": 2956
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Placeholder",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2957,
                        "end": 2968
                      },
                      "start": 2955,
                      "end": 2968
                    },
                    "typeArguments": null,
                    "start": 2955,
                    "end": 2968
                  }
                ],
                "start": 2948,
                "end": 2968
              },
              "optional": true,
              "readonly": null,
              "start": 2921,
              "end": 2974
            },
            "declare": false,
            "start": 2885,
            "end": 2975
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CleanedGaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2986,
              "end": 2997
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
                    "start": 2998,
                    "end": 2999
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3008,
                      "end": 3011
                    },
                    "start": 3008,
                    "end": 3013
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2998,
                  "end": 3013
                }
              ],
              "start": 2997,
              "end": 3014
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3029
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
                    "start": 3039,
                    "end": 3040
                  },
                  "typeArguments": null,
                  "start": 3039,
                  "end": 3040
                },
                "start": 3033,
                "end": 3040
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3043,
                  "end": 3054
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
                          "start": 3055,
                          "end": 3056
                        },
                        "typeArguments": null,
                        "start": 3055,
                        "end": 3056
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3057,
                          "end": 3058
                        },
                        "typeArguments": null,
                        "start": 3057,
                        "end": 3058
                      },
                      "start": 3055,
                      "end": 3059
                    }
                  ],
                  "start": 3054,
                  "end": 3060
                },
                "start": 3043,
                "end": 3060
              },
              "optional": false,
              "readonly": null,
              "start": 3017,
              "end": 3066
            },
            "declare": false,
            "start": 2981,
            "end": 3067
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3078,
              "end": 3082
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
                    "start": 3083,
                    "end": 3084
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3093,
                      "end": 3096
                    },
                    "start": 3093,
                    "end": 3098
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3083,
                  "end": 3098
                }
              ],
              "start": 3082,
              "end": 3099
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CleanedGaps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3102,
                "end": 3113
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PartialGaps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3114,
                      "end": 3125
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
                            "start": 3126,
                            "end": 3127
                          },
                          "typeArguments": null,
                          "start": 3126,
                          "end": 3127
                        }
                      ],
                      "start": 3125,
                      "end": 3128
                    },
                    "start": 3114,
                    "end": 3128
                  }
                ],
                "start": 3113,
                "end": 3129
              },
              "start": 3102,
              "end": 3129
            },
            "declare": false,
            "start": 3073,
            "end": 3130
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Curry",
              "optional": false,
              "typeAnnotation": null,
              "start": 3141,
              "end": 3146
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3147,
                    "end": 3148
                  },
                  "constraint": {
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
                          "start": 3162,
                          "end": 3166
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3168,
                            "end": 3171
                          },
                          "start": 3166,
                          "end": 3171
                        },
                        "value": null,
                        "start": 3159,
                        "end": 3171
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3176,
                        "end": 3179
                      },
                      "start": 3173,
                      "end": 3179
                    },
                    "start": 3158,
                    "end": 3179
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3147,
                  "end": 3180
                }
              ],
              "start": 3146,
              "end": 3181
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 3193,
                      "end": 3194
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3203,
                        "end": 3206
                      },
                      "start": 3203,
                      "end": 3208
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3193,
                    "end": 3208
                  }
                ],
                "start": 3192,
                "end": 3209
              },
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
                    "start": 3213,
                    "end": 3217
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3219,
                          "end": 3224
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Cast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3225,
                          "end": 3229
                        },
                        "start": 3219,
                        "end": 3229
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3230,
                                "end": 3235
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Cast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3236,
                                "end": 3240
                              },
                              "start": 3230,
                              "end": 3240
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
                                    "start": 3241,
                                    "end": 3242
                                  },
                                  "typeArguments": null,
                                  "start": 3241,
                                  "end": 3242
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Gaps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3244,
                                    "end": 3248
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Parameters",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3249,
                                          "end": 3259
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "F",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3260,
                                                "end": 3261
                                              },
                                              "typeArguments": null,
                                              "start": 3260,
                                              "end": 3261
                                            }
                                          ],
                                          "start": 3259,
                                          "end": 3262
                                        },
                                        "start": 3249,
                                        "end": 3262
                                      }
                                    ],
                                    "start": 3248,
                                    "end": 3263
                                  },
                                  "start": 3244,
                                  "end": 3263
                                }
                              ],
                              "start": 3240,
                              "end": 3264
                            },
                            "start": 3230,
                            "end": 3264
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 3266,
                              "end": 3269
                            },
                            "start": 3266,
                            "end": 3271
                          }
                        ],
                        "start": 3229,
                        "end": 3272
                      },
                      "start": 3219,
                      "end": 3272
                    },
                    "start": 3217,
                    "end": 3272
                  },
                  "value": null,
                  "start": 3210,
                  "end": 3272
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GapsOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3289,
                      "end": 3295
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
                            "start": 3296,
                            "end": 3297
                          },
                          "typeArguments": null,
                          "start": 3296,
                          "end": 3297
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Parameters",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3299,
                            "end": 3309
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3310,
                                  "end": 3311
                                },
                                "typeArguments": null,
                                "start": 3310,
                                "end": 3311
                              }
                            ],
                            "start": 3309,
                            "end": 3312
                          },
                          "start": 3299,
                          "end": 3312
                        }
                      ],
                      "start": 3295,
                      "end": 3313
                    },
                    "start": 3289,
                    "end": 3313
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 3323,
                        "end": 3326
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 3331,
                            "end": 3334
                          },
                          "start": 3331,
                          "end": 3336
                        },
                        "start": 3328,
                        "end": 3336
                      }
                    ],
                    "start": 3322,
                    "end": 3337
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Curry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3357
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
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
                                "start": 3362,
                                "end": 3366
                              },
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "GapsOf",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3368,
                                      "end": 3374
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
                                            "start": 3375,
                                            "end": 3376
                                          },
                                          "typeArguments": null,
                                          "start": 3375,
                                          "end": 3376
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Parameters",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3378,
                                            "end": 3388
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "F",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3389,
                                                  "end": 3390
                                                },
                                                "typeArguments": null,
                                                "start": 3389,
                                                "end": 3390
                                              }
                                            ],
                                            "start": 3388,
                                            "end": 3391
                                          },
                                          "start": 3378,
                                          "end": 3391
                                        }
                                      ],
                                      "start": 3374,
                                      "end": 3392
                                    },
                                    "start": 3368,
                                    "end": 3392
                                  },
                                  "extendsType": {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3407,
                                        "end": 3408
                                      },
                                      "constraint": null,
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 3407,
                                      "end": 3408
                                    },
                                    "start": 3401,
                                    "end": 3408
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3411,
                                        "end": 3416
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Cast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3417,
                                        "end": 3421
                                      },
                                      "start": 3411,
                                      "end": 3421
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "G",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3422,
                                            "end": 3423
                                          },
                                          "typeArguments": null,
                                          "start": 3422,
                                          "end": 3423
                                        },
                                        {
                                          "type": "TSArrayType",
                                          "elementType": {
                                            "type": "TSAnyKeyword",
                                            "start": 3425,
                                            "end": 3428
                                          },
                                          "start": 3425,
                                          "end": 3430
                                        }
                                      ],
                                      "start": 3421,
                                      "end": 3431
                                    },
                                    "start": 3411,
                                    "end": 3431
                                  },
                                  "falseType": {
                                    "type": "TSNeverKeyword",
                                    "start": 3434,
                                    "end": 3439
                                  },
                                  "start": 3368,
                                  "end": 3439
                                },
                                "start": 3366,
                                "end": 3439
                              },
                              "value": null,
                              "start": 3359,
                              "end": 3439
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReturnType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3444,
                                "end": 3454
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3455,
                                      "end": 3456
                                    },
                                    "typeArguments": null,
                                    "start": 3455,
                                    "end": 3456
                                  }
                                ],
                                "start": 3454,
                                "end": 3457
                              },
                              "start": 3444,
                              "end": 3457
                            },
                            "start": 3441,
                            "end": 3457
                          },
                          "start": 3358,
                          "end": 3457
                        }
                      ],
                      "start": 3357,
                      "end": 3458
                    },
                    "start": 3352,
                    "end": 3458
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3473,
                      "end": 3483
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3484,
                            "end": 3485
                          },
                          "typeArguments": null,
                          "start": 3484,
                          "end": 3485
                        }
                      ],
                      "start": 3483,
                      "end": 3486
                    },
                    "start": 3473,
                    "end": 3486
                  },
                  "start": 3289,
                  "end": 3486
                },
                "start": 3274,
                "end": 3486
              },
              "start": 3192,
              "end": 3486
            },
            "declare": false,
            "start": 3136,
            "end": 3487
          }
        ],
        "start": 2145,
        "end": 3489
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2121,
      "end": 3489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 205,
  "end": 3489
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 205,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 213,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 235,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 335,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 347,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 374,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 412,
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
    "value": "infer",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "HasTail",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 483,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 510,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 539,
    "end": 540
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 557,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 568,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Last",
    "start": 573,
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
    "value": "T",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "Last",
    "start": 610,
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
    "value": "Tail",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "Head",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "HasTail",
    "start": 660,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 671,
    "end": 678
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 692,
    "end": 693
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 720,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Length",
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
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 734,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 742,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 760,
    "end": 761
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 761,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 777,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 782,
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
    "value": "E",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 828,
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
    "value": "args",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 843,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 851,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 879,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 917,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "Drop",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 929,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Keyword",
    "value": "extends",
    "start": 947,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 964,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "Drop",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 1016,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1024,
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
    "value": "I",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1139,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "Y",
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
    "type": "Identifier",
    "value": "type",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 1168,
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
    "value": "I",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1174,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 1220,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1227,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "Prev",
    "start": 1279,
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
    "value": "I",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1286,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1325,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1330,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "Index",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1345,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "From",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1370,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1392,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1427,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "Index",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 1443,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "From",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 1455,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "From",
    "start": 1476,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 1497,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1504,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "Index",
    "start": 1512,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1554,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 1559,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1569,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1586,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1608,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1616,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 1643,
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
    "value": "T",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "Prepend",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "R",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 1716,
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
    "value": "I",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1723,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1731,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1777,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "Concat",
    "start": 1782,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1789,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1792,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1807,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1810,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 1835,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "Reverse",
    "start": 1843,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1855,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1863,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "Cast",
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
    "value": "R",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1881,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1890,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "Append",
    "start": 1912,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1924,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1932,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "Concat",
    "start": 1949,
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
    "value": "T",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1970,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "ValueOfRecord",
    "start": 1975,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2004,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2011,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2016,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2031,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 2041,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2049,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2067,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2074,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "Placeholder",
    "start": 2079,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "__placeholder",
    "start": 2095,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2110,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2121,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2129,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "Curry",
    "start": 2139,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2151,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "GapOf",
    "start": 2156,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2162,
    "end": 2164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2165,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2173,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2180,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2183,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2191,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2198,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2201,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2209,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2218,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2226,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2243,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2246,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2260,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "Placeholder",
    "start": 2270,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2292,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "Append",
    "start": 2298,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2308,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 2314,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2323,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2337,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2346,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "GapsOfWorker",
    "start": 2356,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2369,
    "end": 2371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2372,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2380,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2387,
    "end": 2389
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2390,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2398,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2408,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2416,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2430,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2438,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "GapsOf",
    "start": 2463,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2470,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2474,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "GapOf",
    "start": 2478,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2484,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2488,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2492,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2499,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2507,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2517,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 2523,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2531,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2540,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2547,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 2553,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2574,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "Concat",
    "start": 2580,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2587,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2591,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "Drop",
    "start": 2597,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2602,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 2608,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2616,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2620,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2628,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2638,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 2644,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2652,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2661,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2679,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "GapsOf",
    "start": 2684,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2691,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2694,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2702,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2709,
    "end": 2711
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2712,
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
    "value": "[",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2727,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2730,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2738,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2752,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2760,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "GapsOfWorker",
    "start": 2774,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2787,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2795,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2811,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "Pos",
    "start": 2817,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2824,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 2832,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 2838,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2845,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2885,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "PartialGaps",
    "start": 2890,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2904,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2912,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2934,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2937,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "Placeholder",
    "start": 2957,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 2981,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "CleanedGaps",
    "start": 2986,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3000,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3008,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3030,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3033,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 3043,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3073,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "Gaps",
    "start": 3078,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3085,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3093,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "CleanedGaps",
    "start": 3102,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "PartialGaps",
    "start": 3114,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3136,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "Curry",
    "start": 3141,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3149,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3159,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3162,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3168,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3173,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3176,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3195,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3203,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3210,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3213,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 3219,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 3225,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 3230,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 3236,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "Gaps",
    "start": 3244,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 3249,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3274,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "GapsOf",
    "start": 3289,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 3299,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3314,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3323,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3328,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3331,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "Curry",
    "start": 3352,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3359,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3362,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "GapsOf",
    "start": 3368,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 3378,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3393,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3401,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "Tools",
    "start": 3411,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "Cast",
    "start": 3417,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3425,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3434,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3441,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 3444,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 3473,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3488,
    "end": 3489
  }
]
```
