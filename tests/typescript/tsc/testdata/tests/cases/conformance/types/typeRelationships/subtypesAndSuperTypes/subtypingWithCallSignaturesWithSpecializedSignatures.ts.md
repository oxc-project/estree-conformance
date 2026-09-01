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
        "name": "CallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 141
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 162
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 197,
                            "end": 200
                          },
                          "start": 197,
                          "end": 200
                        },
                        "start": 195,
                        "end": 200
                      },
                      "start": 194,
                      "end": 200
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 203,
                      "end": 207
                    },
                    "start": 201,
                    "end": 207
                  },
                  "start": 193,
                  "end": 208
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 221,
                          "end": 227
                        },
                        "start": 219,
                        "end": 227
                      },
                      "start": 218,
                      "end": 227
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 232,
                          "end": 238
                        },
                        "start": 230,
                        "end": 238
                      },
                      "start": 229,
                      "end": 238
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 241,
                      "end": 245
                    },
                    "start": 239,
                    "end": 245
                  },
                  "start": 217,
                  "end": 246
                }
              ],
              "start": 163,
              "end": 252
            },
            "declare": false,
            "start": 148,
            "end": 252
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 293
                },
                "typeArguments": null,
                "start": 289,
                "end": 293
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 323,
                            "end": 326
                          },
                          "start": 323,
                          "end": 326
                        },
                        "start": 321,
                        "end": 326
                      },
                      "start": 320,
                      "end": 326
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 327,
                    "end": 335
                  },
                  "start": 319,
                  "end": 336
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 381,
                          "end": 387
                        },
                        "start": 379,
                        "end": 387
                      },
                      "start": 378,
                      "end": 387
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 392,
                          "end": 398
                        },
                        "start": 390,
                        "end": 398
                      },
                      "start": 389,
                      "end": 398
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 401,
                      "end": 407
                    },
                    "start": 399,
                    "end": 407
                  },
                  "start": 377,
                  "end": 408
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 451
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 450,
                        "end": 451
                      }
                    ],
                    "start": 449,
                    "end": 452
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
                            "start": 456,
                            "end": 457
                          },
                          "typeArguments": null,
                          "start": 456,
                          "end": 457
                        },
                        "start": 454,
                        "end": 457
                      },
                      "start": 453,
                      "end": 457
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    },
                    "start": 458,
                    "end": 466
                  },
                  "start": 449,
                  "end": 467
                }
              ],
              "start": 294,
              "end": 505
            },
            "declare": false,
            "start": 269,
            "end": 505
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 526
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 561,
                            "end": 564
                          },
                          "start": 561,
                          "end": 564
                        },
                        "start": 559,
                        "end": 564
                      },
                      "start": 558,
                      "end": 564
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 567,
                      "end": 573
                    },
                    "start": 565,
                    "end": 573
                  },
                  "start": 557,
                  "end": 574
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 587,
                          "end": 593
                        },
                        "start": 585,
                        "end": 593
                      },
                      "start": 584,
                      "end": 593
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 596,
                      "end": 602
                    },
                    "start": 594,
                    "end": 602
                  },
                  "start": 583,
                  "end": 603
                }
              ],
              "start": 527,
              "end": 609
            },
            "declare": false,
            "start": 511,
            "end": 609
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 638
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 652
                },
                "typeArguments": null,
                "start": 647,
                "end": 652
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 682,
                            "end": 685
                          },
                          "start": 682,
                          "end": 685
                        },
                        "start": 680,
                        "end": 685
                      },
                      "start": 679,
                      "end": 685
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 688,
                      "end": 694
                    },
                    "start": 686,
                    "end": 694
                  },
                  "start": 678,
                  "end": 695
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 708,
                          "end": 714
                        },
                        "start": 706,
                        "end": 714
                      },
                      "start": 705,
                      "end": 714
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 717,
                      "end": 723
                    },
                    "start": 715,
                    "end": 723
                  },
                  "start": 704,
                  "end": 724
                }
              ],
              "start": 653,
              "end": 770
            },
            "declare": false,
            "start": 626,
            "end": 770
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 799
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 808,
                  "end": 813
                },
                "typeArguments": null,
                "start": 808,
                "end": 813
              }
            ],
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 841
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 840,
                        "end": 841
                      }
                    ],
                    "start": 839,
                    "end": 842
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
                            "start": 846,
                            "end": 847
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 847
                        },
                        "start": 844,
                        "end": 847
                      },
                      "start": 843,
                      "end": 847
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 850,
                      "end": 856
                    },
                    "start": 848,
                    "end": 856
                  },
                  "start": 839,
                  "end": 857
                }
              ],
              "start": 814,
              "end": 896
            },
            "declare": false,
            "start": 787,
            "end": 896
          }
        ],
        "start": 142,
        "end": 898
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 898
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MemberWithCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 933
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 954
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 985,
                    "end": 986
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1006,
                                    "end": 1009
                                  },
                                  "start": 1006,
                                  "end": 1009
                                },
                                "start": 1004,
                                "end": 1009
                              },
                              "start": 1003,
                              "end": 1009
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1012,
                              "end": 1016
                            },
                            "start": 1010,
                            "end": 1016
                          },
                          "start": 1002,
                          "end": 1017
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1034,
                                  "end": 1040
                                },
                                "start": 1032,
                                "end": 1040
                              },
                              "start": 1031,
                              "end": 1040
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1043,
                              "end": 1047
                            },
                            "start": 1041,
                            "end": 1047
                          },
                          "start": 1030,
                          "end": 1048
                        }
                      ],
                      "start": 988,
                      "end": 1058
                    },
                    "start": 986,
                    "end": 1058
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 985,
                  "end": 1058
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1067,
                    "end": 1069
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1089,
                                    "end": 1092
                                  },
                                  "start": 1089,
                                  "end": 1092
                                },
                                "start": 1087,
                                "end": 1092
                              },
                              "start": 1086,
                              "end": 1092
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1097,
                                  "end": 1103
                                },
                                "start": 1095,
                                "end": 1103
                              },
                              "start": 1094,
                              "end": 1103
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1106,
                              "end": 1110
                            },
                            "start": 1104,
                            "end": 1110
                          },
                          "start": 1085,
                          "end": 1111
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1128,
                                  "end": 1134
                                },
                                "start": 1126,
                                "end": 1134
                              },
                              "start": 1125,
                              "end": 1134
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1139,
                                  "end": 1145
                                },
                                "start": 1137,
                                "end": 1145
                              },
                              "start": 1136,
                              "end": 1145
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1148,
                              "end": 1152
                            },
                            "start": 1146,
                            "end": 1152
                          },
                          "start": 1124,
                          "end": 1153
                        }
                      ],
                      "start": 1071,
                      "end": 1163
                    },
                    "start": 1069,
                    "end": 1163
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1067,
                  "end": 1163
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1172,
                    "end": 1174
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                              "start": 1177,
                              "end": 1178
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1177,
                            "end": 1178
                          }
                        ],
                        "start": 1176,
                        "end": 1179
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
                                "start": 1183,
                                "end": 1184
                              },
                              "typeArguments": null,
                              "start": 1183,
                              "end": 1184
                            },
                            "start": 1181,
                            "end": 1184
                          },
                          "start": 1180,
                          "end": 1184
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1189,
                          "end": 1193
                        },
                        "start": 1186,
                        "end": 1193
                      },
                      "start": 1176,
                      "end": 1193
                    },
                    "start": 1174,
                    "end": 1193
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1172,
                  "end": 1194
                }
              ],
              "start": 955,
              "end": 1200
            },
            "declare": false,
            "start": 940,
            "end": 1200
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1241
                },
                "typeArguments": null,
                "start": 1237,
                "end": 1241
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1268
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1274,
                              "end": 1280
                            },
                            "start": 1272,
                            "end": 1280
                          },
                          "start": 1271,
                          "end": 1280
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1285,
                          "end": 1291
                        },
                        "start": 1282,
                        "end": 1291
                      },
                      "start": 1270,
                      "end": 1291
                    },
                    "start": 1268,
                    "end": 1291
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1267,
                  "end": 1292
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1333,
                    "end": 1335
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1341,
                              "end": 1347
                            },
                            "start": 1339,
                            "end": 1347
                          },
                          "start": 1338,
                          "end": 1347
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1352,
                              "end": 1358
                            },
                            "start": 1350,
                            "end": 1358
                          },
                          "start": 1349,
                          "end": 1358
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1363,
                          "end": 1370
                        },
                        "start": 1360,
                        "end": 1370
                      },
                      "start": 1337,
                      "end": 1370
                    },
                    "start": 1335,
                    "end": 1370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1333,
                  "end": 1371
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1412,
                    "end": 1414
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                              "start": 1417,
                              "end": 1418
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1417,
                            "end": 1418
                          }
                        ],
                        "start": 1416,
                        "end": 1419
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
                                "start": 1423,
                                "end": 1424
                              },
                              "typeArguments": null,
                              "start": 1423,
                              "end": 1424
                            },
                            "start": 1421,
                            "end": 1424
                          },
                          "start": 1420,
                          "end": 1424
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1429,
                          "end": 1435
                        },
                        "start": 1426,
                        "end": 1435
                      },
                      "start": 1416,
                      "end": 1435
                    },
                    "start": 1414,
                    "end": 1435
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1412,
                  "end": 1436
                }
              ],
              "start": 1242,
              "end": 1474
            },
            "declare": false,
            "start": 1217,
            "end": 1474
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1490,
              "end": 1495
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1526,
                    "end": 1527
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 1547,
                                    "end": 1550
                                  },
                                  "start": 1547,
                                  "end": 1550
                                },
                                "start": 1545,
                                "end": 1550
                              },
                              "start": 1544,
                              "end": 1550
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1553,
                              "end": 1559
                            },
                            "start": 1551,
                            "end": 1559
                          },
                          "start": 1543,
                          "end": 1560
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1577,
                                  "end": 1583
                                },
                                "start": 1575,
                                "end": 1583
                              },
                              "start": 1574,
                              "end": 1583
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1586,
                              "end": 1592
                            },
                            "start": 1584,
                            "end": 1592
                          },
                          "start": 1573,
                          "end": 1593
                        }
                      ],
                      "start": 1529,
                      "end": 1603
                    },
                    "start": 1527,
                    "end": 1603
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1526,
                  "end": 1603
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1614
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                              "start": 1617,
                              "end": 1618
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1617,
                            "end": 1618
                          }
                        ],
                        "start": 1616,
                        "end": 1619
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
                                "start": 1623,
                                "end": 1624
                              },
                              "typeArguments": null,
                              "start": 1623,
                              "end": 1624
                            },
                            "start": 1621,
                            "end": 1624
                          },
                          "start": 1620,
                          "end": 1624
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
                            "start": 1629,
                            "end": 1630
                          },
                          "typeArguments": null,
                          "start": 1629,
                          "end": 1630
                        },
                        "start": 1626,
                        "end": 1630
                      },
                      "start": 1616,
                      "end": 1630
                    },
                    "start": 1614,
                    "end": 1630
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1612,
                  "end": 1631
                }
              ],
              "start": 1496,
              "end": 1637
            },
            "declare": false,
            "start": 1480,
            "end": 1637
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1664,
              "end": 1666
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1675,
                  "end": 1680
                },
                "typeArguments": null,
                "start": 1675,
                "end": 1680
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1706,
                    "end": 1707
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1713,
                              "end": 1719
                            },
                            "start": 1711,
                            "end": 1719
                          },
                          "start": 1710,
                          "end": 1719
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1724,
                          "end": 1730
                        },
                        "start": 1721,
                        "end": 1730
                      },
                      "start": 1709,
                      "end": 1730
                    },
                    "start": 1707,
                    "end": 1730
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1706,
                  "end": 1731
                }
              ],
              "start": 1681,
              "end": 1777
            },
            "declare": false,
            "start": 1654,
            "end": 1777
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1806
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1815,
                  "end": 1820
                },
                "typeArguments": null,
                "start": 1815,
                "end": 1820
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1846,
                    "end": 1848
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                              "start": 1851,
                              "end": 1852
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1851,
                            "end": 1852
                          }
                        ],
                        "start": 1850,
                        "end": 1853
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
                                "start": 1857,
                                "end": 1858
                              },
                              "typeArguments": null,
                              "start": 1857,
                              "end": 1858
                            },
                            "start": 1855,
                            "end": 1858
                          },
                          "start": 1854,
                          "end": 1858
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1863,
                          "end": 1869
                        },
                        "start": 1860,
                        "end": 1869
                      },
                      "start": 1850,
                      "end": 1869
                    },
                    "start": 1848,
                    "end": 1869
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1846,
                  "end": 1870
                }
              ],
              "start": 1821,
              "end": 1916
            },
            "declare": false,
            "start": 1794,
            "end": 1916
          }
        ],
        "start": 934,
        "end": 1918
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 900,
      "end": 1918
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 118,
  "end": 1918
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 118,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "CallSignature",
    "start": 128,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 269,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 511,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 596,
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
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 626,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 636,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 639,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 787,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 797,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 800,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 808,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 846,
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
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 900,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "MemberWithCallSignature",
    "start": 910,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 940,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 950,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1034,
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
    "value": ":",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1067,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
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
    "type": "Identifier",
    "value": "string",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1177,
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
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1217,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1229,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1282,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1363,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1426,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1480,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1490,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1547,
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
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1577,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1654,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1667,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708
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
    "value": "string",
    "start": 1713,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1721,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1724,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1794,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 1804,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1807,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 1815,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1846,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1852,
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
    "value": "T",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1860,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1863,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1917,
    "end": 1918
  }
]
```
