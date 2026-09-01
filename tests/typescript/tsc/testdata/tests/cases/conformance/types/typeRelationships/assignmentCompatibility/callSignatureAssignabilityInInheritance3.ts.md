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
        "start": 127,
        "end": 133
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
              "start": 146,
              "end": 150
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
                    "start": 153,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
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
                  "start": 153,
                  "end": 165
                }
              ],
              "start": 151,
              "end": 167
            },
            "abstract": false,
            "declare": false,
            "start": 140,
            "end": 167
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
              "start": 178,
              "end": 185
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 198
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
                    "start": 201,
                    "end": 204
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 206,
                      "end": 212
                    },
                    "start": 204,
                    "end": 212
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
                  "start": 201,
                  "end": 213
                }
              ],
              "start": 199,
              "end": 215
            },
            "abstract": false,
            "declare": false,
            "start": 172,
            "end": 215
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
              "start": 226,
              "end": 234
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 250
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
                    "start": 253,
                    "end": 256
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    },
                    "start": 256,
                    "end": 264
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
                  "start": 253,
                  "end": 265
                }
              ],
              "start": 251,
              "end": 267
            },
            "abstract": false,
            "declare": false,
            "start": 220,
            "end": 267
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
              "start": 278,
              "end": 290
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
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
                    "start": 306,
                    "end": 310
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    },
                    "start": 310,
                    "end": 318
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
                  "start": 306,
                  "end": 319
                }
              ],
              "start": 304,
              "end": 321
            },
            "abstract": false,
            "declare": false,
            "start": 272,
            "end": 321
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 371
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 447
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 464
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
                                    "type": "TSNumberKeyword",
                                    "start": 470,
                                    "end": 476
                                  },
                                  "start": 468,
                                  "end": 476
                                },
                                "start": 467,
                                "end": 476
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 481,
                                  "end": 487
                                },
                                "start": 481,
                                "end": 489
                              },
                              "start": 478,
                              "end": 489
                            },
                            "start": 466,
                            "end": 489
                          },
                          "start": 464,
                          "end": 489
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 490
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 503,
                          "end": 505
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
                                              "start": 517,
                                              "end": 521
                                            },
                                            "typeArguments": null,
                                            "start": 517,
                                            "end": 521
                                          },
                                          "start": 515,
                                          "end": 521
                                        },
                                        "start": 512,
                                        "end": 521
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
                                          "start": 526,
                                          "end": 533
                                        },
                                        "typeArguments": null,
                                        "start": 526,
                                        "end": 533
                                      },
                                      "start": 523,
                                      "end": 533
                                    },
                                    "start": 511,
                                    "end": 533
                                  },
                                  "start": 509,
                                  "end": 533
                                },
                                "start": 508,
                                "end": 533
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
                                          "start": 542,
                                          "end": 546
                                        },
                                        "typeArguments": null,
                                        "start": 542,
                                        "end": 546
                                      },
                                      "start": 540,
                                      "end": 546
                                    },
                                    "start": 539,
                                    "end": 546
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
                                      "start": 551,
                                      "end": 559
                                    },
                                    "typeArguments": null,
                                    "start": 551,
                                    "end": 559
                                  },
                                  "start": 548,
                                  "end": 559
                                },
                                "start": 538,
                                "end": 559
                              },
                              "start": 535,
                              "end": 559
                            },
                            "start": 507,
                            "end": 559
                          },
                          "start": 505,
                          "end": 559
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 503,
                        "end": 560
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 573,
                          "end": 575
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
                                              "start": 587,
                                              "end": 591
                                            },
                                            "typeArguments": null,
                                            "start": 587,
                                            "end": 591
                                          },
                                          "start": 585,
                                          "end": 591
                                        },
                                        "start": 582,
                                        "end": 591
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
                                          "start": 596,
                                          "end": 603
                                        },
                                        "typeArguments": null,
                                        "start": 596,
                                        "end": 603
                                      },
                                      "start": 593,
                                      "end": 603
                                    },
                                    "start": 581,
                                    "end": 603
                                  },
                                  "start": 579,
                                  "end": 603
                                },
                                "start": 578,
                                "end": 603
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
                                              "start": 615,
                                              "end": 619
                                            },
                                            "typeArguments": null,
                                            "start": 615,
                                            "end": 619
                                          },
                                          "start": 613,
                                          "end": 619
                                        },
                                        "start": 609,
                                        "end": 619
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
                                          "start": 624,
                                          "end": 631
                                        },
                                        "typeArguments": null,
                                        "start": 624,
                                        "end": 631
                                      },
                                      "start": 621,
                                      "end": 631
                                    },
                                    "start": 608,
                                    "end": 631
                                  },
                                  "start": 606,
                                  "end": 631
                                },
                                "start": 605,
                                "end": 631
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
                                          "start": 640,
                                          "end": 644
                                        },
                                        "typeArguments": null,
                                        "start": 640,
                                        "end": 644
                                      },
                                      "start": 638,
                                      "end": 644
                                    },
                                    "start": 637,
                                    "end": 644
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
                                      "start": 649,
                                      "end": 656
                                    },
                                    "typeArguments": null,
                                    "start": 649,
                                    "end": 656
                                  },
                                  "start": 646,
                                  "end": 656
                                },
                                "start": 636,
                                "end": 656
                              },
                              "start": 633,
                              "end": 656
                            },
                            "start": 577,
                            "end": 656
                          },
                          "start": 575,
                          "end": 656
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 573,
                        "end": 657
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 673
                        },
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
                                  "start": 679,
                                  "end": 680
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
                                        "start": 682,
                                        "end": 686
                                      },
                                      "typeArguments": null,
                                      "start": 682,
                                      "end": 686
                                    },
                                    "start": 682,
                                    "end": 688
                                  },
                                  "start": 680,
                                  "end": 688
                                },
                                "value": null,
                                "start": 676,
                                "end": 688
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
                                  "start": 693,
                                  "end": 697
                                },
                                "typeArguments": null,
                                "start": 693,
                                "end": 697
                              },
                              "start": 690,
                              "end": 697
                            },
                            "start": 675,
                            "end": 697
                          },
                          "start": 673,
                          "end": 697
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 670,
                        "end": 698
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 714
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
                                          "start": 722,
                                          "end": 725
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 727,
                                            "end": 733
                                          },
                                          "start": 725,
                                          "end": 733
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 722,
                                        "end": 733
                                      }
                                    ],
                                    "start": 720,
                                    "end": 735
                                  },
                                  "start": 718,
                                  "end": 735
                                },
                                "start": 717,
                                "end": 735
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
                                          "start": 742,
                                          "end": 745
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 747,
                                            "end": 753
                                          },
                                          "start": 745,
                                          "end": 753
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 742,
                                        "end": 754
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
                                          "start": 755,
                                          "end": 758
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 760,
                                            "end": 766
                                          },
                                          "start": 758,
                                          "end": 766
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 755,
                                        "end": 766
                                      }
                                    ],
                                    "start": 740,
                                    "end": 768
                                  },
                                  "start": 738,
                                  "end": 768
                                },
                                "start": 737,
                                "end": 768
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
                                  "start": 773,
                                  "end": 777
                                },
                                "typeArguments": null,
                                "start": 773,
                                "end": 777
                              },
                              "start": 770,
                              "end": 777
                            },
                            "start": 716,
                            "end": 777
                          },
                          "start": 714,
                          "end": 777
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 711,
                        "end": 778
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 791,
                          "end": 794
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
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 800,
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
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 806,
                                            "end": 810
                                          },
                                          "typeArguments": null,
                                          "start": 806,
                                          "end": 810
                                        }
                                      ],
                                      "start": 805,
                                      "end": 811
                                    },
                                    "start": 800,
                                    "end": 811
                                  },
                                  "start": 798,
                                  "end": 811
                                },
                                "start": 797,
                                "end": 811
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
                                      "start": 816,
                                      "end": 821
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
                                            "start": 822,
                                            "end": 830
                                          },
                                          "typeArguments": null,
                                          "start": 822,
                                          "end": 830
                                        }
                                      ],
                                      "start": 821,
                                      "end": 831
                                    },
                                    "start": 816,
                                    "end": 831
                                  },
                                  "start": 814,
                                  "end": 831
                                },
                                "start": 813,
                                "end": 831
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
                                  "start": 836,
                                  "end": 841
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
                                        "start": 842,
                                        "end": 849
                                      },
                                      "typeArguments": null,
                                      "start": 842,
                                      "end": 849
                                    }
                                  ],
                                  "start": 841,
                                  "end": 850
                                },
                                "start": 836,
                                "end": 850
                              },
                              "start": 833,
                              "end": 850
                            },
                            "start": 796,
                            "end": 850
                          },
                          "start": 794,
                          "end": 850
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 791,
                        "end": 851
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 864,
                          "end": 867
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
                                        "type": "TSNumberKeyword",
                                        "start": 891,
                                        "end": 897
                                      },
                                      "start": 889,
                                      "end": 897
                                    },
                                    "start": 888,
                                    "end": 897
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 900,
                                      "end": 906
                                    },
                                    "start": 900,
                                    "end": 908
                                  },
                                  "start": 898,
                                  "end": 908
                                },
                                "start": 887,
                                "end": 909
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
                                        "start": 930,
                                        "end": 936
                                      },
                                      "start": 928,
                                      "end": 936
                                    },
                                    "start": 927,
                                    "end": 936
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 939,
                                      "end": 945
                                    },
                                    "start": 939,
                                    "end": 947
                                  },
                                  "start": 937,
                                  "end": 947
                                },
                                "start": 926,
                                "end": 948
                              }
                            ],
                            "start": 869,
                            "end": 962
                          },
                          "start": 867,
                          "end": 962
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 864,
                        "end": 963
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 976,
                          "end": 979
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
                                          "start": 987,
                                          "end": 988
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 990,
                                            "end": 996
                                          },
                                          "start": 988,
                                          "end": 996
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 987,
                                        "end": 997
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
                                          "start": 998,
                                          "end": 999
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1001,
                                            "end": 1007
                                          },
                                          "start": 999,
                                          "end": 1007
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 998,
                                        "end": 1007
                                      }
                                    ],
                                    "start": 985,
                                    "end": 1009
                                  },
                                  "start": 983,
                                  "end": 1009
                                },
                                "start": 982,
                                "end": 1009
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1014,
                                "end": 1020
                              },
                              "start": 1011,
                              "end": 1020
                            },
                            "start": 981,
                            "end": 1020
                          },
                          "start": 979,
                          "end": 1020
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 976,
                        "end": 1021
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1034,
                          "end": 1037
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
                                                    "start": 1193,
                                                    "end": 1199
                                                  },
                                                  "start": 1191,
                                                  "end": 1199
                                                },
                                                "start": 1190,
                                                "end": 1199
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1202,
                                                "end": 1208
                                              },
                                              "start": 1200,
                                              "end": 1208
                                            },
                                            "start": 1189,
                                            "end": 1209
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
                                                    "start": 1235,
                                                    "end": 1241
                                                  },
                                                  "start": 1233,
                                                  "end": 1241
                                                },
                                                "start": 1231,
                                                "end": 1241
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1244,
                                                "end": 1250
                                              },
                                              "start": 1242,
                                              "end": 1250
                                            },
                                            "start": 1230,
                                            "end": 1251
                                          }
                                        ],
                                        "start": 1167,
                                        "end": 1269
                                      },
                                      "start": 1165,
                                      "end": 1269
                                    },
                                    "start": 1164,
                                    "end": 1269
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1272,
                                      "end": 1278
                                    },
                                    "start": 1272,
                                    "end": 1280
                                  },
                                  "start": 1270,
                                  "end": 1280
                                },
                                "start": 1163,
                                "end": 1281
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
                                                    "start": 1328,
                                                    "end": 1335
                                                  },
                                                  "start": 1326,
                                                  "end": 1335
                                                },
                                                "start": 1325,
                                                "end": 1335
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1338,
                                                "end": 1345
                                              },
                                              "start": 1336,
                                              "end": 1345
                                            },
                                            "start": 1324,
                                            "end": 1346
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
                                                    "start": 1372,
                                                    "end": 1379
                                                  },
                                                  "start": 1370,
                                                  "end": 1379
                                                },
                                                "start": 1368,
                                                "end": 1379
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1382,
                                                "end": 1389
                                              },
                                              "start": 1380,
                                              "end": 1389
                                            },
                                            "start": 1367,
                                            "end": 1390
                                          }
                                        ],
                                        "start": 1302,
                                        "end": 1408
                                      },
                                      "start": 1300,
                                      "end": 1408
                                    },
                                    "start": 1299,
                                    "end": 1408
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1411,
                                      "end": 1418
                                    },
                                    "start": 1411,
                                    "end": 1420
                                  },
                                  "start": 1409,
                                  "end": 1420
                                },
                                "start": 1298,
                                "end": 1421
                              }
                            ],
                            "start": 1039,
                            "end": 1435
                          },
                          "start": 1037,
                          "end": 1435
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1034,
                        "end": 1436
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a17",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1452
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
                                                    "start": 1499,
                                                    "end": 1500
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1509,
                                                      "end": 1516
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1509,
                                                    "end": 1516
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1499,
                                                  "end": 1516
                                                }
                                              ],
                                              "start": 1498,
                                              "end": 1517
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
                                                      "start": 1521,
                                                      "end": 1522
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1521,
                                                    "end": 1522
                                                  },
                                                  "start": 1519,
                                                  "end": 1522
                                                },
                                                "start": 1518,
                                                "end": 1522
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
                                                  "start": 1525,
                                                  "end": 1526
                                                },
                                                "typeArguments": null,
                                                "start": 1525,
                                                "end": 1526
                                              },
                                              "start": 1523,
                                              "end": 1526
                                            },
                                            "start": 1498,
                                            "end": 1527
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
                                                    "start": 1549,
                                                    "end": 1550
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1559,
                                                      "end": 1563
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1559,
                                                    "end": 1563
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1549,
                                                  "end": 1563
                                                }
                                              ],
                                              "start": 1548,
                                              "end": 1564
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
                                                      "start": 1568,
                                                      "end": 1569
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1568,
                                                    "end": 1569
                                                  },
                                                  "start": 1566,
                                                  "end": 1569
                                                },
                                                "start": 1565,
                                                "end": 1569
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
                                                  "start": 1572,
                                                  "end": 1573
                                                },
                                                "typeArguments": null,
                                                "start": 1572,
                                                "end": 1573
                                              },
                                              "start": 1570,
                                              "end": 1573
                                            },
                                            "start": 1548,
                                            "end": 1574
                                          }
                                        ],
                                        "start": 1476,
                                        "end": 1592
                                      },
                                      "start": 1474,
                                      "end": 1592
                                    },
                                    "start": 1473,
                                    "end": 1592
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1595,
                                      "end": 1598
                                    },
                                    "start": 1595,
                                    "end": 1600
                                  },
                                  "start": 1593,
                                  "end": 1600
                                },
                                "start": 1472,
                                "end": 1601
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
                                                    "start": 1645,
                                                    "end": 1646
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1655,
                                                      "end": 1663
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1655,
                                                    "end": 1663
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1645,
                                                  "end": 1663
                                                }
                                              ],
                                              "start": 1644,
                                              "end": 1664
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
                                                      "start": 1668,
                                                      "end": 1669
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1668,
                                                    "end": 1669
                                                  },
                                                  "start": 1666,
                                                  "end": 1669
                                                },
                                                "start": 1665,
                                                "end": 1669
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
                                                  "start": 1672,
                                                  "end": 1673
                                                },
                                                "typeArguments": null,
                                                "start": 1672,
                                                "end": 1673
                                              },
                                              "start": 1670,
                                              "end": 1673
                                            },
                                            "start": 1644,
                                            "end": 1674
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
                                                    "start": 1696,
                                                    "end": 1697
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1706,
                                                      "end": 1710
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1706,
                                                    "end": 1710
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1696,
                                                  "end": 1710
                                                }
                                              ],
                                              "start": 1695,
                                              "end": 1711
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
                                                      "start": 1715,
                                                      "end": 1716
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1715,
                                                    "end": 1716
                                                  },
                                                  "start": 1713,
                                                  "end": 1716
                                                },
                                                "start": 1712,
                                                "end": 1716
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
                                                  "start": 1719,
                                                  "end": 1720
                                                },
                                                "typeArguments": null,
                                                "start": 1719,
                                                "end": 1720
                                              },
                                              "start": 1717,
                                              "end": 1720
                                            },
                                            "start": 1695,
                                            "end": 1721
                                          }
                                        ],
                                        "start": 1622,
                                        "end": 1739
                                      },
                                      "start": 1620,
                                      "end": 1739
                                    },
                                    "start": 1619,
                                    "end": 1739
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1742,
                                      "end": 1745
                                    },
                                    "start": 1742,
                                    "end": 1747
                                  },
                                  "start": 1740,
                                  "end": 1747
                                },
                                "start": 1618,
                                "end": 1748
                              }
                            ],
                            "start": 1454,
                            "end": 1762
                          },
                          "start": 1452,
                          "end": 1762
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1449,
                        "end": 1763
                      }
                    ],
                    "start": 448,
                    "end": 1773
                  },
                  "declare": false,
                  "start": 436,
                  "end": 1773
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1794
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "typeArguments": null,
                      "start": 1803,
                      "end": 1804
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
                          "start": 1819,
                          "end": 1821
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
                                    "start": 1824,
                                    "end": 1825
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1824,
                                  "end": 1825
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1827,
                                    "end": 1828
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1827,
                                  "end": 1828
                                }
                              ],
                              "start": 1823,
                              "end": 1829
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
                                      "start": 1833,
                                      "end": 1834
                                    },
                                    "typeArguments": null,
                                    "start": 1833,
                                    "end": 1834
                                  },
                                  "start": 1831,
                                  "end": 1834
                                },
                                "start": 1830,
                                "end": 1834
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
                                    "start": 1839,
                                    "end": 1840
                                  },
                                  "typeArguments": null,
                                  "start": 1839,
                                  "end": 1840
                                },
                                "start": 1839,
                                "end": 1842
                              },
                              "start": 1836,
                              "end": 1842
                            },
                            "start": 1823,
                            "end": 1842
                          },
                          "start": 1821,
                          "end": 1842
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1819,
                        "end": 1843
                      }
                    ],
                    "start": 1805,
                    "end": 1964
                  },
                  "declare": false,
                  "start": 1783,
                  "end": 1964
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1984,
                    "end": 1986
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
                          "start": 1987,
                          "end": 1988
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1987,
                        "end": 1988
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1990,
                          "end": 1991
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1990,
                        "end": 1991
                      }
                    ],
                    "start": 1986,
                    "end": 1992
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2001,
                        "end": 2002
                      },
                      "typeArguments": null,
                      "start": 2001,
                      "end": 2002
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
                          "start": 2017,
                          "end": 2019
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
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2025,
                                      "end": 2026
                                    },
                                    "typeArguments": null,
                                    "start": 2025,
                                    "end": 2026
                                  },
                                  "start": 2023,
                                  "end": 2026
                                },
                                "start": 2022,
                                "end": 2026
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
                                    "start": 2031,
                                    "end": 2032
                                  },
                                  "typeArguments": null,
                                  "start": 2031,
                                  "end": 2032
                                },
                                "start": 2031,
                                "end": 2034
                              },
                              "start": 2028,
                              "end": 2034
                            },
                            "start": 2021,
                            "end": 2034
                          },
                          "start": 2019,
                          "end": 2034
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2017,
                        "end": 2035
                      }
                    ],
                    "start": 2003,
                    "end": 2120
                  },
                  "declare": false,
                  "start": 1974,
                  "end": 2120
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2140,
                    "end": 2142
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2151,
                        "end": 2152
                      },
                      "typeArguments": null,
                      "start": 2151,
                      "end": 2152
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
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2236,
                          "end": 2238
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
                                    "start": 2241,
                                    "end": 2242
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2251,
                                      "end": 2255
                                    },
                                    "typeArguments": null,
                                    "start": 2251,
                                    "end": 2255
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2241,
                                  "end": 2255
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2257,
                                    "end": 2258
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2267,
                                      "end": 2274
                                    },
                                    "typeArguments": null,
                                    "start": 2267,
                                    "end": 2274
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2257,
                                  "end": 2274
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2276,
                                    "end": 2277
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2286,
                                      "end": 2294
                                    },
                                    "typeArguments": null,
                                    "start": 2286,
                                    "end": 2294
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2276,
                                  "end": 2294
                                }
                              ],
                              "start": 2240,
                              "end": 2295
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
                                              "start": 2305,
                                              "end": 2306
                                            },
                                            "typeArguments": null,
                                            "start": 2305,
                                            "end": 2306
                                          },
                                          "start": 2303,
                                          "end": 2306
                                        },
                                        "start": 2300,
                                        "end": 2306
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
                                          "start": 2311,
                                          "end": 2312
                                        },
                                        "typeArguments": null,
                                        "start": 2311,
                                        "end": 2312
                                      },
                                      "start": 2308,
                                      "end": 2312
                                    },
                                    "start": 2299,
                                    "end": 2312
                                  },
                                  "start": 2297,
                                  "end": 2312
                                },
                                "start": 2296,
                                "end": 2312
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
                                          "start": 2321,
                                          "end": 2322
                                        },
                                        "typeArguments": null,
                                        "start": 2321,
                                        "end": 2322
                                      },
                                      "start": 2319,
                                      "end": 2322
                                    },
                                    "start": 2318,
                                    "end": 2322
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
                                      "start": 2327,
                                      "end": 2328
                                    },
                                    "typeArguments": null,
                                    "start": 2327,
                                    "end": 2328
                                  },
                                  "start": 2324,
                                  "end": 2328
                                },
                                "start": 2317,
                                "end": 2328
                              },
                              "start": 2314,
                              "end": 2328
                            },
                            "start": 2240,
                            "end": 2328
                          },
                          "start": 2238,
                          "end": 2328
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2236,
                        "end": 2329
                      }
                    ],
                    "start": 2153,
                    "end": 2339
                  },
                  "declare": false,
                  "start": 2130,
                  "end": 2339
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2361
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2370,
                        "end": 2371
                      },
                      "typeArguments": null,
                      "start": 2370,
                      "end": 2371
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
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2386,
                          "end": 2388
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
                                    "start": 2391,
                                    "end": 2392
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2401,
                                      "end": 2405
                                    },
                                    "typeArguments": null,
                                    "start": 2401,
                                    "end": 2405
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2391,
                                  "end": 2405
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2407,
                                    "end": 2408
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2417,
                                      "end": 2424
                                    },
                                    "typeArguments": null,
                                    "start": 2417,
                                    "end": 2424
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2407,
                                  "end": 2424
                                }
                              ],
                              "start": 2390,
                              "end": 2425
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
                                              "start": 2435,
                                              "end": 2436
                                            },
                                            "typeArguments": null,
                                            "start": 2435,
                                            "end": 2436
                                          },
                                          "start": 2433,
                                          "end": 2436
                                        },
                                        "start": 2430,
                                        "end": 2436
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
                                          "start": 2441,
                                          "end": 2442
                                        },
                                        "typeArguments": null,
                                        "start": 2441,
                                        "end": 2442
                                      },
                                      "start": 2438,
                                      "end": 2442
                                    },
                                    "start": 2429,
                                    "end": 2442
                                  },
                                  "start": 2427,
                                  "end": 2442
                                },
                                "start": 2426,
                                "end": 2442
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
                                                  "start": 2456,
                                                  "end": 2459
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2461,
                                                    "end": 2467
                                                  },
                                                  "start": 2459,
                                                  "end": 2467
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2456,
                                                "end": 2468
                                              }
                                            ],
                                            "start": 2454,
                                            "end": 2470
                                          },
                                          "start": 2452,
                                          "end": 2470
                                        },
                                        "start": 2448,
                                        "end": 2470
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
                                          "start": 2475,
                                          "end": 2476
                                        },
                                        "typeArguments": null,
                                        "start": 2475,
                                        "end": 2476
                                      },
                                      "start": 2472,
                                      "end": 2476
                                    },
                                    "start": 2447,
                                    "end": 2476
                                  },
                                  "start": 2445,
                                  "end": 2476
                                },
                                "start": 2444,
                                "end": 2476
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
                                          "start": 2485,
                                          "end": 2486
                                        },
                                        "typeArguments": null,
                                        "start": 2485,
                                        "end": 2486
                                      },
                                      "start": 2483,
                                      "end": 2486
                                    },
                                    "start": 2482,
                                    "end": 2486
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
                                      "start": 2491,
                                      "end": 2492
                                    },
                                    "typeArguments": null,
                                    "start": 2491,
                                    "end": 2492
                                  },
                                  "start": 2488,
                                  "end": 2492
                                },
                                "start": 2481,
                                "end": 2492
                              },
                              "start": 2478,
                              "end": 2492
                            },
                            "start": 2390,
                            "end": 2492
                          },
                          "start": 2388,
                          "end": 2492
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2386,
                        "end": 2493
                      }
                    ],
                    "start": 2372,
                    "end": 2527
                  },
                  "declare": false,
                  "start": 2349,
                  "end": 2527
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2547,
                    "end": 2550
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2559,
                        "end": 2560
                      },
                      "typeArguments": null,
                      "start": 2559,
                      "end": 2560
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
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2575,
                          "end": 2578
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
                                    "start": 2581,
                                    "end": 2582
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2591,
                                      "end": 2598
                                    },
                                    "typeArguments": null,
                                    "start": 2591,
                                    "end": 2598
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2581,
                                  "end": 2598
                                }
                              ],
                              "start": 2580,
                              "end": 2599
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
                                  "start": 2603,
                                  "end": 2604
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
                                        "start": 2606,
                                        "end": 2607
                                      },
                                      "typeArguments": null,
                                      "start": 2606,
                                      "end": 2607
                                    },
                                    "start": 2606,
                                    "end": 2609
                                  },
                                  "start": 2604,
                                  "end": 2609
                                },
                                "value": null,
                                "start": 2600,
                                "end": 2609
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
                                  "start": 2614,
                                  "end": 2615
                                },
                                "typeArguments": null,
                                "start": 2614,
                                "end": 2615
                              },
                              "start": 2611,
                              "end": 2615
                            },
                            "start": 2580,
                            "end": 2615
                          },
                          "start": 2578,
                          "end": 2615
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2575,
                        "end": 2616
                      }
                    ],
                    "start": 2561,
                    "end": 2709
                  },
                  "declare": false,
                  "start": 2537,
                  "end": 2709
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2732
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2741,
                        "end": 2742
                      },
                      "typeArguments": null,
                      "start": 2741,
                      "end": 2742
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
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2757,
                          "end": 2760
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
                                    "start": 2763,
                                    "end": 2764
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2773,
                                      "end": 2780
                                    },
                                    "typeArguments": null,
                                    "start": 2773,
                                    "end": 2780
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2763,
                                  "end": 2780
                                }
                              ],
                              "start": 2762,
                              "end": 2781
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
                                      "start": 2785,
                                      "end": 2786
                                    },
                                    "typeArguments": null,
                                    "start": 2785,
                                    "end": 2786
                                  },
                                  "start": 2783,
                                  "end": 2786
                                },
                                "start": 2782,
                                "end": 2786
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
                                      "start": 2791,
                                      "end": 2792
                                    },
                                    "typeArguments": null,
                                    "start": 2791,
                                    "end": 2792
                                  },
                                  "start": 2789,
                                  "end": 2792
                                },
                                "start": 2788,
                                "end": 2792
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
                                  "start": 2797,
                                  "end": 2798
                                },
                                "typeArguments": null,
                                "start": 2797,
                                "end": 2798
                              },
                              "start": 2794,
                              "end": 2798
                            },
                            "start": 2762,
                            "end": 2798
                          },
                          "start": 2760,
                          "end": 2798
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2757,
                        "end": 2799
                      }
                    ],
                    "start": 2743,
                    "end": 2917
                  },
                  "declare": false,
                  "start": 2719,
                  "end": 2917
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2937,
                    "end": 2940
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2949,
                        "end": 2950
                      },
                      "typeArguments": null,
                      "start": 2949,
                      "end": 2950
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
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2965,
                          "end": 2968
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
                                    "start": 2971,
                                    "end": 2972
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2981,
                                      "end": 2986
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
                                            "start": 2987,
                                            "end": 2995
                                          },
                                          "typeArguments": null,
                                          "start": 2987,
                                          "end": 2995
                                        }
                                      ],
                                      "start": 2986,
                                      "end": 2996
                                    },
                                    "start": 2981,
                                    "end": 2996
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2971,
                                  "end": 2996
                                }
                              ],
                              "start": 2970,
                              "end": 2997
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
                                      "start": 3001,
                                      "end": 3006
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
                                            "start": 3007,
                                            "end": 3011
                                          },
                                          "typeArguments": null,
                                          "start": 3007,
                                          "end": 3011
                                        }
                                      ],
                                      "start": 3006,
                                      "end": 3012
                                    },
                                    "start": 3001,
                                    "end": 3012
                                  },
                                  "start": 2999,
                                  "end": 3012
                                },
                                "start": 2998,
                                "end": 3012
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
                                      "start": 3017,
                                      "end": 3022
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
                                            "start": 3023,
                                            "end": 3027
                                          },
                                          "typeArguments": null,
                                          "start": 3023,
                                          "end": 3027
                                        }
                                      ],
                                      "start": 3022,
                                      "end": 3028
                                    },
                                    "start": 3017,
                                    "end": 3028
                                  },
                                  "start": 3015,
                                  "end": 3028
                                },
                                "start": 3014,
                                "end": 3028
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
                                  "start": 3033,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3033,
                                "end": 3034
                              },
                              "start": 3030,
                              "end": 3034
                            },
                            "start": 2970,
                            "end": 3034
                          },
                          "start": 2968,
                          "end": 3034
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2965,
                        "end": 3035
                      }
                    ],
                    "start": 2951,
                    "end": 3104
                  },
                  "declare": false,
                  "start": 2927,
                  "end": 3104
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3126
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3135,
                        "end": 3136
                      },
                      "typeArguments": null,
                      "start": 3135,
                      "end": 3136
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
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3151,
                          "end": 3154
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
                                    "start": 3157,
                                    "end": 3158
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3157,
                                  "end": 3158
                                }
                              ],
                              "start": 3156,
                              "end": 3159
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
                                          "start": 3165,
                                          "end": 3166
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
                                              "start": 3168,
                                              "end": 3169
                                            },
                                            "typeArguments": null,
                                            "start": 3168,
                                            "end": 3169
                                          },
                                          "start": 3166,
                                          "end": 3169
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3165,
                                        "end": 3170
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
                                          "start": 3171,
                                          "end": 3172
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
                                              "start": 3174,
                                              "end": 3175
                                            },
                                            "typeArguments": null,
                                            "start": 3174,
                                            "end": 3175
                                          },
                                          "start": 3172,
                                          "end": 3175
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3171,
                                        "end": 3175
                                      }
                                    ],
                                    "start": 3163,
                                    "end": 3177
                                  },
                                  "start": 3161,
                                  "end": 3177
                                },
                                "start": 3160,
                                "end": 3177
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
                                  "start": 3182,
                                  "end": 3183
                                },
                                "typeArguments": null,
                                "start": 3182,
                                "end": 3183
                              },
                              "start": 3179,
                              "end": 3183
                            },
                            "start": 3156,
                            "end": 3183
                          },
                          "start": 3154,
                          "end": 3183
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3151,
                        "end": 3184
                      }
                    ],
                    "start": 3137,
                    "end": 3250
                  },
                  "declare": false,
                  "start": 3114,
                  "end": 3250
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3270,
                    "end": 3272
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3281,
                        "end": 3282
                      },
                      "typeArguments": null,
                      "start": 3281,
                      "end": 3282
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
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3297,
                          "end": 3300
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
                                    "start": 3303,
                                    "end": 3304
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3313,
                                      "end": 3317
                                    },
                                    "typeArguments": null,
                                    "start": 3313,
                                    "end": 3317
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3303,
                                  "end": 3317
                                }
                              ],
                              "start": 3302,
                              "end": 3318
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
                                          "start": 3324,
                                          "end": 3325
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
                                              "start": 3327,
                                              "end": 3328
                                            },
                                            "typeArguments": null,
                                            "start": 3327,
                                            "end": 3328
                                          },
                                          "start": 3325,
                                          "end": 3328
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3324,
                                        "end": 3329
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
                                          "start": 3330,
                                          "end": 3331
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
                                              "start": 3333,
                                              "end": 3334
                                            },
                                            "typeArguments": null,
                                            "start": 3333,
                                            "end": 3334
                                          },
                                          "start": 3331,
                                          "end": 3334
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3330,
                                        "end": 3334
                                      }
                                    ],
                                    "start": 3322,
                                    "end": 3336
                                  },
                                  "start": 3320,
                                  "end": 3336
                                },
                                "start": 3319,
                                "end": 3336
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3341,
                                "end": 3347
                              },
                              "start": 3338,
                              "end": 3347
                            },
                            "start": 3302,
                            "end": 3347
                          },
                          "start": 3300,
                          "end": 3347
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3297,
                        "end": 3348
                      }
                    ],
                    "start": 3283,
                    "end": 3434
                  },
                  "declare": false,
                  "start": 3260,
                  "end": 3434
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3454,
                    "end": 3456
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3465,
                        "end": 3466
                      },
                      "typeArguments": null,
                      "start": 3465,
                      "end": 3466
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
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3640,
                          "end": 3643
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
                                    "start": 3646,
                                    "end": 3647
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3646,
                                  "end": 3647
                                }
                              ],
                              "start": 3645,
                              "end": 3648
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
                                              "start": 3656,
                                              "end": 3657
                                            },
                                            "typeArguments": null,
                                            "start": 3656,
                                            "end": 3657
                                          },
                                          "start": 3654,
                                          "end": 3657
                                        },
                                        "start": 3653,
                                        "end": 3657
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
                                          "start": 3662,
                                          "end": 3663
                                        },
                                        "typeArguments": null,
                                        "start": 3662,
                                        "end": 3663
                                      },
                                      "start": 3659,
                                      "end": 3663
                                    },
                                    "start": 3652,
                                    "end": 3663
                                  },
                                  "start": 3650,
                                  "end": 3663
                                },
                                "start": 3649,
                                "end": 3663
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
                                    "start": 3668,
                                    "end": 3669
                                  },
                                  "typeArguments": null,
                                  "start": 3668,
                                  "end": 3669
                                },
                                "start": 3668,
                                "end": 3671
                              },
                              "start": 3665,
                              "end": 3671
                            },
                            "start": 3645,
                            "end": 3671
                          },
                          "start": 3643,
                          "end": 3671
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3640,
                        "end": 3672
                      }
                    ],
                    "start": 3467,
                    "end": 3682
                  },
                  "declare": false,
                  "start": 3444,
                  "end": 3682
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3702,
                    "end": 3704
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3713,
                        "end": 3714
                      },
                      "typeArguments": null,
                      "start": 3713,
                      "end": 3714
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
                          "name": "a17",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3729,
                          "end": 3732
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
                                    "start": 3735,
                                    "end": 3736
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3735,
                                  "end": 3736
                                }
                              ],
                              "start": 3734,
                              "end": 3737
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
                                              "start": 3745,
                                              "end": 3746
                                            },
                                            "typeArguments": null,
                                            "start": 3745,
                                            "end": 3746
                                          },
                                          "start": 3743,
                                          "end": 3746
                                        },
                                        "start": 3742,
                                        "end": 3746
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
                                          "start": 3751,
                                          "end": 3752
                                        },
                                        "typeArguments": null,
                                        "start": 3751,
                                        "end": 3752
                                      },
                                      "start": 3748,
                                      "end": 3752
                                    },
                                    "start": 3741,
                                    "end": 3752
                                  },
                                  "start": 3739,
                                  "end": 3752
                                },
                                "start": 3738,
                                "end": 3752
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 3757,
                                  "end": 3760
                                },
                                "start": 3757,
                                "end": 3762
                              },
                              "start": 3754,
                              "end": 3762
                            },
                            "start": 3734,
                            "end": 3762
                          },
                          "start": 3732,
                          "end": 3762
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3729,
                        "end": 3763
                      }
                    ],
                    "start": 3715,
                    "end": 3889
                  },
                  "declare": false,
                  "start": 3692,
                  "end": 3889
                }
              ],
              "start": 372,
              "end": 3895
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 327,
            "end": 3895
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3911,
              "end": 3942
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4011,
                    "end": 4012
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4027,
                          "end": 4029
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
                                    "start": 4032,
                                    "end": 4033
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4032,
                                  "end": 4033
                                }
                              ],
                              "start": 4031,
                              "end": 4034
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
                                      "start": 4038,
                                      "end": 4039
                                    },
                                    "typeArguments": null,
                                    "start": 4038,
                                    "end": 4039
                                  },
                                  "start": 4036,
                                  "end": 4039
                                },
                                "start": 4035,
                                "end": 4039
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
                                    "start": 4044,
                                    "end": 4045
                                  },
                                  "typeArguments": null,
                                  "start": 4044,
                                  "end": 4045
                                },
                                "start": 4044,
                                "end": 4047
                              },
                              "start": 4041,
                              "end": 4047
                            },
                            "start": 4031,
                            "end": 4047
                          },
                          "start": 4029,
                          "end": 4047
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4027,
                        "end": 4048
                      }
                    ],
                    "start": 4013,
                    "end": 4058
                  },
                  "declare": false,
                  "start": 4001,
                  "end": 4058
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4078,
                    "end": 4080
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4089,
                        "end": 4090
                      },
                      "typeArguments": null,
                      "start": 4089,
                      "end": 4090
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
                          "start": 4105,
                          "end": 4107
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
                                    "start": 4110,
                                    "end": 4111
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4110,
                                  "end": 4111
                                }
                              ],
                              "start": 4109,
                              "end": 4112
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
                                      "start": 4116,
                                      "end": 4117
                                    },
                                    "typeArguments": null,
                                    "start": 4116,
                                    "end": 4117
                                  },
                                  "start": 4114,
                                  "end": 4117
                                },
                                "start": 4113,
                                "end": 4117
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4122,
                                  "end": 4128
                                },
                                "start": 4122,
                                "end": 4130
                              },
                              "start": 4119,
                              "end": 4130
                            },
                            "start": 4109,
                            "end": 4130
                          },
                          "start": 4107,
                          "end": 4130
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4105,
                        "end": 4131
                      }
                    ],
                    "start": 4091,
                    "end": 4150
                  },
                  "declare": false,
                  "start": 4068,
                  "end": 4150
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4218,
                    "end": 4219
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4234,
                          "end": 4236
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
                                    "start": 4239,
                                    "end": 4240
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4239,
                                  "end": 4240
                                }
                              ],
                              "start": 4238,
                              "end": 4241
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
                                      "start": 4245,
                                      "end": 4246
                                    },
                                    "typeArguments": null,
                                    "start": 4245,
                                    "end": 4246
                                  },
                                  "start": 4243,
                                  "end": 4246
                                },
                                "start": 4242,
                                "end": 4246
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4251,
                                  "end": 4257
                                },
                                "start": 4251,
                                "end": 4259
                              },
                              "start": 4248,
                              "end": 4259
                            },
                            "start": 4238,
                            "end": 4259
                          },
                          "start": 4236,
                          "end": 4259
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4234,
                        "end": 4260
                      }
                    ],
                    "start": 4220,
                    "end": 4270
                  },
                  "declare": false,
                  "start": 4208,
                  "end": 4270
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4290,
                    "end": 4292
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4301,
                        "end": 4302
                      },
                      "typeArguments": null,
                      "start": 4301,
                      "end": 4302
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
                          "start": 4317,
                          "end": 4319
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
                                    "start": 4322,
                                    "end": 4323
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4322,
                                  "end": 4323
                                }
                              ],
                              "start": 4321,
                              "end": 4324
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
                                      "start": 4328,
                                      "end": 4329
                                    },
                                    "typeArguments": null,
                                    "start": 4328,
                                    "end": 4329
                                  },
                                  "start": 4326,
                                  "end": 4329
                                },
                                "start": 4325,
                                "end": 4329
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
                                    "start": 4334,
                                    "end": 4335
                                  },
                                  "typeArguments": null,
                                  "start": 4334,
                                  "end": 4335
                                },
                                "start": 4334,
                                "end": 4337
                              },
                              "start": 4331,
                              "end": 4337
                            },
                            "start": 4321,
                            "end": 4337
                          },
                          "start": 4319,
                          "end": 4337
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4317,
                        "end": 4338
                      }
                    ],
                    "start": 4303,
                    "end": 4357
                  },
                  "declare": false,
                  "start": 4280,
                  "end": 4357
                }
              ],
              "start": 3943,
              "end": 4363
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3901,
            "end": 4363
          }
        ],
        "start": 134,
        "end": 4365
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4365
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 178,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 226,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 235,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 278,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 291,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 327,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "WithNonGenericSignaturesInBaseType",
    "start": 337,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 436,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "arg",
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
    "value": "Base",
    "start": 517,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 526,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 535,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 548,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 551,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 573,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
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
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 582,
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
    "value": "Base",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 593,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 596,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 621,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 633,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "value": "Base",
    "start": 640,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 646,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 676,
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
    "type": "Identifier",
    "value": "Base",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 690,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 727,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 742,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 760,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 800,
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
    "value": "Base",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "Array",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 822,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 833,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 836,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 939,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 990,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1008,
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
    "value": "=>",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ")",
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
    "value": "number",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1328,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1372,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1382,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1411,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1449,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1509,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1559,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1595,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
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
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1647,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1655,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1698,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1706,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1715,
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
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1783,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1795,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1819,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1836,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1974,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1984,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1993,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2017,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2028,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2130,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 2140,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2143,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2236,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2243,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2251,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2259,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2267,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2278,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2286,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2300,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 2308,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2314,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2324,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2349,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 2359,
    "end": 2361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2362,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2386,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2393,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2401,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2409,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2417,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2430,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2438,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2448,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2456,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2461,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2472,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2478,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2488,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2537,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "I4B",
    "start": 2547,
    "end": 2550
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2551,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2575,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2583,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2591,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2600,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2611,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2719,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "I4C",
    "start": 2729,
    "end": 2732
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2733,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2765,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2773,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2794,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2927,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "I4E",
    "start": 2937,
    "end": 2940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2941,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2965,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2973,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2981,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2987,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3001,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3007,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3017,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3023,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3030,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3114,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 3124,
    "end": 3126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3127,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3151,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3165,
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
    "value": "T",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3179,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3260,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 3270,
    "end": 3272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3273,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3297,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3305,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3313,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3338,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3341,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3444,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 3454,
    "end": 3456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3457,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3640,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3659,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3665,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3692,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 3702,
    "end": 3704
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3705,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3729,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3748,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3754,
    "end": 3756
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3757,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3901,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 3911,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4001,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4027,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4041,
    "end": 4043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4068,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 4078,
    "end": 4080
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4081,
    "end": 4088
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4105,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4119,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4122,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4208,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4234,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4240,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4248,
    "end": 4250
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4251,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4280,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 4290,
    "end": 4292
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4293,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4317,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4331,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4364,
    "end": 4365
  }
]
```
