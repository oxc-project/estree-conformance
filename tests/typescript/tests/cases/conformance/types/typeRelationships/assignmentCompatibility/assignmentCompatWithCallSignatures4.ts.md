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
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
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
                    "start": 128,
                    "end": 131
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
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
                  "start": 128,
                  "end": 140
                }
              ],
              "start": 126,
              "end": 142
            },
            "abstract": false,
            "declare": false,
            "start": 115,
            "end": 142
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 160
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
            },
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 179
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    },
                    "start": 179,
                    "end": 187
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
                  "start": 176,
                  "end": 188
                }
              ],
              "start": 174,
              "end": 190
            },
            "abstract": false,
            "declare": false,
            "start": 147,
            "end": 190
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 209
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 225
            },
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 231
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    },
                    "start": 231,
                    "end": 239
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
                  "start": 228,
                  "end": 240
                }
              ],
              "start": 226,
              "end": 242
            },
            "abstract": false,
            "declare": false,
            "start": 195,
            "end": 242
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 265
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 278
            },
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
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 285
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 287,
                      "end": 293
                    },
                    "start": 285,
                    "end": 293
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
                  "start": 281,
                  "end": 294
                }
              ],
              "start": 279,
              "end": 296
            },
            "abstract": false,
            "declare": false,
            "start": 247,
            "end": 296
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 346
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
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
                                    "type": "TSNumberKeyword",
                                    "start": 433,
                                    "end": 439
                                  },
                                  "start": 431,
                                  "end": 439
                                },
                                "start": 430,
                                "end": 439
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 444,
                                  "end": 450
                                },
                                "start": 444,
                                "end": 452
                              },
                              "start": 441,
                              "end": 452
                            },
                            "start": 429,
                            "end": 452
                          },
                          "start": 427,
                          "end": 452
                        },
                        "start": 425,
                        "end": 452
                      },
                      "init": null,
                      "definite": false,
                      "start": 425,
                      "end": 452
                    }
                  ],
                  "declare": true,
                  "start": 413,
                  "end": 453
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
                        "name": "a7",
                        "optional": false,
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 488,
                                              "end": 492
                                            },
                                            "typeArguments": null,
                                            "start": 488,
                                            "end": 492
                                          },
                                          "start": 486,
                                          "end": 492
                                        },
                                        "start": 483,
                                        "end": 492
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 497,
                                          "end": 504
                                        },
                                        "typeArguments": null,
                                        "start": 497,
                                        "end": 504
                                      },
                                      "start": 494,
                                      "end": 504
                                    },
                                    "start": 482,
                                    "end": 504
                                  },
                                  "start": 480,
                                  "end": 504
                                },
                                "start": 479,
                                "end": 504
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 513,
                                          "end": 517
                                        },
                                        "typeArguments": null,
                                        "start": 513,
                                        "end": 517
                                      },
                                      "start": 511,
                                      "end": 517
                                    },
                                    "start": 510,
                                    "end": 517
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 522,
                                      "end": 530
                                    },
                                    "typeArguments": null,
                                    "start": 522,
                                    "end": 530
                                  },
                                  "start": 519,
                                  "end": 530
                                },
                                "start": 509,
                                "end": 530
                              },
                              "start": 506,
                              "end": 530
                            },
                            "start": 478,
                            "end": 530
                          },
                          "start": 476,
                          "end": 530
                        },
                        "start": 474,
                        "end": 530
                      },
                      "init": null,
                      "definite": false,
                      "start": 474,
                      "end": 530
                    }
                  ],
                  "declare": true,
                  "start": 462,
                  "end": 531
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
                        "name": "a8",
                        "optional": false,
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 566,
                                              "end": 570
                                            },
                                            "typeArguments": null,
                                            "start": 566,
                                            "end": 570
                                          },
                                          "start": 564,
                                          "end": 570
                                        },
                                        "start": 561,
                                        "end": 570
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 575,
                                          "end": 582
                                        },
                                        "typeArguments": null,
                                        "start": 575,
                                        "end": 582
                                      },
                                      "start": 572,
                                      "end": 582
                                    },
                                    "start": 560,
                                    "end": 582
                                  },
                                  "start": 558,
                                  "end": 582
                                },
                                "start": 557,
                                "end": 582
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 594,
                                              "end": 598
                                            },
                                            "typeArguments": null,
                                            "start": 594,
                                            "end": 598
                                          },
                                          "start": 592,
                                          "end": 598
                                        },
                                        "start": 588,
                                        "end": 598
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 603,
                                          "end": 610
                                        },
                                        "typeArguments": null,
                                        "start": 603,
                                        "end": 610
                                      },
                                      "start": 600,
                                      "end": 610
                                    },
                                    "start": 587,
                                    "end": 610
                                  },
                                  "start": 585,
                                  "end": 610
                                },
                                "start": 584,
                                "end": 610
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 619,
                                          "end": 623
                                        },
                                        "typeArguments": null,
                                        "start": 619,
                                        "end": 623
                                      },
                                      "start": 617,
                                      "end": 623
                                    },
                                    "start": 616,
                                    "end": 623
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 628,
                                      "end": 635
                                    },
                                    "typeArguments": null,
                                    "start": 628,
                                    "end": 635
                                  },
                                  "start": 625,
                                  "end": 635
                                },
                                "start": 615,
                                "end": 635
                              },
                              "start": 612,
                              "end": 635
                            },
                            "start": 556,
                            "end": 635
                          },
                          "start": 554,
                          "end": 635
                        },
                        "start": 552,
                        "end": 635
                      },
                      "init": null,
                      "definite": false,
                      "start": 552,
                      "end": 635
                    }
                  ],
                  "declare": true,
                  "start": 540,
                  "end": 636
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
                        "name": "a10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 666,
                                  "end": 667
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 669,
                                        "end": 673
                                      },
                                      "typeArguments": null,
                                      "start": 669,
                                      "end": 673
                                    },
                                    "start": 669,
                                    "end": 675
                                  },
                                  "start": 667,
                                  "end": 675
                                },
                                "value": null,
                                "start": 663,
                                "end": 675
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 680,
                                  "end": 684
                                },
                                "typeArguments": null,
                                "start": 680,
                                "end": 684
                              },
                              "start": 677,
                              "end": 684
                            },
                            "start": 662,
                            "end": 684
                          },
                          "start": 660,
                          "end": 684
                        },
                        "start": 657,
                        "end": 684
                      },
                      "init": null,
                      "definite": false,
                      "start": 657,
                      "end": 684
                    }
                  ],
                  "declare": true,
                  "start": 645,
                  "end": 685
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
                        "name": "a11",
                        "optional": false,
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 717,
                                          "end": 720
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 722,
                                            "end": 728
                                          },
                                          "start": 720,
                                          "end": 728
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 717,
                                        "end": 728
                                      }
                                    ],
                                    "start": 715,
                                    "end": 730
                                  },
                                  "start": 713,
                                  "end": 730
                                },
                                "start": 712,
                                "end": 730
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 737,
                                          "end": 740
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 742,
                                            "end": 748
                                          },
                                          "start": 740,
                                          "end": 748
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 737,
                                        "end": 749
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 750,
                                          "end": 753
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 755,
                                            "end": 761
                                          },
                                          "start": 753,
                                          "end": 761
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 750,
                                        "end": 761
                                      }
                                    ],
                                    "start": 735,
                                    "end": 763
                                  },
                                  "start": 733,
                                  "end": 763
                                },
                                "start": 732,
                                "end": 763
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 768,
                                  "end": 772
                                },
                                "typeArguments": null,
                                "start": 768,
                                "end": 772
                              },
                              "start": 765,
                              "end": 772
                            },
                            "start": 711,
                            "end": 772
                          },
                          "start": 709,
                          "end": 772
                        },
                        "start": 706,
                        "end": 772
                      },
                      "init": null,
                      "definite": false,
                      "start": 706,
                      "end": 772
                    }
                  ],
                  "declare": true,
                  "start": 694,
                  "end": 773
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
                        "name": "a12",
                        "optional": false,
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
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 803,
                                      "end": 808
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 809,
                                            "end": 813
                                          },
                                          "typeArguments": null,
                                          "start": 809,
                                          "end": 813
                                        }
                                      ],
                                      "start": 808,
                                      "end": 814
                                    },
                                    "start": 803,
                                    "end": 814
                                  },
                                  "start": 801,
                                  "end": 814
                                },
                                "start": 800,
                                "end": 814
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 819,
                                      "end": 824
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 825,
                                            "end": 833
                                          },
                                          "typeArguments": null,
                                          "start": 825,
                                          "end": 833
                                        }
                                      ],
                                      "start": 824,
                                      "end": 834
                                    },
                                    "start": 819,
                                    "end": 834
                                  },
                                  "start": 817,
                                  "end": 834
                                },
                                "start": 816,
                                "end": 834
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 839,
                                  "end": 844
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 845,
                                        "end": 852
                                      },
                                      "typeArguments": null,
                                      "start": 845,
                                      "end": 852
                                    }
                                  ],
                                  "start": 844,
                                  "end": 853
                                },
                                "start": 839,
                                "end": 853
                              },
                              "start": 836,
                              "end": 853
                            },
                            "start": 799,
                            "end": 853
                          },
                          "start": 797,
                          "end": 853
                        },
                        "start": 794,
                        "end": 853
                      },
                      "init": null,
                      "definite": false,
                      "start": 794,
                      "end": 853
                    }
                  ],
                  "declare": true,
                  "start": 782,
                  "end": 854
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
                        "name": "a14",
                        "optional": false,
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
                                        "type": "TSNumberKeyword",
                                        "start": 902,
                                        "end": 908
                                      },
                                      "start": 900,
                                      "end": 908
                                    },
                                    "start": 899,
                                    "end": 908
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 911,
                                      "end": 917
                                    },
                                    "start": 911,
                                    "end": 919
                                  },
                                  "start": 909,
                                  "end": 919
                                },
                                "start": 898,
                                "end": 920
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
                                        "start": 941,
                                        "end": 947
                                      },
                                      "start": 939,
                                      "end": 947
                                    },
                                    "start": 938,
                                    "end": 947
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 950,
                                      "end": 956
                                    },
                                    "start": 950,
                                    "end": 958
                                  },
                                  "start": 948,
                                  "end": 958
                                },
                                "start": 937,
                                "end": 959
                              }
                            ],
                            "start": 880,
                            "end": 973
                          },
                          "start": 878,
                          "end": 973
                        },
                        "start": 875,
                        "end": 973
                      },
                      "init": null,
                      "definite": false,
                      "start": 875,
                      "end": 973
                    }
                  ],
                  "declare": true,
                  "start": 863,
                  "end": 974
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
                        "name": "a15",
                        "optional": false,
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1006,
                                          "end": 1007
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1009,
                                            "end": 1015
                                          },
                                          "start": 1007,
                                          "end": 1015
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1006,
                                        "end": 1016
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1017,
                                          "end": 1018
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1020,
                                            "end": 1026
                                          },
                                          "start": 1018,
                                          "end": 1026
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1017,
                                        "end": 1026
                                      }
                                    ],
                                    "start": 1004,
                                    "end": 1028
                                  },
                                  "start": 1002,
                                  "end": 1028
                                },
                                "start": 1001,
                                "end": 1028
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1033,
                                "end": 1039
                              },
                              "start": 1030,
                              "end": 1039
                            },
                            "start": 1000,
                            "end": 1039
                          },
                          "start": 998,
                          "end": 1039
                        },
                        "start": 995,
                        "end": 1039
                      },
                      "init": null,
                      "definite": false,
                      "start": 995,
                      "end": 1039
                    }
                  ],
                  "declare": true,
                  "start": 983,
                  "end": 1040
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
                        "name": "a16",
                        "optional": false,
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1114,
                                                    "end": 1120
                                                  },
                                                  "start": 1112,
                                                  "end": 1120
                                                },
                                                "start": 1111,
                                                "end": 1120
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1123,
                                                "end": 1129
                                              },
                                              "start": 1121,
                                              "end": 1129
                                            },
                                            "start": 1110,
                                            "end": 1130
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1156,
                                                    "end": 1162
                                                  },
                                                  "start": 1154,
                                                  "end": 1162
                                                },
                                                "start": 1152,
                                                "end": 1162
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1165,
                                                "end": 1171
                                              },
                                              "start": 1163,
                                              "end": 1171
                                            },
                                            "start": 1151,
                                            "end": 1172
                                          }
                                        ],
                                        "start": 1088,
                                        "end": 1190
                                      },
                                      "start": 1086,
                                      "end": 1190
                                    },
                                    "start": 1085,
                                    "end": 1190
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1193,
                                      "end": 1199
                                    },
                                    "start": 1193,
                                    "end": 1201
                                  },
                                  "start": 1191,
                                  "end": 1201
                                },
                                "start": 1084,
                                "end": 1202
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1249,
                                                    "end": 1256
                                                  },
                                                  "start": 1247,
                                                  "end": 1256
                                                },
                                                "start": 1246,
                                                "end": 1256
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1259,
                                                "end": 1266
                                              },
                                              "start": 1257,
                                              "end": 1266
                                            },
                                            "start": 1245,
                                            "end": 1267
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1293,
                                                    "end": 1300
                                                  },
                                                  "start": 1291,
                                                  "end": 1300
                                                },
                                                "start": 1289,
                                                "end": 1300
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1303,
                                                "end": 1310
                                              },
                                              "start": 1301,
                                              "end": 1310
                                            },
                                            "start": 1288,
                                            "end": 1311
                                          }
                                        ],
                                        "start": 1223,
                                        "end": 1329
                                      },
                                      "start": 1221,
                                      "end": 1329
                                    },
                                    "start": 1220,
                                    "end": 1329
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1332,
                                      "end": 1339
                                    },
                                    "start": 1332,
                                    "end": 1341
                                  },
                                  "start": 1330,
                                  "end": 1341
                                },
                                "start": 1219,
                                "end": 1342
                              }
                            ],
                            "start": 1066,
                            "end": 1356
                          },
                          "start": 1064,
                          "end": 1356
                        },
                        "start": 1061,
                        "end": 1356
                      },
                      "init": null,
                      "definite": false,
                      "start": 1061,
                      "end": 1356
                    }
                  ],
                  "declare": true,
                  "start": 1049,
                  "end": 1357
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
                        "name": "a17",
                        "optional": false,
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
                                        "type": "TSTypeLiteral",
                                        "members": [
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
                                                    "start": 1428,
                                                    "end": 1429
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1438,
                                                      "end": 1445
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1438,
                                                    "end": 1445
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1428,
                                                  "end": 1445
                                                }
                                              ],
                                              "start": 1427,
                                              "end": 1446
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1450,
                                                      "end": 1451
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1450,
                                                    "end": 1451
                                                  },
                                                  "start": 1448,
                                                  "end": 1451
                                                },
                                                "start": 1447,
                                                "end": 1451
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
                                                  "start": 1454,
                                                  "end": 1455
                                                },
                                                "typeArguments": null,
                                                "start": 1454,
                                                "end": 1455
                                              },
                                              "start": 1452,
                                              "end": 1455
                                            },
                                            "start": 1427,
                                            "end": 1456
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
                                                    "start": 1478,
                                                    "end": 1479
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1488,
                                                      "end": 1492
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1488,
                                                    "end": 1492
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1478,
                                                  "end": 1492
                                                }
                                              ],
                                              "start": 1477,
                                              "end": 1493
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1497,
                                                      "end": 1498
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1497,
                                                    "end": 1498
                                                  },
                                                  "start": 1495,
                                                  "end": 1498
                                                },
                                                "start": 1494,
                                                "end": 1498
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
                                                  "start": 1501,
                                                  "end": 1502
                                                },
                                                "typeArguments": null,
                                                "start": 1501,
                                                "end": 1502
                                              },
                                              "start": 1499,
                                              "end": 1502
                                            },
                                            "start": 1477,
                                            "end": 1503
                                          }
                                        ],
                                        "start": 1405,
                                        "end": 1521
                                      },
                                      "start": 1403,
                                      "end": 1521
                                    },
                                    "start": 1402,
                                    "end": 1521
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1524,
                                      "end": 1527
                                    },
                                    "start": 1524,
                                    "end": 1529
                                  },
                                  "start": 1522,
                                  "end": 1529
                                },
                                "start": 1401,
                                "end": 1530
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
                                        "type": "TSTypeLiteral",
                                        "members": [
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
                                                    "start": 1574,
                                                    "end": 1575
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1584,
                                                      "end": 1592
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1584,
                                                    "end": 1592
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1574,
                                                  "end": 1592
                                                }
                                              ],
                                              "start": 1573,
                                              "end": 1593
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1597,
                                                      "end": 1598
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1597,
                                                    "end": 1598
                                                  },
                                                  "start": 1595,
                                                  "end": 1598
                                                },
                                                "start": 1594,
                                                "end": 1598
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
                                                  "start": 1601,
                                                  "end": 1602
                                                },
                                                "typeArguments": null,
                                                "start": 1601,
                                                "end": 1602
                                              },
                                              "start": 1599,
                                              "end": 1602
                                            },
                                            "start": 1573,
                                            "end": 1603
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
                                                    "start": 1625,
                                                    "end": 1626
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1635,
                                                      "end": 1639
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1635,
                                                    "end": 1639
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1625,
                                                  "end": 1639
                                                }
                                              ],
                                              "start": 1624,
                                              "end": 1640
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                  "start": 1648,
                                                  "end": 1649
                                                },
                                                "typeArguments": null,
                                                "start": 1648,
                                                "end": 1649
                                              },
                                              "start": 1646,
                                              "end": 1649
                                            },
                                            "start": 1624,
                                            "end": 1650
                                          }
                                        ],
                                        "start": 1551,
                                        "end": 1668
                                      },
                                      "start": 1549,
                                      "end": 1668
                                    },
                                    "start": 1548,
                                    "end": 1668
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1671,
                                      "end": 1674
                                    },
                                    "start": 1671,
                                    "end": 1676
                                  },
                                  "start": 1669,
                                  "end": 1676
                                },
                                "start": 1547,
                                "end": 1677
                              }
                            ],
                            "start": 1383,
                            "end": 1691
                          },
                          "start": 1381,
                          "end": 1691
                        },
                        "start": 1378,
                        "end": 1691
                      },
                      "init": null,
                      "definite": false,
                      "start": 1378,
                      "end": 1691
                    }
                  ],
                  "declare": true,
                  "start": 1366,
                  "end": 1692
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
                        "name": "b2",
                        "optional": false,
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
                                    "start": 1719,
                                    "end": 1720
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1719,
                                  "end": 1720
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1722,
                                    "end": 1723
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1722,
                                  "end": 1723
                                }
                              ],
                              "start": 1718,
                              "end": 1724
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
                                      "start": 1728,
                                      "end": 1729
                                    },
                                    "typeArguments": null,
                                    "start": 1728,
                                    "end": 1729
                                  },
                                  "start": 1726,
                                  "end": 1729
                                },
                                "start": 1725,
                                "end": 1729
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1734,
                                    "end": 1735
                                  },
                                  "typeArguments": null,
                                  "start": 1734,
                                  "end": 1735
                                },
                                "start": 1734,
                                "end": 1737
                              },
                              "start": 1731,
                              "end": 1737
                            },
                            "start": 1718,
                            "end": 1737
                          },
                          "start": 1716,
                          "end": 1737
                        },
                        "start": 1714,
                        "end": 1737
                      },
                      "init": null,
                      "definite": false,
                      "start": 1714,
                      "end": 1737
                    }
                  ],
                  "declare": true,
                  "start": 1702,
                  "end": 1738
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1748,
                      "end": 1750
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1753,
                      "end": 1755
                    },
                    "start": 1748,
                    "end": 1755
                  },
                  "directive": null,
                  "start": 1748,
                  "end": 1756
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1765,
                      "end": 1767
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1770,
                      "end": 1772
                    },
                    "start": 1765,
                    "end": 1772
                  },
                  "directive": null,
                  "start": 1765,
                  "end": 1773
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
                        "name": "b7",
                        "optional": false,
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
                                    "start": 1800,
                                    "end": 1801
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1810,
                                      "end": 1814
                                    },
                                    "typeArguments": null,
                                    "start": 1810,
                                    "end": 1814
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1800,
                                  "end": 1814
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1816,
                                    "end": 1817
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1826,
                                      "end": 1833
                                    },
                                    "typeArguments": null,
                                    "start": 1826,
                                    "end": 1833
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1816,
                                  "end": 1833
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1835,
                                    "end": 1836
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1845,
                                      "end": 1853
                                    },
                                    "typeArguments": null,
                                    "start": 1845,
                                    "end": 1853
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1835,
                                  "end": 1853
                                }
                              ],
                              "start": 1799,
                              "end": 1854
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 1864,
                                              "end": 1865
                                            },
                                            "typeArguments": null,
                                            "start": 1864,
                                            "end": 1865
                                          },
                                          "start": 1862,
                                          "end": 1865
                                        },
                                        "start": 1859,
                                        "end": 1865
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1870,
                                          "end": 1871
                                        },
                                        "typeArguments": null,
                                        "start": 1870,
                                        "end": 1871
                                      },
                                      "start": 1867,
                                      "end": 1871
                                    },
                                    "start": 1858,
                                    "end": 1871
                                  },
                                  "start": 1856,
                                  "end": 1871
                                },
                                "start": 1855,
                                "end": 1871
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 1880,
                                          "end": 1881
                                        },
                                        "typeArguments": null,
                                        "start": 1880,
                                        "end": 1881
                                      },
                                      "start": 1878,
                                      "end": 1881
                                    },
                                    "start": 1877,
                                    "end": 1881
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1886,
                                      "end": 1887
                                    },
                                    "typeArguments": null,
                                    "start": 1886,
                                    "end": 1887
                                  },
                                  "start": 1883,
                                  "end": 1887
                                },
                                "start": 1876,
                                "end": 1887
                              },
                              "start": 1873,
                              "end": 1887
                            },
                            "start": 1799,
                            "end": 1887
                          },
                          "start": 1797,
                          "end": 1887
                        },
                        "start": 1795,
                        "end": 1887
                      },
                      "init": null,
                      "definite": false,
                      "start": 1795,
                      "end": 1887
                    }
                  ],
                  "declare": true,
                  "start": 1783,
                  "end": 1888
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1897,
                      "end": 1899
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1902,
                      "end": 1904
                    },
                    "start": 1897,
                    "end": 1904
                  },
                  "directive": null,
                  "start": 1897,
                  "end": 1905
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1916
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1919,
                      "end": 1921
                    },
                    "start": 1914,
                    "end": 1921
                  },
                  "directive": null,
                  "start": 1914,
                  "end": 1922
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
                        "name": "b8",
                        "optional": false,
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
                                    "start": 1949,
                                    "end": 1950
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1959,
                                      "end": 1963
                                    },
                                    "typeArguments": null,
                                    "start": 1959,
                                    "end": 1963
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1949,
                                  "end": 1963
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1965,
                                    "end": 1966
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1975,
                                      "end": 1982
                                    },
                                    "typeArguments": null,
                                    "start": 1975,
                                    "end": 1982
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1965,
                                  "end": 1982
                                }
                              ],
                              "start": 1948,
                              "end": 1983
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 1993,
                                              "end": 1994
                                            },
                                            "typeArguments": null,
                                            "start": 1993,
                                            "end": 1994
                                          },
                                          "start": 1991,
                                          "end": 1994
                                        },
                                        "start": 1988,
                                        "end": 1994
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1999,
                                          "end": 2000
                                        },
                                        "typeArguments": null,
                                        "start": 1999,
                                        "end": 2000
                                      },
                                      "start": 1996,
                                      "end": 2000
                                    },
                                    "start": 1987,
                                    "end": 2000
                                  },
                                  "start": 1985,
                                  "end": 2000
                                },
                                "start": 1984,
                                "end": 2000
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
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
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 2014,
                                                  "end": 2017
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2019,
                                                    "end": 2025
                                                  },
                                                  "start": 2017,
                                                  "end": 2025
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2014,
                                                "end": 2026
                                              }
                                            ],
                                            "start": 2012,
                                            "end": 2028
                                          },
                                          "start": 2010,
                                          "end": 2028
                                        },
                                        "start": 2006,
                                        "end": 2028
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2033,
                                          "end": 2034
                                        },
                                        "typeArguments": null,
                                        "start": 2033,
                                        "end": 2034
                                      },
                                      "start": 2030,
                                      "end": 2034
                                    },
                                    "start": 2005,
                                    "end": 2034
                                  },
                                  "start": 2003,
                                  "end": 2034
                                },
                                "start": 2002,
                                "end": 2034
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 2043,
                                          "end": 2044
                                        },
                                        "typeArguments": null,
                                        "start": 2043,
                                        "end": 2044
                                      },
                                      "start": 2041,
                                      "end": 2044
                                    },
                                    "start": 2040,
                                    "end": 2044
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2049,
                                      "end": 2050
                                    },
                                    "typeArguments": null,
                                    "start": 2049,
                                    "end": 2050
                                  },
                                  "start": 2046,
                                  "end": 2050
                                },
                                "start": 2039,
                                "end": 2050
                              },
                              "start": 2036,
                              "end": 2050
                            },
                            "start": 1948,
                            "end": 2050
                          },
                          "start": 1946,
                          "end": 2050
                        },
                        "start": 1944,
                        "end": 2050
                      },
                      "init": null,
                      "definite": false,
                      "start": 1944,
                      "end": 2050
                    }
                  ],
                  "declare": true,
                  "start": 1932,
                  "end": 2051
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2061,
                      "end": 2063
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2068
                    },
                    "start": 2061,
                    "end": 2068
                  },
                  "directive": null,
                  "start": 2061,
                  "end": 2069
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2130,
                      "end": 2132
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2135,
                      "end": 2137
                    },
                    "start": 2130,
                    "end": 2137
                  },
                  "directive": null,
                  "start": 2130,
                  "end": 2138
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
                        "name": "b10",
                        "optional": false,
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
                                    "start": 2227,
                                    "end": 2228
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2237,
                                      "end": 2244
                                    },
                                    "typeArguments": null,
                                    "start": 2237,
                                    "end": 2244
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2227,
                                  "end": 2244
                                }
                              ],
                              "start": 2226,
                              "end": 2245
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2249,
                                  "end": 2250
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2252,
                                        "end": 2253
                                      },
                                      "typeArguments": null,
                                      "start": 2252,
                                      "end": 2253
                                    },
                                    "start": 2252,
                                    "end": 2255
                                  },
                                  "start": 2250,
                                  "end": 2255
                                },
                                "value": null,
                                "start": 2246,
                                "end": 2255
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
                                  "start": 2260,
                                  "end": 2261
                                },
                                "typeArguments": null,
                                "start": 2260,
                                "end": 2261
                              },
                              "start": 2257,
                              "end": 2261
                            },
                            "start": 2226,
                            "end": 2261
                          },
                          "start": 2224,
                          "end": 2261
                        },
                        "start": 2221,
                        "end": 2261
                      },
                      "init": null,
                      "definite": false,
                      "start": 2221,
                      "end": 2261
                    }
                  ],
                  "declare": true,
                  "start": 2209,
                  "end": 2262
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2272,
                      "end": 2275
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2278,
                      "end": 2281
                    },
                    "start": 2272,
                    "end": 2281
                  },
                  "directive": null,
                  "start": 2272,
                  "end": 2282
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2291,
                      "end": 2294
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2297,
                      "end": 2300
                    },
                    "start": 2291,
                    "end": 2300
                  },
                  "directive": null,
                  "start": 2291,
                  "end": 2301
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
                        "name": "b11",
                        "optional": false,
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
                                    "start": 2329,
                                    "end": 2330
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2339,
                                      "end": 2346
                                    },
                                    "typeArguments": null,
                                    "start": 2339,
                                    "end": 2346
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2329,
                                  "end": 2346
                                }
                              ],
                              "start": 2328,
                              "end": 2347
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
                                      "start": 2351,
                                      "end": 2352
                                    },
                                    "typeArguments": null,
                                    "start": 2351,
                                    "end": 2352
                                  },
                                  "start": 2349,
                                  "end": 2352
                                },
                                "start": 2348,
                                "end": 2352
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2357,
                                      "end": 2358
                                    },
                                    "typeArguments": null,
                                    "start": 2357,
                                    "end": 2358
                                  },
                                  "start": 2355,
                                  "end": 2358
                                },
                                "start": 2354,
                                "end": 2358
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
                                  "start": 2363,
                                  "end": 2364
                                },
                                "typeArguments": null,
                                "start": 2363,
                                "end": 2364
                              },
                              "start": 2360,
                              "end": 2364
                            },
                            "start": 2328,
                            "end": 2364
                          },
                          "start": 2326,
                          "end": 2364
                        },
                        "start": 2323,
                        "end": 2364
                      },
                      "init": null,
                      "definite": false,
                      "start": 2323,
                      "end": 2364
                    }
                  ],
                  "declare": true,
                  "start": 2311,
                  "end": 2365
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2375,
                      "end": 2378
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2381,
                      "end": 2384
                    },
                    "start": 2375,
                    "end": 2384
                  },
                  "directive": null,
                  "start": 2375,
                  "end": 2385
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2394,
                      "end": 2397
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2403
                    },
                    "start": 2394,
                    "end": 2403
                  },
                  "directive": null,
                  "start": 2394,
                  "end": 2404
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
                        "name": "b12",
                        "optional": false,
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
                                    "start": 2432,
                                    "end": 2433
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2442,
                                      "end": 2447
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2448,
                                            "end": 2456
                                          },
                                          "typeArguments": null,
                                          "start": 2448,
                                          "end": 2456
                                        }
                                      ],
                                      "start": 2447,
                                      "end": 2457
                                    },
                                    "start": 2442,
                                    "end": 2457
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2432,
                                  "end": 2457
                                }
                              ],
                              "start": 2431,
                              "end": 2458
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2462,
                                      "end": 2467
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2468,
                                            "end": 2472
                                          },
                                          "typeArguments": null,
                                          "start": 2468,
                                          "end": 2472
                                        }
                                      ],
                                      "start": 2467,
                                      "end": 2473
                                    },
                                    "start": 2462,
                                    "end": 2473
                                  },
                                  "start": 2460,
                                  "end": 2473
                                },
                                "start": 2459,
                                "end": 2473
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
                                      "name": "Array",
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
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2484,
                                            "end": 2488
                                          },
                                          "typeArguments": null,
                                          "start": 2484,
                                          "end": 2488
                                        }
                                      ],
                                      "start": 2483,
                                      "end": 2489
                                    },
                                    "start": 2478,
                                    "end": 2489
                                  },
                                  "start": 2476,
                                  "end": 2489
                                },
                                "start": 2475,
                                "end": 2489
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
                                  "start": 2494,
                                  "end": 2495
                                },
                                "typeArguments": null,
                                "start": 2494,
                                "end": 2495
                              },
                              "start": 2491,
                              "end": 2495
                            },
                            "start": 2431,
                            "end": 2495
                          },
                          "start": 2429,
                          "end": 2495
                        },
                        "start": 2426,
                        "end": 2495
                      },
                      "init": null,
                      "definite": false,
                      "start": 2426,
                      "end": 2495
                    }
                  ],
                  "declare": true,
                  "start": 2414,
                  "end": 2496
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2506,
                      "end": 2509
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2512,
                      "end": 2515
                    },
                    "start": 2506,
                    "end": 2515
                  },
                  "directive": null,
                  "start": 2506,
                  "end": 2516
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2525,
                      "end": 2528
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2531,
                      "end": 2534
                    },
                    "start": 2525,
                    "end": 2534
                  },
                  "directive": null,
                  "start": 2525,
                  "end": 2535
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
                        "name": "b15",
                        "optional": false,
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
                                    "start": 2563,
                                    "end": 2564
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2563,
                                  "end": 2564
                                }
                              ],
                              "start": 2562,
                              "end": 2565
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2571,
                                          "end": 2572
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
                                              "start": 2574,
                                              "end": 2575
                                            },
                                            "typeArguments": null,
                                            "start": 2574,
                                            "end": 2575
                                          },
                                          "start": 2572,
                                          "end": 2575
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2571,
                                        "end": 2576
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2577,
                                          "end": 2578
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
                                              "start": 2580,
                                              "end": 2581
                                            },
                                            "typeArguments": null,
                                            "start": 2580,
                                            "end": 2581
                                          },
                                          "start": 2578,
                                          "end": 2581
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2577,
                                        "end": 2581
                                      }
                                    ],
                                    "start": 2569,
                                    "end": 2583
                                  },
                                  "start": 2567,
                                  "end": 2583
                                },
                                "start": 2566,
                                "end": 2583
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
                                  "start": 2588,
                                  "end": 2589
                                },
                                "typeArguments": null,
                                "start": 2588,
                                "end": 2589
                              },
                              "start": 2585,
                              "end": 2589
                            },
                            "start": 2562,
                            "end": 2589
                          },
                          "start": 2560,
                          "end": 2589
                        },
                        "start": 2557,
                        "end": 2589
                      },
                      "init": null,
                      "definite": false,
                      "start": 2557,
                      "end": 2589
                    }
                  ],
                  "declare": true,
                  "start": 2545,
                  "end": 2590
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2600,
                      "end": 2603
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2606,
                      "end": 2609
                    },
                    "start": 2600,
                    "end": 2609
                  },
                  "directive": null,
                  "start": 2600,
                  "end": 2610
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2619,
                      "end": 2622
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2625,
                      "end": 2628
                    },
                    "start": 2619,
                    "end": 2628
                  },
                  "directive": null,
                  "start": 2619,
                  "end": 2629
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
                        "name": "b15a",
                        "optional": false,
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
                                    "start": 2658,
                                    "end": 2659
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2668,
                                      "end": 2672
                                    },
                                    "typeArguments": null,
                                    "start": 2668,
                                    "end": 2672
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2658,
                                  "end": 2672
                                }
                              ],
                              "start": 2657,
                              "end": 2673
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2679,
                                          "end": 2680
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
                                              "start": 2682,
                                              "end": 2683
                                            },
                                            "typeArguments": null,
                                            "start": 2682,
                                            "end": 2683
                                          },
                                          "start": 2680,
                                          "end": 2683
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2679,
                                        "end": 2684
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2685,
                                          "end": 2686
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
                                              "start": 2688,
                                              "end": 2689
                                            },
                                            "typeArguments": null,
                                            "start": 2688,
                                            "end": 2689
                                          },
                                          "start": 2686,
                                          "end": 2689
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2685,
                                        "end": 2689
                                      }
                                    ],
                                    "start": 2677,
                                    "end": 2691
                                  },
                                  "start": 2675,
                                  "end": 2691
                                },
                                "start": 2674,
                                "end": 2691
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2696,
                                "end": 2702
                              },
                              "start": 2693,
                              "end": 2702
                            },
                            "start": 2657,
                            "end": 2702
                          },
                          "start": 2655,
                          "end": 2702
                        },
                        "start": 2651,
                        "end": 2702
                      },
                      "init": null,
                      "definite": false,
                      "start": 2651,
                      "end": 2702
                    }
                  ],
                  "declare": true,
                  "start": 2639,
                  "end": 2703
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2713,
                      "end": 2716
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2719,
                      "end": 2723
                    },
                    "start": 2713,
                    "end": 2723
                  },
                  "directive": null,
                  "start": 2713,
                  "end": 2724
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2733,
                      "end": 2737
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2743
                    },
                    "start": 2733,
                    "end": 2743
                  },
                  "directive": null,
                  "start": 2733,
                  "end": 2744
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
                        "name": "b16",
                        "optional": false,
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
                                    "start": 2772,
                                    "end": 2773
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2772,
                                  "end": 2773
                                }
                              ],
                              "start": 2771,
                              "end": 2774
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 2782,
                                              "end": 2783
                                            },
                                            "typeArguments": null,
                                            "start": 2782,
                                            "end": 2783
                                          },
                                          "start": 2780,
                                          "end": 2783
                                        },
                                        "start": 2779,
                                        "end": 2783
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
                                          "start": 2788,
                                          "end": 2789
                                        },
                                        "typeArguments": null,
                                        "start": 2788,
                                        "end": 2789
                                      },
                                      "start": 2785,
                                      "end": 2789
                                    },
                                    "start": 2778,
                                    "end": 2789
                                  },
                                  "start": 2776,
                                  "end": 2789
                                },
                                "start": 2775,
                                "end": 2789
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2794,
                                    "end": 2795
                                  },
                                  "typeArguments": null,
                                  "start": 2794,
                                  "end": 2795
                                },
                                "start": 2794,
                                "end": 2797
                              },
                              "start": 2791,
                              "end": 2797
                            },
                            "start": 2771,
                            "end": 2797
                          },
                          "start": 2769,
                          "end": 2797
                        },
                        "start": 2766,
                        "end": 2797
                      },
                      "init": null,
                      "definite": false,
                      "start": 2766,
                      "end": 2797
                    }
                  ],
                  "declare": true,
                  "start": 2754,
                  "end": 2798
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2807,
                      "end": 2810
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2813,
                      "end": 2816
                    },
                    "start": 2807,
                    "end": 2816
                  },
                  "directive": null,
                  "start": 2807,
                  "end": 2817
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2826,
                      "end": 2829
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2832,
                      "end": 2835
                    },
                    "start": 2826,
                    "end": 2835
                  },
                  "directive": null,
                  "start": 2826,
                  "end": 2836
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
                        "name": "b17",
                        "optional": false,
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
                                    "start": 2864,
                                    "end": 2865
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2864,
                                  "end": 2865
                                }
                              ],
                              "start": 2863,
                              "end": 2866
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 2874,
                                              "end": 2875
                                            },
                                            "typeArguments": null,
                                            "start": 2874,
                                            "end": 2875
                                          },
                                          "start": 2872,
                                          "end": 2875
                                        },
                                        "start": 2871,
                                        "end": 2875
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
                                          "start": 2880,
                                          "end": 2881
                                        },
                                        "typeArguments": null,
                                        "start": 2880,
                                        "end": 2881
                                      },
                                      "start": 2877,
                                      "end": 2881
                                    },
                                    "start": 2870,
                                    "end": 2881
                                  },
                                  "start": 2868,
                                  "end": 2881
                                },
                                "start": 2867,
                                "end": 2881
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2886,
                                  "end": 2889
                                },
                                "start": 2886,
                                "end": 2891
                              },
                              "start": 2883,
                              "end": 2891
                            },
                            "start": 2863,
                            "end": 2891
                          },
                          "start": 2861,
                          "end": 2891
                        },
                        "start": 2858,
                        "end": 2891
                      },
                      "init": null,
                      "definite": false,
                      "start": 2858,
                      "end": 2891
                    }
                  ],
                  "declare": true,
                  "start": 2846,
                  "end": 2892
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2901,
                      "end": 2904
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2907,
                      "end": 2910
                    },
                    "start": 2901,
                    "end": 2910
                  },
                  "directive": null,
                  "start": 2901,
                  "end": 2911
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2920,
                      "end": 2923
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2926,
                      "end": 2929
                    },
                    "start": 2920,
                    "end": 2929
                  },
                  "directive": null,
                  "start": 2920,
                  "end": 2930
                }
              ],
              "start": 347,
              "end": 2936
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 302,
            "end": 2936
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2952,
              "end": 2983
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
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
                                    "start": 3061,
                                    "end": 3062
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3061,
                                  "end": 3062
                                }
                              ],
                              "start": 3060,
                              "end": 3063
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
                                      "start": 3067,
                                      "end": 3068
                                    },
                                    "typeArguments": null,
                                    "start": 3067,
                                    "end": 3068
                                  },
                                  "start": 3065,
                                  "end": 3068
                                },
                                "start": 3064,
                                "end": 3068
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3073,
                                    "end": 3074
                                  },
                                  "typeArguments": null,
                                  "start": 3073,
                                  "end": 3074
                                },
                                "start": 3073,
                                "end": 3076
                              },
                              "start": 3070,
                              "end": 3076
                            },
                            "start": 3060,
                            "end": 3076
                          },
                          "start": 3058,
                          "end": 3076
                        },
                        "start": 3056,
                        "end": 3076
                      },
                      "init": null,
                      "definite": false,
                      "start": 3056,
                      "end": 3076
                    }
                  ],
                  "declare": true,
                  "start": 3044,
                  "end": 3077
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
                        "name": "b2",
                        "optional": false,
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
                                    "start": 3103,
                                    "end": 3104
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3103,
                                  "end": 3104
                                }
                              ],
                              "start": 3102,
                              "end": 3105
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
                                      "start": 3109,
                                      "end": 3110
                                    },
                                    "typeArguments": null,
                                    "start": 3109,
                                    "end": 3110
                                  },
                                  "start": 3107,
                                  "end": 3110
                                },
                                "start": 3106,
                                "end": 3110
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3115,
                                  "end": 3121
                                },
                                "start": 3115,
                                "end": 3123
                              },
                              "start": 3112,
                              "end": 3123
                            },
                            "start": 3102,
                            "end": 3123
                          },
                          "start": 3100,
                          "end": 3123
                        },
                        "start": 3098,
                        "end": 3123
                      },
                      "init": null,
                      "definite": false,
                      "start": 3098,
                      "end": 3123
                    }
                  ],
                  "declare": true,
                  "start": 3086,
                  "end": 3124
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3133,
                      "end": 3135
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3138,
                      "end": 3140
                    },
                    "start": 3133,
                    "end": 3140
                  },
                  "directive": null,
                  "start": 3133,
                  "end": 3141
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3150,
                      "end": 3152
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3157
                    },
                    "start": 3150,
                    "end": 3157
                  },
                  "directive": null,
                  "start": 3150,
                  "end": 3158
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
                        "name": "a3",
                        "optional": false,
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
                                    "start": 3235,
                                    "end": 3236
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3235,
                                  "end": 3236
                                }
                              ],
                              "start": 3234,
                              "end": 3237
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
                                      "start": 3241,
                                      "end": 3242
                                    },
                                    "typeArguments": null,
                                    "start": 3241,
                                    "end": 3242
                                  },
                                  "start": 3239,
                                  "end": 3242
                                },
                                "start": 3238,
                                "end": 3242
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3247,
                                  "end": 3253
                                },
                                "start": 3247,
                                "end": 3255
                              },
                              "start": 3244,
                              "end": 3255
                            },
                            "start": 3234,
                            "end": 3255
                          },
                          "start": 3232,
                          "end": 3255
                        },
                        "start": 3230,
                        "end": 3255
                      },
                      "init": null,
                      "definite": false,
                      "start": 3230,
                      "end": 3255
                    }
                  ],
                  "declare": true,
                  "start": 3218,
                  "end": 3256
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
                        "name": "b3",
                        "optional": false,
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
                                    "start": 3282,
                                    "end": 3283
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3282,
                                  "end": 3283
                                }
                              ],
                              "start": 3281,
                              "end": 3284
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
                                      "start": 3288,
                                      "end": 3289
                                    },
                                    "typeArguments": null,
                                    "start": 3288,
                                    "end": 3289
                                  },
                                  "start": 3286,
                                  "end": 3289
                                },
                                "start": 3285,
                                "end": 3289
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3294,
                                    "end": 3295
                                  },
                                  "typeArguments": null,
                                  "start": 3294,
                                  "end": 3295
                                },
                                "start": 3294,
                                "end": 3297
                              },
                              "start": 3291,
                              "end": 3297
                            },
                            "start": 3281,
                            "end": 3297
                          },
                          "start": 3279,
                          "end": 3297
                        },
                        "start": 3277,
                        "end": 3297
                      },
                      "init": null,
                      "definite": false,
                      "start": 3277,
                      "end": 3297
                    }
                  ],
                  "declare": true,
                  "start": 3265,
                  "end": 3298
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3310
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3313,
                      "end": 3315
                    },
                    "start": 3308,
                    "end": 3315
                  },
                  "directive": null,
                  "start": 3308,
                  "end": 3316
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3325,
                      "end": 3327
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3330,
                      "end": 3332
                    },
                    "start": 3325,
                    "end": 3332
                  },
                  "directive": null,
                  "start": 3325,
                  "end": 3333
                }
              ],
              "start": 2984,
              "end": 3339
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2942,
            "end": 3339
          }
        ],
        "start": 109,
        "end": 3341
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 92,
      "end": 3341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 3341
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 153,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 201,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 253,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 302,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "WithNonGenericSignaturesInBaseType",
    "start": 312,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 413,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 421,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 441,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 462,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 494,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 519,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 522,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 540,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 552,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 572,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 575,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 600,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 603,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 645,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 663,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "Base",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 680,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 694,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 702,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 765,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 782,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 790,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 794,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 809,
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
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 819,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 825,
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
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 845,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 863,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
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
    "value": "number",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
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
    "value": "string",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 950,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 983,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 991,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 995,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1049,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1156,
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
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1246,
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
    "value": "boolean",
    "start": 1249,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1259,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1293,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "boolean",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1332,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1430,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1438,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1480,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1492,
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
    "value": "a",
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
    "type": "Identifier",
    "value": "T",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1576,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1627,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1635,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1639,
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
    "value": "a",
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
    "value": "T",
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
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1702,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1710,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1722,
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
    "value": "(",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1753,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1770,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1783,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1795,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1802,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1810,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1818,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1826,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1837,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1845,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1873,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "type": "Identifier",
    "value": "a7",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1902,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1914,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1932,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1940,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1944,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1951,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1959,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1967,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1975,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1988,
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
    "value": "T",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2006,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2019,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2030,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2036,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2130,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2135,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2209,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2217,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2229,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2237,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2272,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2278,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2291,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2297,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2311,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2319,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2331,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2339,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2360,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2375,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2381,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2400,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2414,
    "end": 2421
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2422,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2426,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2434,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2442,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2448,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2468,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "Array",
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
    "value": "Base",
    "start": 2484,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2491,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2512,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2525,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2531,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2545,
    "end": 2552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2557,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2585,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2600,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2606,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2619,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2625,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2639,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2651,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2660,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2668,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2693,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2696,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2713,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2719,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2733,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2754,
    "end": 2761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2785,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2791,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2807,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2813,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2826,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2832,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2846,
    "end": 2853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2854,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2858,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2877,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2883,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2901,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2920,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2926,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2942,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 2952,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3044,
    "end": 3051
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3052,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3056,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3070,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3086,
    "end": 3093
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3094,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3098,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3112,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3133,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3138,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3150,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3155,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3218,
    "end": 3225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3226,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3230,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3244,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3247,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3265,
    "end": 3272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3273,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3277,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3291,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3308,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3313,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3325,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3330,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3340,
    "end": 3341
  }
]
```
