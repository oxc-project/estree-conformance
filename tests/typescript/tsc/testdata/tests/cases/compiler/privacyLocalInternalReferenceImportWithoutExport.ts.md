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
        "name": "m_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 39
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
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 68
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 69,
                "end": 76
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 102
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 118
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 113,
                    "end": 118
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 134
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 128,
                    "end": 134
                  }
                ],
                "start": 103,
                "end": 140
              },
              "const": false,
              "declare": false,
              "start": 88,
              "end": 140
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 140
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 170
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "name": "c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 203
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 190,
                      "end": 205
                    },
                    "start": 183,
                    "end": 206
                  }
                ],
                "start": 173,
                "end": 212
              },
              "expression": false,
              "start": 152,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 145,
            "end": 212
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 237
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 253
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 240,
                    "end": 255
                  },
                  "definite": false,
                  "start": 228,
                  "end": 255
                }
              ],
              "declare": false,
              "start": 224,
              "end": 256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 256
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 287
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 288,
                "end": 295
              },
              "declare": false,
              "start": 268,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 261,
            "end": 295
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 327
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 352
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 353,
                        "end": 364
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 345,
                      "end": 364
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 338,
                    "end": 364
                  }
                ],
                "start": 328,
                "end": 370
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 307,
              "end": 370
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 300,
            "end": 370
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 402
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 431
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 432,
                        "end": 443
                      },
                      "declare": false,
                      "start": 420,
                      "end": 443
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 413,
                    "end": 443
                  }
                ],
                "start": 403,
                "end": 449
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 382,
              "end": 449
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 375,
            "end": 449
          }
        ],
        "start": 40,
        "end": 451
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 20,
      "end": 451
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 497
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
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 525
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 526,
                  "end": 533
                },
                "abstract": false,
                "declare": false,
                "start": 511,
                "end": 533
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 504,
              "end": 533
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 558
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Happy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 574
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 569,
                      "end": 574
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 584,
                        "end": 590
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 584,
                      "end": 590
                    }
                  ],
                  "start": 559,
                  "end": 596
                },
                "const": false,
                "declare": false,
                "start": 545,
                "end": 596
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 538,
              "end": 596
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 625
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                          "name": "c_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 657
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 645,
                        "end": 659
                      },
                      "start": 638,
                      "end": 660
                    }
                  ],
                  "start": 628,
                  "end": 666
                },
                "expression": false,
                "start": 608,
                "end": 666
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 601,
              "end": 666
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 690
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 693,
                      "end": 695
                    },
                    "definite": false,
                    "start": 682,
                    "end": 695
                  }
                ],
                "declare": false,
                "start": 678,
                "end": 696
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 671,
              "end": 696
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 726
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 727,
                  "end": 734
                },
                "declare": false,
                "start": 708,
                "end": 734
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 701,
              "end": 734
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 765
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 790
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 791,
                          "end": 802
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 783,
                        "end": 802
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 776,
                      "end": 802
                    }
                  ],
                  "start": 766,
                  "end": 808
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 746,
                "end": 808
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 739,
              "end": 808
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 839
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 867,
                          "end": 868
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 869,
                          "end": 880
                        },
                        "declare": false,
                        "start": 857,
                        "end": 880
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 850,
                      "end": 880
                    }
                  ],
                  "start": 840,
                  "end": 886
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 820,
                "end": 886
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 813,
              "end": 886
            }
          ],
          "start": 498,
          "end": 888
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 479,
        "end": 888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 888
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "import_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 907,
          "end": 920
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 1008
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1011,
                  "end": 1020
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1030
                },
                "start": 1011,
                "end": 1030
              },
              "importKind": "value",
              "start": 981,
              "end": 1031
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1063
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1075
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1085
                },
                "start": 1066,
                "end": 1085
              },
              "importKind": "value",
              "start": 1036,
              "end": 1086
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1118
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1130
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1140
                },
                "start": 1121,
                "end": 1140
              },
              "importKind": "value",
              "start": 1091,
              "end": 1141
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1173
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1185
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1195
                },
                "start": 1176,
                "end": 1195
              },
              "importKind": "value",
              "start": 1146,
              "end": 1196
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1228
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1240
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1250
                },
                "start": 1231,
                "end": 1250
              },
              "importKind": "value",
              "start": 1201,
              "end": 1251
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1284
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1296
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1307
                },
                "start": 1287,
                "end": 1307
              },
              "importKind": "value",
              "start": 1256,
              "end": 1308
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1341
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1353
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1364
                },
                "start": 1344,
                "end": 1364
              },
              "importKind": "value",
              "start": 1313,
              "end": 1365
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
                    "name": "privateUse_im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1403,
                    "end": 1434
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1441,
                      "end": 1461
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1437,
                    "end": 1463
                  },
                  "definite": false,
                  "start": 1403,
                  "end": 1463
                }
              ],
              "declare": false,
              "start": 1399,
              "end": 1464
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1480,
                      "end": 1510
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1513,
                      "end": 1539
                    },
                    "definite": false,
                    "start": 1480,
                    "end": 1539
                  }
                ],
                "declare": false,
                "start": 1476,
                "end": 1540
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1469,
              "end": 1540
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
                    "name": "privateUse_im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1549,
                    "end": 1580
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1583,
                      "end": 1603
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1604,
                      "end": 1609
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1583,
                    "end": 1609
                  },
                  "definite": false,
                  "start": 1549,
                  "end": 1609
                }
              ],
              "declare": false,
              "start": 1545,
              "end": 1610
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1656
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1659,
                        "end": 1679
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1680,
                        "end": 1686
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1659,
                      "end": 1686
                    },
                    "definite": false,
                    "start": 1626,
                    "end": 1686
                  }
                ],
                "declare": false,
                "start": 1622,
                "end": 1687
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1615,
              "end": 1687
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
                    "name": "privateUse_im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1696,
                    "end": 1727
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1730,
                      "end": 1750
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1730,
                    "end": 1752
                  },
                  "definite": false,
                  "start": 1696,
                  "end": 1752
                }
              ],
              "declare": false,
              "start": 1692,
              "end": 1753
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1769,
                      "end": 1799
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1802,
                        "end": 1822
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1802,
                      "end": 1824
                    },
                    "definite": false,
                    "start": 1769,
                    "end": 1824
                  }
                ],
                "declare": false,
                "start": 1765,
                "end": 1825
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1758,
              "end": 1825
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
                    "name": "privateUse_im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1834,
                    "end": 1865
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1888
                  },
                  "definite": false,
                  "start": 1834,
                  "end": 1888
                }
              ],
              "declare": false,
              "start": 1830,
              "end": 1889
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1935
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1958
                    },
                    "definite": false,
                    "start": 1905,
                    "end": 1958
                  }
                ],
                "declare": false,
                "start": 1901,
                "end": 1959
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1894,
              "end": 1959
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
                    "name": "privateUse_im_private_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2001,
                          "end": 2021
                        },
                        "typeArguments": null,
                        "start": 2001,
                        "end": 2021
                      },
                      "start": 1999,
                      "end": 2021
                    },
                    "start": 1968,
                    "end": 2021
                  },
                  "init": null,
                  "definite": false,
                  "start": 1968,
                  "end": 2021
                }
              ],
              "declare": false,
              "start": 1964,
              "end": 2022
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_i_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_i_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2070,
                            "end": 2090
                          },
                          "typeArguments": null,
                          "start": 2070,
                          "end": 2090
                        },
                        "start": 2068,
                        "end": 2090
                      },
                      "start": 2038,
                      "end": 2090
                    },
                    "init": null,
                    "definite": false,
                    "start": 2038,
                    "end": 2090
                  }
                ],
                "declare": false,
                "start": 2034,
                "end": 2091
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2027,
              "end": 2091
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
                    "name": "privateUse_im_private_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2100,
                    "end": 2132
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2139,
                        "end": 2160
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2161,
                        "end": 2162
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2139,
                      "end": 2162
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2135,
                    "end": 2164
                  },
                  "definite": false,
                  "start": 2100,
                  "end": 2164
                }
              ],
              "declare": false,
              "start": 2096,
              "end": 2165
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2181,
                      "end": 2212
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mi_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2219,
                          "end": 2240
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2241,
                          "end": 2242
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2219,
                        "end": 2242
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2215,
                      "end": 2244
                    },
                    "definite": false,
                    "start": 2181,
                    "end": 2244
                  }
                ],
                "declare": false,
                "start": 2177,
                "end": 2245
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2170,
              "end": 2245
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
                    "name": "privateUse_im_private_mu_private",
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
                            "name": "im_private_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2288,
                            "end": 2309
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2310,
                            "end": 2311
                          },
                          "start": 2288,
                          "end": 2311
                        },
                        "typeArguments": null,
                        "start": 2288,
                        "end": 2311
                      },
                      "start": 2286,
                      "end": 2311
                    },
                    "start": 2254,
                    "end": 2311
                  },
                  "init": null,
                  "definite": false,
                  "start": 2254,
                  "end": 2311
                }
              ],
              "declare": false,
              "start": 2250,
              "end": 2312
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_mu_private",
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
                              "name": "im_private_mu_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2361,
                              "end": 2382
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "start": 2361,
                            "end": 2384
                          },
                          "typeArguments": null,
                          "start": 2361,
                          "end": 2384
                        },
                        "start": 2359,
                        "end": 2384
                      },
                      "start": 2328,
                      "end": 2384
                    },
                    "init": null,
                    "definite": false,
                    "start": 2328,
                    "end": 2384
                  }
                ],
                "declare": false,
                "start": 2324,
                "end": 2385
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2317,
              "end": 2385
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2452,
                "end": 2471
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2474,
                  "end": 2482
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2483,
                  "end": 2491
                },
                "start": 2474,
                "end": 2491
              },
              "importKind": "value",
              "start": 2445,
              "end": 2492
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2504,
                "end": 2523
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2526,
                  "end": 2534
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2535,
                  "end": 2543
                },
                "start": 2526,
                "end": 2543
              },
              "importKind": "value",
              "start": 2497,
              "end": 2544
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2556,
                "end": 2575
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2578,
                  "end": 2586
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2587,
                  "end": 2595
                },
                "start": 2578,
                "end": 2595
              },
              "importKind": "value",
              "start": 2549,
              "end": 2596
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2608,
                "end": 2627
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2630,
                  "end": 2638
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2639,
                  "end": 2647
                },
                "start": 2630,
                "end": 2647
              },
              "importKind": "value",
              "start": 2601,
              "end": 2648
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2660,
                "end": 2679
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2682,
                  "end": 2690
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2699
                },
                "start": 2682,
                "end": 2699
              },
              "importKind": "value",
              "start": 2653,
              "end": 2700
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2712,
                "end": 2732
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2735,
                  "end": 2743
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2744,
                  "end": 2753
                },
                "start": 2735,
                "end": 2753
              },
              "importKind": "value",
              "start": 2705,
              "end": 2754
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2766,
                "end": 2786
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2789,
                  "end": 2797
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2798,
                  "end": 2807
                },
                "start": 2789,
                "end": 2807
              },
              "importKind": "value",
              "start": 2759,
              "end": 2808
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
                    "name": "privateUse_im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2846,
                    "end": 2876
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2883,
                      "end": 2902
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2879,
                    "end": 2904
                  },
                  "definite": false,
                  "start": 2846,
                  "end": 2904
                }
              ],
              "declare": false,
              "start": 2842,
              "end": 2905
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2921,
                      "end": 2950
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2957,
                        "end": 2976
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2953,
                      "end": 2978
                    },
                    "definite": false,
                    "start": 2921,
                    "end": 2978
                  }
                ],
                "declare": false,
                "start": 2917,
                "end": 2979
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2910,
              "end": 2979
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
                    "name": "privateUse_im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2988,
                    "end": 3018
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3021,
                      "end": 3040
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3041,
                      "end": 3046
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3021,
                    "end": 3046
                  },
                  "definite": false,
                  "start": 2988,
                  "end": 3046
                }
              ],
              "declare": false,
              "start": 2984,
              "end": 3047
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3063,
                      "end": 3092
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3095,
                        "end": 3114
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3115,
                        "end": 3121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3095,
                      "end": 3121
                    },
                    "definite": false,
                    "start": 3063,
                    "end": 3121
                  }
                ],
                "declare": false,
                "start": 3059,
                "end": 3122
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3052,
              "end": 3122
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
                    "name": "privateUse_im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3131,
                    "end": 3161
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3164,
                      "end": 3183
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3164,
                    "end": 3185
                  },
                  "definite": false,
                  "start": 3131,
                  "end": 3185
                }
              ],
              "declare": false,
              "start": 3127,
              "end": 3186
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3202,
                      "end": 3231
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3234,
                        "end": 3253
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3234,
                      "end": 3255
                    },
                    "definite": false,
                    "start": 3202,
                    "end": 3255
                  }
                ],
                "declare": false,
                "start": 3198,
                "end": 3256
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3191,
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
                    "name": "privateUse_im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3265,
                    "end": 3295
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3298,
                    "end": 3317
                  },
                  "definite": false,
                  "start": 3265,
                  "end": 3317
                }
              ],
              "declare": false,
              "start": 3261,
              "end": 3318
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3334,
                      "end": 3363
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3366,
                      "end": 3385
                    },
                    "definite": false,
                    "start": 3334,
                    "end": 3385
                  }
                ],
                "declare": false,
                "start": 3330,
                "end": 3386
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3323,
              "end": 3386
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
                    "name": "privateUse_im_private_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3427,
                          "end": 3446
                        },
                        "typeArguments": null,
                        "start": 3427,
                        "end": 3446
                      },
                      "start": 3425,
                      "end": 3446
                    },
                    "start": 3395,
                    "end": 3446
                  },
                  "init": null,
                  "definite": false,
                  "start": 3395,
                  "end": 3446
                }
              ],
              "declare": false,
              "start": 3391,
              "end": 3447
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_i_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_i_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3494,
                            "end": 3513
                          },
                          "typeArguments": null,
                          "start": 3494,
                          "end": 3513
                        },
                        "start": 3492,
                        "end": 3513
                      },
                      "start": 3463,
                      "end": 3513
                    },
                    "init": null,
                    "definite": false,
                    "start": 3463,
                    "end": 3513
                  }
                ],
                "declare": false,
                "start": 3459,
                "end": 3514
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3452,
              "end": 3514
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
                    "name": "privateUse_im_private_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3554
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3561,
                        "end": 3581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3582,
                        "end": 3583
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3561,
                      "end": 3583
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3557,
                    "end": 3585
                  },
                  "definite": false,
                  "start": 3523,
                  "end": 3585
                }
              ],
              "declare": false,
              "start": 3519,
              "end": 3586
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3602,
                      "end": 3632
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mi_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3639,
                          "end": 3659
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3660,
                          "end": 3661
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3639,
                        "end": 3661
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3635,
                      "end": 3663
                    },
                    "definite": false,
                    "start": 3602,
                    "end": 3663
                  }
                ],
                "declare": false,
                "start": 3598,
                "end": 3664
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3591,
              "end": 3664
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
                    "name": "privateUse_im_private_mu_public",
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
                            "name": "im_private_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3706,
                            "end": 3726
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3727,
                            "end": 3728
                          },
                          "start": 3706,
                          "end": 3728
                        },
                        "typeArguments": null,
                        "start": 3706,
                        "end": 3728
                      },
                      "start": 3704,
                      "end": 3728
                    },
                    "start": 3673,
                    "end": 3728
                  },
                  "init": null,
                  "definite": false,
                  "start": 3673,
                  "end": 3728
                }
              ],
              "declare": false,
              "start": 3669,
              "end": 3729
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_private_mu_public",
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
                              "name": "im_private_mu_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3777,
                              "end": 3797
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3798,
                              "end": 3799
                            },
                            "start": 3777,
                            "end": 3799
                          },
                          "typeArguments": null,
                          "start": 3777,
                          "end": 3799
                        },
                        "start": 3775,
                        "end": 3799
                      },
                      "start": 3745,
                      "end": 3799
                    },
                    "init": null,
                    "definite": false,
                    "start": 3745,
                    "end": 3799
                  }
                ],
                "declare": false,
                "start": 3741,
                "end": 3800
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3734,
              "end": 3800
            }
          ],
          "start": 921,
          "end": 3802
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 897,
        "end": 3802
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 890,
      "end": 3802
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 3814,
        "end": 3828
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3896,
              "end": 3916
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3919,
                "end": 3928
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3929,
                "end": 3938
              },
              "start": 3919,
              "end": 3938
            },
            "importKind": "value",
            "start": 3889,
            "end": 3939
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3951,
              "end": 3971
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3974,
                "end": 3983
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3984,
                "end": 3993
              },
              "start": 3974,
              "end": 3993
            },
            "importKind": "value",
            "start": 3944,
            "end": 3994
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4006,
              "end": 4026
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4029,
                "end": 4038
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4039,
                "end": 4048
              },
              "start": 4029,
              "end": 4048
            },
            "importKind": "value",
            "start": 3999,
            "end": 4049
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4061,
              "end": 4081
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4084,
                "end": 4093
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4094,
                "end": 4103
              },
              "start": 4084,
              "end": 4103
            },
            "importKind": "value",
            "start": 4054,
            "end": 4104
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4116,
              "end": 4136
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4139,
                "end": 4148
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4149,
                "end": 4158
              },
              "start": 4139,
              "end": 4158
            },
            "importKind": "value",
            "start": 4109,
            "end": 4159
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4171,
              "end": 4192
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4195,
                "end": 4204
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4205,
                "end": 4215
              },
              "start": 4195,
              "end": 4215
            },
            "importKind": "value",
            "start": 4164,
            "end": 4216
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4228,
              "end": 4249
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4252,
                "end": 4261
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4262,
                "end": 4272
              },
              "start": 4252,
              "end": 4272
            },
            "importKind": "value",
            "start": 4221,
            "end": 4273
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
                  "name": "privateUse_im_private_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4311,
                  "end": 4342
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4349,
                    "end": 4369
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4345,
                  "end": 4371
                },
                "definite": false,
                "start": 4311,
                "end": 4371
              }
            ],
            "declare": false,
            "start": 4307,
            "end": 4372
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4388,
                    "end": 4418
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4425,
                      "end": 4445
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4421,
                    "end": 4447
                  },
                  "definite": false,
                  "start": 4388,
                  "end": 4447
                }
              ],
              "declare": false,
              "start": 4384,
              "end": 4448
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4377,
            "end": 4448
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
                  "name": "privateUse_im_private_e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4457,
                  "end": 4488
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4491,
                    "end": 4511
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4512,
                    "end": 4517
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4491,
                  "end": 4517
                },
                "definite": false,
                "start": 4457,
                "end": 4517
              }
            ],
            "declare": false,
            "start": 4453,
            "end": 4518
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4534,
                    "end": 4564
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4567,
                      "end": 4587
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4588,
                      "end": 4594
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4567,
                    "end": 4594
                  },
                  "definite": false,
                  "start": 4534,
                  "end": 4594
                }
              ],
              "declare": false,
              "start": 4530,
              "end": 4595
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4523,
            "end": 4595
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
                  "name": "privateUse_im_private_f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4604,
                  "end": 4635
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4638,
                    "end": 4658
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4638,
                  "end": 4660
                },
                "definite": false,
                "start": 4604,
                "end": 4660
              }
            ],
            "declare": false,
            "start": 4600,
            "end": 4661
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4677,
                    "end": 4707
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4710,
                      "end": 4730
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4710,
                    "end": 4732
                  },
                  "definite": false,
                  "start": 4677,
                  "end": 4732
                }
              ],
              "declare": false,
              "start": 4673,
              "end": 4733
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4666,
            "end": 4733
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
                  "name": "privateUse_im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4742,
                  "end": 4773
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4776,
                  "end": 4796
                },
                "definite": false,
                "start": 4742,
                "end": 4796
              }
            ],
            "declare": false,
            "start": 4738,
            "end": 4797
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4813,
                    "end": 4843
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4846,
                    "end": 4866
                  },
                  "definite": false,
                  "start": 4813,
                  "end": 4866
                }
              ],
              "declare": false,
              "start": 4809,
              "end": 4867
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4802,
            "end": 4867
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
                  "name": "privateUse_im_private_i_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4909,
                        "end": 4929
                      },
                      "typeArguments": null,
                      "start": 4909,
                      "end": 4929
                    },
                    "start": 4907,
                    "end": 4929
                  },
                  "start": 4876,
                  "end": 4929
                },
                "init": null,
                "definite": false,
                "start": 4876,
                "end": 4929
              }
            ],
            "declare": false,
            "start": 4872,
            "end": 4930
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4978,
                          "end": 4998
                        },
                        "typeArguments": null,
                        "start": 4978,
                        "end": 4998
                      },
                      "start": 4976,
                      "end": 4998
                    },
                    "start": 4946,
                    "end": 4998
                  },
                  "init": null,
                  "definite": false,
                  "start": 4946,
                  "end": 4998
                }
              ],
              "declare": false,
              "start": 4942,
              "end": 4999
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4935,
            "end": 4999
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
                  "name": "privateUse_im_private_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5008,
                  "end": 5040
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5047,
                      "end": 5068
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5069,
                      "end": 5070
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5047,
                    "end": 5070
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5043,
                  "end": 5072
                },
                "definite": false,
                "start": 5008,
                "end": 5072
              }
            ],
            "declare": false,
            "start": 5004,
            "end": 5073
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5089,
                    "end": 5120
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5127,
                        "end": 5148
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5149,
                        "end": 5150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5127,
                      "end": 5150
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5123,
                    "end": 5152
                  },
                  "definite": false,
                  "start": 5089,
                  "end": 5152
                }
              ],
              "declare": false,
              "start": 5085,
              "end": 5153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5078,
            "end": 5153
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
                  "name": "privateUse_im_private_mu_private",
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
                          "name": "im_private_mu_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5196,
                          "end": 5217
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5218,
                          "end": 5219
                        },
                        "start": 5196,
                        "end": 5219
                      },
                      "typeArguments": null,
                      "start": 5196,
                      "end": 5219
                    },
                    "start": 5194,
                    "end": 5219
                  },
                  "start": 5162,
                  "end": 5219
                },
                "init": null,
                "definite": false,
                "start": 5162,
                "end": 5219
              }
            ],
            "declare": false,
            "start": 5158,
            "end": 5220
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_private",
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
                            "name": "im_private_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5269,
                            "end": 5290
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5291,
                            "end": 5292
                          },
                          "start": 5269,
                          "end": 5292
                        },
                        "typeArguments": null,
                        "start": 5269,
                        "end": 5292
                      },
                      "start": 5267,
                      "end": 5292
                    },
                    "start": 5236,
                    "end": 5292
                  },
                  "init": null,
                  "definite": false,
                  "start": 5236,
                  "end": 5292
                }
              ],
              "declare": false,
              "start": 5232,
              "end": 5293
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5225,
            "end": 5293
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5358,
              "end": 5377
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5380,
                "end": 5388
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5389,
                "end": 5397
              },
              "start": 5380,
              "end": 5397
            },
            "importKind": "value",
            "start": 5351,
            "end": 5398
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5410,
              "end": 5429
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5432,
                "end": 5440
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5441,
                "end": 5449
              },
              "start": 5432,
              "end": 5449
            },
            "importKind": "value",
            "start": 5403,
            "end": 5450
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5462,
              "end": 5481
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5484,
                "end": 5492
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5493,
                "end": 5501
              },
              "start": 5484,
              "end": 5501
            },
            "importKind": "value",
            "start": 5455,
            "end": 5502
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5514,
              "end": 5533
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5536,
                "end": 5544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5545,
                "end": 5553
              },
              "start": 5536,
              "end": 5553
            },
            "importKind": "value",
            "start": 5507,
            "end": 5554
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5566,
              "end": 5585
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5596
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5597,
                "end": 5605
              },
              "start": 5588,
              "end": 5605
            },
            "importKind": "value",
            "start": 5559,
            "end": 5606
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5618,
              "end": 5638
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5641,
                "end": 5649
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5650,
                "end": 5659
              },
              "start": 5641,
              "end": 5659
            },
            "importKind": "value",
            "start": 5611,
            "end": 5660
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5672,
              "end": 5692
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5695,
                "end": 5703
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5704,
                "end": 5713
              },
              "start": 5695,
              "end": 5713
            },
            "importKind": "value",
            "start": 5665,
            "end": 5714
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
                  "name": "privateUse_im_private_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5752,
                  "end": 5782
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5789,
                    "end": 5808
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5785,
                  "end": 5810
                },
                "definite": false,
                "start": 5752,
                "end": 5810
              }
            ],
            "declare": false,
            "start": 5748,
            "end": 5811
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5827,
                    "end": 5856
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5863,
                      "end": 5882
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5859,
                    "end": 5884
                  },
                  "definite": false,
                  "start": 5827,
                  "end": 5884
                }
              ],
              "declare": false,
              "start": 5823,
              "end": 5885
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5816,
            "end": 5885
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
                  "name": "privateUse_im_private_e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5894,
                  "end": 5924
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5927,
                    "end": 5946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5947,
                    "end": 5952
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5927,
                  "end": 5952
                },
                "definite": false,
                "start": 5894,
                "end": 5952
              }
            ],
            "declare": false,
            "start": 5890,
            "end": 5953
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5969,
                    "end": 5998
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6001,
                      "end": 6020
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6021,
                      "end": 6027
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6001,
                    "end": 6027
                  },
                  "definite": false,
                  "start": 5969,
                  "end": 6027
                }
              ],
              "declare": false,
              "start": 5965,
              "end": 6028
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5958,
            "end": 6028
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
                  "name": "privateUse_im_private_f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6037,
                  "end": 6067
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6070,
                    "end": 6089
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 6070,
                  "end": 6091
                },
                "definite": false,
                "start": 6037,
                "end": 6091
              }
            ],
            "declare": false,
            "start": 6033,
            "end": 6092
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6108,
                    "end": 6137
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6140,
                      "end": 6159
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6140,
                    "end": 6161
                  },
                  "definite": false,
                  "start": 6108,
                  "end": 6161
                }
              ],
              "declare": false,
              "start": 6104,
              "end": 6162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6097,
            "end": 6162
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
                  "name": "privateUse_im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6171,
                  "end": 6201
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6204,
                  "end": 6223
                },
                "definite": false,
                "start": 6171,
                "end": 6223
              }
            ],
            "declare": false,
            "start": 6167,
            "end": 6224
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6240,
                    "end": 6269
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6272,
                    "end": 6291
                  },
                  "definite": false,
                  "start": 6240,
                  "end": 6291
                }
              ],
              "declare": false,
              "start": 6236,
              "end": 6292
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6229,
            "end": 6292
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
                  "name": "privateUse_im_private_i_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6333,
                        "end": 6352
                      },
                      "typeArguments": null,
                      "start": 6333,
                      "end": 6352
                    },
                    "start": 6331,
                    "end": 6352
                  },
                  "start": 6301,
                  "end": 6352
                },
                "init": null,
                "definite": false,
                "start": 6301,
                "end": 6352
              }
            ],
            "declare": false,
            "start": 6297,
            "end": 6353
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6400,
                          "end": 6419
                        },
                        "typeArguments": null,
                        "start": 6400,
                        "end": 6419
                      },
                      "start": 6398,
                      "end": 6419
                    },
                    "start": 6369,
                    "end": 6419
                  },
                  "init": null,
                  "definite": false,
                  "start": 6369,
                  "end": 6419
                }
              ],
              "declare": false,
              "start": 6365,
              "end": 6420
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6358,
            "end": 6420
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
                  "name": "privateUse_im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6429,
                  "end": 6460
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6467,
                      "end": 6487
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6488,
                      "end": 6489
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6467,
                    "end": 6489
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 6463,
                  "end": 6491
                },
                "definite": false,
                "start": 6429,
                "end": 6491
              }
            ],
            "declare": false,
            "start": 6425,
            "end": 6492
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6508,
                    "end": 6538
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6545,
                        "end": 6565
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6566,
                        "end": 6567
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6545,
                      "end": 6567
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6541,
                    "end": 6569
                  },
                  "definite": false,
                  "start": 6508,
                  "end": 6569
                }
              ],
              "declare": false,
              "start": 6504,
              "end": 6570
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6497,
            "end": 6570
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
                  "name": "privateUse_im_private_mu_public",
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
                          "name": "im_private_mu_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6612,
                          "end": 6632
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6633,
                          "end": 6634
                        },
                        "start": 6612,
                        "end": 6634
                      },
                      "typeArguments": null,
                      "start": 6612,
                      "end": 6634
                    },
                    "start": 6610,
                    "end": 6634
                  },
                  "start": 6579,
                  "end": 6634
                },
                "init": null,
                "definite": false,
                "start": 6579,
                "end": 6634
              }
            ],
            "declare": false,
            "start": 6575,
            "end": 6635
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_public",
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
                            "name": "im_private_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6683,
                            "end": 6703
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6704,
                            "end": 6705
                          },
                          "start": 6683,
                          "end": 6705
                        },
                        "typeArguments": null,
                        "start": 6683,
                        "end": 6705
                      },
                      "start": 6681,
                      "end": 6705
                    },
                    "start": 6651,
                    "end": 6705
                  },
                  "init": null,
                  "definite": false,
                  "start": 6651,
                  "end": 6705
                }
              ],
              "declare": false,
              "start": 6647,
              "end": 6706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6640,
            "end": 6706
          }
        ],
        "start": 3829,
        "end": 6708
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3804,
      "end": 6708
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 6708
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 20,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 30,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 59,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 145,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 228,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 244,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 261,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 300,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 307,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 317,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 338,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 375,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 382,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 413,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 420,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 479,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 489,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 504,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 511,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 517,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 538,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 545,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 601,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 649,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 671,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 701,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 708,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 718,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 739,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 746,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 756,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 776,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 783,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 813,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 820,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 830,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 850,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 857,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 890,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 897,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "import_public",
    "start": 907,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 981,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 988,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1011,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1043,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1066,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 1076,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1098,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1121,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 1131,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1153,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1176,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 1186,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 1208,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1231,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 1241,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 1263,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1287,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 1297,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 1320,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1344,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 1354,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_private",
    "start": 1403,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1441,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "export",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_private",
    "start": 1480,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1517,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_private",
    "start": 1549,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1583,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 1604,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_private",
    "start": 1626,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1659,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 1680,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1692,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_private",
    "start": 1696,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1730,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1758,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1765,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_private",
    "start": 1769,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1802,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_private",
    "start": 1834,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1868,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1901,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_private",
    "start": 1905,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1938,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1964,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_private",
    "start": 1968,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 2001,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2027,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_private",
    "start": 2038,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 2070,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 2100,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2139,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2170,
    "end": 2176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 2181,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2215,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2219,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2250,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 2254,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2288,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2317,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 2328,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2361,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2445,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2452,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2474,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 2483,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2497,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 2504,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2526,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 2535,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2549,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 2556,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2578,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 2587,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2601,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 2608,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2630,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 2639,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2653,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 2660,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2682,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 2691,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2705,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 2712,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2735,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 2744,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2759,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 2766,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2789,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 2798,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2842,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_public",
    "start": 2846,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2879,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2883,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2910,
    "end": 2916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2917,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_public",
    "start": 2921,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2953,
    "end": 2956
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2957,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2984,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_public",
    "start": 2988,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 3021,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 3041,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3052,
    "end": 3058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3059,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_public",
    "start": 3063,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 3095,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3127,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_public",
    "start": 3131,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 3164,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3191,
    "end": 3197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3198,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_public",
    "start": 3202,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 3234,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 3261,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_public",
    "start": 3265,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3298,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3323,
    "end": 3329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3330,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_public",
    "start": 3334,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3366,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3391,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_public",
    "start": 3395,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3427,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3452,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3459,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_public",
    "start": 3463,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3494,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3519,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 3523,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3557,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3561,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3591,
    "end": 3597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3598,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 3602,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3635,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3639,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3669,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_public",
    "start": 3673,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3706,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3734,
    "end": 3740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3741,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_public",
    "start": 3745,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3777,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3804,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "import_private",
    "start": 3814,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3889,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 3896,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 3919,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 3929,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3944,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 3951,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 3974,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 3984,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3999,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4006,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4029,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 4039,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4054,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4061,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4084,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 4094,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4109,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4116,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4139,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 4149,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4164,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 4171,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4195,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 4205,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4221,
    "end": 4227
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 4228,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4252,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 4262,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4307,
    "end": 4310
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_private",
    "start": 4311,
    "end": 4342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4345,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 4349,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4377,
    "end": 4383
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4384,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_private",
    "start": 4388,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4421,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 4425,
    "end": 4445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4453,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_private",
    "start": 4457,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 4491,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 4512,
    "end": 4517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4523,
    "end": 4529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_private",
    "start": 4534,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 4567,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 4588,
    "end": 4594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4600,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_private",
    "start": 4604,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4638,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4666,
    "end": 4672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4673,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_private",
    "start": 4677,
    "end": 4707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4710,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4738,
    "end": 4741
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_private",
    "start": 4742,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4776,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4802,
    "end": 4808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4809,
    "end": 4812
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_private",
    "start": 4813,
    "end": 4843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4846,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4872,
    "end": 4875
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_private",
    "start": 4876,
    "end": 4907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4907,
    "end": 4908
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4909,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4935,
    "end": 4941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4942,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_private",
    "start": 4946,
    "end": 4976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4976,
    "end": 4977
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4978,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5004,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 5008,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5043,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 5047,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5070,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5072,
    "end": 5073
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5078,
    "end": 5084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5085,
    "end": 5088
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 5089,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5123,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 5127,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5151,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5158,
    "end": 5161
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 5162,
    "end": 5194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 5196,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5217,
    "end": 5218
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5225,
    "end": 5231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5232,
    "end": 5235
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 5236,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5267,
    "end": 5268
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 5269,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5351,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5358,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5380,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 5389,
    "end": 5397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5403,
    "end": 5409
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 5410,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5432,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 5441,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5455,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 5462,
    "end": 5481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5482,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5484,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 5493,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5507,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 5514,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5536,
    "end": 5544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5544,
    "end": 5545
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 5545,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5559,
    "end": 5565
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 5566,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5588,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5596,
    "end": 5597
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 5597,
    "end": 5605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5605,
    "end": 5606
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5611,
    "end": 5617
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 5618,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5641,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 5650,
    "end": 5659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5665,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 5672,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5693,
    "end": 5694
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5695,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 5704,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5748,
    "end": 5751
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_public",
    "start": 5752,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5785,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5789,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5816,
    "end": 5822
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5823,
    "end": 5826
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_public",
    "start": 5827,
    "end": 5856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5857,
    "end": 5858
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5859,
    "end": 5862
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5863,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5883,
    "end": 5884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5884,
    "end": 5885
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5890,
    "end": 5893
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_public",
    "start": 5894,
    "end": 5924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 5927,
    "end": 5946
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 5947,
    "end": 5952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5952,
    "end": 5953
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5958,
    "end": 5964
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5965,
    "end": 5968
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_public",
    "start": 5969,
    "end": 5998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 6001,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 6021,
    "end": 6027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6027,
    "end": 6028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6033,
    "end": 6036
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_public",
    "start": 6037,
    "end": 6067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 6070,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6097,
    "end": 6103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6104,
    "end": 6107
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_public",
    "start": 6108,
    "end": 6137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 6140,
    "end": 6159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6159,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6167,
    "end": 6170
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_public",
    "start": 6171,
    "end": 6201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6202,
    "end": 6203
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 6204,
    "end": 6223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6229,
    "end": 6235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6236,
    "end": 6239
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_public",
    "start": 6240,
    "end": 6269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6270,
    "end": 6271
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 6272,
    "end": 6291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6291,
    "end": 6292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6297,
    "end": 6300
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_public",
    "start": 6301,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6331,
    "end": 6332
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 6333,
    "end": 6352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6352,
    "end": 6353
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6358,
    "end": 6364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6365,
    "end": 6368
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_public",
    "start": 6369,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6398,
    "end": 6399
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 6400,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6425,
    "end": 6428
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 6429,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6461,
    "end": 6462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6463,
    "end": 6466
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 6467,
    "end": 6487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6487,
    "end": 6488
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 6488,
    "end": 6489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6489,
    "end": 6490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6497,
    "end": 6503
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6504,
    "end": 6507
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 6508,
    "end": 6538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6541,
    "end": 6544
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 6545,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 6566,
    "end": 6567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6567,
    "end": 6568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6568,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6575,
    "end": 6578
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_public",
    "start": 6579,
    "end": 6610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6610,
    "end": 6611
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 6612,
    "end": 6632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6632,
    "end": 6633
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6633,
    "end": 6634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6634,
    "end": 6635
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6640,
    "end": 6646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6647,
    "end": 6650
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_public",
    "start": 6651,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6681,
    "end": 6682
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 6683,
    "end": 6703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6703,
    "end": 6704
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6705,
    "end": 6706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6707,
    "end": 6708
  }
]
```
