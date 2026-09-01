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
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 211
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 249
                  },
                  "typeArguments": null,
                  "start": 220,
                  "end": 249
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 250,
                "end": 257
              },
              "declare": false,
              "start": 150,
              "end": 257
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 324
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 363
                  },
                  "typeArguments": null,
                  "start": 333,
                  "end": 363
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 364,
                "end": 371
              },
              "declare": false,
              "start": 262,
              "end": 371
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPublicInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 443
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 452,
                    "end": 481
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 482,
                  "end": 489
                },
                "declare": false,
                "start": 383,
                "end": 489
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 376,
              "end": 489
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 562
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 571,
                      "end": 601
                    },
                    "typeArguments": null,
                    "start": 571,
                    "end": 601
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 602,
                  "end": 625
                },
                "declare": false,
                "start": 501,
                "end": 625
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 494,
              "end": 625
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 695
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 717
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 748
                    },
                    "optional": false,
                    "computed": false,
                    "start": 704,
                    "end": 748
                  },
                  "typeArguments": null,
                  "start": 704,
                  "end": 748
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 749,
                "end": 756
              },
              "declare": false,
              "start": 631,
              "end": 756
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 831
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 853
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 854,
                        "end": 884
                      },
                      "optional": false,
                      "computed": false,
                      "start": 840,
                      "end": 884
                    },
                    "typeArguments": null,
                    "start": 840,
                    "end": 884
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 885,
                  "end": 908
                },
                "declare": false,
                "start": 768,
                "end": 908
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 761,
              "end": 908
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 931,
                  "end": 983
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 1022
                    },
                    "typeArguments": null,
                    "start": 992,
                    "end": 1022
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1053
                    },
                    "typeArguments": null,
                    "start": 1024,
                    "end": 1053
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 1054,
                  "end": 1077
                },
                "declare": false,
                "start": 921,
                "end": 1077
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 914,
              "end": 1077
            }
          ],
          "start": 30,
          "end": 1079
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1079
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1079
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1104
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
                "start": 1128,
                "end": 1158
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1159,
                "end": 1167
              },
              "declare": false,
              "start": 1118,
              "end": 1167
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1111,
            "end": 1167
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1214
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1215,
              "end": 1222
            },
            "declare": false,
            "start": 1173,
            "end": 1222
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1289
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1328
                },
                "typeArguments": null,
                "start": 1298,
                "end": 1328
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1329,
              "end": 1336
            },
            "declare": false,
            "start": 1228,
            "end": 1336
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1351,
              "end": 1403
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1412,
                  "end": 1443
                },
                "typeArguments": null,
                "start": 1412,
                "end": 1443
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1444,
              "end": 1451
            },
            "declare": false,
            "start": 1341,
            "end": 1451
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1473,
                "end": 1523
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1562
                  },
                  "typeArguments": null,
                  "start": 1532,
                  "end": 1562
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1563,
                "end": 1570
              },
              "declare": false,
              "start": 1463,
              "end": 1570
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1456,
            "end": 1570
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1592,
                "end": 1643
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1652,
                    "end": 1683
                  },
                  "typeArguments": null,
                  "start": 1652,
                  "end": 1683
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1684,
                "end": 1691
              },
              "declare": false,
              "start": 1582,
              "end": 1691
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1575,
            "end": 1691
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingFromPrivateModuleInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1707,
              "end": 1761
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1783
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1784,
                    "end": 1814
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1770,
                  "end": 1814
                },
                "typeArguments": null,
                "start": 1770,
                "end": 1814
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1815,
              "end": 1822
            },
            "declare": false,
            "start": 1697,
            "end": 1822
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingFromPrivateModuleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 1844,
                "end": 1897
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1906,
                      "end": 1919
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1920,
                      "end": 1950
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1906,
                    "end": 1950
                  },
                  "typeArguments": null,
                  "start": 1906,
                  "end": 1950
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1951,
                "end": 1958
              },
              "declare": false,
              "start": 1834,
              "end": 1958
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1827,
            "end": 1958
          }
        ],
        "start": 1105,
        "end": 1960
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1081,
      "end": 1960
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
          "start": 1979,
          "end": 1994
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1995,
          "end": 1999
        },
        "declare": false,
        "start": 1969,
        "end": 1999
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1962,
      "end": 1999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2011,
        "end": 2027
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2028,
        "end": 2031
      },
      "declare": false,
      "start": 2001,
      "end": 2031
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingPublicInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2086
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2095,
            "end": 2110
          },
          "typeArguments": null,
          "start": 2095,
          "end": 2110
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2111,
        "end": 2114
      },
      "declare": false,
      "start": 2033,
      "end": 2114
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingPrivateInterfaceInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2125,
        "end": 2177
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 2186,
            "end": 2202
          },
          "typeArguments": null,
          "start": 2186,
          "end": 2202
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2203,
        "end": 2206
      },
      "declare": false,
      "start": 2115,
      "end": 2206
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingPublicInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2224,
          "end": 2266
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2275,
              "end": 2290
            },
            "typeArguments": null,
            "start": 2275,
            "end": 2290
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2291,
          "end": 2294
        },
        "declare": false,
        "start": 2214,
        "end": 2294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2207,
      "end": 2294
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingPrivateInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2312,
          "end": 2355
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 2364,
              "end": 2380
            },
            "typeArguments": null,
            "start": 2364,
            "end": 2380
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2381,
          "end": 2400
        },
        "declare": false,
        "start": 2302,
        "end": 2400
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2295,
      "end": 2400
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceImplementingFromPrivateModuleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2412,
        "end": 2466
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2475,
              "end": 2488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2489,
              "end": 2519
            },
            "optional": false,
            "computed": false,
            "start": 2475,
            "end": 2519
          },
          "typeArguments": null,
          "start": 2475,
          "end": 2519
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2520,
        "end": 2523
      },
      "declare": false,
      "start": 2402,
      "end": 2523
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceImplementingFromPrivateModuleInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2541,
          "end": 2594
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2603,
                "end": 2616
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2617,
                "end": 2647
              },
              "optional": false,
              "computed": false,
              "start": 2603,
              "end": 2647
            },
            "typeArguments": null,
            "start": 2603,
            "end": 2647
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2648,
          "end": 2667
        },
        "declare": false,
        "start": 2531,
        "end": 2667
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2524,
      "end": 2667
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2668
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
    "value": "interface",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPublicInterfaceInModule",
    "start": 160,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 212,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 220,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 262,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPrivateInterfaceInModule",
    "start": 272,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 325,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 333,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 376,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 383,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPublicInterfaceInModule",
    "start": 393,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 444,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 452,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 494,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 501,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPrivateInterfaceInModule",
    "start": 511,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 563,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 571,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 631,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingFromPrivateModuleInterface",
    "start": 641,
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
    "value": "privateModule",
    "start": 704,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 718,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 761,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 768,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingFromPrivateModuleInterface",
    "start": 778,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 832,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 840,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 854,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 914,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 921,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPrivateAndPublicInterface",
    "start": 931,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 984,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 992,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 1024,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1081,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1091,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1118,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1128,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1183,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
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
    "start": 1228,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPublicInterfaceInModule",
    "start": 1238,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1298,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1341,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPrivateInterfaceInModule",
    "start": 1351,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1404,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1412,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1463,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPublicInterfaceInModule",
    "start": 1473,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1524,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1532,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1582,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPrivateInterfaceInModule",
    "start": 1592,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1644,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPrivateModule",
    "start": 1652,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1697,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingFromPrivateModuleInterface",
    "start": 1707,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1770,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1784,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1827,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1834,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingFromPrivateModuleInterface",
    "start": 1844,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1898,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1906,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 1920,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1962,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1969,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 1979,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2001,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 2011,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2033,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPublicInterface",
    "start": 2043,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2087,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 2095,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2115,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPrivateInterfaceInModule",
    "start": 2125,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2178,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 2186,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2214,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPublicInterface",
    "start": 2224,
    "end": 2266
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2267,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "publicInterface",
    "start": 2275,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2295,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2302,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPrivateInterface",
    "start": 2312,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2356,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "privateInterface",
    "start": 2364,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2402,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingFromPrivateModuleInterface",
    "start": 2412,
    "end": 2466
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2467,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2475,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 2489,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2524,
    "end": 2530
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2531,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingFromPrivateModuleInterface",
    "start": 2541,
    "end": 2594
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2595,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2603,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPrivateModule",
    "start": 2617,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667
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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPublicInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 212
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 250
                },
                "typeArguments": null,
                "start": 221,
                "end": 250
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 251,
              "end": 258
            },
            "declare": false,
            "start": 151,
            "end": 258
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceImplementingPrivateInterfaceInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 325
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 364
                },
                "typeArguments": null,
                "start": 334,
                "end": 364
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 365,
              "end": 372
            },
            "declare": false,
            "start": 263,
            "end": 372
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPublicInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 444
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 482
                  },
                  "typeArguments": null,
                  "start": 453,
                  "end": 482
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 483,
                "end": 490
              },
              "declare": false,
              "start": 384,
              "end": 490
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 377,
            "end": 490
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceImplementingPrivateInterfaceInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 563
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 602
                  },
                  "typeArguments": null,
                  "start": 572,
                  "end": 602
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 603,
                "end": 626
              },
              "declare": false,
              "start": 502,
              "end": 626
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 495,
            "end": 626
          }
        ],
        "start": 31,
        "end": 628
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 628
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 639,
        "end": 662
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 663,
        "end": 666
      },
      "declare": false,
      "start": 629,
      "end": 666
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceImplementingPublicInterfaceInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 727
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 759
          },
          "typeArguments": null,
          "start": 736,
          "end": 759
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 760,
        "end": 763
      },
      "declare": false,
      "start": 667,
      "end": 763
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 763
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
    "value": "interface",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPublicInterfaceInModule",
    "start": 161,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 213,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 221,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 263,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceImplementingPrivateInterfaceInModule",
    "start": 273,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 326,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 334,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 377,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 384,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPublicInterfaceInModule",
    "start": 394,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 445,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInPublicModule",
    "start": 453,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 495,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 502,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPrivateInterfaceInModule",
    "start": 512,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 564,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceInPublicModule",
    "start": 572,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 629,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInGlobal",
    "start": 639,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceImplementingPublicInterfaceInGlobal",
    "start": 677,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 728,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceInGlobal",
    "start": 736,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  }
]
```
