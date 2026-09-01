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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 474,
                                    "end": 480
                                  },
                                  "start": 472,
                                  "end": 480
                                },
                                "start": 471,
                                "end": 480
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 485,
                                  "end": 491
                                },
                                "start": 485,
                                "end": 493
                              },
                              "start": 482,
                              "end": 493
                            },
                            "start": 466,
                            "end": 493
                          },
                          "start": 464,
                          "end": 493
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 494
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
                          "start": 507,
                          "end": 509
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                              "start": 525,
                                              "end": 529
                                            },
                                            "typeArguments": null,
                                            "start": 525,
                                            "end": 529
                                          },
                                          "start": 523,
                                          "end": 529
                                        },
                                        "start": 520,
                                        "end": 529
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
                                          "start": 534,
                                          "end": 541
                                        },
                                        "typeArguments": null,
                                        "start": 534,
                                        "end": 541
                                      },
                                      "start": 531,
                                      "end": 541
                                    },
                                    "start": 519,
                                    "end": 541
                                  },
                                  "start": 517,
                                  "end": 541
                                },
                                "start": 516,
                                "end": 541
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
                                          "start": 550,
                                          "end": 554
                                        },
                                        "typeArguments": null,
                                        "start": 550,
                                        "end": 554
                                      },
                                      "start": 548,
                                      "end": 554
                                    },
                                    "start": 547,
                                    "end": 554
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
                                      "start": 559,
                                      "end": 567
                                    },
                                    "typeArguments": null,
                                    "start": 559,
                                    "end": 567
                                  },
                                  "start": 556,
                                  "end": 567
                                },
                                "start": 546,
                                "end": 567
                              },
                              "start": 543,
                              "end": 567
                            },
                            "start": 511,
                            "end": 567
                          },
                          "start": 509,
                          "end": 567
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 507,
                        "end": 568
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
                          "start": 581,
                          "end": 583
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                              "start": 599,
                                              "end": 603
                                            },
                                            "typeArguments": null,
                                            "start": 599,
                                            "end": 603
                                          },
                                          "start": 597,
                                          "end": 603
                                        },
                                        "start": 594,
                                        "end": 603
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
                                          "start": 608,
                                          "end": 615
                                        },
                                        "typeArguments": null,
                                        "start": 608,
                                        "end": 615
                                      },
                                      "start": 605,
                                      "end": 615
                                    },
                                    "start": 593,
                                    "end": 615
                                  },
                                  "start": 591,
                                  "end": 615
                                },
                                "start": 590,
                                "end": 615
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
                                              "start": 627,
                                              "end": 631
                                            },
                                            "typeArguments": null,
                                            "start": 627,
                                            "end": 631
                                          },
                                          "start": 625,
                                          "end": 631
                                        },
                                        "start": 621,
                                        "end": 631
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
                                          "start": 636,
                                          "end": 643
                                        },
                                        "typeArguments": null,
                                        "start": 636,
                                        "end": 643
                                      },
                                      "start": 633,
                                      "end": 643
                                    },
                                    "start": 620,
                                    "end": 643
                                  },
                                  "start": 618,
                                  "end": 643
                                },
                                "start": 617,
                                "end": 643
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
                                          "start": 652,
                                          "end": 656
                                        },
                                        "typeArguments": null,
                                        "start": 652,
                                        "end": 656
                                      },
                                      "start": 650,
                                      "end": 656
                                    },
                                    "start": 649,
                                    "end": 656
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
                                      "start": 661,
                                      "end": 668
                                    },
                                    "typeArguments": null,
                                    "start": 661,
                                    "end": 668
                                  },
                                  "start": 658,
                                  "end": 668
                                },
                                "start": 648,
                                "end": 668
                              },
                              "start": 645,
                              "end": 668
                            },
                            "start": 585,
                            "end": 668
                          },
                          "start": 583,
                          "end": 668
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 581,
                        "end": 669
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
                          "start": 682,
                          "end": 685
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                  "start": 695,
                                  "end": 696
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
                                        "start": 698,
                                        "end": 702
                                      },
                                      "typeArguments": null,
                                      "start": 698,
                                      "end": 702
                                    },
                                    "start": 698,
                                    "end": 704
                                  },
                                  "start": 696,
                                  "end": 704
                                },
                                "value": null,
                                "start": 692,
                                "end": 704
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
                                  "start": 709,
                                  "end": 713
                                },
                                "typeArguments": null,
                                "start": 709,
                                "end": 713
                              },
                              "start": 706,
                              "end": 713
                            },
                            "start": 687,
                            "end": 713
                          },
                          "start": 685,
                          "end": 713
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 682,
                        "end": 714
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
                          "start": 727,
                          "end": 730
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                        "end": 753
                                      }
                                    ],
                                    "start": 740,
                                    "end": 755
                                  },
                                  "start": 738,
                                  "end": 755
                                },
                                "start": 737,
                                "end": 755
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
                                          "start": 762,
                                          "end": 765
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 767,
                                            "end": 773
                                          },
                                          "start": 765,
                                          "end": 773
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 762,
                                        "end": 774
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
                                          "start": 775,
                                          "end": 778
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 780,
                                            "end": 786
                                          },
                                          "start": 778,
                                          "end": 786
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 775,
                                        "end": 786
                                      }
                                    ],
                                    "start": 760,
                                    "end": 788
                                  },
                                  "start": 758,
                                  "end": 788
                                },
                                "start": 757,
                                "end": 788
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
                                  "start": 793,
                                  "end": 797
                                },
                                "typeArguments": null,
                                "start": 793,
                                "end": 797
                              },
                              "start": 790,
                              "end": 797
                            },
                            "start": 732,
                            "end": 797
                          },
                          "start": 730,
                          "end": 797
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 727,
                        "end": 798
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
                          "start": 811,
                          "end": 814
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 824,
                                      "end": 829
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
                                            "start": 830,
                                            "end": 834
                                          },
                                          "typeArguments": null,
                                          "start": 830,
                                          "end": 834
                                        }
                                      ],
                                      "start": 829,
                                      "end": 835
                                    },
                                    "start": 824,
                                    "end": 835
                                  },
                                  "start": 822,
                                  "end": 835
                                },
                                "start": 821,
                                "end": 835
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
                                      "start": 840,
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
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 846,
                                            "end": 854
                                          },
                                          "typeArguments": null,
                                          "start": 846,
                                          "end": 854
                                        }
                                      ],
                                      "start": 845,
                                      "end": 855
                                    },
                                    "start": 840,
                                    "end": 855
                                  },
                                  "start": 838,
                                  "end": 855
                                },
                                "start": 837,
                                "end": 855
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
                                  "start": 860,
                                  "end": 865
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
                                        "start": 866,
                                        "end": 873
                                      },
                                      "typeArguments": null,
                                      "start": 866,
                                      "end": 873
                                    }
                                  ],
                                  "start": 865,
                                  "end": 874
                                },
                                "start": 860,
                                "end": 874
                              },
                              "start": 857,
                              "end": 874
                            },
                            "start": 816,
                            "end": 874
                          },
                          "start": 814,
                          "end": 874
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 811,
                        "end": 875
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
                          "start": 888,
                          "end": 891
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
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
                                        "type": "TSNumberKeyword",
                                        "start": 919,
                                        "end": 925
                                      },
                                      "start": 917,
                                      "end": 925
                                    },
                                    "start": 916,
                                    "end": 925
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 928,
                                      "end": 934
                                    },
                                    "start": 928,
                                    "end": 936
                                  },
                                  "start": 926,
                                  "end": 936
                                },
                                "start": 911,
                                "end": 937
                              },
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
                                        "type": "TSStringKeyword",
                                        "start": 962,
                                        "end": 968
                                      },
                                      "start": 960,
                                      "end": 968
                                    },
                                    "start": 959,
                                    "end": 968
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 971,
                                      "end": 977
                                    },
                                    "start": 971,
                                    "end": 979
                                  },
                                  "start": 969,
                                  "end": 979
                                },
                                "start": 954,
                                "end": 980
                              }
                            ],
                            "start": 893,
                            "end": 994
                          },
                          "start": 891,
                          "end": 994
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 888,
                        "end": 995
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
                          "start": 1008,
                          "end": 1011
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                          "start": 1023,
                                          "end": 1024
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1026,
                                            "end": 1032
                                          },
                                          "start": 1024,
                                          "end": 1032
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1023,
                                        "end": 1033
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
                                          "start": 1034,
                                          "end": 1035
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1037,
                                            "end": 1043
                                          },
                                          "start": 1035,
                                          "end": 1043
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1034,
                                        "end": 1043
                                      }
                                    ],
                                    "start": 1021,
                                    "end": 1045
                                  },
                                  "start": 1019,
                                  "end": 1045
                                },
                                "start": 1018,
                                "end": 1045
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1050,
                                "end": 1056
                              },
                              "start": 1047,
                              "end": 1056
                            },
                            "start": 1013,
                            "end": 1056
                          },
                          "start": 1011,
                          "end": 1056
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1008,
                        "end": 1057
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
                          "start": 1070,
                          "end": 1073
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1237,
                                                    "end": 1243
                                                  },
                                                  "start": 1235,
                                                  "end": 1243
                                                },
                                                "start": 1234,
                                                "end": 1243
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1246,
                                                "end": 1252
                                              },
                                              "start": 1244,
                                              "end": 1252
                                            },
                                            "start": 1229,
                                            "end": 1253
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1283,
                                                    "end": 1289
                                                  },
                                                  "start": 1281,
                                                  "end": 1289
                                                },
                                                "start": 1279,
                                                "end": 1289
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1292,
                                                "end": 1298
                                              },
                                              "start": 1290,
                                              "end": 1298
                                            },
                                            "start": 1274,
                                            "end": 1299
                                          }
                                        ],
                                        "start": 1207,
                                        "end": 1317
                                      },
                                      "start": 1205,
                                      "end": 1317
                                    },
                                    "start": 1204,
                                    "end": 1317
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1320,
                                      "end": 1326
                                    },
                                    "start": 1320,
                                    "end": 1328
                                  },
                                  "start": 1318,
                                  "end": 1328
                                },
                                "start": 1199,
                                "end": 1329
                              },
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1384,
                                                    "end": 1391
                                                  },
                                                  "start": 1382,
                                                  "end": 1391
                                                },
                                                "start": 1381,
                                                "end": 1391
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1394,
                                                "end": 1401
                                              },
                                              "start": 1392,
                                              "end": 1401
                                            },
                                            "start": 1376,
                                            "end": 1402
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1432,
                                                    "end": 1439
                                                  },
                                                  "start": 1430,
                                                  "end": 1439
                                                },
                                                "start": 1428,
                                                "end": 1439
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1442,
                                                "end": 1449
                                              },
                                              "start": 1440,
                                              "end": 1449
                                            },
                                            "start": 1423,
                                            "end": 1450
                                          }
                                        ],
                                        "start": 1354,
                                        "end": 1468
                                      },
                                      "start": 1352,
                                      "end": 1468
                                    },
                                    "start": 1351,
                                    "end": 1468
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1471,
                                      "end": 1478
                                    },
                                    "start": 1471,
                                    "end": 1480
                                  },
                                  "start": 1469,
                                  "end": 1480
                                },
                                "start": 1346,
                                "end": 1481
                              }
                            ],
                            "start": 1075,
                            "end": 1495
                          },
                          "start": 1073,
                          "end": 1495
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1070,
                        "end": 1496
                      }
                    ],
                    "start": 448,
                    "end": 1506
                  },
                  "declare": false,
                  "start": 436,
                  "end": 1506
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1526,
                    "end": 1527
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
                        "start": 1536,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "start": 1536,
                      "end": 1537
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
                          "start": 1552,
                          "end": 1554
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1561,
                                    "end": 1562
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1561,
                                  "end": 1562
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1564,
                                    "end": 1565
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1564,
                                  "end": 1565
                                }
                              ],
                              "start": 1560,
                              "end": 1566
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
                                      "start": 1570,
                                      "end": 1571
                                    },
                                    "typeArguments": null,
                                    "start": 1570,
                                    "end": 1571
                                  },
                                  "start": 1568,
                                  "end": 1571
                                },
                                "start": 1567,
                                "end": 1571
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
                                    "start": 1576,
                                    "end": 1577
                                  },
                                  "typeArguments": null,
                                  "start": 1576,
                                  "end": 1577
                                },
                                "start": 1576,
                                "end": 1579
                              },
                              "start": 1573,
                              "end": 1579
                            },
                            "start": 1556,
                            "end": 1579
                          },
                          "start": 1554,
                          "end": 1579
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1552,
                        "end": 1580
                      }
                    ],
                    "start": 1538,
                    "end": 1701
                  },
                  "declare": false,
                  "start": 1516,
                  "end": 1701
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1721,
                    "end": 1723
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
                          "start": 1724,
                          "end": 1725
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1724,
                        "end": 1725
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1727,
                          "end": 1728
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1727,
                        "end": 1728
                      }
                    ],
                    "start": 1723,
                    "end": 1729
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
                        "start": 1738,
                        "end": 1739
                      },
                      "typeArguments": null,
                      "start": 1738,
                      "end": 1739
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
                          "start": 1754,
                          "end": 1756
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "start": 1766,
                                      "end": 1767
                                    },
                                    "typeArguments": null,
                                    "start": 1766,
                                    "end": 1767
                                  },
                                  "start": 1764,
                                  "end": 1767
                                },
                                "start": 1763,
                                "end": 1767
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
                                    "start": 1772,
                                    "end": 1773
                                  },
                                  "typeArguments": null,
                                  "start": 1772,
                                  "end": 1773
                                },
                                "start": 1772,
                                "end": 1775
                              },
                              "start": 1769,
                              "end": 1775
                            },
                            "start": 1758,
                            "end": 1775
                          },
                          "start": 1756,
                          "end": 1775
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1754,
                        "end": 1776
                      }
                    ],
                    "start": 1740,
                    "end": 1861
                  },
                  "declare": false,
                  "start": 1711,
                  "end": 1861
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1883
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
                        "start": 1892,
                        "end": 1893
                      },
                      "typeArguments": null,
                      "start": 1892,
                      "end": 1893
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
                          "start": 1977,
                          "end": 1979
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1986,
                                    "end": 1987
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1996,
                                      "end": 2000
                                    },
                                    "typeArguments": null,
                                    "start": 1996,
                                    "end": 2000
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1986,
                                  "end": 2000
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2002,
                                    "end": 2003
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2012,
                                      "end": 2019
                                    },
                                    "typeArguments": null,
                                    "start": 2012,
                                    "end": 2019
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2002,
                                  "end": 2019
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2021,
                                    "end": 2022
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2031,
                                      "end": 2039
                                    },
                                    "typeArguments": null,
                                    "start": 2031,
                                    "end": 2039
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2021,
                                  "end": 2039
                                }
                              ],
                              "start": 1985,
                              "end": 2040
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
                                              "start": 2050,
                                              "end": 2051
                                            },
                                            "typeArguments": null,
                                            "start": 2050,
                                            "end": 2051
                                          },
                                          "start": 2048,
                                          "end": 2051
                                        },
                                        "start": 2045,
                                        "end": 2051
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
                                          "start": 2056,
                                          "end": 2057
                                        },
                                        "typeArguments": null,
                                        "start": 2056,
                                        "end": 2057
                                      },
                                      "start": 2053,
                                      "end": 2057
                                    },
                                    "start": 2044,
                                    "end": 2057
                                  },
                                  "start": 2042,
                                  "end": 2057
                                },
                                "start": 2041,
                                "end": 2057
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
                                          "start": 2066,
                                          "end": 2067
                                        },
                                        "typeArguments": null,
                                        "start": 2066,
                                        "end": 2067
                                      },
                                      "start": 2064,
                                      "end": 2067
                                    },
                                    "start": 2063,
                                    "end": 2067
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
                                      "start": 2072,
                                      "end": 2073
                                    },
                                    "typeArguments": null,
                                    "start": 2072,
                                    "end": 2073
                                  },
                                  "start": 2069,
                                  "end": 2073
                                },
                                "start": 2062,
                                "end": 2073
                              },
                              "start": 2059,
                              "end": 2073
                            },
                            "start": 1981,
                            "end": 2073
                          },
                          "start": 1979,
                          "end": 2073
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1977,
                        "end": 2074
                      }
                    ],
                    "start": 1894,
                    "end": 2084
                  },
                  "declare": false,
                  "start": 1871,
                  "end": 2084
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2106
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
                        "start": 2115,
                        "end": 2116
                      },
                      "typeArguments": null,
                      "start": 2115,
                      "end": 2116
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
                          "start": 2131,
                          "end": 2133
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2140,
                                    "end": 2141
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2150,
                                      "end": 2154
                                    },
                                    "typeArguments": null,
                                    "start": 2150,
                                    "end": 2154
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2140,
                                  "end": 2154
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2156,
                                    "end": 2157
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2166,
                                      "end": 2173
                                    },
                                    "typeArguments": null,
                                    "start": 2166,
                                    "end": 2173
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2156,
                                  "end": 2173
                                }
                              ],
                              "start": 2139,
                              "end": 2174
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
                                              "start": 2184,
                                              "end": 2185
                                            },
                                            "typeArguments": null,
                                            "start": 2184,
                                            "end": 2185
                                          },
                                          "start": 2182,
                                          "end": 2185
                                        },
                                        "start": 2179,
                                        "end": 2185
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
                                          "start": 2190,
                                          "end": 2191
                                        },
                                        "typeArguments": null,
                                        "start": 2190,
                                        "end": 2191
                                      },
                                      "start": 2187,
                                      "end": 2191
                                    },
                                    "start": 2178,
                                    "end": 2191
                                  },
                                  "start": 2176,
                                  "end": 2191
                                },
                                "start": 2175,
                                "end": 2191
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
                                                  "start": 2205,
                                                  "end": 2208
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2210,
                                                    "end": 2216
                                                  },
                                                  "start": 2208,
                                                  "end": 2216
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2205,
                                                "end": 2217
                                              }
                                            ],
                                            "start": 2203,
                                            "end": 2219
                                          },
                                          "start": 2201,
                                          "end": 2219
                                        },
                                        "start": 2197,
                                        "end": 2219
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
                                          "start": 2224,
                                          "end": 2225
                                        },
                                        "typeArguments": null,
                                        "start": 2224,
                                        "end": 2225
                                      },
                                      "start": 2221,
                                      "end": 2225
                                    },
                                    "start": 2196,
                                    "end": 2225
                                  },
                                  "start": 2194,
                                  "end": 2225
                                },
                                "start": 2193,
                                "end": 2225
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
                                          "start": 2234,
                                          "end": 2235
                                        },
                                        "typeArguments": null,
                                        "start": 2234,
                                        "end": 2235
                                      },
                                      "start": 2232,
                                      "end": 2235
                                    },
                                    "start": 2231,
                                    "end": 2235
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
                                      "start": 2240,
                                      "end": 2241
                                    },
                                    "typeArguments": null,
                                    "start": 2240,
                                    "end": 2241
                                  },
                                  "start": 2237,
                                  "end": 2241
                                },
                                "start": 2230,
                                "end": 2241
                              },
                              "start": 2227,
                              "end": 2241
                            },
                            "start": 2135,
                            "end": 2241
                          },
                          "start": 2133,
                          "end": 2241
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2131,
                        "end": 2242
                      }
                    ],
                    "start": 2117,
                    "end": 2276
                  },
                  "declare": false,
                  "start": 2094,
                  "end": 2276
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2296,
                    "end": 2299
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
                        "start": 2308,
                        "end": 2309
                      },
                      "typeArguments": null,
                      "start": 2308,
                      "end": 2309
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
                          "start": 2324,
                          "end": 2327
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2334,
                                    "end": 2335
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2344,
                                      "end": 2351
                                    },
                                    "typeArguments": null,
                                    "start": 2344,
                                    "end": 2351
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2334,
                                  "end": 2351
                                }
                              ],
                              "start": 2333,
                              "end": 2352
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
                                  "start": 2356,
                                  "end": 2357
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
                                        "start": 2359,
                                        "end": 2360
                                      },
                                      "typeArguments": null,
                                      "start": 2359,
                                      "end": 2360
                                    },
                                    "start": 2359,
                                    "end": 2362
                                  },
                                  "start": 2357,
                                  "end": 2362
                                },
                                "value": null,
                                "start": 2353,
                                "end": 2362
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
                                  "start": 2367,
                                  "end": 2368
                                },
                                "typeArguments": null,
                                "start": 2367,
                                "end": 2368
                              },
                              "start": 2364,
                              "end": 2368
                            },
                            "start": 2329,
                            "end": 2368
                          },
                          "start": 2327,
                          "end": 2368
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2324,
                        "end": 2369
                      }
                    ],
                    "start": 2310,
                    "end": 2462
                  },
                  "declare": false,
                  "start": 2286,
                  "end": 2462
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2482,
                    "end": 2485
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
                        "start": 2494,
                        "end": 2495
                      },
                      "typeArguments": null,
                      "start": 2494,
                      "end": 2495
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
                          "start": 2510,
                          "end": 2513
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2520,
                                    "end": 2521
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2530,
                                      "end": 2537
                                    },
                                    "typeArguments": null,
                                    "start": 2530,
                                    "end": 2537
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2520,
                                  "end": 2537
                                }
                              ],
                              "start": 2519,
                              "end": 2538
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
                                      "start": 2542,
                                      "end": 2543
                                    },
                                    "typeArguments": null,
                                    "start": 2542,
                                    "end": 2543
                                  },
                                  "start": 2540,
                                  "end": 2543
                                },
                                "start": 2539,
                                "end": 2543
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
                                      "start": 2548,
                                      "end": 2549
                                    },
                                    "typeArguments": null,
                                    "start": 2548,
                                    "end": 2549
                                  },
                                  "start": 2546,
                                  "end": 2549
                                },
                                "start": 2545,
                                "end": 2549
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
                                  "start": 2554,
                                  "end": 2555
                                },
                                "typeArguments": null,
                                "start": 2554,
                                "end": 2555
                              },
                              "start": 2551,
                              "end": 2555
                            },
                            "start": 2515,
                            "end": 2555
                          },
                          "start": 2513,
                          "end": 2555
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2510,
                        "end": 2556
                      }
                    ],
                    "start": 2496,
                    "end": 2674
                  },
                  "declare": false,
                  "start": 2472,
                  "end": 2674
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2694,
                    "end": 2697
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
                        "start": 2706,
                        "end": 2707
                      },
                      "typeArguments": null,
                      "start": 2706,
                      "end": 2707
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
                          "start": 2722,
                          "end": 2725
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2732,
                                    "end": 2733
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2742,
                                      "end": 2747
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
                                            "start": 2748,
                                            "end": 2756
                                          },
                                          "typeArguments": null,
                                          "start": 2748,
                                          "end": 2756
                                        }
                                      ],
                                      "start": 2747,
                                      "end": 2757
                                    },
                                    "start": 2742,
                                    "end": 2757
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2732,
                                  "end": 2757
                                }
                              ],
                              "start": 2731,
                              "end": 2758
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
                                      "start": 2762,
                                      "end": 2767
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
                                            "start": 2768,
                                            "end": 2772
                                          },
                                          "typeArguments": null,
                                          "start": 2768,
                                          "end": 2772
                                        }
                                      ],
                                      "start": 2767,
                                      "end": 2773
                                    },
                                    "start": 2762,
                                    "end": 2773
                                  },
                                  "start": 2760,
                                  "end": 2773
                                },
                                "start": 2759,
                                "end": 2773
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
                                      "start": 2778,
                                      "end": 2783
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
                                            "start": 2784,
                                            "end": 2788
                                          },
                                          "typeArguments": null,
                                          "start": 2784,
                                          "end": 2788
                                        }
                                      ],
                                      "start": 2783,
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
                              "start": 2791,
                              "end": 2795
                            },
                            "start": 2727,
                            "end": 2795
                          },
                          "start": 2725,
                          "end": 2795
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2722,
                        "end": 2796
                      }
                    ],
                    "start": 2708,
                    "end": 2865
                  },
                  "declare": false,
                  "start": 2684,
                  "end": 2865
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2885,
                    "end": 2887
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
                        "start": 2896,
                        "end": 2897
                      },
                      "typeArguments": null,
                      "start": 2896,
                      "end": 2897
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
                          "start": 2912,
                          "end": 2915
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2922,
                                    "end": 2923
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2922,
                                  "end": 2923
                                }
                              ],
                              "start": 2921,
                              "end": 2924
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
                                          "start": 2930,
                                          "end": 2931
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
                                              "start": 2933,
                                              "end": 2934
                                            },
                                            "typeArguments": null,
                                            "start": 2933,
                                            "end": 2934
                                          },
                                          "start": 2931,
                                          "end": 2934
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2930,
                                        "end": 2935
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
                                          "start": 2936,
                                          "end": 2937
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
                                              "start": 2939,
                                              "end": 2940
                                            },
                                            "typeArguments": null,
                                            "start": 2939,
                                            "end": 2940
                                          },
                                          "start": 2937,
                                          "end": 2940
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2936,
                                        "end": 2940
                                      }
                                    ],
                                    "start": 2928,
                                    "end": 2942
                                  },
                                  "start": 2926,
                                  "end": 2942
                                },
                                "start": 2925,
                                "end": 2942
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
                                  "start": 2947,
                                  "end": 2948
                                },
                                "typeArguments": null,
                                "start": 2947,
                                "end": 2948
                              },
                              "start": 2944,
                              "end": 2948
                            },
                            "start": 2917,
                            "end": 2948
                          },
                          "start": 2915,
                          "end": 2948
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2912,
                        "end": 2949
                      }
                    ],
                    "start": 2898,
                    "end": 3015
                  },
                  "declare": false,
                  "start": 2875,
                  "end": 3015
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3037
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
                        "start": 3046,
                        "end": 3047
                      },
                      "typeArguments": null,
                      "start": 3046,
                      "end": 3047
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
                          "start": 3062,
                          "end": 3065
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3072,
                                    "end": 3073
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3082,
                                      "end": 3086
                                    },
                                    "typeArguments": null,
                                    "start": 3082,
                                    "end": 3086
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3072,
                                  "end": 3086
                                }
                              ],
                              "start": 3071,
                              "end": 3087
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
                                          "start": 3093,
                                          "end": 3094
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
                                              "start": 3096,
                                              "end": 3097
                                            },
                                            "typeArguments": null,
                                            "start": 3096,
                                            "end": 3097
                                          },
                                          "start": 3094,
                                          "end": 3097
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3093,
                                        "end": 3098
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
                                          "start": 3099,
                                          "end": 3100
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
                                              "start": 3102,
                                              "end": 3103
                                            },
                                            "typeArguments": null,
                                            "start": 3102,
                                            "end": 3103
                                          },
                                          "start": 3100,
                                          "end": 3103
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3099,
                                        "end": 3103
                                      }
                                    ],
                                    "start": 3091,
                                    "end": 3105
                                  },
                                  "start": 3089,
                                  "end": 3105
                                },
                                "start": 3088,
                                "end": 3105
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3110,
                                "end": 3116
                              },
                              "start": 3107,
                              "end": 3116
                            },
                            "start": 3067,
                            "end": 3116
                          },
                          "start": 3065,
                          "end": 3116
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3062,
                        "end": 3117
                      }
                    ],
                    "start": 3048,
                    "end": 3203
                  },
                  "declare": false,
                  "start": 3025,
                  "end": 3203
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3223,
                    "end": 3225
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
                        "start": 3234,
                        "end": 3235
                      },
                      "typeArguments": null,
                      "start": 3234,
                      "end": 3235
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
                          "start": 3409,
                          "end": 3412
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3419,
                                    "end": 3420
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3419,
                                  "end": 3420
                                }
                              ],
                              "start": 3418,
                              "end": 3421
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
                                    "type": "TSConstructorType",
                                    "abstract": false,
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
                                              "start": 3433,
                                              "end": 3434
                                            },
                                            "typeArguments": null,
                                            "start": 3433,
                                            "end": 3434
                                          },
                                          "start": 3431,
                                          "end": 3434
                                        },
                                        "start": 3430,
                                        "end": 3434
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
                                          "start": 3439,
                                          "end": 3440
                                        },
                                        "typeArguments": null,
                                        "start": 3439,
                                        "end": 3440
                                      },
                                      "start": 3436,
                                      "end": 3440
                                    },
                                    "start": 3425,
                                    "end": 3440
                                  },
                                  "start": 3423,
                                  "end": 3440
                                },
                                "start": 3422,
                                "end": 3440
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
                                    "start": 3445,
                                    "end": 3446
                                  },
                                  "typeArguments": null,
                                  "start": 3445,
                                  "end": 3446
                                },
                                "start": 3445,
                                "end": 3448
                              },
                              "start": 3442,
                              "end": 3448
                            },
                            "start": 3414,
                            "end": 3448
                          },
                          "start": 3412,
                          "end": 3448
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3409,
                        "end": 3449
                      }
                    ],
                    "start": 3236,
                    "end": 3459
                  },
                  "declare": false,
                  "start": 3213,
                  "end": 3459
                }
              ],
              "start": 372,
              "end": 3465
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 327,
            "end": 3465
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3481,
              "end": 3512
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
                    "start": 3581,
                    "end": 3582
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
                          "start": 3597,
                          "end": 3599
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3606,
                                    "end": 3607
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3606,
                                  "end": 3607
                                }
                              ],
                              "start": 3605,
                              "end": 3608
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
                                      "start": 3612,
                                      "end": 3613
                                    },
                                    "typeArguments": null,
                                    "start": 3612,
                                    "end": 3613
                                  },
                                  "start": 3610,
                                  "end": 3613
                                },
                                "start": 3609,
                                "end": 3613
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
                                    "start": 3618,
                                    "end": 3619
                                  },
                                  "typeArguments": null,
                                  "start": 3618,
                                  "end": 3619
                                },
                                "start": 3618,
                                "end": 3621
                              },
                              "start": 3615,
                              "end": 3621
                            },
                            "start": 3601,
                            "end": 3621
                          },
                          "start": 3599,
                          "end": 3621
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3597,
                        "end": 3622
                      }
                    ],
                    "start": 3583,
                    "end": 3632
                  },
                  "declare": false,
                  "start": 3571,
                  "end": 3632
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3652,
                    "end": 3654
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
                        "start": 3663,
                        "end": 3664
                      },
                      "typeArguments": null,
                      "start": 3663,
                      "end": 3664
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
                          "start": 3679,
                          "end": 3681
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3688,
                                    "end": 3689
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3688,
                                  "end": 3689
                                }
                              ],
                              "start": 3687,
                              "end": 3690
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
                                      "start": 3694,
                                      "end": 3695
                                    },
                                    "typeArguments": null,
                                    "start": 3694,
                                    "end": 3695
                                  },
                                  "start": 3692,
                                  "end": 3695
                                },
                                "start": 3691,
                                "end": 3695
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3700,
                                  "end": 3706
                                },
                                "start": 3700,
                                "end": 3708
                              },
                              "start": 3697,
                              "end": 3708
                            },
                            "start": 3683,
                            "end": 3708
                          },
                          "start": 3681,
                          "end": 3708
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3679,
                        "end": 3709
                      }
                    ],
                    "start": 3665,
                    "end": 3728
                  },
                  "declare": false,
                  "start": 3642,
                  "end": 3728
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3796,
                    "end": 3797
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
                          "start": 3812,
                          "end": 3814
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3821,
                                    "end": 3822
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3821,
                                  "end": 3822
                                }
                              ],
                              "start": 3820,
                              "end": 3823
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
                                      "start": 3827,
                                      "end": 3828
                                    },
                                    "typeArguments": null,
                                    "start": 3827,
                                    "end": 3828
                                  },
                                  "start": 3825,
                                  "end": 3828
                                },
                                "start": 3824,
                                "end": 3828
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3833,
                                  "end": 3839
                                },
                                "start": 3833,
                                "end": 3841
                              },
                              "start": 3830,
                              "end": 3841
                            },
                            "start": 3816,
                            "end": 3841
                          },
                          "start": 3814,
                          "end": 3841
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3812,
                        "end": 3842
                      }
                    ],
                    "start": 3798,
                    "end": 3852
                  },
                  "declare": false,
                  "start": 3786,
                  "end": 3852
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3872,
                    "end": 3874
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
                        "start": 3883,
                        "end": 3884
                      },
                      "typeArguments": null,
                      "start": 3883,
                      "end": 3884
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
                          "start": 3899,
                          "end": 3901
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3908,
                                    "end": 3909
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3908,
                                  "end": 3909
                                }
                              ],
                              "start": 3907,
                              "end": 3910
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
                                      "start": 3914,
                                      "end": 3915
                                    },
                                    "typeArguments": null,
                                    "start": 3914,
                                    "end": 3915
                                  },
                                  "start": 3912,
                                  "end": 3915
                                },
                                "start": 3911,
                                "end": 3915
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
                                    "start": 3920,
                                    "end": 3921
                                  },
                                  "typeArguments": null,
                                  "start": 3920,
                                  "end": 3921
                                },
                                "start": 3920,
                                "end": 3923
                              },
                              "start": 3917,
                              "end": 3923
                            },
                            "start": 3903,
                            "end": 3923
                          },
                          "start": 3901,
                          "end": 3923
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3899,
                        "end": 3924
                      }
                    ],
                    "start": 3885,
                    "end": 3943
                  },
                  "declare": false,
                  "start": 3862,
                  "end": 3943
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4028,
                    "end": 4029
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
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4044,
                          "end": 4047
                        },
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
                                        "start": 4072,
                                        "end": 4073
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4082,
                                          "end": 4089
                                        },
                                        "typeArguments": null,
                                        "start": 4082,
                                        "end": 4089
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4072,
                                      "end": 4089
                                    }
                                  ],
                                  "start": 4071,
                                  "end": 4090
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
                                          "start": 4094,
                                          "end": 4095
                                        },
                                        "typeArguments": null,
                                        "start": 4094,
                                        "end": 4095
                                      },
                                      "start": 4092,
                                      "end": 4095
                                    },
                                    "start": 4091,
                                    "end": 4095
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4098,
                                      "end": 4104
                                    },
                                    "start": 4098,
                                    "end": 4106
                                  },
                                  "start": 4096,
                                  "end": 4106
                                },
                                "start": 4067,
                                "end": 4107
                              },
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
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4129,
                                        "end": 4130
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4139,
                                          "end": 4143
                                        },
                                        "typeArguments": null,
                                        "start": 4139,
                                        "end": 4143
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4129,
                                      "end": 4143
                                    }
                                  ],
                                  "start": 4128,
                                  "end": 4144
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
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4148,
                                          "end": 4149
                                        },
                                        "typeArguments": null,
                                        "start": 4148,
                                        "end": 4149
                                      },
                                      "start": 4146,
                                      "end": 4149
                                    },
                                    "start": 4145,
                                    "end": 4149
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4152,
                                      "end": 4158
                                    },
                                    "start": 4152,
                                    "end": 4160
                                  },
                                  "start": 4150,
                                  "end": 4160
                                },
                                "start": 4124,
                                "end": 4161
                              }
                            ],
                            "start": 4049,
                            "end": 4175
                          },
                          "start": 4047,
                          "end": 4175
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4044,
                        "end": 4176
                      }
                    ],
                    "start": 4030,
                    "end": 4186
                  },
                  "declare": false,
                  "start": 4018,
                  "end": 4186
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4206,
                    "end": 4208
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4217,
                        "end": 4218
                      },
                      "typeArguments": null,
                      "start": 4217,
                      "end": 4218
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
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4233,
                          "end": 4236
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 4243,
                                    "end": 4244
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4253,
                                      "end": 4257
                                    },
                                    "typeArguments": null,
                                    "start": 4253,
                                    "end": 4257
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4243,
                                  "end": 4257
                                }
                              ],
                              "start": 4242,
                              "end": 4258
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
                                      "start": 4262,
                                      "end": 4263
                                    },
                                    "typeArguments": null,
                                    "start": 4262,
                                    "end": 4263
                                  },
                                  "start": 4260,
                                  "end": 4263
                                },
                                "start": 4259,
                                "end": 4263
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4268,
                                  "end": 4274
                                },
                                "start": 4268,
                                "end": 4276
                              },
                              "start": 4265,
                              "end": 4276
                            },
                            "start": 4238,
                            "end": 4276
                          },
                          "start": 4236,
                          "end": 4276
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4233,
                        "end": 4277
                      }
                    ],
                    "start": 4219,
                    "end": 4287
                  },
                  "declare": false,
                  "start": 4196,
                  "end": 4287
                }
              ],
              "start": 3513,
              "end": 4293
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3471,
            "end": 4293
          }
        ],
        "start": 134,
        "end": 4295
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4295
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
    "type": "Keyword",
    "value": "new",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 525,
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
    "value": "=>",
    "start": 531,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 556,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 559,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 585,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 605,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 627,
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
    "type": "Identifier",
    "value": "Derived",
    "start": 636,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 652,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 661,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 706,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 709,
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
    "value": "a11",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 780,
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
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 790,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 824,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 837,
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
    "value": "Array",
    "start": 840,
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
    "value": "Derived2",
    "start": 846,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 857,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 860,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 866,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 962,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 971,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1013,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1047,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1246,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1283,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1292,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1381,
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
    "value": "boolean",
    "start": 1384,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1394,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1423,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1432,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1471,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1479,
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
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1516,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1528,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1556,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1565,
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
    "type": "Identifier",
    "value": "T",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1711,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1721,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1730,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1758,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1769,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1871,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1884,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1996,
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
    "value": "U",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2004,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2023,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2031,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2045,
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
    "value": "T",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2053,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2059,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2069,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2094,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 2104,
    "end": 2106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2107,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2131,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2142,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2150,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2158,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2166,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2187,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2205,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2210,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2221,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2227,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2237,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2286,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "I4B",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2300,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2329,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2336,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2344,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2353,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2364,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2472,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "I4C",
    "start": 2482,
    "end": 2485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2486,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2510,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2515,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2522,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2530,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 2551,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2684,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "I4E",
    "start": 2694,
    "end": 2697
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2698,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2722,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2727,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2734,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2742,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2748,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2762,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2768,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "Array",
    "start": 2778,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2784,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2875,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 2885,
    "end": 2887
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2888,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2912,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2917,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2923,
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
    "type": "Punctuator",
    "value": "{",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2944,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3025,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 3035,
    "end": 3037
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3038,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3067,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3074,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3082,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3107,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3110,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3213,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 3223,
    "end": 3225
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3226,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3409,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3425,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3436,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3442,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3471,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 3481,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3571,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3597,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3601,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3615,
    "end": 3617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3642,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 3652,
    "end": 3654
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3655,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3679,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3683,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3697,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3700,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3786,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3812,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3816,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3830,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3833,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3862,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 3872,
    "end": 3874
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3875,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3899,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3903,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3917,
    "end": 3919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4018,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 4044,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4067,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4074,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 4082,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4098,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4124,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4131,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4139,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4152,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4196,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 4206,
    "end": 4208
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4209,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 4233,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4238,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4245,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4253,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4265,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4268,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4294,
    "end": 4295
  }
]
```
