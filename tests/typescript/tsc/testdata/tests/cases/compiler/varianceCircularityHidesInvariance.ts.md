__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Element",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 697
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
              "start": 698,
              "end": 699
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 698,
            "end": 699
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 702
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 701,
            "end": 702
          }
        ],
        "start": 697,
        "end": 703
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 713
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 716
                },
                "typeArguments": null,
                "start": 715,
                "end": 716
              },
              "start": 713,
              "end": 716
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
            "start": 706,
            "end": 716
          }
        ],
        "start": 704,
        "end": 718
      },
      "abstract": false,
      "declare": true,
      "start": 676,
      "end": 718
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 724,
        "end": 735
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
              "start": 736,
              "end": 737
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 736,
            "end": 737
          }
        ],
        "start": 735,
        "end": 738
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
            "start": 741,
            "end": 742
          },
          "typeArguments": null,
          "start": 741,
          "end": 742
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 759
          },
          "typeArguments": null,
          "start": 751,
          "end": 759
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 763
          },
          "typeArguments": null,
          "start": 762,
          "end": 763
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 767
            },
            "typeArguments": null,
            "start": 766,
            "end": 767
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "start": 776,
            "end": 782
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_DeepPartialObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
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
                    "name": "T",
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
            "start": 785,
            "end": 806
          },
          "falseType": {
            "type": "TSUndefinedKeyword",
            "start": 809,
            "end": 818
          },
          "start": 766,
          "end": 818
        },
        "start": 741,
        "end": 818
      },
      "declare": false,
      "start": 719,
      "end": 818
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_DeepPartialObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 842
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
              "start": 843,
              "end": 844
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 843,
            "end": 844
          }
        ],
        "start": 842,
        "end": 845
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 852
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
              "start": 862,
              "end": 863
            },
            "typeArguments": null,
            "start": 862,
            "end": 863
          },
          "start": 856,
          "end": 863
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepPartial",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 878
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
                    "start": 879,
                    "end": 880
                  },
                  "typeArguments": null,
                  "start": 879,
                  "end": 880
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 881,
                    "end": 882
                  },
                  "typeArguments": null,
                  "start": 881,
                  "end": 882
                },
                "start": 879,
                "end": 883
              }
            ],
            "start": 878,
            "end": 884
          },
          "start": 867,
          "end": 884
        },
        "optional": true,
        "readonly": null,
        "start": 848,
        "end": 886
      },
      "declare": false,
      "start": 819,
      "end": 886
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 892,
        "end": 911
      },
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
              "start": 912,
              "end": 913
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 912,
            "end": 913
          }
        ],
        "start": 911,
        "end": 914
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "typeArguments": null,
            "start": 918,
            "end": 919
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 928,
            "end": 935
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
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
                      "start": 942,
                      "end": 943
                    },
                    "typeArguments": null,
                    "start": 942,
                    "end": 943
                  },
                  "start": 940,
                  "end": 943
                },
                "start": 939,
                "end": 943
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 948,
                "end": 952
              },
              "start": 945,
              "end": 952
            },
            "start": 938,
            "end": 952
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 955,
            "end": 960
          },
          "start": 918,
          "end": 960
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 981
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 980,
                    "end": 981
                  },
                  "start": 974,
                  "end": 981
                },
                "start": 972,
                "end": 981
              },
              "start": 971,
              "end": 981
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 986,
              "end": 990
            },
            "start": 983,
            "end": 990
          },
          "start": 970,
          "end": 990
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 993,
            "end": 994
          },
          "typeArguments": null,
          "start": 993,
          "end": 994
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 997,
          "end": 1002
        },
        "start": 917,
        "end": 1002
      },
      "declare": false,
      "start": 887,
      "end": 1002
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1017
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1026
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1027,
              "end": 1033
            },
            {
              "type": "TSAnyKeyword",
              "start": 1035,
              "end": 1038
            }
          ],
          "start": 1026,
          "end": 1039
        },
        "start": 1020,
        "end": 1039
      },
      "declare": false,
      "start": 1003,
      "end": 1039
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ScriptableContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1067
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1073
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1091
              },
              "typeArguments": null,
              "start": 1082,
              "end": 1091
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1068,
            "end": 1091
          }
        ],
        "start": 1067,
        "end": 1092
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
              "type": "Identifier",
              "decorators": [],
              "name": "dataset",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionToIntersection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1108,
                  "end": 1127
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ChartDataset",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1128,
                        "end": 1140
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1141,
                              "end": 1146
                            },
                            "typeArguments": null,
                            "start": 1141,
                            "end": 1146
                          }
                        ],
                        "start": 1140,
                        "end": 1147
                      },
                      "start": 1128,
                      "end": 1147
                    }
                  ],
                  "start": 1127,
                  "end": 1148
                },
                "start": 1108,
                "end": 1148
              },
              "start": 1106,
              "end": 1148
            },
            "accessibility": null,
            "static": false,
            "start": 1099,
            "end": 1148
          }
        ],
        "start": 1093,
        "end": 1150
      },
      "declare": false,
      "start": 1040,
      "end": 1150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scriptable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1166
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
              "start": 1167,
              "end": 1168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1167,
            "end": 1168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 1170,
              "end": 1178
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1170,
            "end": 1178
          }
        ],
        "start": 1166,
        "end": 1179
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1196
                },
                "typeArguments": null,
                "start": 1188,
                "end": 1196
              },
              "start": 1186,
              "end": 1196
            },
            "start": 1183,
            "end": 1196
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
              "start": 1201,
              "end": 1202
            },
            "typeArguments": null,
            "start": 1201,
            "end": 1202
          },
          "start": 1198,
          "end": 1202
        },
        "start": 1182,
        "end": 1202
      },
      "declare": false,
      "start": 1151,
      "end": 1202
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chart",
        "optional": false,
        "typeAnnotation": null,
        "start": 1217,
        "end": 1222
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1228
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1246
              },
              "typeArguments": null,
              "start": 1237,
              "end": 1246
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1258
              },
              "typeArguments": null,
              "start": 1249,
              "end": 1258
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1223,
            "end": 1258
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1265
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1268,
                "end": 1273
              },
              "typeArguments": null,
              "start": 1268,
              "end": 1273
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1260,
            "end": 1273
          }
        ],
        "start": 1222,
        "end": 1274
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
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ChartConfigurationCustomTypesPerDataset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1328
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1329,
                        "end": 1334
                      },
                      "typeArguments": null,
                      "start": 1329,
                      "end": 1334
                    }
                  ],
                  "start": 1328,
                  "end": 1335
                },
                "start": 1289,
                "end": 1335
              },
              "start": 1287,
              "end": 1335
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
            "start": 1281,
            "end": 1335
          }
        ],
        "start": 1275,
        "end": 1337
      },
      "abstract": false,
      "declare": true,
      "start": 1203,
      "end": 1337
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1354
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1355,
              "end": 1360
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1369,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1369,
              "end": 1378
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1355,
            "end": 1378
          }
        ],
        "start": 1354,
        "end": 1379
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
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1390,
                "end": 1396
              },
              "start": 1388,
              "end": 1396
            },
            "accessibility": null,
            "static": false,
            "start": 1386,
            "end": 1397
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "beforeDraw",
              "optional": false,
              "typeAnnotation": null,
              "start": 1402,
              "end": 1412
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "chart",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Chart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1420,
                      "end": 1425
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1426,
                            "end": 1431
                          },
                          "typeArguments": null,
                          "start": 1426,
                          "end": 1431
                        }
                      ],
                      "start": 1425,
                      "end": 1432
                    },
                    "start": 1420,
                    "end": 1432
                  },
                  "start": 1418,
                  "end": 1432
                },
                "start": 1413,
                "end": 1432
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1435,
                "end": 1439
              },
              "start": 1433,
              "end": 1439
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1402,
            "end": 1439
          }
        ],
        "start": 1380,
        "end": 1441
      },
      "declare": false,
      "start": 1338,
      "end": 1441
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CoreChartOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1452,
        "end": 1468
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1469,
              "end": 1474
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1492
              },
              "typeArguments": null,
              "start": 1483,
              "end": 1492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1469,
            "end": 1492
          }
        ],
        "start": 1468,
        "end": 1493
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
              "type": "Identifier",
              "decorators": [],
              "name": "backgroundColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1515
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Scriptable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1527
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1528,
                      "end": 1534
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ScriptableContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1536,
                        "end": 1553
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1554,
                              "end": 1559
                            },
                            "typeArguments": null,
                            "start": 1554,
                            "end": 1559
                          }
                        ],
                        "start": 1553,
                        "end": 1560
                      },
                      "start": 1536,
                      "end": 1560
                    }
                  ],
                  "start": 1527,
                  "end": 1561
                },
                "start": 1517,
                "end": 1561
              },
              "start": 1515,
              "end": 1561
            },
            "accessibility": null,
            "static": false,
            "start": 1500,
            "end": 1561
          }
        ],
        "start": 1494,
        "end": 1563
      },
      "declare": false,
      "start": 1442,
      "end": 1563
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimationSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 1574,
        "end": 1587
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1588,
              "end": 1593
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1602,
                "end": 1611
              },
              "typeArguments": null,
              "start": 1602,
              "end": 1611
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1588,
            "end": 1611
          }
        ],
        "start": 1587,
        "end": 1612
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
              "type": "Identifier",
              "decorators": [],
              "name": "delay",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1624
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Scriptable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1626,
                  "end": 1636
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1637,
                      "end": 1643
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ScriptableContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1645,
                        "end": 1662
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1663,
                              "end": 1668
                            },
                            "typeArguments": null,
                            "start": 1663,
                            "end": 1668
                          }
                        ],
                        "start": 1662,
                        "end": 1669
                      },
                      "start": 1645,
                      "end": 1669
                    }
                  ],
                  "start": 1636,
                  "end": 1670
                },
                "start": 1626,
                "end": 1670
              },
              "start": 1624,
              "end": 1670
            },
            "accessibility": null,
            "static": false,
            "start": 1619,
            "end": 1670
          }
        ],
        "start": 1613,
        "end": 1672
      },
      "declare": false,
      "start": 1564,
      "end": 1672
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TooltipModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 1683,
        "end": 1695
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1696,
              "end": 1701
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1719
              },
              "typeArguments": null,
              "start": 1710,
              "end": 1719
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1696,
            "end": 1719
          }
        ],
        "start": 1695,
        "end": 1720
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Element",
            "optional": false,
            "typeAnnotation": null,
            "start": 1729,
            "end": 1736
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1737,
                  "end": 1746
                },
                "typeArguments": null,
                "start": 1737,
                "end": 1746
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TooltipOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1748,
                  "end": 1762
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1763,
                        "end": 1768
                      },
                      "typeArguments": null,
                      "start": 1763,
                      "end": 1768
                    }
                  ],
                  "start": 1762,
                  "end": 1769
                },
                "start": 1748,
                "end": 1769
              }
            ],
            "start": 1736,
            "end": 1770
          },
          "start": 1729,
          "end": 1770
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
              "name": "chart",
              "optional": false,
              "typeAnnotation": null,
              "start": 1777,
              "end": 1782
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Chart",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1789
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1790,
                        "end": 1795
                      },
                      "typeArguments": null,
                      "start": 1790,
                      "end": 1795
                    }
                  ],
                  "start": 1789,
                  "end": 1796
                },
                "start": 1784,
                "end": 1796
              },
              "start": 1782,
              "end": 1796
            },
            "accessibility": null,
            "static": false,
            "start": 1777,
            "end": 1796
          }
        ],
        "start": 1771,
        "end": 1798
      },
      "declare": false,
      "start": 1673,
      "end": 1798
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TooltipDatasetCallbacks",
        "optional": false,
        "typeAnnotation": null,
        "start": 1809,
        "end": 1832
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1833,
              "end": 1838
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1847,
                "end": 1856
              },
              "typeArguments": null,
              "start": 1847,
              "end": 1856
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1833,
            "end": 1856
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1863
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TooltipModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 1866,
                "end": 1878
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1879,
                      "end": 1884
                    },
                    "typeArguments": null,
                    "start": 1879,
                    "end": 1884
                  }
                ],
                "start": 1878,
                "end": 1885
              },
              "start": 1866,
              "end": 1885
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1858,
            "end": 1885
          }
        ],
        "start": 1832,
        "end": 1886
      },
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
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1905
                    },
                    "typeArguments": null,
                    "start": 1900,
                    "end": 1905
                  },
                  "start": 1898,
                  "end": 1905
                },
                "start": 1894,
                "end": 1905
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1908,
                "end": 1912
              },
              "start": 1906,
              "end": 1912
            },
            "start": 1893,
            "end": 1912
          }
        ],
        "start": 1887,
        "end": 1914
      },
      "declare": false,
      "start": 1799,
      "end": 1914
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TooltipOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1925,
        "end": 1939
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1940,
              "end": 1945
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1954,
                "end": 1963
              },
              "typeArguments": null,
              "start": 1954,
              "end": 1963
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1940,
            "end": 1963
          }
        ],
        "start": 1939,
        "end": 1964
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
              "type": "Identifier",
              "decorators": [],
              "name": "animation",
              "optional": false,
              "typeAnnotation": null,
              "start": 1971,
              "end": 1980
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimationSpec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1982,
                  "end": 1995
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 2001
                      },
                      "typeArguments": null,
                      "start": 1996,
                      "end": 2001
                    }
                  ],
                  "start": 1995,
                  "end": 2002
                },
                "start": 1982,
                "end": 2002
              },
              "start": 1980,
              "end": 2002
            },
            "accessibility": null,
            "static": false,
            "start": 1971,
            "end": 2002
          }
        ],
        "start": 1965,
        "end": 2004
      },
      "declare": false,
      "start": 1915,
      "end": 2004
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TooltipDatasetOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 2015,
        "end": 2036
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2037,
              "end": 2042
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2060
              },
              "typeArguments": null,
              "start": 2051,
              "end": 2060
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2037,
            "end": 2060
          }
        ],
        "start": 2036,
        "end": 2061
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
              "type": "Identifier",
              "decorators": [],
              "name": "callbacks",
              "optional": false,
              "typeAnnotation": null,
              "start": 2068,
              "end": 2077
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TooltipDatasetCallbacks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2079,
                  "end": 2102
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2103,
                        "end": 2108
                      },
                      "typeArguments": null,
                      "start": 2103,
                      "end": 2108
                    }
                  ],
                  "start": 2102,
                  "end": 2109
                },
                "start": 2079,
                "end": 2109
              },
              "start": 2077,
              "end": 2109
            },
            "accessibility": null,
            "static": false,
            "start": 2068,
            "end": 2109
          }
        ],
        "start": 2062,
        "end": 2111
      },
      "declare": false,
      "start": 2005,
      "end": 2111
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PluginDatasetOptionsByType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2122,
        "end": 2148
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2154
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2163,
                "end": 2172
              },
              "typeArguments": null,
              "start": 2163,
              "end": 2172
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2149,
            "end": 2172
          }
        ],
        "start": 2148,
        "end": 2173
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
              "type": "Identifier",
              "decorators": [],
              "name": "tooltip",
              "optional": false,
              "typeAnnotation": null,
              "start": 2180,
              "end": 2187
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TooltipDatasetOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2189,
                  "end": 2210
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2211,
                        "end": 2216
                      },
                      "typeArguments": null,
                      "start": 2211,
                      "end": 2216
                    }
                  ],
                  "start": 2210,
                  "end": 2217
                },
                "start": 2189,
                "end": 2217
              },
              "start": 2187,
              "end": 2217
            },
            "accessibility": null,
            "static": false,
            "start": 2180,
            "end": 2217
          }
        ],
        "start": 2174,
        "end": 2219
      },
      "declare": false,
      "start": 2112,
      "end": 2219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartTypeRegistry",
        "optional": false,
        "typeAnnotation": null,
        "start": 2230,
        "end": 2247
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2254,
              "end": 2257
            },
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
                      "name": "defaultDataPoint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2261,
                      "end": 2277
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 2279,
                        "end": 2281
                      },
                      "start": 2277,
                      "end": 2281
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2261,
                    "end": 2281
                  }
                ],
                "start": 2259,
                "end": 2283
              },
              "start": 2257,
              "end": 2283
            },
            "accessibility": null,
            "static": false,
            "start": 2254,
            "end": 2283
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "line",
              "optional": false,
              "typeAnnotation": null,
              "start": 2288,
              "end": 2292
            },
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
                      "name": "defaultDataPoint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2296,
                      "end": 2312
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNullKeyword",
                        "start": 2314,
                        "end": 2318
                      },
                      "start": 2312,
                      "end": 2318
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2296,
                    "end": 2318
                  }
                ],
                "start": 2294,
                "end": 2320
              },
              "start": 2292,
              "end": 2320
            },
            "accessibility": null,
            "static": false,
            "start": 2288,
            "end": 2320
          }
        ],
        "start": 2248,
        "end": 2322
      },
      "declare": false,
      "start": 2220,
      "end": 2322
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2328,
        "end": 2337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ChartTypeRegistry",
            "optional": false,
            "typeAnnotation": null,
            "start": 2346,
            "end": 2363
          },
          "typeArguments": null,
          "start": 2346,
          "end": 2363
        },
        "start": 2340,
        "end": 2363
      },
      "declare": false,
      "start": 2323,
      "end": 2363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DatasetChartOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 2369,
        "end": 2388
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2389,
              "end": 2394
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2412
              },
              "typeArguments": null,
              "start": 2403,
              "end": 2412
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2389,
            "end": 2412
          }
        ],
        "start": 2388,
        "end": 2413
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 2419,
          "end": 2422
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2426,
            "end": 2431
          },
          "typeArguments": null,
          "start": 2426,
          "end": 2431
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2434,
          "end": 2436
        },
        "optional": false,
        "readonly": null,
        "start": 2416,
        "end": 2438
      },
      "declare": false,
      "start": 2364,
      "end": 2438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 2444,
        "end": 2456
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2457,
              "end": 2462
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2480
              },
              "typeArguments": null,
              "start": 2471,
              "end": 2480
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2457,
            "end": 2480
          }
        ],
        "start": 2456,
        "end": 2481
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exclude",
          "optional": false,
          "typeAnnotation": null,
          "start": 2484,
          "end": 2491
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepPartial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2492,
                "end": 2503
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
                          "name": "CoreChartOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2504,
                          "end": 2520
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2521,
                                "end": 2526
                              },
                              "typeArguments": null,
                              "start": 2521,
                              "end": 2526
                            }
                          ],
                          "start": 2520,
                          "end": 2527
                        },
                        "start": 2504,
                        "end": 2527
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DatasetChartOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2530,
                          "end": 2549
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2550,
                                "end": 2555
                              },
                              "typeArguments": null,
                              "start": 2550,
                              "end": 2555
                            }
                          ],
                          "start": 2549,
                          "end": 2556
                        },
                        "start": 2530,
                        "end": 2556
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2559,
                          "end": 2564
                        },
                        "typeArguments": null,
                        "start": 2559,
                        "end": 2564
                      }
                    ],
                    "start": 2504,
                    "end": 2564
                  }
                ],
                "start": 2503,
                "end": 2565
              },
              "start": 2492,
              "end": 2565
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 2567,
              "end": 2576
            }
          ],
          "start": 2491,
          "end": 2577
        },
        "start": 2484,
        "end": 2577
      },
      "declare": false,
      "start": 2439,
      "end": 2577
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartDatasetProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 2588,
        "end": 2610
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2611,
              "end": 2616
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2611,
            "end": 2616
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2618,
              "end": 2623
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2618,
            "end": 2623
          }
        ],
        "start": 2610,
        "end": 2624
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
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2631,
              "end": 2635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2637,
                  "end": 2642
                },
                "typeArguments": null,
                "start": 2637,
                "end": 2642
              },
              "start": 2635,
              "end": 2642
            },
            "accessibility": null,
            "static": false,
            "start": 2631,
            "end": 2642
          }
        ],
        "start": 2625,
        "end": 2644
      },
      "declare": false,
      "start": 2578,
      "end": 2644
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartDataset",
        "optional": false,
        "typeAnnotation": null,
        "start": 2650,
        "end": 2662
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2663,
              "end": 2668
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2677,
                "end": 2686
              },
              "typeArguments": null,
              "start": 2677,
              "end": 2686
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2663,
            "end": 2686
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2688,
              "end": 2693
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2696,
                "end": 2701
              },
              "typeArguments": null,
              "start": 2696,
              "end": 2701
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2688,
            "end": 2701
          }
        ],
        "start": 2662,
        "end": 2702
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DeepPartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 2709,
              "end": 2720
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ChartTypeRegistry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2721,
                          "end": 2738
                        },
                        "typeArguments": null,
                        "start": 2721,
                        "end": 2738
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2739,
                          "end": 2744
                        },
                        "typeArguments": null,
                        "start": 2739,
                        "end": 2744
                      },
                      "start": 2721,
                      "end": 2745
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PluginDatasetOptionsByType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2748,
                        "end": 2774
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2775,
                              "end": 2780
                            },
                            "typeArguments": null,
                            "start": 2775,
                            "end": 2780
                          }
                        ],
                        "start": 2774,
                        "end": 2781
                      },
                      "start": 2748,
                      "end": 2781
                    }
                  ],
                  "start": 2721,
                  "end": 2781
                }
              ],
              "start": 2720,
              "end": 2782
            },
            "start": 2709,
            "end": 2782
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChartDatasetProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 2785,
              "end": 2807
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2808,
                    "end": 2813
                  },
                  "typeArguments": null,
                  "start": 2808,
                  "end": 2813
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2815,
                    "end": 2820
                  },
                  "typeArguments": null,
                  "start": 2815,
                  "end": 2820
                }
              ],
              "start": 2807,
              "end": 2821
            },
            "start": 2785,
            "end": 2821
          }
        ],
        "start": 2709,
        "end": 2821
      },
      "declare": false,
      "start": 2645,
      "end": 2821
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartDatasetCustomTypesPerDataset",
        "optional": false,
        "typeAnnotation": null,
        "start": 2827,
        "end": 2860
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2861,
              "end": 2866
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2875,
                "end": 2884
              },
              "typeArguments": null,
              "start": 2875,
              "end": 2884
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2861,
            "end": 2884
          }
        ],
        "start": 2860,
        "end": 2885
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DeepPartial",
          "optional": false,
          "typeAnnotation": null,
          "start": 2888,
          "end": 2899
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PluginDatasetOptionsByType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2900,
                "end": 2926
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2927,
                      "end": 2932
                    },
                    "typeArguments": null,
                    "start": 2927,
                    "end": 2932
                  }
                ],
                "start": 2926,
                "end": 2933
              },
              "start": 2900,
              "end": 2933
            }
          ],
          "start": 2899,
          "end": 2934
        },
        "start": 2888,
        "end": 2934
      },
      "declare": false,
      "start": 2822,
      "end": 2934
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChartDataCustomTypesPerDataset",
        "optional": false,
        "typeAnnotation": null,
        "start": 2945,
        "end": 2975
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2976,
              "end": 2981
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChartType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2990,
                "end": 2999
              },
              "typeArguments": null,
              "start": 2990,
              "end": 2999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2976,
            "end": 2999
          }
        ],
        "start": 2975,
        "end": 3000
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
              "type": "Identifier",
              "decorators": [],
              "name": "datasets",
              "optional": false,
              "typeAnnotation": null,
              "start": 3007,
              "end": 3015
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ChartDatasetCustomTypesPerDataset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3017,
                  "end": 3050
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3051,
                        "end": 3056
                      },
                      "typeArguments": null,
                      "start": 3051,
                      "end": 3056
                    }
                  ],
                  "start": 3050,
                  "end": 3057
                },
                "start": 3017,
                "end": 3057
              },
              "start": 3015,
              "end": 3057
            },
            "accessibility": null,
            "static": false,
            "start": 3007,
            "end": 3057
          }
        ],
        "start": 3001,
        "end": 3059
      },
      "declare": false,
      "start": 2935,
      "end": 3059
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ChartConfigurationCustomTypesPerDataset",
          "optional": false,
          "typeAnnotation": null,
          "start": 3077,
          "end": 3116
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3117,
                "end": 3122
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ChartType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3131,
                  "end": 3140
                },
                "typeArguments": null,
                "start": 3131,
                "end": 3140
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3117,
              "end": 3140
            }
          ],
          "start": 3116,
          "end": 3141
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
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 3148,
                "end": 3152
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ChartDataCustomTypesPerDataset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3184
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3185,
                          "end": 3190
                        },
                        "typeArguments": null,
                        "start": 3185,
                        "end": 3190
                      }
                    ],
                    "start": 3184,
                    "end": 3191
                  },
                  "start": 3154,
                  "end": 3191
                },
                "start": 3152,
                "end": 3191
              },
              "accessibility": null,
              "static": false,
              "start": 3148,
              "end": 3191
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3203
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ChartOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3205,
                    "end": 3217
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3218,
                          "end": 3223
                        },
                        "typeArguments": null,
                        "start": 3218,
                        "end": 3223
                      }
                    ],
                    "start": 3217,
                    "end": 3224
                  },
                  "start": 3205,
                  "end": 3224
                },
                "start": 3203,
                "end": 3224
              },
              "accessibility": null,
              "static": false,
              "start": 3196,
              "end": 3224
            }
          ],
          "start": 3142,
          "end": 3226
        },
        "declare": false,
        "start": 3067,
        "end": 3226
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3060,
      "end": 3226
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Plugin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3237,
                  "end": 3243
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "\"bar\"",
                        "start": 3244,
                        "end": 3249
                      },
                      "start": 3244,
                      "end": 3249
                    }
                  ],
                  "start": 3243,
                  "end": 3250
                },
                "start": 3237,
                "end": 3250
              },
              "start": 3235,
              "end": 3250
            },
            "start": 3234,
            "end": 3250
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3255,
                  "end": 3257
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 3259,
                  "end": 3262
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3255,
                "end": 3262
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "beforeDraw",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3264,
                  "end": 3274
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chart",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Chart",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3284,
                            "end": 3289
                          },
                          "typeArguments": null,
                          "start": 3284,
                          "end": 3289
                        },
                        "start": 3282,
                        "end": 3289
                      },
                      "start": 3277,
                      "end": 3289
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3294,
                    "end": 3296
                  },
                  "id": null,
                  "generator": false,
                  "start": 3276,
                  "end": 3296
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3264,
                "end": 3296
              }
            ],
            "start": 3253,
            "end": 3298
          },
          "definite": false,
          "start": 3234,
          "end": 3298
        }
      ],
      "declare": false,
      "start": 3228,
      "end": 3299
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3299
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 676,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 684,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 719,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 724,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 743,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 768,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "_DeepPartialObject",
    "start": 785,
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
    "value": "T",
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
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 809,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 819,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "_DeepPartialObject",
    "start": 824,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 853,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 856,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 867,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 887,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 892,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 920,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 928,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 945,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 955,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 962,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 974,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 983,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1003,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "AnyObject",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1040,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "ScriptableContext",
    "start": 1050,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1074,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1082,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "dataset",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 1108,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "ChartDataset",
    "start": 1128,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1141,
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
    "value": ">",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Scriptable",
    "start": 1156,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "TContext",
    "start": 1170,
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
    "value": "=",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "TContext",
    "start": 1188,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1203,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "Chart",
    "start": 1217,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1223,
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
    "value": "ChartType",
    "start": 1237,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1249,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1260,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1268,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "ChartConfigurationCustomTypesPerDataset",
    "start": 1289,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1338,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 1348,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1355,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1361,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1369,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1386,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1390,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "beforeDraw",
    "start": 1402,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 1413,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "Chart",
    "start": 1420,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1426,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1435,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1442,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "CoreChartOptions",
    "start": 1452,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1469,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1475,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1483,
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
    "value": "{",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "backgroundColor",
    "start": 1500,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "Scriptable",
    "start": 1517,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "ScriptableContext",
    "start": 1536,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1564,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "AnimationSpec",
    "start": 1574,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1594,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1602,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "delay",
    "start": 1619,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "Scriptable",
    "start": 1626,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1637,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "ScriptableContext",
    "start": 1645,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1663,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "}",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1673,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "TooltipModel",
    "start": 1683,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1696,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1702,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1710,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1729,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "AnyObject",
    "start": 1737,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "TooltipOptions",
    "start": 1748,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 1777,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "Chart",
    "start": 1784,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1790,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1799,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "TooltipDatasetCallbacks",
    "start": 1809,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1833,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1839,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 1858,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "TooltipModel",
    "start": 1866,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1879,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1894,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1908,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1915,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "TooltipOptions",
    "start": 1925,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1940,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1946,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 1954,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "animation",
    "start": 1971,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "AnimationSpec",
    "start": 1982,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 1996,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2005,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "TooltipDatasetOptions",
    "start": 2015,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2037,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2043,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2051,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "callbacks",
    "start": 2068,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "TooltipDatasetCallbacks",
    "start": 2079,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2103,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2112,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "PluginDatasetOptionsByType",
    "start": 2122,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2149,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2155,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2163,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "tooltip",
    "start": 2180,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "TooltipDatasetOptions",
    "start": 2189,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2211,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 2220,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "ChartTypeRegistry",
    "start": 2230,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "defaultDataPoint",
    "start": 2261,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 2288,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "defaultDataPoint",
    "start": 2296,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2314,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2328,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2340,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "ChartTypeRegistry",
    "start": 2346,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2364,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "DatasetChartOptions",
    "start": 2369,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2389,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2395,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2403,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2419,
    "end": 2422
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2423,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2426,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2439,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "ChartOptions",
    "start": 2444,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2457,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2463,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2471,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 2484,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 2492,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "CoreChartOptions",
    "start": 2504,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2521,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "DatasetChartOptions",
    "start": 2530,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2550,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2559,
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
    "value": ",",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2567,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2578,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "ChartDatasetProperties",
    "start": 2588,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2611,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2618,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2631,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2637,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2645,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "ChartDataset",
    "start": 2650,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2663,
    "end": 2668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2669,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2677,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2688,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2696,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 2709,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "ChartTypeRegistry",
    "start": 2721,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2739,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "PluginDatasetOptionsByType",
    "start": 2748,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2775,
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
    "value": ">",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "ChartDatasetProperties",
    "start": 2785,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2808,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2815,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2822,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "ChartDatasetCustomTypesPerDataset",
    "start": 2827,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2861,
    "end": 2866
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2867,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2875,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 2888,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "PluginDatasetOptionsByType",
    "start": 2900,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2927,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2935,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "ChartDataCustomTypesPerDataset",
    "start": 2945,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 2976,
    "end": 2981
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2982,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 2990,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "datasets",
    "start": 3007,
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
    "value": "ChartDatasetCustomTypesPerDataset",
    "start": 3017,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 3051,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3060,
    "end": 3066
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3067,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "ChartConfigurationCustomTypesPerDataset",
    "start": 3077,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 3117,
    "end": 3122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3123,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "ChartType",
    "start": 3131,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3148,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "ChartDataCustomTypesPerDataset",
    "start": 3154,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 3185,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3196,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "ChartOptions",
    "start": 3205,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "TType",
    "start": 3218,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3228,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "Plugin",
    "start": 3237,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 3244,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3255,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 3259,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "beforeDraw",
    "start": 3264,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "chart",
    "start": 3277,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "Chart",
    "start": 3284,
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
    "type": "Punctuator",
    "value": "{",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3298,
    "end": 3299
  }
]
```
