__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vNumberLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 27
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 30,
                  "end": 34
                },
                "start": 30,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 39,
                      "end": 40
                    },
                    "start": 39,
                    "end": 40
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 43,
                      "end": 44
                    },
                    "start": 43,
                    "end": 44
                  }
                ],
                "start": 39,
                "end": 44
              },
              "start": 30,
              "end": 44
            },
            "definite": false,
            "start": 13,
            "end": 44
          }
        ],
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vStringLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 72
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 75,
                  "end": 79
                },
                "start": 75,
                "end": 80
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 84,
                      "end": 87
                    },
                    "start": 84,
                    "end": 87
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 90,
                      "end": 93
                    },
                    "start": 90,
                    "end": 93
                  }
                ],
                "start": 84,
                "end": 93
              },
              "start": 75,
              "end": 93
            },
            "definite": false,
            "start": 58,
            "end": 93
          }
        ],
        "declare": false,
        "start": 52,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 93
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 115
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 118,
                  "end": 122
                },
                "start": 118,
                "end": 123
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 127,
                      "end": 130
                    },
                    "start": 127,
                    "end": 130
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 133,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  }
                ],
                "start": 127,
                "end": 136
              },
              "start": 118,
              "end": 136
            },
            "definite": false,
            "start": 107,
            "end": 136
          }
        ],
        "declare": false,
        "start": 101,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 94,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 144
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 149,
            "end": 160
          }
        ],
        "start": 147,
        "end": 162
      },
      "declare": false,
      "start": 138,
      "end": 162
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 178
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
                "name": "tsResolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 430
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 434,
                    "end": 438
                  },
                  "start": 434,
                  "end": 439
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 444
                      },
                      "typeArguments": null,
                      "start": 443,
                      "end": 444
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 448
                      },
                      "typeArguments": null,
                      "start": 447,
                      "end": 448
                    }
                  ],
                  "start": 443,
                  "end": 448
                },
                "start": 434,
                "end": 448
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 421,
              "end": 449
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tsResolve2",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 464
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 468,
                    "end": 472
                  },
                  "start": 468,
                  "end": 473
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 478
                      },
                      "typeArguments": null,
                      "start": 477,
                      "end": 478
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 482
                      },
                      "typeArguments": null,
                      "start": 481,
                      "end": 482
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 485,
                      "end": 491
                    }
                  ],
                  "start": 477,
                  "end": 491
                },
                "start": 468,
                "end": 491
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 454,
              "end": 492
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 547
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 551,
                    "end": 555
                  },
                  "start": 551,
                  "end": 556
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
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
                                "start": 565,
                                "end": 566
                              },
                              "typeArguments": null,
                              "start": 565,
                              "end": 566
                            },
                            "start": 563,
                            "end": 566
                          },
                          "start": 562,
                          "end": 566
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 571,
                          "end": 575
                        },
                        "start": 568,
                        "end": 575
                      },
                      "start": 561,
                      "end": 575
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 579,
                      "end": 585
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 588,
                      "end": 594
                    }
                  ],
                  "start": 560,
                  "end": 594
                },
                "start": 551,
                "end": 594
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 538,
              "end": 595
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType2",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 610
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 614,
                    "end": 618
                  },
                  "start": 614,
                  "end": 619
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
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
                                "start": 632,
                                "end": 633
                              },
                              "typeArguments": null,
                              "start": 632,
                              "end": 633
                            },
                            "start": 630,
                            "end": 633
                          },
                          "start": 629,
                          "end": 633
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 638,
                            "end": 639
                          },
                          "typeArguments": null,
                          "start": 638,
                          "end": 639
                        },
                        "start": 635,
                        "end": 639
                      },
                      "start": 624,
                      "end": 639
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 643,
                      "end": 649
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 652,
                      "end": 658
                    }
                  ],
                  "start": 623,
                  "end": 658
                },
                "start": 614,
                "end": 658
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 600,
              "end": 659
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType3",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 674
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 678,
                    "end": 682
                  },
                  "start": 678,
                  "end": 683
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 687,
                      "end": 693
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 696,
                      "end": 702
                    },
                    {
                      "type": "TSBigIntKeyword",
                      "start": 705,
                      "end": 711
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 714,
                      "end": 720
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 723,
                      "end": 730
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 733,
                      "end": 736
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 739,
                      "end": 744
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 747,
                      "end": 753
                    }
                  ],
                  "start": 687,
                  "end": 753
                },
                "start": 678,
                "end": 753
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 664,
              "end": 754
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType4",
                "optional": false,
                "typeAnnotation": null,
                "start": 759,
                "end": 769
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 773,
                    "end": 777
                  },
                  "start": 773,
                  "end": 778
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 783,
                            "end": 784
                          },
                          "typeArguments": null,
                          "start": 783,
                          "end": 784
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 786,
                            "end": 787
                          },
                          "typeArguments": null,
                          "start": 786,
                          "end": 787
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 789,
                            "end": 790
                          },
                          "typeArguments": null,
                          "start": 789,
                          "end": 790
                        }
                      ],
                      "start": 782,
                      "end": 791
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 795,
                            "end": 796
                          },
                          "typeArguments": null,
                          "start": 795,
                          "end": 796
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 798,
                            "end": 799
                          },
                          "typeArguments": null,
                          "start": 798,
                          "end": 799
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 801,
                            "end": 802
                          },
                          "typeArguments": null,
                          "start": 801,
                          "end": 802
                        }
                      ],
                      "start": 794,
                      "end": 803
                    }
                  ],
                  "start": 782,
                  "end": 803
                },
                "start": 773,
                "end": 803
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 759,
              "end": 804
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType5",
                "optional": false,
                "typeAnnotation": null,
                "start": 809,
                "end": 819
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 823,
                    "end": 827
                  },
                  "start": 823,
                  "end": 828
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 833
                        },
                        "typeArguments": null,
                        "start": 832,
                        "end": 833
                      },
                      "start": 832,
                      "end": 835
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 838,
                          "end": 839
                        },
                        "typeArguments": null,
                        "start": 838,
                        "end": 839
                      },
                      "start": 838,
                      "end": 841
                    }
                  ],
                  "start": 832,
                  "end": 841
                },
                "start": 823,
                "end": 841
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 809,
              "end": 842
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType6",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 857
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 861,
                    "end": 865
                  },
                  "start": 861,
                  "end": 866
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 870,
                        "end": 871
                      },
                      "start": 870,
                      "end": 871
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "2",
                        "raw": "\"2\"",
                        "start": 874,
                        "end": 877
                      },
                      "start": 874,
                      "end": 877
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "1n",
                        "bigint": "1",
                        "start": 880,
                        "end": 882
                      },
                      "start": 880,
                      "end": 882
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": null,
                        "raw": "1n",
                        "bigint": "1",
                        "start": 885,
                        "end": 887
                      },
                      "start": 885,
                      "end": 887
                    }
                  ],
                  "start": 870,
                  "end": 887
                },
                "start": 861,
                "end": 887
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 847,
              "end": 888
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType7",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 903
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 907,
                    "end": 911
                  },
                  "start": 907,
                  "end": 912
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "A",
                              "cooked": "A"
                            },
                            "tail": true,
                            "start": 916,
                            "end": 919
                          }
                        ],
                        "expressions": [],
                        "start": 916,
                        "end": 919
                      },
                      "start": 916,
                      "end": 919
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "A",
                              "cooked": "A"
                            },
                            "tail": true,
                            "start": 922,
                            "end": 925
                          }
                        ],
                        "expressions": [],
                        "start": 922,
                        "end": 925
                      },
                      "start": 922,
                      "end": 925
                    }
                  ],
                  "start": 916,
                  "end": 925
                },
                "start": 907,
                "end": 925
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 893,
              "end": 926
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType8",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 941
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 945,
                    "end": 949
                  },
                  "start": 945,
                  "end": 950
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 954,
                          "end": 957
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "-ok",
                            "cooked": "-ok"
                          },
                          "tail": true,
                          "start": 963,
                          "end": 968
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 957,
                          "end": 963
                        }
                      ],
                      "start": 954,
                      "end": 968
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 971,
                          "end": 974
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "-ok",
                            "cooked": "-ok"
                          },
                          "tail": true,
                          "start": 980,
                          "end": 985
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 974,
                          "end": 980
                        }
                      ],
                      "start": 971,
                      "end": 985
                    }
                  ],
                  "start": 954,
                  "end": 985
                },
                "start": 945,
                "end": 985
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 931,
              "end": 986
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reuseType9",
                "optional": false,
                "typeAnnotation": null,
                "start": 991,
                "end": 1001
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1005,
                    "end": 1009
                  },
                  "start": 1005,
                  "end": 1010
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSThisType",
                      "start": 1014,
                      "end": 1018
                    },
                    {
                      "type": "TSThisType",
                      "start": 1021,
                      "end": 1025
                    }
                  ],
                  "start": 1014,
                  "end": 1025
                },
                "start": 1005,
                "end": 1025
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 991,
              "end": 1026
            }
          ],
          "start": 179,
          "end": 1028
        },
        "abstract": false,
        "declare": false,
        "start": 171,
        "end": 1028
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 164,
      "end": 1028
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1028
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "vNumberLiteral",
    "start": 13,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Null",
    "value": "null",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 36,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 45,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "vStringLiteral",
    "start": 58,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Null",
    "value": "null",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 81,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 90,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "vLiteral",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Null",
    "value": "null",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 124,
    "end": 126
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 138,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 164,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "tsResolve",
    "start": 421,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Null",
    "value": "null",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "tsResolve2",
    "start": 454,
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
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Null",
    "value": "null",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 474,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 483,
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
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "reuseType",
    "start": 538,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Null",
    "value": "null",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "reuseType2",
    "start": 600,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Null",
    "value": "null",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 620,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 635,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "reuseType3",
    "start": 664,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Null",
    "value": "null",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 684,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 723,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "symbol",
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
    "value": "reuseType4",
    "start": 759,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Null",
    "value": "null",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 779,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "reuseType5",
    "start": 809,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Null",
    "value": "null",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 829,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "reuseType6",
    "start": 847,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Null",
    "value": "null",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 867,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 872,
    "end": 873
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 874,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 878,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 880,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 883,
    "end": 884
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "reuseType7",
    "start": 893,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 905,
    "end": 906
  },
  {
    "type": "Null",
    "value": "null",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 913,
    "end": 915
  },
  {
    "type": "Template",
    "value": "`A`",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 920,
    "end": 921
  },
  {
    "type": "Template",
    "value": "`A`",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "reuseType8",
    "start": 931,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Null",
    "value": "null",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 951,
    "end": 953
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 957,
    "end": 963
  },
  {
    "type": "Template",
    "value": "}-ok`",
    "start": 963,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 969,
    "end": 970
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 971,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 974,
    "end": 980
  },
  {
    "type": "Template",
    "value": "}-ok`",
    "start": 980,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "reuseType9",
    "start": 991,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1014,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  }
]
```
