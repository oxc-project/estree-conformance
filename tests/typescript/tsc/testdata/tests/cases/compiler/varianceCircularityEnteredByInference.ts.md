__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 614,
      "end": 624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 641
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
              "start": 642,
              "end": 643
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 642,
            "end": 643
          }
        ],
        "start": 641,
        "end": 644
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
            "start": 647,
            "end": 648
          },
          "typeArguments": null,
          "start": 647,
          "end": 648
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 657,
          "end": 663
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 666,
            "end": 667
          },
          "typeArguments": null,
          "start": 666,
          "end": 667
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 670,
          "end": 675
        },
        "start": 647,
        "end": 675
      },
      "declare": false,
      "start": 626,
      "end": 676
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AstObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 693
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
              "start": 694,
              "end": 695
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 704,
              "end": 710
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 694,
            "end": 710
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 712,
            "end": 713
          }
        ],
        "start": 693,
        "end": 714
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 732
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
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
                          "start": 747,
                          "end": 748
                        },
                        "typeArguments": null,
                        "start": 747,
                        "end": 748
                      },
                      "start": 745,
                      "end": 748
                    },
                    "start": 741,
                    "end": 748
                  },
                  "readonly": false,
                  "static": false,
                  "start": 733,
                  "end": 748
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 750,
                "end": 752
              },
              "expression": false,
              "start": 732,
              "end": 752
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 721,
            "end": 752
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 767
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 769
                    },
                    "constraint": {
                      "type": "TSIntersectionType",
                      "types": [
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
                              "start": 784,
                              "end": 785
                            },
                            "typeArguments": null,
                            "start": 784,
                            "end": 785
                          },
                          "start": 778,
                          "end": 785
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 788,
                          "end": 794
                        }
                      ],
                      "start": 778,
                      "end": 794
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 768,
                    "end": 794
                  }
                ],
                "start": 767,
                "end": 795
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 801,
                        "end": 802
                      },
                      "typeArguments": null,
                      "start": 801,
                      "end": 802
                    },
                    "start": 799,
                    "end": 802
                  },
                  "start": 796,
                  "end": 802
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AstObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 814
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 815,
                          "end": 825
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
                                "start": 826,
                                "end": 827
                              },
                              "typeArguments": null,
                              "start": 826,
                              "end": 827
                            }
                          ],
                          "start": 825,
                          "end": 828
                        },
                        "start": 815,
                        "end": 828
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 830,
                          "end": 831
                        },
                        "typeArguments": null,
                        "start": 830,
                        "end": 831
                      }
                    ],
                    "start": 814,
                    "end": 832
                  },
                  "start": 805,
                  "end": 832
                },
                "start": 803,
                "end": 832
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AstObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 854,
                        "end": 863
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ObjectType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 864,
                              "end": 874
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
                                    "start": 875,
                                    "end": 876
                                  },
                                  "typeArguments": null,
                                  "start": 875,
                                  "end": 876
                                }
                              ],
                              "start": 874,
                              "end": 877
                            },
                            "start": 864,
                            "end": 877
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 879,
                              "end": 880
                            },
                            "typeArguments": null,
                            "start": 879,
                            "end": 880
                          }
                        ],
                        "start": 863,
                        "end": 881
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 882,
                            "end": 886
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 887,
                            "end": 891
                          },
                          "optional": false,
                          "computed": false,
                          "start": 882,
                          "end": 891
                        }
                      ],
                      "start": 850,
                      "end": 892
                    },
                    "start": 843,
                    "end": 893
                  }
                ],
                "start": 833,
                "end": 899
              },
              "expression": false,
              "start": 767,
              "end": 899
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 758,
            "end": 899
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 913
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 914,
                      "end": 915
                    },
                    "constraint": {
                      "type": "TSIntersectionType",
                      "types": [
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
                              "start": 930,
                              "end": 931
                            },
                            "typeArguments": null,
                            "start": 930,
                            "end": 931
                          },
                          "start": 924,
                          "end": 931
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 934,
                          "end": 940
                        }
                      ],
                      "start": 924,
                      "end": 940
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 914,
                    "end": 940
                  }
                ],
                "start": 913,
                "end": 941
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 948
                      },
                      "typeArguments": null,
                      "start": 947,
                      "end": 948
                    },
                    "start": 945,
                    "end": 948
                  },
                  "start": 942,
                  "end": 948
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AstValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 951,
                    "end": 959
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
                            "start": 960,
                            "end": 961
                          },
                          "typeArguments": null,
                          "start": 960,
                          "end": 961
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 962,
                            "end": 963
                          },
                          "typeArguments": null,
                          "start": 962,
                          "end": 963
                        },
                        "start": 960,
                        "end": 964
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 966,
                          "end": 967
                        },
                        "typeArguments": null,
                        "start": 966,
                        "end": 967
                      }
                    ],
                    "start": 959,
                    "end": 968
                  },
                  "start": 951,
                  "end": 968
                },
                "start": 949,
                "end": 968
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AstValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 998
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 999,
                            "end": 1003
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1008
                          },
                          "optional": false,
                          "computed": false,
                          "start": 999,
                          "end": 1008
                        }
                      ],
                      "start": 986,
                      "end": 1009
                    },
                    "start": 979,
                    "end": 1010
                  }
                ],
                "start": 969,
                "end": 1016
              },
              "expression": false,
              "start": 913,
              "end": 1016
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 905,
            "end": 1016
          }
        ],
        "start": 715,
        "end": 1018
      },
      "abstract": false,
      "declare": false,
      "start": 678,
      "end": 1018
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AstValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1026,
        "end": 1034
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
              "start": 1035,
              "end": 1036
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1035,
            "end": 1036
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1039
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1038,
            "end": 1039
          }
        ],
        "start": 1034,
        "end": 1040
      },
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
              "name": "typeBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1064
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
                  "start": 1066,
                  "end": 1067
                },
                "typeArguments": null,
                "start": 1066,
                "end": 1067
              },
              "start": 1064,
              "end": 1067
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1047,
            "end": 1068
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1085
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
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
                          "start": 1100,
                          "end": 1101
                        },
                        "typeArguments": null,
                        "start": 1100,
                        "end": 1101
                      },
                      "start": 1098,
                      "end": 1101
                    },
                    "start": 1094,
                    "end": 1101
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1086,
                  "end": 1101
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1103,
                "end": 1105
              },
              "expression": false,
              "start": 1085,
              "end": 1105
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1074,
            "end": 1105
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 1111,
              "end": 1120
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AstObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1133
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1134,
                          "end": 1144
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
                                "start": 1145,
                                "end": 1146
                              },
                              "typeArguments": null,
                              "start": 1145,
                              "end": 1146
                            }
                          ],
                          "start": 1144,
                          "end": 1147
                        },
                        "start": 1134,
                        "end": 1147
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1149,
                          "end": 1150
                        },
                        "typeArguments": null,
                        "start": 1149,
                        "end": 1150
                      }
                    ],
                    "start": 1133,
                    "end": 1151
                  },
                  "start": 1124,
                  "end": 1151
                },
                "start": 1122,
                "end": 1151
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AstObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1173,
                        "end": 1182
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1183,
                            "end": 1187
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1188,
                            "end": 1192
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1183,
                          "end": 1192
                        }
                      ],
                      "start": 1169,
                      "end": 1193
                    },
                    "start": 1162,
                    "end": 1194
                  }
                ],
                "start": 1152,
                "end": 1200
              },
              "expression": false,
              "start": 1120,
              "end": 1200
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1111,
            "end": 1200
          }
        ],
        "start": 1041,
        "end": 1202
      },
      "abstract": false,
      "declare": false,
      "start": 1020,
      "end": 1202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1219
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1220,
        "end": 1222
      },
      "declare": false,
      "start": 1204,
      "end": 1222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithDecorators",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1247
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
              "name": "decorators",
              "optional": false,
              "typeAnnotation": null,
              "start": 1254,
              "end": 1264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1266,
                "end": 1272
              },
              "start": 1264,
              "end": 1272
            },
            "accessibility": null,
            "static": false,
            "start": 1254,
            "end": 1273
          }
        ],
        "start": 1248,
        "end": 1275
      },
      "declare": false,
      "start": 1223,
      "end": 1275
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1304
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1305,
              "end": 1306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1305,
            "end": 1306
          }
        ],
        "start": 1304,
        "end": 1307
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AstObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1322
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithDecorators",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1323,
                      "end": 1337
                    },
                    "typeArguments": null,
                    "start": 1323,
                    "end": 1337
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1340
                    },
                    "typeArguments": null,
                    "start": 1339,
                    "end": 1340
                  }
                ],
                "start": 1322,
                "end": 1341
              },
              "start": 1313,
              "end": 1341
            },
            "start": 1311,
            "end": 1341
          },
          "start": 1308,
          "end": 1341
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1344,
          "end": 1348
        },
        "start": 1342,
        "end": 1348
      },
      "body": null,
      "expression": false,
      "start": 1277,
      "end": 1349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1360,
        "end": 1367
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
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1368,
            "end": 1369
          }
        ],
        "start": 1367,
        "end": 1370
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AstObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1385
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Empty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1391
                    },
                    "typeArguments": null,
                    "start": 1386,
                    "end": 1391
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1394
                    },
                    "typeArguments": null,
                    "start": 1393,
                    "end": 1394
                  }
                ],
                "start": 1385,
                "end": 1395
              },
              "start": 1376,
              "end": 1395
            },
            "start": 1374,
            "end": 1395
          },
          "start": 1371,
          "end": 1395
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "useDerived",
                "optional": false,
                "typeAnnotation": null,
                "start": 1403,
                "end": 1413
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1417
                }
              ],
              "optional": false,
              "start": 1403,
              "end": 1418
            },
            "directive": null,
            "start": 1403,
            "end": 1419
          }
        ],
        "start": 1397,
        "end": 1421
      },
      "expression": false,
      "start": 1351,
      "end": 1421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1421
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 626,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 631,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 649,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 670,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 678,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 684,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 696,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "constructor",
    "start": 721,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 733,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 741,
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
    "value": "E",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 758,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 770,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 778,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 805,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 815,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 843,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 850,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 854,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 864,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 905,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 916,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 924,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "AstValue",
    "start": 951,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "E",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 979,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "AstValue",
    "start": 990,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "AstValue",
    "start": 1026,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "E",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1047,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "typeBrand",
    "start": 1055,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1074,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1111,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 1124,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "ObjectType",
    "start": 1134,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1204,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1223,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "WithDecorators",
    "start": 1233,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 1254,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1266,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1277,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "useDerived",
    "start": 1294,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 1313,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "WithDecorators",
    "start": 1323,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1351,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "useBase",
    "start": 1360,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "AstObject",
    "start": 1376,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 1386,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "useDerived",
    "start": 1403,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1420,
    "end": 1421
  }
]
```
