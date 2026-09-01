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
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 970
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 973,
            "end": 982
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 992
          },
          "start": 973,
          "end": 992
        },
        "importKind": "value",
        "start": 944,
        "end": 993
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 937,
      "end": 993
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_e_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1027
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1039
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1049
          },
          "start": 1030,
          "end": 1049
        },
        "importKind": "value",
        "start": 1001,
        "end": 1050
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 994,
      "end": 1050
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_f_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1065,
          "end": 1084
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1096
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1106
          },
          "start": 1087,
          "end": 1106
        },
        "importKind": "value",
        "start": 1058,
        "end": 1107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1051,
      "end": 1107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_v_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1122,
          "end": 1141
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1153
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1163
          },
          "start": 1144,
          "end": 1163
        },
        "importKind": "value",
        "start": 1115,
        "end": 1164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1108,
      "end": 1164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_i_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1198
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1210
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1211,
            "end": 1220
          },
          "start": 1201,
          "end": 1220
        },
        "importKind": "value",
        "start": 1172,
        "end": 1221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1165,
      "end": 1221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1256
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1259,
            "end": 1268
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1269,
            "end": 1279
          },
          "start": 1259,
          "end": 1279
        },
        "importKind": "value",
        "start": 1229,
        "end": 1280
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1222,
      "end": 1280
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1295,
          "end": 1315
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1327
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1338
          },
          "start": 1318,
          "end": 1338
        },
        "importKind": "value",
        "start": 1288,
        "end": 1339
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1281,
      "end": 1339
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
            "name": "privateUse_im_public_c_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1379,
            "end": 1409
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1435
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1412,
            "end": 1437
          },
          "definite": false,
          "start": 1379,
          "end": 1437
        }
      ],
      "declare": false,
      "start": 1375,
      "end": 1438
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
              "name": "publicUse_im_public_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1450,
              "end": 1479
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1486,
                "end": 1505
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1482,
              "end": 1507
            },
            "definite": false,
            "start": 1450,
            "end": 1507
          }
        ],
        "declare": false,
        "start": 1446,
        "end": 1508
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1439,
      "end": 1508
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
            "name": "privateUse_im_public_e_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1513,
            "end": 1543
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1546,
              "end": 1565
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1571
            },
            "optional": false,
            "computed": false,
            "start": 1546,
            "end": 1571
          },
          "definite": false,
          "start": 1513,
          "end": 1571
        }
      ],
      "declare": false,
      "start": 1509,
      "end": 1572
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
              "name": "publicUse_im_public_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1584,
              "end": 1613
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1616,
                "end": 1635
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1642
              },
              "optional": false,
              "computed": false,
              "start": 1616,
              "end": 1642
            },
            "definite": false,
            "start": 1584,
            "end": 1642
          }
        ],
        "declare": false,
        "start": 1580,
        "end": 1643
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1573,
      "end": 1643
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
            "name": "privateUse_im_public_f_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1648,
            "end": 1678
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1681,
              "end": 1700
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1681,
            "end": 1702
          },
          "definite": false,
          "start": 1648,
          "end": 1702
        }
      ],
      "declare": false,
      "start": 1644,
      "end": 1703
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
              "name": "publicUse_im_public_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1715,
              "end": 1744
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1747,
                "end": 1766
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1747,
              "end": 1768
            },
            "definite": false,
            "start": 1715,
            "end": 1768
          }
        ],
        "declare": false,
        "start": 1711,
        "end": 1769
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1704,
      "end": 1769
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
            "name": "privateUse_im_public_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1774,
            "end": 1804
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1826
          },
          "definite": false,
          "start": 1774,
          "end": 1826
        }
      ],
      "declare": false,
      "start": 1770,
      "end": 1827
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
              "name": "publicUse_im_public_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1868
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1871,
              "end": 1890
            },
            "definite": false,
            "start": 1839,
            "end": 1890
          }
        ],
        "declare": false,
        "start": 1835,
        "end": 1891
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1828,
      "end": 1891
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
            "name": "privateUse_im_public_i_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1928,
                  "end": 1947
                },
                "typeArguments": null,
                "start": 1928,
                "end": 1947
              },
              "start": 1926,
              "end": 1947
            },
            "start": 1896,
            "end": 1947
          },
          "init": null,
          "definite": false,
          "start": 1896,
          "end": 1947
        }
      ],
      "declare": false,
      "start": 1892,
      "end": 1948
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
              "name": "publicUse_im_public_i_private",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1991,
                    "end": 2010
                  },
                  "typeArguments": null,
                  "start": 1991,
                  "end": 2010
                },
                "start": 1989,
                "end": 2010
              },
              "start": 1960,
              "end": 2010
            },
            "init": null,
            "definite": false,
            "start": 1960,
            "end": 2010
          }
        ],
        "declare": false,
        "start": 1956,
        "end": 2011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1949,
      "end": 2011
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
            "name": "privateUse_im_public_mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2047
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2054,
                "end": 2074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2076
              },
              "optional": false,
              "computed": false,
              "start": 2054,
              "end": 2076
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2050,
            "end": 2078
          },
          "definite": false,
          "start": 2016,
          "end": 2078
        }
      ],
      "declare": false,
      "start": 2012,
      "end": 2079
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
              "name": "publicUse_im_public_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2091,
              "end": 2121
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2128,
                  "end": 2148
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2150
                },
                "optional": false,
                "computed": false,
                "start": 2128,
                "end": 2150
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2124,
              "end": 2152
            },
            "definite": false,
            "start": 2091,
            "end": 2152
          }
        ],
        "declare": false,
        "start": 2087,
        "end": 2153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2080,
      "end": 2153
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
            "name": "privateUse_im_public_mu_private",
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
                    "name": "im_public_mu_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2191,
                    "end": 2211
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2212,
                    "end": 2213
                  },
                  "start": 2191,
                  "end": 2213
                },
                "typeArguments": null,
                "start": 2191,
                "end": 2213
              },
              "start": 2189,
              "end": 2213
            },
            "start": 2158,
            "end": 2213
          },
          "init": null,
          "definite": false,
          "start": 2158,
          "end": 2213
        }
      ],
      "declare": false,
      "start": 2154,
      "end": 2214
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
              "name": "publicUse_im_public_mu_private",
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
                      "name": "im_public_mu_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2258,
                      "end": 2278
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "start": 2258,
                    "end": 2280
                  },
                  "typeArguments": null,
                  "start": 2258,
                  "end": 2280
                },
                "start": 2256,
                "end": 2280
              },
              "start": 2226,
              "end": 2280
            },
            "init": null,
            "definite": false,
            "start": 2226,
            "end": 2280
          }
        ],
        "declare": false,
        "start": 2222,
        "end": 2281
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2215,
      "end": 2281
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2347,
          "end": 2365
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2368,
            "end": 2376
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2385
          },
          "start": 2368,
          "end": 2385
        },
        "importKind": "value",
        "start": 2340,
        "end": 2386
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2333,
      "end": 2386
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_e_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2401,
          "end": 2419
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2422,
            "end": 2430
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2431,
            "end": 2439
          },
          "start": 2422,
          "end": 2439
        },
        "importKind": "value",
        "start": 2394,
        "end": 2440
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2387,
      "end": 2440
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_f_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2455,
          "end": 2473
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2476,
            "end": 2484
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2493
          },
          "start": 2476,
          "end": 2493
        },
        "importKind": "value",
        "start": 2448,
        "end": 2494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2441,
      "end": 2494
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_v_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2509,
          "end": 2527
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2530,
            "end": 2538
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2539,
            "end": 2547
          },
          "start": 2530,
          "end": 2547
        },
        "importKind": "value",
        "start": 2502,
        "end": 2548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2495,
      "end": 2548
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2563,
          "end": 2581
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2584,
            "end": 2592
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2593,
            "end": 2601
          },
          "start": 2584,
          "end": 2601
        },
        "importKind": "value",
        "start": 2556,
        "end": 2602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2549,
      "end": 2602
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2617,
          "end": 2636
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2639,
            "end": 2647
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2648,
            "end": 2657
          },
          "start": 2639,
          "end": 2657
        },
        "importKind": "value",
        "start": 2610,
        "end": 2658
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2603,
      "end": 2658
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2673,
          "end": 2692
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2695,
            "end": 2703
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2704,
            "end": 2713
          },
          "start": 2695,
          "end": 2713
        },
        "importKind": "value",
        "start": 2666,
        "end": 2714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2659,
      "end": 2714
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
            "name": "privateUse_im_public_c_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2744,
            "end": 2773
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2780,
              "end": 2798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2776,
            "end": 2800
          },
          "definite": false,
          "start": 2744,
          "end": 2800
        }
      ],
      "declare": false,
      "start": 2740,
      "end": 2801
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
              "name": "publicUse_im_public_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2813,
              "end": 2841
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2848,
                "end": 2866
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2844,
              "end": 2868
            },
            "definite": false,
            "start": 2813,
            "end": 2868
          }
        ],
        "declare": false,
        "start": 2809,
        "end": 2869
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2802,
      "end": 2869
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
            "name": "privateUse_im_public_e_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2874,
            "end": 2903
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2906,
              "end": 2924
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2925,
              "end": 2930
            },
            "optional": false,
            "computed": false,
            "start": 2906,
            "end": 2930
          },
          "definite": false,
          "start": 2874,
          "end": 2930
        }
      ],
      "declare": false,
      "start": 2870,
      "end": 2931
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
              "name": "publicUse_im_public_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2943,
              "end": 2971
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2992
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2999
              },
              "optional": false,
              "computed": false,
              "start": 2974,
              "end": 2999
            },
            "definite": false,
            "start": 2943,
            "end": 2999
          }
        ],
        "declare": false,
        "start": 2939,
        "end": 3000
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2932,
      "end": 3000
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
            "name": "privateUse_im_public_f_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3005,
            "end": 3034
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3037,
              "end": 3055
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3037,
            "end": 3057
          },
          "definite": false,
          "start": 3005,
          "end": 3057
        }
      ],
      "declare": false,
      "start": 3001,
      "end": 3058
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
              "name": "publicUse_im_public_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3070,
              "end": 3098
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3119
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3101,
              "end": 3121
            },
            "definite": false,
            "start": 3070,
            "end": 3121
          }
        ],
        "declare": false,
        "start": 3066,
        "end": 3122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3059,
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
            "name": "privateUse_im_public_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3127,
            "end": 3156
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3159,
            "end": 3177
          },
          "definite": false,
          "start": 3127,
          "end": 3177
        }
      ],
      "declare": false,
      "start": 3123,
      "end": 3178
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
              "name": "publicUse_im_public_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3190,
              "end": 3218
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3221,
              "end": 3239
            },
            "definite": false,
            "start": 3190,
            "end": 3239
          }
        ],
        "declare": false,
        "start": 3186,
        "end": 3240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3179,
      "end": 3240
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
            "name": "privateUse_im_public_i_public",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3276,
                  "end": 3294
                },
                "typeArguments": null,
                "start": 3276,
                "end": 3294
              },
              "start": 3274,
              "end": 3294
            },
            "start": 3245,
            "end": 3294
          },
          "init": null,
          "definite": false,
          "start": 3245,
          "end": 3294
        }
      ],
      "declare": false,
      "start": 3241,
      "end": 3295
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
              "name": "publicUse_im_public_i_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3337,
                    "end": 3355
                  },
                  "typeArguments": null,
                  "start": 3337,
                  "end": 3355
                },
                "start": 3335,
                "end": 3355
              },
              "start": 3307,
              "end": 3355
            },
            "init": null,
            "definite": false,
            "start": 3307,
            "end": 3355
          }
        ],
        "declare": false,
        "start": 3303,
        "end": 3356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3296,
      "end": 3356
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
            "name": "privateUse_im_public_mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3361,
            "end": 3391
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3398,
                "end": 3417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3418,
                "end": 3419
              },
              "optional": false,
              "computed": false,
              "start": 3398,
              "end": 3419
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3394,
            "end": 3421
          },
          "definite": false,
          "start": 3361,
          "end": 3421
        }
      ],
      "declare": false,
      "start": 3357,
      "end": 3422
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
              "name": "publicUse_im_public_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3434,
              "end": 3463
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3470,
                  "end": 3489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3490,
                  "end": 3491
                },
                "optional": false,
                "computed": false,
                "start": 3470,
                "end": 3491
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3466,
              "end": 3493
            },
            "definite": false,
            "start": 3434,
            "end": 3493
          }
        ],
        "declare": false,
        "start": 3430,
        "end": 3494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3423,
      "end": 3494
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
            "name": "privateUse_im_public_mu_public",
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
                    "name": "im_public_mu_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3531,
                    "end": 3550
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3551,
                    "end": 3552
                  },
                  "start": 3531,
                  "end": 3552
                },
                "typeArguments": null,
                "start": 3531,
                "end": 3552
              },
              "start": 3529,
              "end": 3552
            },
            "start": 3499,
            "end": 3552
          },
          "init": null,
          "definite": false,
          "start": 3499,
          "end": 3552
        }
      ],
      "declare": false,
      "start": 3495,
      "end": 3553
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
              "name": "publicUse_im_public_mu_public",
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
                      "name": "im_public_mu_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3615
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3616,
                      "end": 3617
                    },
                    "start": 3596,
                    "end": 3617
                  },
                  "typeArguments": null,
                  "start": 3596,
                  "end": 3617
                },
                "start": 3594,
                "end": 3617
              },
              "start": 3565,
              "end": 3617
            },
            "init": null,
            "definite": false,
            "start": 3565,
            "end": 3617
          }
        ],
        "declare": false,
        "start": 3561,
        "end": 3618
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3554,
      "end": 3618
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3618
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
    "start": 937,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 944,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "im_public_c_private",
    "start": 951,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 973,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 983,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "im_public_e_private",
    "start": 1008,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1030,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 1040,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "im_public_f_private",
    "start": 1065,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1087,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "im_public_v_private",
    "start": 1122,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1144,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 1154,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "im_public_i_private",
    "start": 1179,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1201,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 1211,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 1236,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1259,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 1269,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 1295,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1318,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 1328,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_c_private",
    "start": 1379,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "im_public_c_private",
    "start": 1416,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_c_private",
    "start": 1450,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "im_public_c_private",
    "start": 1486,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_e_private",
    "start": 1513,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "im_public_e_private",
    "start": 1546,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 1566,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_e_private",
    "start": 1584,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "im_public_e_private",
    "start": 1616,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_f_private",
    "start": 1648,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "im_public_f_private",
    "start": 1681,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1704,
    "end": 1710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_f_private",
    "start": 1715,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "im_public_f_private",
    "start": 1747,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_v_private",
    "start": 1774,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "im_public_v_private",
    "start": 1807,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1828,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1835,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_v_private",
    "start": 1839,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "im_public_v_private",
    "start": 1871,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_i_private",
    "start": 1896,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "im_public_i_private",
    "start": 1928,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1949,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_i_private",
    "start": 1960,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "im_public_i_private",
    "start": 1991,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2012,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mi_private",
    "start": 2016,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2050,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 2054,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2080,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2087,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mi_private",
    "start": 2091,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_private",
    "start": 2128,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2154,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mu_private",
    "start": 2158,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 2191,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2215,
    "end": 2221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2222,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mu_private",
    "start": 2226,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_private",
    "start": 2258,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2333,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2340,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "im_public_c_public",
    "start": 2347,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2368,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 2377,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2394,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "im_public_e_public",
    "start": 2401,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2422,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 2431,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2441,
    "end": 2447
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2448,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "im_public_f_public",
    "start": 2455,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2476,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 2485,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2495,
    "end": 2501
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2502,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "im_public_v_public",
    "start": 2509,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2530,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 2539,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2549,
    "end": 2555
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2556,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "im_public_i_public",
    "start": 2563,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2584,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 2593,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2603,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2610,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 2617,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2639,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 2648,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2659,
    "end": 2665
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2666,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_public",
    "start": 2673,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2695,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 2704,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_c_public",
    "start": 2744,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2776,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "im_public_c_public",
    "start": 2780,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2802,
    "end": 2808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2809,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_c_public",
    "start": 2813,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "im_public_c_public",
    "start": 2848,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_e_public",
    "start": 2874,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "im_public_e_public",
    "start": 2906,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 2925,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2939,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_e_public",
    "start": 2943,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "im_public_e_public",
    "start": 2974,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 2993,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3001,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_f_public",
    "start": 3005,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "im_public_f_public",
    "start": 3037,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3059,
    "end": 3065
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3066,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_f_public",
    "start": 3070,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "im_public_f_public",
    "start": 3101,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3120,
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
    "start": 3123,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_v_public",
    "start": 3127,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "im_public_v_public",
    "start": 3159,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3179,
    "end": 3185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3186,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_v_public",
    "start": 3190,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "im_public_v_public",
    "start": 3221,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_i_public",
    "start": 3245,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "im_public_i_public",
    "start": 3276,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3296,
    "end": 3302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3303,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_i_public",
    "start": 3307,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "im_public_i_public",
    "start": 3337,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3357,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mi_public",
    "start": 3361,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3394,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 3398,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3423,
    "end": 3429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3430,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mi_public",
    "start": 3434,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3466,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "im_public_mi_public",
    "start": 3470,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3495,
    "end": 3498
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_public_mu_public",
    "start": 3499,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_public",
    "start": 3531,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3554,
    "end": 3560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3561,
    "end": 3564
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_public_mu_public",
    "start": 3565,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "im_public_mu_public",
    "start": 3596,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3617,
    "end": 3618
  }
]
```
