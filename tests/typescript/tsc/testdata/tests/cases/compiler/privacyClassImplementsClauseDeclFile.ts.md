__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 29
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
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 82
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 83,
                  "end": 90
                },
                "declare": false,
                "start": 43,
                "end": 90
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 36,
              "end": 90
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 136
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 137,
                "end": 144
              },
              "declare": false,
              "start": 96,
              "end": 144
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 203
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 244
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 245,
                "end": 252
              },
              "abstract": false,
              "declare": false,
              "start": 150,
              "end": 252
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 311
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 353
                  },
                  "typeArguments": null,
                  "start": 323,
                  "end": 353
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 354,
                "end": 361
              },
              "abstract": false,
              "declare": false,
              "start": 257,
              "end": 361
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPublicInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 425
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 437,
                    "end": 466
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 467,
                  "end": 474
                },
                "abstract": false,
                "declare": false,
                "start": 373,
                "end": 474
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 366,
              "end": 474
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 539
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 581
                    },
                    "typeArguments": null,
                    "start": 551,
                    "end": 581
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 582,
                  "end": 605
                },
                "abstract": false,
                "declare": false,
                "start": 486,
                "end": 605
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 479,
              "end": 605
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 667
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 692
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 723
                    },
                    "optional": false,
                    "computed": false,
                    "start": 679,
                    "end": 723
                  },
                  "typeArguments": null,
                  "start": 679,
                  "end": 723
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 724,
                "end": 731
              },
              "abstract": false,
              "declare": false,
              "start": 611,
              "end": 731
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 798
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 823
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 854
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 810,
                    "end": 854
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 855,
                  "end": 878
                },
                "abstract": false,
                "declare": false,
                "start": 743,
                "end": 878
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 736,
              "end": 878
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 945
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 957,
                      "end": 987
                    },
                    "typeArguments": null,
                    "start": 957,
                    "end": 987
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 1018
                    },
                    "typeArguments": null,
                    "start": 989,
                    "end": 1018
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1019,
                  "end": 1042
                },
                "abstract": false,
                "declare": false,
                "start": 891,
                "end": 1042
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 884,
              "end": 1042
            }
          ],
          "start": 30,
          "end": 1044
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1044
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1044
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1056,
        "end": 1069
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
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1123
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1124,
                "end": 1132
              },
              "declare": false,
              "start": 1083,
              "end": 1132
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1076,
            "end": 1132
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1148,
              "end": 1179
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1180,
              "end": 1187
            },
            "declare": false,
            "start": 1138,
            "end": 1187
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1246
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1258,
                "end": 1288
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1289,
              "end": 1296
            },
            "abstract": false,
            "declare": false,
            "start": 1193,
            "end": 1296
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1355
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1367,
                  "end": 1398
                },
                "typeArguments": null,
                "start": 1367,
                "end": 1398
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1399,
              "end": 1406
            },
            "abstract": false,
            "declare": false,
            "start": 1301,
            "end": 1406
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1470
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1482,
                    "end": 1512
                  },
                  "typeArguments": null,
                  "start": 1482,
                  "end": 1512
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1513,
                "end": 1520
              },
              "abstract": false,
              "declare": false,
              "start": 1418,
              "end": 1520
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1411,
            "end": 1520
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1585
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1597,
                    "end": 1628
                  },
                  "typeArguments": null,
                  "start": 1597,
                  "end": 1628
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1629,
                "end": 1637
              },
              "abstract": false,
              "declare": false,
              "start": 1532,
              "end": 1637
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1525,
            "end": 1637
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1649,
              "end": 1699
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1711,
                    "end": 1724
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1725,
                    "end": 1755
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1711,
                  "end": 1755
                },
                "typeArguments": null,
                "start": 1711,
                "end": 1755
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1756,
              "end": 1763
            },
            "abstract": false,
            "declare": false,
            "start": 1643,
            "end": 1763
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1830
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1842,
                      "end": 1855
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1856,
                      "end": 1886
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1842,
                    "end": 1886
                  },
                  "typeArguments": null,
                  "start": 1842,
                  "end": 1886
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1887,
                "end": 1894
              },
              "abstract": false,
              "declare": false,
              "start": 1775,
              "end": 1894
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1768,
            "end": 1894
          }
        ],
        "start": 1070,
        "end": 1896
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1046,
      "end": 1896
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 1915,
          "end": 1930
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1931,
          "end": 1935
        },
        "declare": false,
        "start": 1905,
        "end": 1935
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1898,
      "end": 1935
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1963
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1964,
        "end": 1967
      },
      "declare": false,
      "start": 1937,
      "end": 1967
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 2014
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2026,
            "end": 2041
          },
          "typeArguments": null,
          "start": 2026,
          "end": 2041
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2042,
        "end": 2045
      },
      "abstract": false,
      "declare": false,
      "start": 1969,
      "end": 2045
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2052,
        "end": 2100
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2112,
            "end": 2128
          },
          "typeArguments": null,
          "start": 2112,
          "end": 2128
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2129,
        "end": 2132
      },
      "abstract": false,
      "declare": false,
      "start": 2046,
      "end": 2132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPublicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2146,
          "end": 2184
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2211
            },
            "typeArguments": null,
            "start": 2196,
            "end": 2211
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2212,
          "end": 2215
        },
        "abstract": false,
        "declare": false,
        "start": 2140,
        "end": 2215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2133,
      "end": 2215
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPrivateInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2229,
          "end": 2268
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2280,
              "end": 2296
            },
            "typeArguments": null,
            "start": 2280,
            "end": 2296
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2297,
          "end": 2316
        },
        "abstract": false,
        "declare": false,
        "start": 2223,
        "end": 2316
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2216,
      "end": 2316
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2324,
        "end": 2374
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2386,
              "end": 2399
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2400,
              "end": 2430
            },
            "optional": false,
            "computed": false,
            "start": 2386,
            "end": 2430
          },
          "typeArguments": null,
          "start": 2386,
          "end": 2430
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2431,
        "end": 2434
      },
      "abstract": false,
      "declare": false,
      "start": 2318,
      "end": 2434
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2448,
          "end": 2497
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2509,
                "end": 2522
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2523,
                "end": 2553
              },
              "optional": false,
              "computed": false,
              "start": 2509,
              "end": 2553
            },
            "typeArguments": null,
            "start": 2509,
            "end": 2553
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2554,
          "end": 2573
        },
        "abstract": false,
        "declare": false,
        "start": 2442,
        "end": 2573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2435,
      "end": 2573
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2574
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 17,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 36,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 53,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 106,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 150,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPublicInterfaceInModule",
    "start": 156,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 204,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 215,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPrivateInterfaceInModule",
    "start": 263,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 312,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 323,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 366,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 373,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPublicInterfaceInModule",
    "start": 379,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 426,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 437,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 479,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 486,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPrivateInterfaceInModule",
    "start": 492,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 540,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 551,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 611,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingFromPrivateModuleInterface",
    "start": 617,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 668,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 679,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 693,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 736,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 743,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingFromPrivateModuleInterface",
    "start": 749,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 799,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 810,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 824,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 884,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPrivateAndPublicInterface",
    "start": 897,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 946,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 957,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 989,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1046,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1056,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1083,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1093,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1138,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1148,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPublicInterfaceInModule",
    "start": 1199,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1247,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1258,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPrivateInterfaceInModule",
    "start": 1307,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1356,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1367,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1411,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPublicInterfaceInModule",
    "start": 1424,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1471,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1482,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1525,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1532,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPrivateInterfaceInModule",
    "start": 1538,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1586,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1597,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1643,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingFromPrivateModuleInterface",
    "start": 1649,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1700,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1711,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1725,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1775,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingFromPrivateModuleInterface",
    "start": 1781,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1831,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1842,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1856,
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
    "value": "}",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1898,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1905,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 1915,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1937,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 1947,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1969,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPublicInterface",
    "start": 1975,
    "end": 2014
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2015,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 2026,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2046,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPrivateInterfaceInModule",
    "start": 2052,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2101,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 2112,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2133,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2140,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPublicInterface",
    "start": 2146,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2185,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 2196,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2216,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2223,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPrivateInterface",
    "start": 2229,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2269,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 2280,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2318,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingFromPrivateModuleInterface",
    "start": 2324,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2375,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2386,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 2400,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2442,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingFromPrivateModuleInterface",
    "start": 2448,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2498,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2509,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 2523,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2572,
    "end": 2573
  }
]
```
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
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 30
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
                "name": "publicInterfaceInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 83
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 84,
                "end": 91
              },
              "declare": false,
              "start": 44,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 37,
            "end": 91
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 137
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 138,
              "end": 145
            },
            "declare": false,
            "start": 97,
            "end": 145
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 204
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 245
                },
                "typeArguments": null,
                "start": 216,
                "end": 245
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 246,
              "end": 253
            },
            "abstract": false,
            "declare": false,
            "start": 151,
            "end": 253
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 312
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 354
                },
                "typeArguments": null,
                "start": 324,
                "end": 354
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 355,
              "end": 362
            },
            "abstract": false,
            "declare": false,
            "start": 258,
            "end": 362
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 426
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 467
                  },
                  "typeArguments": null,
                  "start": 438,
                  "end": 467
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 468,
                "end": 475
              },
              "abstract": false,
              "declare": false,
              "start": 374,
              "end": 475
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 367,
            "end": 475
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 540
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 582
                  },
                  "typeArguments": null,
                  "start": 552,
                  "end": 582
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 583,
                "end": 606
              },
              "abstract": false,
              "declare": false,
              "start": 487,
              "end": 606
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 480,
            "end": 606
          }
        ],
        "start": 31,
        "end": 608
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 608
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 642
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 643,
        "end": 646
      },
      "declare": false,
      "start": 609,
      "end": 646
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 699
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 734
          },
          "typeArguments": null,
          "start": 711,
          "end": 734
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 735,
        "end": 738
      },
      "abstract": false,
      "declare": false,
      "start": 647,
      "end": 738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 738
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "publicModuleInGlobal",
    "start": 10,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 54,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 107,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPublicInterfaceInModule",
    "start": 157,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 205,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 216,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "privateClassImplementingPrivateInterfaceInModule",
    "start": 264,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 313,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 324,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 367,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPublicInterfaceInModule",
    "start": 380,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 427,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 438,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 480,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPrivateInterfaceInModule",
    "start": 493,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 541,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 552,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 609,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInGlobal",
    "start": 619,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "publicClassImplementingPublicInterfaceInGlobal",
    "start": 653,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 700,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInGlobal",
    "start": 711,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  }
]
```
