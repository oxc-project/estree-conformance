__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 82
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 97
          }
        ],
        "start": 83,
        "end": 99
      },
      "declare": false,
      "start": 68,
      "end": 99
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 117
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
            "start": 126,
            "end": 130
          },
          "typeArguments": null,
          "start": 126,
          "end": 130
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 145
          }
        ],
        "start": 131,
        "end": 147
      },
      "declare": false,
      "start": 100,
      "end": 147
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 166
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 182
          },
          "typeArguments": null,
          "start": 175,
          "end": 182
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 185,
            "end": 197
          }
        ],
        "start": 183,
        "end": 199
      },
      "declare": false,
      "start": 148,
      "end": 199
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 822
      },
      "typeParameters": null,
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 832
            },
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
                  "start": 835,
                  "end": 839
                },
                "typeArguments": null,
                "start": 835,
                "end": 839
              },
              "start": 833,
              "end": 839
            },
            "accessibility": null,
            "static": false,
            "start": 829,
            "end": 840
          }
        ],
        "start": 823,
        "end": 842
      },
      "declare": false,
      "start": 811,
      "end": 842
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 854,
        "end": 855
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 865
          },
          "typeArguments": null,
          "start": 864,
          "end": 865
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 884
                },
                "typeArguments": null,
                "start": 877,
                "end": 884
              },
              "start": 875,
              "end": 884
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 884
          }
        ],
        "start": 866,
        "end": 886
      },
      "declare": false,
      "start": 844,
      "end": 886
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 898,
        "end": 900
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 907,
              "end": 908
            },
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
                  "start": 911,
                  "end": 915
                },
                "typeArguments": null,
                "start": 911,
                "end": 915
              },
              "start": 909,
              "end": 915
            },
            "accessibility": null,
            "static": false,
            "start": 907,
            "end": 916
          }
        ],
        "start": 901,
        "end": 919
      },
      "declare": false,
      "start": 888,
      "end": 919
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 931,
        "end": 933
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 942,
            "end": 944
          },
          "typeArguments": null,
          "start": 942,
          "end": 944
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 951,
              "end": 952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 961
                },
                "typeArguments": null,
                "start": 954,
                "end": 961
              },
              "start": 952,
              "end": 961
            },
            "accessibility": null,
            "static": false,
            "start": 951,
            "end": 962
          }
        ],
        "start": 945,
        "end": 964
      },
      "declare": false,
      "start": 921,
      "end": 964
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 978
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 985,
              "end": 988
            },
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
                  "start": 991,
                  "end": 995
                },
                "typeArguments": null,
                "start": 991,
                "end": 995
              },
              "start": 989,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 985,
            "end": 996
          }
        ],
        "start": 979,
        "end": 998
      },
      "declare": false,
      "start": 966,
      "end": 998
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1010,
        "end": 1012
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1023
          },
          "typeArguments": null,
          "start": 1021,
          "end": 1023
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
              "type": "Literal",
              "value": "1.",
              "raw": "'1.'",
              "start": 1030,
              "end": 1034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1036,
                  "end": 1043
                },
                "typeArguments": null,
                "start": 1036,
                "end": 1043
              },
              "start": 1034,
              "end": 1043
            },
            "accessibility": null,
            "static": false,
            "start": 1030,
            "end": 1044
          }
        ],
        "start": 1024,
        "end": 1046
      },
      "declare": false,
      "start": 1000,
      "end": 1046
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1080,
                      "end": 1083
                    },
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
                          "start": 1086,
                          "end": 1090
                        },
                        "typeArguments": null,
                        "start": 1086,
                        "end": 1090
                      },
                      "start": 1084,
                      "end": 1090
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1080,
                    "end": 1091
                  }
                ],
                "start": 1078,
                "end": 1093
              },
              "start": 1076,
              "end": 1093
            },
            "start": 1075,
            "end": 1093
          },
          "init": null,
          "definite": false,
          "start": 1075,
          "end": 1093
        }
      ],
      "declare": false,
      "start": 1071,
      "end": 1094
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1100
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1105,
                  "end": 1108
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1118
                    },
                    "typeArguments": null,
                    "start": 1111,
                    "end": 1118
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1119,
                    "end": 1123
                  },
                  "start": 1110,
                  "end": 1123
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1105,
                "end": 1123
              }
            ],
            "start": 1103,
            "end": 1125
          },
          "definite": false,
          "start": 1099,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1095,
      "end": 1126
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1132
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1135,
              "end": 1139
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1143
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1147
            },
            "start": 1135,
            "end": 1147
          },
          "definite": false,
          "start": 1131,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TwoLevels",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1187
            },
            "typeParameters": null,
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1201
                  },
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
                        "start": 1204,
                        "end": 1208
                      },
                      "typeArguments": null,
                      "start": 1204,
                      "end": 1208
                    },
                    "start": 1202,
                    "end": 1208
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1198,
                  "end": 1209
                }
              ],
              "start": 1188,
              "end": 1215
            },
            "declare": false,
            "start": 1176,
            "end": 1215
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1232
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1242
                },
                "typeArguments": null,
                "start": 1241,
                "end": 1242
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1256
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1258,
                        "end": 1266
                      },
                      "typeArguments": null,
                      "start": 1258,
                      "end": 1266
                    },
                    "start": 1256,
                    "end": 1266
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1253,
                  "end": 1266
                }
              ],
              "start": 1243,
              "end": 1273
            },
            "declare": false,
            "start": 1221,
            "end": 1273
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1291
            },
            "typeParameters": null,
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1302,
                    "end": 1303
                  },
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
                        "start": 1306,
                        "end": 1310
                      },
                      "typeArguments": null,
                      "start": 1306,
                      "end": 1310
                    },
                    "start": 1304,
                    "end": 1310
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1302,
                  "end": 1311
                }
              ],
              "start": 1292,
              "end": 1317
            },
            "declare": false,
            "start": 1279,
            "end": 1317
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1335
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1344,
                "end": 1346
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1357,
                    "end": 1358
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1368
                      },
                      "typeArguments": null,
                      "start": 1360,
                      "end": 1368
                    },
                    "start": 1358,
                    "end": 1368
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1357,
                  "end": 1369
                }
              ],
              "start": 1347,
              "end": 1375
            },
            "declare": false,
            "start": 1323,
            "end": 1375
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1393
            },
            "typeParameters": null,
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 1404,
                    "end": 1407
                  },
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
                        "start": 1410,
                        "end": 1414
                      },
                      "typeArguments": null,
                      "start": 1410,
                      "end": 1414
                    },
                    "start": 1408,
                    "end": 1414
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1404,
                  "end": 1415
                }
              ],
              "start": 1394,
              "end": 1421
            },
            "declare": false,
            "start": 1381,
            "end": 1421
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1437,
              "end": 1439
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1448,
                "end": 1450
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
                    "type": "Literal",
                    "value": "1.",
                    "raw": "'1.'",
                    "start": 1461,
                    "end": 1465
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1467,
                        "end": 1475
                      },
                      "typeArguments": null,
                      "start": 1467,
                      "end": 1475
                    },
                    "start": 1465,
                    "end": 1475
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1461,
                  "end": 1476
                }
              ],
              "start": 1451,
              "end": 1482
            },
            "declare": false,
            "start": 1427,
            "end": 1482
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1527
                          },
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
                                "start": 1530,
                                "end": 1534
                              },
                              "typeArguments": null,
                              "start": 1530,
                              "end": 1534
                            },
                            "start": 1528,
                            "end": 1534
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1524,
                          "end": 1535
                        }
                      ],
                      "start": 1522,
                      "end": 1537
                    },
                    "start": 1520,
                    "end": 1537
                  },
                  "start": 1519,
                  "end": 1537
                },
                "init": null,
                "definite": false,
                "start": 1519,
                "end": 1537
              }
            ],
            "declare": false,
            "start": 1515,
            "end": 1538
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
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
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1553,
                        "end": 1556
                      },
                      "value": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1559,
                            "end": 1567
                          },
                          "typeArguments": null,
                          "start": 1559,
                          "end": 1567
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1568,
                          "end": 1572
                        },
                        "start": 1558,
                        "end": 1572
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1553,
                      "end": 1572
                    }
                  ],
                  "start": 1551,
                  "end": 1574
                },
                "definite": false,
                "start": 1547,
                "end": 1574
              }
            ],
            "declare": false,
            "start": 1543,
            "end": 1575
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1585
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1588,
                    "end": 1592
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1595,
                    "end": 1596
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1599,
                    "end": 1600
                  },
                  "start": 1588,
                  "end": 1600
                },
                "definite": false,
                "start": 1584,
                "end": 1600
              }
            ],
            "declare": false,
            "start": 1580,
            "end": 1601
          }
        ],
        "start": 1170,
        "end": 1603
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1150,
      "end": 1603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 1603
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 110,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 158,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 811,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 844,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 856,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 877,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 888,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 898,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "Base",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 921,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 931,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 934,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 942,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 954,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 966,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 985,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 991,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1000,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "S3",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1013,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 1030,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1036,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "Foo",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1111,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1150,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "TwoLevels",
    "start": 1160,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1176,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1204,
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
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1221,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1258,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1279,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1306,
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
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1323,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1336,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1360,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1381,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1427,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "S3",
    "start": 1437,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1440,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1467,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "Foo",
    "start": 1553,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1568,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "}",
    "start": 1602,
    "end": 1603
  }
]
```
