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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 947,
        "end": 967
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 979
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 989
        },
        "start": 970,
        "end": 989
      },
      "importKind": "value",
      "start": 940,
      "end": 990
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1018
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1021,
          "end": 1030
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1040
        },
        "start": 1021,
        "end": 1040
      },
      "importKind": "value",
      "start": 991,
      "end": 1041
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1069
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1081
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1091
        },
        "start": 1072,
        "end": 1091
      },
      "importKind": "value",
      "start": 1042,
      "end": 1092
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1120
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1123,
          "end": 1132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1142
        },
        "start": 1123,
        "end": 1142
      },
      "importKind": "value",
      "start": 1093,
      "end": 1143
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1171
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1184,
          "end": 1193
        },
        "start": 1174,
        "end": 1193
      },
      "importKind": "value",
      "start": 1144,
      "end": 1194
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1223
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1226,
          "end": 1235
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1246
        },
        "start": 1226,
        "end": 1246
      },
      "importKind": "value",
      "start": 1195,
      "end": 1247
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1276
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1288
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1289,
          "end": 1299
        },
        "start": 1279,
        "end": 1299
      },
      "importKind": "value",
      "start": 1248,
      "end": 1300
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
            "start": 1330,
            "end": 1361
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1388
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1364,
            "end": 1390
          },
          "definite": false,
          "start": 1330,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1326,
      "end": 1391
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
              "start": 1403,
              "end": 1433
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1460
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1436,
              "end": 1462
            },
            "definite": false,
            "start": 1403,
            "end": 1462
          }
        ],
        "declare": false,
        "start": 1399,
        "end": 1463
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1392,
      "end": 1463
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
            "start": 1468,
            "end": 1499
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1502,
              "end": 1522
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1528
            },
            "optional": false,
            "computed": false,
            "start": 1502,
            "end": 1528
          },
          "definite": false,
          "start": 1468,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1529
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
              "start": 1541,
              "end": 1571
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1601
              },
              "optional": false,
              "computed": false,
              "start": 1574,
              "end": 1601
            },
            "definite": false,
            "start": 1541,
            "end": 1601
          }
        ],
        "declare": false,
        "start": 1537,
        "end": 1602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1530,
      "end": 1602
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
            "start": 1607,
            "end": 1638
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1661
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1641,
            "end": 1663
          },
          "definite": false,
          "start": 1607,
          "end": 1663
        }
      ],
      "declare": false,
      "start": 1603,
      "end": 1664
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
              "start": 1676,
              "end": 1706
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1709,
                "end": 1729
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1709,
              "end": 1731
            },
            "definite": false,
            "start": 1676,
            "end": 1731
          }
        ],
        "declare": false,
        "start": 1672,
        "end": 1732
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1665,
      "end": 1732
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
            "start": 1737,
            "end": 1768
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1791
          },
          "definite": false,
          "start": 1737,
          "end": 1791
        }
      ],
      "declare": false,
      "start": 1733,
      "end": 1792
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
              "start": 1804,
              "end": 1834
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1857
            },
            "definite": false,
            "start": 1804,
            "end": 1857
          }
        ],
        "declare": false,
        "start": 1800,
        "end": 1858
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1793,
      "end": 1858
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
                  "start": 1896,
                  "end": 1916
                },
                "typeArguments": null,
                "start": 1896,
                "end": 1916
              },
              "start": 1894,
              "end": 1916
            },
            "start": 1863,
            "end": 1916
          },
          "init": null,
          "definite": false,
          "start": 1863,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1859,
      "end": 1917
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
                    "start": 1961,
                    "end": 1981
                  },
                  "typeArguments": null,
                  "start": 1961,
                  "end": 1981
                },
                "start": 1959,
                "end": 1981
              },
              "start": 1929,
              "end": 1981
            },
            "init": null,
            "definite": false,
            "start": 1929,
            "end": 1981
          }
        ],
        "declare": false,
        "start": 1925,
        "end": 1982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1918,
      "end": 1982
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
            "start": 1987,
            "end": 2019
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
                "start": 2026,
                "end": 2047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2048,
                "end": 2049
              },
              "optional": false,
              "computed": false,
              "start": 2026,
              "end": 2049
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2022,
            "end": 2051
          },
          "definite": false,
          "start": 1987,
          "end": 2051
        }
      ],
      "declare": false,
      "start": 1983,
      "end": 2052
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
              "start": 2064,
              "end": 2095
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
                  "start": 2102,
                  "end": 2123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2124,
                  "end": 2125
                },
                "optional": false,
                "computed": false,
                "start": 2102,
                "end": 2125
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2098,
              "end": 2127
            },
            "definite": false,
            "start": 2064,
            "end": 2127
          }
        ],
        "declare": false,
        "start": 2060,
        "end": 2128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2053,
      "end": 2128
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
                    "start": 2167,
                    "end": 2188
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2189,
                    "end": 2190
                  },
                  "start": 2167,
                  "end": 2190
                },
                "typeArguments": null,
                "start": 2167,
                "end": 2190
              },
              "start": 2165,
              "end": 2190
            },
            "start": 2133,
            "end": 2190
          },
          "init": null,
          "definite": false,
          "start": 2133,
          "end": 2190
        }
      ],
      "declare": false,
      "start": 2129,
      "end": 2191
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
                      "start": 2236,
                      "end": 2257
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2258,
                      "end": 2259
                    },
                    "start": 2236,
                    "end": 2259
                  },
                  "typeArguments": null,
                  "start": 2236,
                  "end": 2259
                },
                "start": 2234,
                "end": 2259
              },
              "start": 2203,
              "end": 2259
            },
            "init": null,
            "definite": false,
            "start": 2203,
            "end": 2259
          }
        ],
        "declare": false,
        "start": 2199,
        "end": 2260
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2192,
      "end": 2260
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2319,
        "end": 2338
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2341,
          "end": 2349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2350,
          "end": 2358
        },
        "start": 2341,
        "end": 2358
      },
      "importKind": "value",
      "start": 2312,
      "end": 2359
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2367,
        "end": 2386
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2389,
          "end": 2397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2398,
          "end": 2406
        },
        "start": 2389,
        "end": 2406
      },
      "importKind": "value",
      "start": 2360,
      "end": 2407
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2415,
        "end": 2434
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2437,
          "end": 2445
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2446,
          "end": 2454
        },
        "start": 2437,
        "end": 2454
      },
      "importKind": "value",
      "start": 2408,
      "end": 2455
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2463,
        "end": 2482
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2485,
          "end": 2493
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2494,
          "end": 2502
        },
        "start": 2485,
        "end": 2502
      },
      "importKind": "value",
      "start": 2456,
      "end": 2503
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2511,
        "end": 2530
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2533,
          "end": 2541
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2542,
          "end": 2550
        },
        "start": 2533,
        "end": 2550
      },
      "importKind": "value",
      "start": 2504,
      "end": 2551
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2579
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2582,
          "end": 2590
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2591,
          "end": 2600
        },
        "start": 2582,
        "end": 2600
      },
      "importKind": "value",
      "start": 2552,
      "end": 2601
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2609,
        "end": 2629
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2632,
          "end": 2640
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2641,
          "end": 2650
        },
        "start": 2632,
        "end": 2650
      },
      "importKind": "value",
      "start": 2602,
      "end": 2651
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
            "start": 2681,
            "end": 2711
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2737
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2714,
            "end": 2739
          },
          "definite": false,
          "start": 2681,
          "end": 2739
        }
      ],
      "declare": false,
      "start": 2677,
      "end": 2740
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
              "start": 2752,
              "end": 2781
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2788,
                "end": 2807
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2784,
              "end": 2809
            },
            "definite": false,
            "start": 2752,
            "end": 2809
          }
        ],
        "declare": false,
        "start": 2748,
        "end": 2810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2741,
      "end": 2810
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
            "start": 2815,
            "end": 2845
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2848,
              "end": 2867
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2868,
              "end": 2873
            },
            "optional": false,
            "computed": false,
            "start": 2848,
            "end": 2873
          },
          "definite": false,
          "start": 2815,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2811,
      "end": 2874
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
              "start": 2886,
              "end": 2915
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2918,
                "end": 2937
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2938,
                "end": 2944
              },
              "optional": false,
              "computed": false,
              "start": 2918,
              "end": 2944
            },
            "definite": false,
            "start": 2886,
            "end": 2944
          }
        ],
        "declare": false,
        "start": 2882,
        "end": 2945
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2875,
      "end": 2945
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
            "start": 2950,
            "end": 2980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 3002
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2983,
            "end": 3004
          },
          "definite": false,
          "start": 2950,
          "end": 3004
        }
      ],
      "declare": false,
      "start": 2946,
      "end": 3005
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
              "start": 3017,
              "end": 3046
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3068
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3049,
              "end": 3070
            },
            "definite": false,
            "start": 3017,
            "end": 3070
          }
        ],
        "declare": false,
        "start": 3013,
        "end": 3071
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3006,
      "end": 3071
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
            "start": 3076,
            "end": 3106
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3109,
            "end": 3128
          },
          "definite": false,
          "start": 3076,
          "end": 3128
        }
      ],
      "declare": false,
      "start": 3072,
      "end": 3129
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
              "start": 3141,
              "end": 3170
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3173,
              "end": 3192
            },
            "definite": false,
            "start": 3141,
            "end": 3192
          }
        ],
        "declare": false,
        "start": 3137,
        "end": 3193
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3130,
      "end": 3193
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
                  "start": 3230,
                  "end": 3249
                },
                "typeArguments": null,
                "start": 3230,
                "end": 3249
              },
              "start": 3228,
              "end": 3249
            },
            "start": 3198,
            "end": 3249
          },
          "init": null,
          "definite": false,
          "start": 3198,
          "end": 3249
        }
      ],
      "declare": false,
      "start": 3194,
      "end": 3250
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
                    "start": 3293,
                    "end": 3312
                  },
                  "typeArguments": null,
                  "start": 3293,
                  "end": 3312
                },
                "start": 3291,
                "end": 3312
              },
              "start": 3262,
              "end": 3312
            },
            "init": null,
            "definite": false,
            "start": 3262,
            "end": 3312
          }
        ],
        "declare": false,
        "start": 3258,
        "end": 3313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3251,
      "end": 3313
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
            "start": 3318,
            "end": 3349
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
                "start": 3356,
                "end": 3376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3377,
                "end": 3378
              },
              "optional": false,
              "computed": false,
              "start": 3356,
              "end": 3378
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3352,
            "end": 3380
          },
          "definite": false,
          "start": 3318,
          "end": 3380
        }
      ],
      "declare": false,
      "start": 3314,
      "end": 3381
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
              "start": 3393,
              "end": 3423
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
                  "start": 3430,
                  "end": 3450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3451,
                  "end": 3452
                },
                "optional": false,
                "computed": false,
                "start": 3430,
                "end": 3452
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3426,
              "end": 3454
            },
            "definite": false,
            "start": 3393,
            "end": 3454
          }
        ],
        "declare": false,
        "start": 3389,
        "end": 3455
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3382,
      "end": 3455
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
                    "start": 3493,
                    "end": 3513
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3514,
                    "end": 3515
                  },
                  "start": 3493,
                  "end": 3515
                },
                "typeArguments": null,
                "start": 3493,
                "end": 3515
              },
              "start": 3491,
              "end": 3515
            },
            "start": 3460,
            "end": 3515
          },
          "init": null,
          "definite": false,
          "start": 3460,
          "end": 3515
        }
      ],
      "declare": false,
      "start": 3456,
      "end": 3516
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
                      "start": 3560,
                      "end": 3580
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3582
                    },
                    "start": 3560,
                    "end": 3582
                  },
                  "typeArguments": null,
                  "start": 3560,
                  "end": 3582
                },
                "start": 3558,
                "end": 3582
              },
              "start": 3528,
              "end": 3582
            },
            "init": null,
            "definite": false,
            "start": 3528,
            "end": 3582
          }
        ],
        "declare": false,
        "start": 3524,
        "end": 3583
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3517,
      "end": 3583
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3583
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
    "value": "import",
    "start": 940,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 947,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 970,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 980,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 991,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 998,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "e_private",
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
    "type": "Keyword",
    "value": "import",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1049,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1072,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 1082,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1100,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 1133,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 1151,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1174,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 1184,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 1202,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1226,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 1236,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 1255,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1279,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 1289,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_private",
    "start": 1330,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1368,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_private",
    "start": 1403,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1440,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_private",
    "start": 1468,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1502,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 1523,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1530,
    "end": 1536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_private",
    "start": 1541,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1574,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 1595,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_private",
    "start": 1607,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1641,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1665,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_private",
    "start": 1676,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1709,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_private",
    "start": 1737,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1771,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1793,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_private",
    "start": 1804,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1837,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_private",
    "start": 1863,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 1896,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1918,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_private",
    "start": 1929,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 1961,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 1987,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2022,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2026,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2053,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 2064,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2098,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2102,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2129,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 2133,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2167,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2192,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2199,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 2203,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2236,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2312,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2319,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2341,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 2350,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2360,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 2367,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2389,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 2398,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2408,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 2415,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2437,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 2446,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2456,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 2463,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2485,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 2494,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2504,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 2511,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2533,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 2542,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2552,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 2559,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2582,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 2591,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2602,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 2609,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2632,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 2641,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2677,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_public",
    "start": 2681,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2714,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2718,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2741,
    "end": 2747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2748,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_public",
    "start": 2752,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2784,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2788,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2811,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_public",
    "start": 2815,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 2848,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 2868,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2875,
    "end": 2881
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2882,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_public",
    "start": 2886,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 2918,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 2938,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2946,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_public",
    "start": 2950,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 2983,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3006,
    "end": 3012
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_public",
    "start": 3017,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 3049,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3072,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_public",
    "start": 3076,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3109,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3137,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_public",
    "start": 3141,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3173,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_public",
    "start": 3198,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3230,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3251,
    "end": 3257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3258,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_public",
    "start": 3262,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3293,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3314,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 3318,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3356,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3382,
    "end": 3388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3389,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 3393,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3426,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3430,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3456,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_public",
    "start": 3460,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3493,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3517,
    "end": 3523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3524,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_public",
    "start": 3528,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3560,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3582,
    "end": 3583
  }
]
```
