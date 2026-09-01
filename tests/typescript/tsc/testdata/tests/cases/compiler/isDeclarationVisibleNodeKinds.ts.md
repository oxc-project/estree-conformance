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
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator1",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 73
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    },
                    "start": 80,
                    "end": 85
                  },
                  "start": 74,
                  "end": 85
                }
              ],
              "returnType": {
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
                          "start": 89,
                          "end": 90
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 89,
                        "end": 90
                      }
                    ],
                    "start": 88,
                    "end": 91
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 98,
                            "end": 99
                          },
                          "typeArguments": null,
                          "start": 98,
                          "end": 99
                        },
                        "start": 96,
                        "end": 99
                      },
                      "start": 92,
                      "end": 99
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
                        "start": 104,
                        "end": 105
                      },
                      "typeArguments": null,
                      "start": 104,
                      "end": 105
                    },
                    "start": 101,
                    "end": 105
                  },
                  "start": 88,
                  "end": 105
                },
                "start": 86,
                "end": 105
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 132
                    },
                    "start": 116,
                    "end": 133
                  }
                ],
                "start": 106,
                "end": 139
              },
              "expression": false,
              "start": 48,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 41,
            "end": 139
          }
        ],
        "start": 35,
        "end": 141
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 18,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 180
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator2",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 219
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 228,
                      "end": 231
                    },
                    "start": 226,
                    "end": 231
                  },
                  "start": 220,
                  "end": 231
                }
              ],
              "returnType": {
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
                          "start": 239,
                          "end": 240
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 239,
                        "end": 240
                      }
                    ],
                    "start": 238,
                    "end": 241
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 248,
                            "end": 249
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 249
                        },
                        "start": 246,
                        "end": 249
                      },
                      "start": 242,
                      "end": 249
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
                        "start": 254,
                        "end": 255
                      },
                      "typeArguments": null,
                      "start": 254,
                      "end": 255
                    },
                    "start": 251,
                    "end": 255
                  },
                  "start": 234,
                  "end": 255
                },
                "start": 232,
                "end": 255
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 282
                    },
                    "start": 266,
                    "end": 283
                  }
                ],
                "start": 256,
                "end": 289
              },
              "expression": false,
              "start": 194,
              "end": 289
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 187,
            "end": 289
          }
        ],
        "start": 181,
        "end": 291
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 164,
      "end": 291
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator3",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 364
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 373,
                      "end": 376
                    },
                    "start": 371,
                    "end": 376
                  },
                  "start": 365,
                  "end": 376
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    },
                    {
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
                                  "start": 395,
                                  "end": 396
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 395,
                                "end": 396
                              }
                            ],
                            "start": 394,
                            "end": 397
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
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
                                    "start": 404,
                                    "end": 405
                                  },
                                  "typeArguments": null,
                                  "start": 404,
                                  "end": 405
                                },
                                "start": 402,
                                "end": 405
                              },
                              "start": 398,
                              "end": 405
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
                                "start": 408,
                                "end": 409
                              },
                              "typeArguments": null,
                              "start": 408,
                              "end": 409
                            },
                            "start": 406,
                            "end": 409
                          },
                          "start": 390,
                          "end": 410
                        }
                      ],
                      "start": 388,
                      "end": 412
                    }
                  ],
                  "start": 379,
                  "end": 412
                },
                "start": 377,
                "end": 412
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 440
                    },
                    "start": 424,
                    "end": 441
                  }
                ],
                "start": 414,
                "end": 447
              },
              "expression": false,
              "start": 339,
              "end": 447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 332,
            "end": 447
          }
        ],
        "start": 325,
        "end": 449
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 308,
      "end": 449
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 482
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator4",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 522
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 531,
                      "end": 534
                    },
                    "start": 529,
                    "end": 534
                  },
                  "start": 523,
                  "end": 534
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
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
                                "start": 544,
                                "end": 545
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 544,
                              "end": 545
                            }
                          ],
                          "start": 543,
                          "end": 546
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
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
                                  "start": 553,
                                  "end": 554
                                },
                                "typeArguments": null,
                                "start": 553,
                                "end": 554
                              },
                              "start": 551,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 557,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 558
                          },
                          "start": 555,
                          "end": 558
                        },
                        "start": 539,
                        "end": 559
                      }
                    ],
                    "start": 537,
                    "end": 561
                  },
                  "start": 537,
                  "end": 563
                },
                "start": 535,
                "end": 563
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 590
                    },
                    "start": 574,
                    "end": 591
                  }
                ],
                "start": 564,
                "end": 597
              },
              "expression": false,
              "start": 497,
              "end": 597
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 490,
            "end": 597
          }
        ],
        "start": 483,
        "end": 599
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 466,
      "end": 599
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 634
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator5",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 673
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 682,
                      "end": 685
                    },
                    "start": 680,
                    "end": 685
                  },
                  "start": 674,
                  "end": 685
                }
              ],
              "returnType": {
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
                              "start": 695,
                              "end": 696
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 695,
                            "end": 696
                          }
                        ],
                        "start": 694,
                        "end": 697
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
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
                                "start": 704,
                                "end": 705
                              },
                              "typeArguments": null,
                              "start": 704,
                              "end": 705
                            },
                            "start": 702,
                            "end": 705
                          },
                          "start": 698,
                          "end": 705
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
                            "start": 708,
                            "end": 709
                          },
                          "typeArguments": null,
                          "start": 708,
                          "end": 709
                        },
                        "start": 706,
                        "end": 709
                      },
                      "start": 690,
                      "end": 709
                    }
                  ],
                  "start": 688,
                  "end": 711
                },
                "start": 686,
                "end": 711
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 729,
                      "end": 738
                    },
                    "start": 722,
                    "end": 739
                  }
                ],
                "start": 712,
                "end": 745
              },
              "expression": false,
              "start": 648,
              "end": 745
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 641,
            "end": 745
          }
        ],
        "start": 635,
        "end": 747
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 618,
      "end": 747
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 780
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator6",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 819
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 828,
                      "end": 831
                    },
                    "start": 826,
                    "end": 831
                  },
                  "start": 820,
                  "end": 831
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
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
                              "start": 841,
                              "end": 842
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 841,
                            "end": 842
                          }
                        ],
                        "start": 840,
                        "end": 843
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
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
                                "start": 850,
                                "end": 851
                              },
                              "typeArguments": null,
                              "start": 850,
                              "end": 851
                            },
                            "start": 848,
                            "end": 851
                          },
                          "start": 844,
                          "end": 851
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
                            "start": 856,
                            "end": 857
                          },
                          "typeArguments": null,
                          "start": 856,
                          "end": 857
                        },
                        "start": 853,
                        "end": 857
                      },
                      "start": 836,
                      "end": 857
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 859,
                      "end": 865
                    }
                  ],
                  "start": 834,
                  "end": 866
                },
                "start": 832,
                "end": 866
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 884,
                      "end": 893
                    },
                    "start": 877,
                    "end": 894
                  }
                ],
                "start": 867,
                "end": 900
              },
              "expression": false,
              "start": 794,
              "end": 900
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 787,
            "end": 900
          }
        ],
        "start": 781,
        "end": 902
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 764,
      "end": 902
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 935
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator7",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 974
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 983,
                      "end": 986
                    },
                    "start": 981,
                    "end": 986
                  },
                  "start": 975,
                  "end": 986
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
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
                            "start": 995,
                            "end": 996
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 995,
                          "end": 996
                        }
                      ],
                      "start": 994,
                      "end": 997
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1004,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1005
                          },
                          "start": 1002,
                          "end": 1005
                        },
                        "start": 998,
                        "end": 1005
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
                          "start": 1008,
                          "end": 1009
                        },
                        "typeArguments": null,
                        "start": 1008,
                        "end": 1009
                      },
                      "start": 1006,
                      "end": 1009
                    },
                    "start": 990,
                    "end": 1009
                  },
                  "start": 989,
                  "end": 1013
                },
                "start": 987,
                "end": 1013
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1031,
                      "end": 1040
                    },
                    "start": 1024,
                    "end": 1041
                  }
                ],
                "start": 1014,
                "end": 1047
              },
              "expression": false,
              "start": 949,
              "end": 1047
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 942,
            "end": 1047
          }
        ],
        "start": 936,
        "end": 1049
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 919,
      "end": 1049
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1085
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "createValidator8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1124
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1133,
                      "end": 1136
                    },
                    "start": 1131,
                    "end": 1136
                  },
                  "start": 1125,
                  "end": 1136
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
                    "start": 1139,
                    "end": 1144
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                                    "start": 1148,
                                    "end": 1149
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1148,
                                  "end": 1149
                                }
                              ],
                              "start": 1147,
                              "end": 1150
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
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
                                      "start": 1157,
                                      "end": 1158
                                    },
                                    "typeArguments": null,
                                    "start": 1157,
                                    "end": 1158
                                  },
                                  "start": 1155,
                                  "end": 1158
                                },
                                "start": 1151,
                                "end": 1158
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
                                  "start": 1162,
                                  "end": 1163
                                },
                                "typeArguments": null,
                                "start": 1162,
                                "end": 1163
                              },
                              "start": 1160,
                              "end": 1163
                            },
                            "start": 1147,
                            "end": 1163
                          }
                        ],
                        "start": 1145,
                        "end": 1164
                      }
                    ],
                    "start": 1144,
                    "end": 1165
                  },
                  "start": 1139,
                  "end": 1165
                },
                "start": 1137,
                "end": 1165
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1183,
                      "end": 1192
                    },
                    "start": 1176,
                    "end": 1193
                  }
                ],
                "start": 1166,
                "end": 1199
              },
              "expression": false,
              "start": 1099,
              "end": 1199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1092,
            "end": 1199
          }
        ],
        "start": 1086,
        "end": 1201
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1069,
      "end": 1201
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1220
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1241
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
                      "name": "createValidator9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1272
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
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
                                  "start": 1277,
                                  "end": 1278
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1277,
                                "end": 1278
                              }
                            ],
                            "start": 1276,
                            "end": 1279
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
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
                                    "start": 1286,
                                    "end": 1287
                                  },
                                  "typeArguments": null,
                                  "start": 1286,
                                  "end": 1287
                                },
                                "start": 1284,
                                "end": 1287
                              },
                              "start": 1280,
                              "end": 1287
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
                                "start": 1292,
                                "end": 1293
                              },
                              "typeArguments": null,
                              "start": 1292,
                              "end": 1293
                            },
                            "start": 1289,
                            "end": 1293
                          },
                          "start": 1276,
                          "end": 1293
                        },
                        "start": 1274,
                        "end": 1293
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1315,
                              "end": 1324
                            },
                            "start": 1308,
                            "end": 1325
                          }
                        ],
                        "start": 1294,
                        "end": 1335
                      },
                      "expression": false,
                      "start": 1272,
                      "end": 1335
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1252,
                    "end": 1335
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createValidator10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1357,
                      "end": 1374
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
                          "name": "v",
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
                                      "start": 1379,
                                      "end": 1380
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1379,
                                    "end": 1380
                                  }
                                ],
                                "start": 1378,
                                "end": 1381
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
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
                                        "start": 1388,
                                        "end": 1389
                                      },
                                      "typeArguments": null,
                                      "start": 1388,
                                      "end": 1389
                                    },
                                    "start": 1386,
                                    "end": 1389
                                  },
                                  "start": 1382,
                                  "end": 1389
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
                                    "start": 1394,
                                    "end": 1395
                                  },
                                  "typeArguments": null,
                                  "start": 1394,
                                  "end": 1395
                                },
                                "start": 1391,
                                "end": 1395
                              },
                              "start": 1378,
                              "end": 1395
                            },
                            "start": 1376,
                            "end": 1395
                          },
                          "start": 1375,
                          "end": 1395
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1397,
                        "end": 1408
                      },
                      "expression": false,
                      "start": 1374,
                      "end": 1408
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1353,
                    "end": 1408
                  }
                ],
                "start": 1242,
                "end": 1414
              },
              "abstract": false,
              "declare": false,
              "start": 1234,
              "end": 1414
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1227,
            "end": 1414
          }
        ],
        "start": 1221,
        "end": 1416
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1204,
      "end": 1416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 18,
  "end": 1416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 18,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "createValidator1",
    "start": 57,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 123,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 164,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 187,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "createValidator2",
    "start": 203,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 220,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 273,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 308,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "createValidator3",
    "start": 348,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 398,
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
    "value": "T",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 424,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 431,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 466,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 490,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 497,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "createValidator4",
    "start": 506,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 547,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 553,
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
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 574,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 581,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 618,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 641,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "createValidator5",
    "start": 657,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 674,
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
    "value": "any",
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
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 722,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 729,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 764,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 787,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 794,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "createValidator6",
    "start": 803,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 820,
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
    "value": "any",
    "start": 828,
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
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 844,
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
    "value": "T",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 853,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 877,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 884,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 919,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 942,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 949,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "createValidator7",
    "start": 958,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 990,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1031,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1069,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "createValidator8",
    "start": 1108,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Array",
    "start": 1139,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1176,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1183,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1204,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1234,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1240,
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
    "value": "get",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "createValidator9",
    "start": 1256,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1315,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "createValidator10",
    "start": 1357,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  }
]
```
